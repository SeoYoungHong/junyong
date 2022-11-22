import json
import pandas as pd


with open('cosmeticdataTo1000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]

arrs={}
for idx, key in enumerate(keys[:]):
    id = idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        arrs[str(id)]= i['title'].split('(')[0]

with open('cosmeticdataTo2000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 10000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        arrs[str(id)]= i['title'].split('(')[0]

with open('cosmeticdataTo3000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 20000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        arrs[str(id)]= i['title'].split('(')[0]

with open('cosmeticdataTo4000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 30000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        arrs[str(id)]= i['title'].split('(')[0]

with open('cosmeticdataTo5000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]

for idx, key in enumerate(keys[:]):
    id = 40000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        arrs[str(id)]= i['title'].split('(')[0]

with open('cosmeticdataTo6000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 50000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        arrs[str(id)]= i['title'].split('(')[0]

with open('cosmeticdataTo7000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 60000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
    arrs[str(id)]= i['title'].split('(')[0]

keys = arrs.keys()
print(len(keys))
datas=[]
for idx, key in enumerate(keys):
    data=[]
    data.append(idx)
    data.append(key)
    data.append(arrs[key])
    datas.append(data)
    





df = pd.DataFrame(datas)
df.to_csv("ingredient_id.csv", header=None, index=None)
