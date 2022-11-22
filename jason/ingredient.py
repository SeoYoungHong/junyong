import pandas as pd
import json
#ingredient = pd.read_csv('new_name_merge.csv')
ingredient = pd.read_csv('ingredient1019.csv')
ingredient = ingredient.values.tolist()

ingredientjson = {}
for i in ingredient:
    if(type(i[1])==str): ingredientjson[i[0]]={'title':i[1]}
    else: ingredientjson[i[0]]={'title':i[2]}
print(ingredientjson)
file_path = './ingredientDB.json'
with open(file_path, 'w') as outfile:
    json.dump(ingredientjson, outfile, ensure_ascii=False)