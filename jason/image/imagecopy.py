import shutil
import pandas as pd

name = pd.read_csv('cosmeticdb.csv')
name=(name.iloc[:]).values.tolist()
keys = []
for i in name:
    keys.append(i)
print(keys)
source = r"0.jpg"
for i in keys:
    destination = r"image/"+str(i[0])+".jpg"
    shutil.copyfile(source, destination)