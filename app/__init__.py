from flask import Flask
from Conversation import Conversation


app = Flask(__name__)
# app.conversation = Conversation("data/conversational_data.txt")
app.conversation = Conversation("data/SerUpToDate.txt")

# to avoid circular import
from app import routes

from .util import filters
