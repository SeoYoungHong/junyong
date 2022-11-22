import pandas as pd
import json
import math

cosmetic = pd.read_csv('cosmeticdb.csv')
cosmetic=cosmetic.values.tolist()
cosmeticingredient = pd.read_csv('cosmeticingredient.csv')
cosmeticingredient = cosmeticingredient.values.tolist()
ingredient = pd.read_csv('new_ids2.csv')
ingredient = ingredient.values.tolist()

ingredientID={}
for i in ingredient[:]:
    for j in i[1:]:
        if(type(j)==float and not math.isnan(j)): ingredientID[str(int(j))]=int(i[0])



cosmeticingredientID={}
for i in cosmeticingredient:
    cosmeticingredientID[i[1]]=[]
for i in cosmeticingredient:
    cosmeticingredientID[i[1]].append(i[2])
cosmeticjson={}
count=0
for i in cosmetic[:]:
    try: 
        cosmeticjson[i[0]]={'title':i[1], 'ingredientID':{}, 'id':i[0]}
        iids = cosmeticingredientID[i[0]]
        for idx, j in enumerate(iids):
            cosmeticjson[i[0]]['ingredientID'][idx]=ingredientID[str(j)]
    except:
        count +=1
        print('err', j)
        cosmeticjson[i[0]]['ingredientID'][idx]=str(j)
file_path = './cosmeticDB.json' 
with open(file_path, 'w') as outfile:
    json.dump(cosmeticjson, outfile, ensure_ascii=False)
#print(cosmeticjson)
print(count)
