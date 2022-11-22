import pandas as pd
import json
#ingredient = pd.read_csv('new_name_merge.csv')
ingredient = pd.read_csv('sample_data.csv')
ingredient = ingredient.values.tolist()
print(ingredient)


ingredientjson={}
for i in ingredient[1:]:
    if(i[2]==i[2]):
        ingredientjson[int(i[2])]={}
        for j in range(len(i)):
            ingredientjson[int(i[2])][ingredient[0][j].replace(' ','').replace('/','')] = i[j]
print(ingredientjson)
file_path = './ingredientsample.json'
with open(file_path, 'w') as outfile:
    json.dump(ingredientjson, outfile, ensure_ascii=False)