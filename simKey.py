#!/usr/bin/python
# -*- coding: utf-8 -*- 

import json
import urllib
from sikuli.Sikuli import *
from java.awt import Robot
from java.awt import Color
from java.awt import Rectangle

# 使得 sys.getdefaultencoding() 的值为 'utf-8'  
reload(sys)                      # reload 才能调用 setdefaultencoding 方法  
#sys.setdefaultencoding('utf-8')  # 设置 'utf-8'  
#獲得系統編碼格式
_type = sys.getfilesystemencoding()

#s=urllib.urlopen('http://bj.58.com/hezu/')

tableList=[]
class TargetObj:
    targetName="Allen"
    targetAcc="BU001"
    targetAmount="0.01"
    def __init__(self, _targetName, _targetAcc, _targetAmount):
        print(" Create TargetObj!!")
        self.targetName = _targetName
        self.targetAcc = _targetAcc
        self.targetAmount=_targetAmount






    #openWebSiter(buurl,username,password,kpassword,targetObj)




def readConfig():
    keyContent=sys.argv[1]
    print("argv:"+keyContent)
    screenRegion.find(Pattern("uPassBox.png").similar(0.9)).click()
    sleep(1)
    type(keyContent)
    #paste(keyContent)
    sleep(1)
    screenRegion.type(Key.ENTER)
    
    

if __name__ == "__main__":
    screenRegion = Screen()
    readConfig()
    #getTableInfo()
    #load config
    #login
    
    #observeFunc(folder_tblRegion)
    #observeFunc(file_tblRegion)