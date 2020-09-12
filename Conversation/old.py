
convo = Conversation("data/conversational_data.txt")

# time without messages plot
convo.sort_messages_chronologically()
convo.get_reply_delays()

# REPLY DELAY
# delays_df = pd.DataFrame([dict(delay=m.reply_delay.total_seconds()/86400.0, sent=m.date, sender=m.sender) for m in convo.messages if m.reply_delay is not None])
# fig = px.scatter(delays_df, x="sent", y="delay", hover_name="sender", color="sender")
# fig.show()

# MESSAGE FREQUENCY
# message_frequency = pd.Series([m.date.date() for m in convo.messages])\
# 										.value_counts()\
# 										.reset_index(name="count")\
# 										.rename(columns={"index": "date"})\
# 										.sort_values(by="date")
#
# fig = px.line(message_frequency, x='date', y='count')
#
# # top_words = convo.get_top_words()
#
# fig.show()