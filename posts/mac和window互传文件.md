---
date: 2022-03-01
title: mac和window互传文件
tags:
- vitepress
- markdown
description: 这几天在家办公，所以我就把公司的电脑带回来了，但是发现一个问题，就是我有一个4g的文件在window里，我想传到mac，微信无法发送，查了一下说是可以用共享文件夹的方式传输。
---
# 前情提要
这几天在家办公，所以我就把公司的电脑带回来了，但是发现一个问题，就是我有一个4g的文件在window里，我想传到mac，微信无法发送，查了一下说是可以用共享文件夹的方式传输。


# 具体方案
以下是具体步骤，详细可以参考[Apple官网文档](https://support.apple.com/zh-cn/guide/mac-help/mchlp1660/12.0/mac/12.0)。
## window操作步骤

1. 新建一个文件夹
1. 右键属性选择共享
1. 添加一个用户，创建共享文件夹



![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646147229469-d1cd8154-cca4-490a-8228-7e4deaef660d.png#clientId=u0adbf0b1-f8bd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=381&id=u96330617&margin=%5Bobject%20Object%5D&name=image.png&originHeight=762&originWidth=1323&originalType=binary&ratio=1&rotation=0&showTitle=false&size=116182&status=done&style=none&taskId=u561f04bb-a440-48f9-8e11-588641ca451&title=&width=661.5)


## mac操作步骤

1. 选择访达，右键选择连接服务器

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646147459032-38209a02-2632-468f-b631-011ecfe4e5f8.png#clientId=u0adbf0b1-f8bd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=324&id=u695a603e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=648&originWidth=340&originalType=binary&ratio=1&rotation=0&showTitle=false&size=125891&status=done&style=none&taskId=u4dcf8ce0-c38d-4d2c-9475-f89b1b385f8&title=&width=170)

2. 输入连接地址smb://你的计算机名字或者ip/share，点击连接

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646147622075-678ec1aa-9093-49da-8518-d58a73e47dc7.png#clientId=u0adbf0b1-f8bd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=231&id=u7e92f270&margin=%5Bobject%20Object%5D&name=image.png&originHeight=462&originWidth=972&originalType=binary&ratio=1&rotation=0&showTitle=false&size=132683&status=done&style=none&taskId=u1f21beb1-d66c-42ce-96c1-204503c7425&title=&width=486)

3. 选择文件夹，注意输入window用户名和密码（最好使用本地账号登录window）

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646147755526-9ddea69f-7580-4908-8719-c75354464060.png#clientId=u0adbf0b1-f8bd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=358&id=u8e89bda9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=716&originWidth=840&originalType=binary&ratio=1&rotation=0&showTitle=false&size=64460&status=done&style=none&taskId=u5b6d9b42-3361-4dc0-b298-7d82cd92ab6&title=&width=420)

4. 成功



![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646147950671-c038c8e6-d20f-4317-b228-2a4d9a537a3a.png#clientId=u0adbf0b1-f8bd-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=273&id=uff705e38&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1376&originWidth=2508&originalType=binary&ratio=1&rotation=0&showTitle=false&size=217620&status=done&style=none&taskId=u68da2d93-6cc8-4059-a4aa-157e6e55c8b&title=&width=497)
