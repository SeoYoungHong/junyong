import json
import pandas as pd

with open ('./cosmeticDB1109.json', 'r', encoding='utf-8') as f:
    cosmeticjson = json.load(f)

keys = [key for key in cosmeticjson]
print(len(keys))

cosmeticcategory = pd.read_csv('cosmetic1113.csv')
cosmeticcategory = cosmeticcategory.values.tolist()
cosmeticdict = {}
err1=[]
for cc in cosmeticcategory[:]:
    if(cc[2]==cc[2]):
        cosmeticdict[cc[1]]={'company': cc[0], 'bigcategory': cc[2]}
        if(cc[3]==cc[3]):
            cosmeticdict[cc[1]]['smallcategory'] = cc[3]
    else :err1.append(cc[1])
#print(cosmeticdict)
err =[]
for key in keys[:]:
    cosmetic = cosmeticjson[key]
    title = cosmetic['title']
    try: 
        cd = cosmeticdict[title]
        ingredientid = cosmetic['ingredientID']
        ingredientlist = []
        for i in ingredientid:
            ingredientlist.append(ingredientid[i])
        cosmeticjson[key]['ingredientID'] = ingredientlist
        cosmeticjson[key]['brand'] = cd['company']
        cosmeticjson[key]['bigcategory'] = cd['bigcategory']
        if(cd.get('smallcategory')!=None):
            cosmeticjson[key]['smallcategory'] = cd['smallcategory']
        else :
            cosmeticjson[key]['smallcategory'] = 'nocategory'
    except: 
        del cosmeticjson[key]
        err.append(key)
print(err, len(err))

    




cosmeticT = {"__collections__": {"Cosmetic":cosmeticjson}}

file_path = './cosmeticT1113.json' 
with open(file_path, 'w') as outfile:
    json.dump(cosmeticT, outfile, ensure_ascii=False)