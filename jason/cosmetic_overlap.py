import pandas as pd
import json
import math
ingredient = pd.read_csv('ingredient_overlap1109.csv')
ingredient = ingredient.values.tolist()
ingredient_overlap =[]
for i in ingredient:
    if(i[1]==i[1]):
        ingredient_overlap.append(i)
print(ingredient_overlap)

ingredient_overlap_map={}
for i in range(len(ingredient_overlap)):
    ingredient_overlap_map[ingredient_overlap[i][0]]=[]
    for j in range(len(ingredient_overlap[i])-1):
        if(ingredient_overlap[i][j+1]==ingredient_overlap[i][j+1]):
            ingredient_overlap_map[ingredient_overlap[i][0]].append(ingredient_overlap[i][j+1].split(',')[0].strip().strip('\"').strip('['))
     
overlapkeys = [key for key in ingredient_overlap_map]
print(ingredient_overlap_map)
print(overlapkeys)


with open ('./cosmeticDB.json', 'r', encoding='utf-8') as f:
    cosmeticjson = json.load(f)

keys = [key for key in cosmeticjson]
ingredientlists=[]
for idx, key in enumerate(keys):
    ingredientID = cosmeticjson[key]['ingredientID']
    ingredientlist =[]
    for ikey in ingredientID:
        if(ingredientID[ikey] in overlapkeys):
            for ok in ingredient_overlap_map[ingredientID[ikey]]:
                ingredientlist.append(ok)
        else:ingredientlist.append(ingredientID[ikey])
    ingredientID_map={}
    for i in range(len(ingredientlist)):
        ingredientID_map[i]=ingredientlist[i]
    cosmeticjson[key]['ingredientID'] = ingredientID_map

file_path = './cosmeticDB1109.json' 
with open(file_path, 'w') as outfile:
    json.dump(cosmeticjson, outfile, ensure_ascii=False)
