import pandas as pd
import json
#ingredient = pd.read_csv('new_name_merge.csv')
ingredient = pd.read_csv('kindog.csv')
ingredient = ingredient.values.tolist()

dogjson = {}
for i in ingredient:
    dogjson[i[0]]=i[1]
print(dogjson)
file_path = './kinddog.json'
with open(file_path, 'w') as outfile:
    json.dump(dogjson, outfile, ensure_ascii=False)