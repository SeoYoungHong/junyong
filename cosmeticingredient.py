import json
import pandas as pd


with open('cosmeticdataTo1000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]
ids=[]
arrs={}
for idx, key in enumerate(keys[:]):
    id = idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        ids.append([id,i['title']])
        if(i['title'].split('(')[0] in arrs.keys()):
            arrs[i['title'].split('(')[0]].append(i['title'])
        else: arrs[i['title'].split('(')[0]]= [i['title']]

with open('cosmeticdataTo2000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 10000000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        ids.append([id,i['title']])
        if(i['title'].split('(')[0] in arrs.keys()):
            arrs[i['title'].split('(')[0]].append(i['title'])
        else: arrs[i['title'].split('(')[0]]= [i['title']]

with open('cosmeticdataTo3000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 20000000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        ids.append([id,i['title']])
        if(i['title'].split('(')[0] in arrs.keys()):
            arrs[i['title'].split('(')[0]].append(i['title'])
        else: arrs[i['title'].split('(')[0]]= [i['title']]

with open('cosmeticdataTo4000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 30000000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        ids.append([id,i['title']])
        if(i['title'].split('(')[0] in arrs.keys()):
            arrs[i['title'].split('(')[0]].append(i['title'])
        else: arrs[i['title'].split('(')[0]]= [i['title']]

with open('cosmeticdataTo5000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]

for idx, key in enumerate(keys[:]):
    id = 40000000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        ids.append([id,i['title']])
        if(i['title'].split('(')[0] in arrs.keys()):
            arrs[i['title'].split('(')[0]].append(i['title'])
        else: arrs[i['title'].split('(')[0]]= [i['title']]

with open('cosmeticdataTo6000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 50000000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        ids.append([id,i['title']])
        if(i['title'].split('(')[0] in arrs.keys()):
            arrs[i['title'].split('(')[0]].append(i['title'])
        else: arrs[i['title'].split('(')[0]]= [i['title']]

with open('cosmeticdataTo7000.json', 'r', encoding='utf-8') as f:
    json_data = json.load(f)
keys = [key for key in json_data]


for idx, key in enumerate(keys[:]):
    id = 60000000+idx*1000
    for i in json_data[key]['sung']:
        id = id + int(i['id'])
        ids.append([id,i['title']])
        if(i['title'].split('(')[0] in arrs.keys()):
            arrs[i['title'].split('(')[0]].append(i['title'])
        else: arrs[i['title'].split('(')[0]]= [i['title']]

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
df.to_csv("ingredientdb3_name.csv", header=None, index=None)
df = pd.DataFrame(ids)
#df.to_csv("ingredient_ids3.csv", header=None, index=None)
