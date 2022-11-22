import json

with open ('./cosmeticDB1109.json', 'r', encoding='utf-8') as f:
    cosmeticjson = json.load(f)

keys = [key for key in cosmeticjson]
print(len(keys))

for key in keys[:10]:
    cosmetic = cosmeticjson[key]
    ingredientid = cosmetic['ingredientID']
    ingredientlist = []
    for i in ingredientid:
        ingredientlist.append(ingredientid[i])
    cosmeticjson[key]['ingredientID'] = ingredientlist
print(cosmeticjson)
print(cosmeticjson)

cosmeticT = {"__collections__": {"Cosmetic":cosmeticjson}}

# file_path = './firestore/cosmeticT1109.json' 
# with open(file_path, 'w') as outfile:
#     json.dump(cosmeticT, outfile, ensure_ascii=False)