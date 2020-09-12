import re
from datetime import datetime
import pandas as pd


class Message:
	header_pattern = re.compile(
		r"^(.*) \((([A-Z][a-z]{2}) (\d{1,2}), (\d{4}) (\d{1,2}):(\d{1,2}):(\d{1,2}) (?:AM|PM))\):$")

	def __init__(self, header, lines):
		self.header = header
		self.message = self.process_lines(lines)
		self.sender, self.date = self.process_header(header)
		self.tokens = [x.lower() for l in lines for x in l.split()]
		self.reply_delay = None

	def process_header(self, h):
		sender, full_date, month, day, year, hour, min, sec = self.header_pattern.findall(h)[0]
		date = datetime.strptime(full_date, "%b %d, %Y %I:%M:%S %p")
		return sender, date

	@staticmethod
	def process_lines(lines):
		"""
		remove \n from all lines and remove lines that become empty
		"""
		return "\n".join([x for x in [x.replace("\n", "") for x in lines] if x])

	def __repr__(self):
		return "{}\n{}".format(self.header, self.message)


class Conversation:
	def __init__(self, conversation_file):
		self.messages = self.load_conversation(conversation_file)
		self.sorted_messages = None

	@staticmethod
	def load_conversation(file_path):
		messages = []
		with open(file_path, encoding="utf8") as f:
			while True:
				lines = []
				while True:
					line = f.readline()
					if Message.header_pattern.match(line) or not line:
						if lines:
							messages.append(Message(next_header, lines))
						next_header = line
						break
					else:
						lines.append(line)
				if not next_header:
					break

		return messages

	def get_top_words(self):
		all_words = [t for m in self.messages for t in m.tokens]
		return pd.Series(all_words).value_counts()

	def sort_messages_chronologically(self):
		self.messages = sorted(self.messages, key=lambda x: x.date)

	def get_reply_delays(self):
		for i in range(len(self.messages) - 1):
			# if the next message is from the same person, don't fill delay
			if self.messages[i].sender == self.messages[i + 1].sender:
				pass
			else:
				self.messages[i].reply_delay = self.messages[i + 1].date - self.messages[i].date