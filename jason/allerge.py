import pandas as pd
import json
#ingredient = pd.read_csv('new_name_merge.csv')
ingredient = pd.read_csv('allerge.csv')
ingredient = ingredient.values.tolist()

dogjson = {}
for idx, i in enumerate(ingredient):
    dogjson[idx]=i[1]
print(dogjson)
file_path = './allerge.json'
with open(file_path, 'w') as outfile:
    json.dump(dogjson, outfile, ensure_ascii=False)