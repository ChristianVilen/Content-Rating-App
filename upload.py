import json
import requests

url = "http://localhost:8000"

# Iterating through the json file
for i in json.load(open('less-content.json')):
    requests.post(url, json=i)
