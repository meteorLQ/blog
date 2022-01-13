---
date: 2022-01-13
title: Docker
tags:
- vitepress
- markdown
  description: Docker
---


# Docker 的基本组成
**镜像（image）**
Dokcer镜像就是一个只读的模版。镜像可以用来创建Docker容器，一个镜像可以创建很多容器。
它相当于一个root文件系统。比如官方镜像centos：7就包含了完整的一套centos:7最小系统的root文件系统。
相当于容器的“源代码”，docker镜像文件类似于Java的类模版，而dokcer容器实例类似于java中new出来的实例对象。
**容器（container）**
Docker利用容器独立运行的一个或一组应用，应用程序或服务运行在容器里面，容器就类似于一个虚拟化的运行环境，容器是用镜像创建的运行示例。就像是Java中的类和实例对象一样，镜像是静态的定义，容器是镜像运行时的实体。容器为镜像提供例一个标准的和隔离的运行环境，它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台
可以把容器看做是一个简易版的Linux环境（包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。
**仓库（repository）**
集中存放镜像文件的场所
仓库分为公共仓库和私有仓库
全球最大的公共仓库是docker hub
# docker命令
## 帮助启动类命令
```java
//启动docker
systemctl start docker
//停止docker
systemctl stop docker
//重启docker
systemctl restart docker
//查看docker状态
systemctl status docker
//开机启动
systemctl enable docker
//查看docker概要信息
docker info
//查看docker总体帮助文档
docker --help
//查看docker命令帮助文档
docker 【命令】--help

```
## 镜像命令
```dockerfile
//查询本机全部镜像
docker images
```
![截屏2022-01-12 下午1.32.53.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1641965580913-42f97d71-0072-4894-89e8-ac430c25db03.png#clientId=u770d0cbd-2984-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u8614c81a&margin=%5Bobject%20Object%5D&name=%E6%88%AA%E5%B1%8F2022-01-12%20%E4%B8%8B%E5%8D%881.32.53.png&originHeight=222&originWidth=1316&originalType=binary&ratio=1&rotation=0&showTitle=false&size=175517&status=done&style=none&taskId=u2e96953a-1301-45fc-97c0-9ba14c0cb89&title=)
```dockerfile
//搜索镜像
docker search 镜像名称
//拉取镜像
docker pull 镜像名称:tag
```
```dockerfile
查看镜像/容器/数据卷所占的空间
docker system df
```
![截屏2022-01-12 下午4.01.36.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1641974516929-d8dcd8ea-f54f-4ee4-9868-78009ea2c482.png#clientId=u770d0cbd-2984-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u82e13b6a&margin=%5Bobject%20Object%5D&name=%E6%88%AA%E5%B1%8F2022-01-12%20%E4%B8%8B%E5%8D%884.01.36.png&originHeight=222&originWidth=1316&originalType=binary&ratio=1&rotation=0&showTitle=false&size=143392&status=done&style=none&taskId=u545c6dfc-c199-4784-9de2-81abf509767&title=)
```dockerfile
//删除镜像
docker rmi 镜像id或名称
//强制删除
docker rmi -f 镜像id或名称
//删除全部镜像
docker rmi -f $(docker images -qa)
```
## 容器命令
```dockerfile
运行容器
docker run 【options】image 【command】【arg】

options说明
--name="容器新名字" 为容器指定一个名称
-d 后台运行容器并返回容器ID，也即启动守护式容器（后台运行）
-i 以交互模式运行容器，通常与-t同时使用
-t 为容器重新分配一个伪输入终端，通常与-i同时使用
-P 随机指定端口 大写P
-p 指定端口 小写p

列出运行中的容器
docker ps

列出全部运行的容器
docker ps -a

显示最近创建的容器
docker ps -l

退出容器
exit 退出，容器停止
ctrl+p+q退出，容器不停止

启动容器
docker start 容器名称或id

停止容器
docker stop 容器名称或id

重启容器
docker restart 容器名称或id

强制停止容器
docker kill 容器名称或id

删除容器
docker rm 容器名称或id

强制删除容器
docker rm -f 容器名称或id

查看容器日志
docker logs 容器名称或id

查看容器内运行的进程
docker top 容器id或名称

查看容器内部细节
docker inspect 容器id

进入运行中容器内部
docker exec -it 容器id或名称/bin/bash
docker attach 容器id（exit退出会停止容器，不建议使用）

容器内文件拷贝到主机
docker cp 容器id:容器内路径 目标路径

导出容器
docker export 容器id > 名称.tar

导入容器
cat 文件名.tar|docker import - 镜像用户/镜像名:镜像版本号
```






















​

