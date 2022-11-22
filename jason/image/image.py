import encodings
from encodings.utf_8 import encode
from itertools import count
import json
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd
import multiprocessing
import os
from selenium.webdriver.common.by import By

#keys = [key for key in json_data]
#print("lenkey:", len(keys))
name = pd.read_csv('cosmeticdb.csv')
name=(name.iloc[:]).values.tolist()
keys = []
for i in name:
    keys.append(i)
print(keys)

option = webdriver.ChromeOptions()
# option.add_argument('headless')
option.add_argument('--dosavle--gpu')

URL = 'http://www.11st.co.kr/html/category/1001453.html'
'''driver = webdriver.Chrome(executable_path='./chromedriver')
driver.get(url=URL)
login = driver.find_element('xpath', '//*[@id="__next"]/div/div/div[1]/div[1]/div/div/div[2]/div[4]/div')
login.click()
id = driver.find_element('xpath','//*[@id="__next"]/div/div/main/div/div/div/form/div[1]/input')
id.send_keys('hso@klapoo.com')
pw = id = driver.find_element('xpath','//*[@id="__next"]/div/div/main/div/div/div/form/div[2]/input')
pw.send_keys('@winhk0416')
time.sleep(3)
pw.send_keys(Keys.RETURN)'''

#전체데이터 저장

def croling(data, count_dict):
    
    errcount=0
    aswcount=0
    print('driver start')
    driver = webdriver.Chrome(executable_path='./chromedriver', chrome_options=option)
    while count_dict['count'] < len(keys):
        idx= count_dict['count']
        key = keys[count_dict['count']][1]
        count_dict['count'] += 1
        driver.get(url=URL)
        search_box = driver.find_element('xpath', '//*[@id="tSearch"]/form/fieldset/input')
        search_box.clear
        search_box.send_keys(key)
        search_box.send_keys(Keys.RETURN)
        no_search = driver.find_elements('xpath', '//*[@id="layBodyWrap"]/div/div/div[3]/div/section[1]/div/p')
        if(len(no_search)==1):
            data.append([idx,key])
        print('data_num: ',count_dict['count'], ', crrect: ',count_dict['count']-len(data), ', err: ', len(data))
        # time.sleep(3)
    
if __name__ == '__main__':
    start = time.time()
    data = multiprocessing.Manager().list()
    count_dict = multiprocessing.Manager().dict()
    count_dict['count'] = 0
    count_dict['errcount'] = 0
    count_dict['awscount'] = 0
#     errcount = 0
#
#     count = 0

    process = []

    # while count<len(keys):
    for i in range(1):
        p = multiprocessing.Process(target = croling, args = (data, count_dict))
        process.append(p)
        p.start()

    for p in process:
        p.join()
    print(data)
    data=list(data)
    df = pd.DataFrame(data)
    df.to_csv("coos_data.csv", header=None, index=None)
    print(count_dict['count'], count_dict['errcount'])
    print(time.time()- start)

    
