import json
import random

# create fake data
data = []
senders = ["ser", "ksu"]
years = range(2015, 2020)
months = range(1, 13)


for s in senders:
	for y in years:
		for m in months:
			x = {"value": random.randint(1, 500), "sender": s, "year": y, "month": m}
			data.append(x)

# save to disk
with open('data.json', 'w') as f:
	json.dump(data, f)

