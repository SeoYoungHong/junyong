import json


with open ('./cosmeticT1113.json', 'r', encoding='utf-8') as f:
    cosmeticjson = json.load(f)
cosmeticjson=cosmeticjson["__collections__"]["Cosmetic"]
keys = [key for key in cosmeticjson]
print(len(keys))
titlelistt =[]
for key in keys[:]:
    cosmetic = cosmeticjson[key]
    title = cosmetic['title']
    if(title in titlelistt):
        print(title)
    else: titlelistt.append(title)
print(len(titlelistt))
print(len(keys))