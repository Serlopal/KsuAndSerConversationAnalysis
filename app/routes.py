from flask import render_template
from app import app
import pandas as pd
import json
from collections import defaultdict


@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    return render_template('index.html', title='Home', user=user)


@app.route('/conversation')
def conversation():
    return render_template('conversation.html', conversation=app.conversation)


def fill_missing_time_slots(df, temp_col, group_col="sender"):
    def _fill_missing_time_slots(_df, delta_col, group_col):
        return _df.drop(group_col, axis=1).set_index(['year', delta_col]).unstack(fill_value=0).stack().reset_index()

    return df.groupby(group_col)\
             .apply(lambda x: _fill_missing_time_slots(x, temp_col, group_col))\
             .reset_index()\
             .drop("level_1", axis=1)


def get_message_count_feature(df, temp_col):
    # group by by the current temporal aggregation slot and count the number of messages
    message_count_df = df.groupby(["sender", "year", temp_col]).size().reset_index(name="value")
    # make sure ALL time periods are present, even with value 0
    return fill_missing_time_slots(message_count_df, temp_col)


def get_median_reply_delay_feature(df, temp_col):
    reply_time_df = df.groupby(["sender", "year", temp_col]).agg(value=('reply_delay', 'median')).reset_index()
    return fill_missing_time_slots(reply_time_df, temp_col)


def get_max_reply_delay_feature(df, temp_col):
    reply_time_df = df.groupby(["sender", "year", temp_col]).agg(value=('reply_delay', 'max')).reset_index()
    return fill_missing_time_slots(reply_time_df, temp_col)


def get_min_reply_delay_feature(df, temp_col):
    reply_time_df = df.groupby(["sender", "year", temp_col]).agg(value=('reply_delay', 'min')).reset_index()
    return fill_missing_time_slots(reply_time_df, temp_col)


def get_avg_reply_delay_feature(df, temp_col):
    reply_time_df = df.groupby(["sender", "year", temp_col]).agg(value=('reply_delay', 'mean')).reset_index()
    return fill_missing_time_slots(reply_time_df, temp_col)


def get_avg_message_length_feature(df, temp_col):
    message_length_df = df.groupby(["sender", "year", temp_col]).agg(value=('message_length', 'mean')).reset_index()
    return fill_missing_time_slots(message_length_df, temp_col)


def get_median_message_length_feature(df, temp_col):
    message_length_df = df.groupby(["sender", "year", temp_col]).agg(value=('message_length', 'median')).reset_index()
    return fill_missing_time_slots(message_length_df, temp_col)


def get_max_message_length_feature(df, temp_col):
    message_length_df = df.groupby(["sender", "year", temp_col]).agg(value=('message_length', 'max')).reset_index()
    return fill_missing_time_slots(message_length_df, temp_col)


def get_min_message_length_feature(df, temp_col):
    message_length_df = df.groupby(["sender", "year", temp_col]).agg(value=('message_length', 'min')).reset_index()
    return fill_missing_time_slots(message_length_df, temp_col)


@app.route('/')
def get_dashboard():
    # compute reply delays
    app.conversation.get_reply_delays()

    # create DataFrame with message distribution
    message_info = pd.DataFrame([{"sender": x.sender,
                                  "date": x.date,
                                  "year": x.date.year,
                                  # temporal aggregation levels
                                  "month": x.date.month,
                                  "week": x.date.isocalendar()[1],
                                  "day": x.date.timetuple().tm_yday,
                                  # extra features
                                  "reply_delay": x.reply_delay.seconds if x.reply_delay else None,
                                  "message_length": len(x.message)


                                   } for x in app.conversation.messages])

    # keep only messages that are not references to other messages (sender has extra spaces)
    # which means keep only the top two senders
    top_two_senders = message_info["sender"].value_counts().index[:2].tolist()
    message_info = message_info[message_info["sender"].isin(top_two_senders)]

    # manually fix senders to keep only the 2 most popular (real users, others are citations)
    message_info["sender"] = message_info["sender"].apply(lambda x: "ser" if "Sergio" in x else "ksu")

    # count messages for each different temporal distribution
    feat_temp_dict = defaultdict(dict)
    feature_makers = {"message_count": get_message_count_feature,
                      "median_reply_delay": get_median_reply_delay_feature,
                      "avg_reply_delay": get_avg_reply_delay_feature,
                      "max_reply_delay": get_max_reply_delay_feature,
                      "avg_message_length": get_avg_reply_delay_feature,
                      "median_message_length": get_median_reply_delay_feature,
                      "max_message_length": get_max_reply_delay_feature,
                      "min_message_length": get_min_reply_delay_feature,
                      }

    for temp_col in ["month", "week", "day"]:
        for feat_id, feat_maker in feature_makers.items():
            feat_temp_dict[temp_col][feat_id] = feat_maker(message_info, temp_col).to_dict(orient="records")

    final_senders = list(message_info["sender"].unique())

    return render_template('message_distribution_pyramid.html',
                           raw_data=json.dumps(feat_temp_dict),
                           sender1=final_senders[0],
                           sender2=final_senders[1],
                           starting_temp="month",
                           starting_feat="message_count",
                           feat_ids=list(feature_makers.keys())

                           )
