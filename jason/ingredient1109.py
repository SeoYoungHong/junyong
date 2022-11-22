import pandas as pd
import json
#ingredient = pd.read_csv('new_name_merge.csv')
ingredient = pd.read_csv('ingredient1109.csv')
ingredient = ingredient.values.tolist()
functional =["진정",
            "완화",
            "재생",
            "수렴",
            "보습",
            "항균",
            "항미생물",
            "항생",
            "항진균",
            "항바이러스",
            "항포자",
            "정균",
            "소염",
            "항알레르기",
            "소독",
            "항지루",
            "기름제거",
            "각질분해",
            "모공관리",
            "각질형성",
            "박리박피",
            "pH감소",
            "pH정상화",
            "피부단백질대사촉진",
            "콜라겐합성",
            "케라틴합성",
            "엘라스틴합성",
            "피부장벽재건설",
            "항산화",
            "항라디컬",
            "자외선차단",
            "모낭홍조에도움",
            "가려움증감소",
            "탈취"]
ingredientjson = {}
for i in ingredient:
    if(i[3]==i[3]):
        ingredientjson[i[0]]={
            'iid': i[0],
            'title(kr)': i[2],
            'title(en)':i[3]
            }
        if(i[4]==i[4]):ingredientjson[i[0]]['purpose'] = i[4]
        #else: ingredientjson[i[0]]['purpos'] = None
        if(i[5]==i[5]):ingredientjson[i[0]]['EWGgrade'] = i[5]
        #else: ingredientjson[i[0]]['EWGgrade'] = None
        if(i[6]==i[6]):ingredientjson[i[0]]['EWGdata'] = i[6]
        #else: ingredientjson[i[0]]['EWGgrage'] = None
        if(i[7]==i[7]):ingredientjson[i[0]]['Allergic'] = i[7]
        #else: ingredientjson[i[0]]['Allergic'] = None
        if(i[8]==i[8]):ingredientjson[i[0]]['ASPCA'] = i[8]
        #else: ingredientjson[i[0]]['ASPCA'] = None
        ingredientjson[i[0]]['nonglim_limit'] = i[9]
        ingredientjson[i[0]]['nonglim_inhibition'] = i[10]
        if(i[11]==i[11]):ingredientjson[i[0]]['PPH'] = i[11]
        #else: ingredientjson[i[0]]['ASPCA'] = None
        idx = 0
        for j in range(len(functional)):
            if  i[12+j] =='T':
                if idx ==0 :
                    ingredientjson[i[0]]['functional'] = {0:functional[j]}
                    idx = idx +1
                else:
                    ingredientjson[i[0]]['functional'][idx] = functional[j]
                    idx = idx +1
        


file_path = './ingredientDB1109.json'
with open(file_path, 'w') as outfile:
    json.dump(ingredientjson, outfile, ensure_ascii=False)