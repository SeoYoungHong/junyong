
'''conda install -c conda-forge selenium selenium오류시 해결방법'''

from turtle import delay
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd
import json


name=pd.read_csv('product_name.csv', encoding='cp949')
column='제품명'
print(name[column])
product_names=name[column]


URL = 'http://www.kahpa.or.kr/main.asp'
driver = webdriver.Chrome(executable_path='./chromedriver')
driver.get(url=URL)

data={}

#메인페이지에서 frame으로 들어가는 것
driver.switch_to.frame("top")
#제품명검색으로 이동
posting = driver.find_element('xpath','//*[@id="container"]/section[2]/div/div/ul/li[5]')
posting.click()
driver.switch_to.default_content()


no_found=0
time_start=time.time()
for k in range(1):
    startidx=6*1000
    endidx=startidx+1000
    if(k==6): endidx=len(product_name)-1
    driver.get(url=URL)
    data={}
    #메인페이지에서 frame으로 들어가는 것
    driver.switch_to.frame("top")
    #제품명검색으로 이동
    posting = driver.find_element('xpath','//*[@id="container"]/section[2]/div/div/ul/li[5]')
    posting.click()
    driver.switch_to.default_content()
    for product_name in product_names[startidx:endidx]:
        print(product_name)
        data[product_name]={}
        data[product_name]['sung']=[]

        #제품명검색에서 이동
        driver.switch_to.frame("rightFrame")
        search_box = driver.find_element('xpath','//*[@id="content"]/form/div/div/fieldset/span[2]/input')
        search_box.clear()
        search_box.send_keys(product_name)
        search_box.send_keys(Keys.RETURN)

        driver.switch_to.default_content()
        #검색결과페이지
        driver.switch_to.frame("rightFrame")
        posting = driver.find_element('xpath','//*[@id="content"]/form/div/p/span[1]/b')
        if driver.find_element('xpath','//*[@id="content"]/form/div/p/span[1]/b').text=='0건':
            no_found+=1
            driver.switch_to.default_content()
            continue
        postings = driver.find_elements('xpath', '//*[@id="listView"]/ul/li')
        if len(postings)>0:
            flag=0
            for idx, post in enumerate(postings):
                print(post.text)
                if(idx%6==2 and post.text==product_name):
                    posting=post
                    flag=1
                    break
            if(flag==0):
                no_found+=1
                driver.switch_to.default_content()
                continue

        try:
            #posting = driver.find_element('xpath','//*[@id="listView"]/ul[1]/li[3]')
            posting.click()
            driver.switch_to.default_content()

            #상세페이지
            driver.switch_to.frame("rightFrame")
            #//*[@id="content"]/div[2]/div/table/tbody[2]
            
            posting = driver.find_elements('xpath','//*[@id="content"]/div[2]/div/table/tbody/tr')
            #성분이 없는경우 목록을 누르게 만들 었다. 
            if len(posting)==1:
                driver.switch_to.default_content()
                driver.switch_to.frame("rightFrame")
                posting = driver.find_element('xpath','//*[@id="content"]/div[2]/div/p/button')
                posting.click()
                no_found+=1
                driver.switch_to.default_content()
                continue
            posting = driver.find_element('xpath','//*[@id="content"]/div[2]/div/table/tbody[2]/tr')
            #posting.text는 해당태그의 내용을 갖고 올 수 있다. 
            post=[]
            tds=posting.find_elements('xpath','//*[@id="content"]/div[2]/div/table/tbody[2]/tr/td')
            td_arr=[]
            i=0
            total = posting.find_element('xpath', '//*[@id="content"]/div[2]/h4')
            plusedata1=posting.find_element('xpath','//*[@id="content"]/div[2]/div/div/table/tbody/tr[1]/td')
            plusedata2=posting.find_element('xpath','//*[@id="content"]/div[2]/div/div/table/tbody/tr[4]/td')
            data[product_name]['효능효과']=plusedata1.text
            data[product_name]['용법용량']=plusedata2.text
            data[product_name]['totalvolum']=total.text
            #한줄씩 엮어서 보낸다.
            for td in tds:
                td_arr.append(td.text)
                i=i+1
                if(i==4):
                    i=0
                    post.append(td_arr)
                    data[product_name]['sung'].append({
                        "id":int(td_arr[0])-1,
                        "title":td_arr[1],
                        "volume":td_arr[2],
                        "unit:":td_arr[3],
                    })
                    td_arr=[]
                
            post.append(td_arr)
            posting = driver.find_element('xpath','//*[@id="content"]/div[2]/div/p/button')
            posting.click()
            driver.switch_to.default_content()
        except:
            driver.switch_to.default_content()

    
    file_path='./cosmeticdataTo'+str(k+1)+'000'+'.json'
    print(file_path)
    #file_path='test.json'
    with open(file_path, 'w') as outfile:
        json.dump(data, outfile, ensure_ascii=False)
print(time.time()-time_start)
driver.close()
print("nofound:",no_found)