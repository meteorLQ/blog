---
date: 2022-03-01
title: mac和window互传文件
tags:
- vitepress
- markdown
- mac
- window
description: 这几天在家办公，所以我就把公司的电脑带回来了，但是发现一个问题，就是我有一个4g的文件在window里，我想传到mac，微信无法发送，查了一下说是可以用共享文件夹的方式传输。
---
<meta name="referrer" content="no-referrer" />

# 前情提要
这几天在家办公，所以我就把公司的电脑带回来了，但是发现一个问题，就是我有一个4g的文件在window里，我想传到mac，微信无法发送，查了一下说是可以用共享文件夹的方式传输。


# 具体方案
以下是具体步骤，详细可以参考[Apple官网文档](https://support.apple.com/zh-cn/guide/mac-help/mchlp1660/12.0/mac/12.0)。
## window操作步骤

1. 新建一个文件夹
1. 右键属性选择共享
1. 添加一个用户，创建共享文件夹



![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646147229469-d1cd8154-cca4-490a-8228-7e4deaef660d.png)


## mac操作步骤

1. 选择访达，右键选择连接服务器

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646147459032-38209a02-2632-468f-b631-011ecfe4e5f8.png)

2. 输入连接地址smb://你的计算机名字或者ip/share，点击连接

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646147622075-678ec1aa-9093-49da-8518-d58a73e47dc7.png)

3. 选择文件夹，注意输入window用户名和密码（最好使用本地账号登录window）

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646147755526-9ddea69f-7580-4908-8719-c75354464060.png)

4. 成功



![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646147950671-c038c8e6-d20f-4317-b228-2a4d9a537a3a.png)
