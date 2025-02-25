# purpose: use mapbox geocoding api to get coordinate data for place
# not going to be used because of mapbox ToS
import json
import requests
import os

with open('letters.json', 'r') as f:
    dict  = json.load(f) # pretty sure it will act as a dictionary

f = open('coordinates.json', 'w', encoding = 'utf-8')
f.write('[')
for elem in dict:
    x = json.dumps(elem['place'])
    if x!='{}':
        url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ x + ".json?access_token=pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2kxMTgwajRyNDlwN2N0MzJpd2FmIn0.BYTMqLbeeAG6YGSJjS1gZg"
        r = requests.get(url)
        json.dump(r.json(), f, ensure_ascii = False, indent = 2)
        f.write(',')
    else:
        json.dump('{}', f, ensure_ascii = False, indent = 2)
        f.write(',')
f.seek(0, os.SEEK_END)
f.truncate()
f.write(']')

f.close()
        
