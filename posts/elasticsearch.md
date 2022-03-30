---
date: 2022-03-30
title: elasticsearch一款纯纯的搜索引擎
tags:
- elasticsearch
description: elasticsearch一款纯纯的搜索引擎
---
<meta name="referrer" content="no-referrer" />


# 背景
一款纯纯的搜索引擎
# 流行度
可以查看这个网站
[https://db-engines.com/en/ranking](https://db-engines.com/en/ranking)
# 安装
es8现在已经默认加入安全模式，使用https连接。
## docker安装
### 安装es
> **创建网络**
> docker network create elastic
> **运行es**
> docker run -d --name es01 --net elastic -p 9200:9200 -p 9300:9300   elasticsearch:8.1.1
> **重置密码**
> docker exec -it es01 /usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic
> **用户名**  elastic
> **密码**      TL=53_6v2Ak2g_jkZhqc
> **生成kibana token**
> docker exec -it es01 /usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token --scope kibana
> **复制证书到当前文件夹下**
> docker cp es01:/usr/share/elasticsearch/config/certs/http_ca.crt .

### 安装kibana
> **运行kb**
> docker run -d --name kb01 --net elastic -p 5601:5601 kibana:8.1.1
> **生成验证码**
> docker exec -it kb01 /usr/share/kibana/bin/kibana-verification-code

# postman操作es
## postman 访问https es
### ssl 验证
直接忽略ssl
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1648605487090-eadff1e7-9027-474e-8bba-e5a69202fb54.png#clientId=u878a19fd-d68d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=646&id=u634e1964&margin=%5Bobject%20Object%5D&name=image.png&originHeight=807&originWidth=1178&originalType=binary&ratio=1&rotation=0&showTitle=false&size=119528&status=done&style=none&taskId=u2a96882a-31fa-4907-8537-df176df81ae&title=&width=942.4)
直接加入crt证书
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1648605422566-f16b84af-a97e-4d96-ae23-f929e37ace1a.png#clientId=u878a19fd-d68d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=475&id=u3fb730f0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=594&originWidth=1313&originalType=binary&ratio=1&rotation=0&showTitle=false&size=88917&status=done&style=none&taskId=uebe4c3e4-0d7c-4b64-b897-0156bf60ccd&title=&width=1050.4)

### 方式一
postman中就有Authorization这一栏，只需要选择相应的认证方式后，在右侧输入用户名和密码就好了
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1648604253370-99eb507f-5c73-4e12-b7a5-f70e3652b5d8.png#clientId=u878a19fd-d68d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=542&id=u3b6c5639&margin=%5Bobject%20Object%5D&name=image.png&originHeight=678&originWidth=1372&originalType=binary&ratio=1&rotation=0&showTitle=false&size=101485&status=done&style=none&taskId=ua83f86ef-6567-4e06-aa4c-478f3ba4690&title=&width=1097.6)
### 方式二
因为在es的配置文件中，选用的加密方式为basic，也就是该项xpack.license.self_generated.type: basic，对用户名密码进行手动加密，访问[https://www.base64encode.org/](https://www.base64encode.org/)地址，在输入框中输入elastic:123456，进行加密，并在头部加上“Basic ”字符串就是最终的Authorization的值了。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1648604467872-23f87a20-12a6-42aa-b1eb-88f4e09f8303.png#clientId=u878a19fd-d68d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=369&id=u88c15004&margin=%5Bobject%20Object%5D&name=image.png&originHeight=461&originWidth=1210&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46855&status=done&style=none&taskId=u1cbfaaf4-e30c-401e-88f4-6dab7253c82&title=&width=968)
### 方式三
此方式和第二种类似，将获取到的Authorization拷贝到postman中
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1648604610419-5b0ab4ae-959a-4eaf-bff9-a8963bb16caa.png#clientId=u878a19fd-d68d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=594&id=u39541e71&margin=%5Bobject%20Object%5D&name=image.png&originHeight=742&originWidth=1191&originalType=binary&ratio=1&rotation=0&showTitle=false&size=94318&status=done&style=none&taskId=u9fe66339-56bd-46dd-a9d4-3d3930b1b42&title=&width=952.8)
## 
## 批量导入es数据，使用postman导入
前提：完成前面提到的验证登录https
post方式导入，参数放入body内，以json方式提交。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1648604788535-be204168-14bf-4704-acbe-41919ad85d38.png#clientId=u878a19fd-d68d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=497&id=ub1988b4c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=621&originWidth=1395&originalType=binary&ratio=1&rotation=0&showTitle=false&size=109066&status=done&style=none&taskId=u423ba4a5-0f96-4014-b441-66abd04ba84&title=&width=1116)
导入演示数据[accounts.json](https://www.yuque.com/attachments/yuque/0/2022/json/25635684/1648604849290-1dc3156b-20fd-448f-bb26-14e5cfe31efd.json?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2022%2Fjson%2F25635684%2F1648604849290-1dc3156b-20fd-448f-bb26-14e5cfe31efd.json%22%2C%22name%22%3A%22accounts.json%22%2C%22size%22%3A242848%2C%22type%22%3A%22application%2Fjson%22%2C%22ext%22%3A%22json%22%2C%22status%22%3A%22done%22%2C%22taskId%22%3A%22ue01fff12-1f79-4a12-b838-cb2e34050a2%22%2C%22taskType%22%3A%22upload%22%2C%22id%22%3A%22u72349295%22%2C%22card%22%3A%22file%22%7D)（官方提供在es6最后一个版本）




