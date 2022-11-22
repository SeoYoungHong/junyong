import json
import pandas as pd


with open('cosmeticdataTo1000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]

arrs={}
for idx, key in enumerate(keys[:]):
    id = idx*100
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        if(i['title'] in arrs.keys()):
            arrs[i['title']].append(str(id))
        else: arrs[i['title']]= [str(id)]

with open('cosmeticdataTo2000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 1000+idx*100
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        if(i['title'] in arrs.keys()):
            arrs[i['title']].append(str(id))
        else: arrs[i['title']]= [str(id)]

with open('cosmeticdataTo3000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 2000+idx*100
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        if(i['title'] in arrs.keys()):
            arrs[i['title']].append(str(id))
        else: arrs[i['title']]= [str(id)]

with open('cosmeticdataTo4000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 3000+idx*100
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        if(i['title'] in arrs.keys()):
            arrs[i['title']].append(str(id))
        else: arrs[i['title']]= [str(id)]

with open('cosmeticdataTo5000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]

for idx, key in enumerate(keys[:]):
    id = 4000+idx*100
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        if(i['title'] in arrs.keys()):
            arrs[i['title']].append(str(id))
        else: arrs[i['title']]= [str(id)]

with open('cosmeticdataTo6000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 5000+idx*100
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        if(i['title'] in arrs.keys()):
            arrs[i['title']].append(str(id))
        else: arrs[i['title']]= [str(id)]

with open('cosmeticdataTo7000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 6000+idx*100
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        if(i['title'] in arrs.keys()):
            arrs[i['title']].append(str(id))
        else: arrs[i['title']]= [str(id)]

keys = arrs.keys()
values = []
datas=[]
for idx, key in enumerate(keys):
    value =key.split('(')[0]
    if(value not in values):
        values.append(value)
        datas.append([idx, value])
       
print(len(datas))




df = pd.DataFrame(datas)
df.to_csv("ingredientuserDB2.csv", header=None, index=None)
