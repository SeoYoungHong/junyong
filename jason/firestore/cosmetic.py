import pandas as pd
import json
import math
#C:\lcm\croling\jason\firestore>C:/Python310/python.exe c:/lcm/croling/jason/firestore/cosmetic.py
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
cosmeticlist=[]
count=0
for i in cosmetic[:]:
    data={'cid': i[0], 'title':i[1], 'ingredientID':[], 'id':i[0]}
    try: iids = cosmeticingredientID[i[0]]
    except: 
        count +=1
        print('err', j)
    for idx, j in enumerate(iids):
        try: data['ingredientID'].append(ingredientID[str(j)])
        except:
            count +=1
            print('err', j)
            data['ingredientID'].append(ingredientID[str(j)])
    cosmeticlist.append(data)
print(len(cosmeticlist))
file_path = './cosmeticDB2.json' 
with open(file_path, 'w') as outfile:
    json.dump(cosmeticlist, outfile, ensure_ascii=False)
#print(cosmeticjson)
print(count)
