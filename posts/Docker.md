---
date: 2022-01-13
title: Docker
tags:
- vitepress
- markdown
description: Dokcer镜像就是一个只读的模版。镜像可以用来创建Docker容器，一个镜像可以创建很多容器。
---
<meta name="referrer" content="no-referrer" />

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

提交镜像
docker commit -m="提交的描述信息" -a=“作者” 容器id 要创建的目标镜像名:[标签名]
```
## 容器数据卷
卷就是目录或文件，存在于一个或多个容器中，由**docker**挂载到容器，但不属于联合文件系统，因此能够绕过Union file system提供但一些用于持续存储或共享数据但特性：
卷但设计目的就是数据的持久化，完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷。


```dockerfile
目录挂载命令
docker run --privileged=true -v 宿主机目录：容器内目录 镜像id
```


**查看是否挂载成功**
```dockerfile
docker inspect 容器id
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1642131142641-0a50dba0-b040-4e76-a950-596aa6a3c92a.png#clientId=u770d0cbd-2984-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=192&id=uea772943&margin=%5Bobject%20Object%5D&name=image.png&originHeight=384&originWidth=1146&originalType=binary&ratio=1&rotation=0&showTitle=false&size=147868&status=done&style=none&taskId=u60178011-c697-4315-bc0b-c66eeb0d2bb&title=&width=573)


**挂载目录权限**
**默认情况下挂载目录和容器目录是rw**
```dockerfile
docker run --privileged=true -v 宿主机目录：容器内目录：rw 镜像id
```
**容器实例内部被限制，不能写，只能读**
```dockerfile
docker run --privileged=true -v 宿主机目录：容器内目录：ro 镜像id
```
**容器之间路径的继承和共享**
```dockerfile
docker run --privileged=true --volumes-from 父容器id --name 重命名 镜像id
```
# docker安装MySQL


> **docker run -d -p 3306:3306 --name mysql1 -v /d/DevEnv/mysql/conf:/etc/mysql/conf.d -v /d/DevEnv/mysql/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456  mysql:8.0.26**


> docker run -p 3306:3306 --name mysql2 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:8.0.26
> docker run mysql1 -p 3306:3306


> 启动（m1芯片暂无msql版本镜像，所以使用mysql-server）

> docker run -d -p 3306:3306 --name mysql1 -v /Users/liqiang/devins/mysql/conf:/etc/mysql/conf.d -v /Users/liqiang/devins/mysql/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456  mysql/mysql-server

> **进入容器**
> **docker exec -it mysql bash**

> **登陆mysql**
> **mysql -u root -p**

> grant all on *.*  to 'root'@'%';
> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;
> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';

> **设置用户远程登录**

> 使用mysql
> use mysql
> 修改密码：
> ALTER USER 'root'@'localhost' IDENTIFIED  BY '123456';
> 修改ip为所有可访问
> update user set host='%' where user='root';
> 查看
> select host,user from user;
> 刷新
> flush privileges;

## 基于docker的mysql主从复制
```dockerfile
docker run -d -p 3307:3306 --name mysql-master -v /Users/liqiang/devins/mysql-master/conf:/etc/mysql -v /Users/liqiang/devins/mysql-master/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456  mysql/mysql-server
```
**master配置**
```dockerfile
[mysqld]
# 设置server_id
server_id=101
#
binlog-ignore-db=mysql
#
log-bin=mall-mysql-bin
#
binlog_cache_size=1M
#
binlog_format=mixed
#
expire_logs_days=7
#
slave_skip_errors=1062
```


# docker安装redis
> docker exec -it myredis redis-cli  连接redis客户端


> docker run -d -p 6379:6379 -v /Users/lq/devinstall/myredis/conf:/usr/local/etc/redis -v /Users/lq/devinstall/myredis/data:/data --name myredis redis:6.2.6 redis-server /usr/local/etc/redis/redis.conf



## docker redis集群安装（伪集群）
****

**启动六台redis**
```dockerfile
docker run -d --name redis-node1 -v /Users/liqiang/devins/redis/data/node1:/data -p 6381:6381 -p 16381:16381 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6381 
docker run -d --name redis-node2 -v /Users/liqiang/devins/redis/data/node2:/data -p 6382:6382 -p 16382:16382 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6382 
docker run -d --name redis-node3 -v /Users/liqiang/devins/redis/data/node3:/data -p 6383:6383 -p 16383:16383 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6383 
docker run -d --name redis-node4 -v /Users/liqiang/devins/redis/data/node4:/data -p 6384:6384 -p 16384:16384 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6384 
docker run -d --name redis-node5 -v /Users/liqiang/devins/redis/data/node5:/data -p 6385:6385 -p 16385:16385 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6385 
docker run -d --name redis-node6 -v /Users/liqiang/devins/redis/data/node6:/data -p 6386:6386 -p 16386:16386 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6386 
```
集群关联
注意：进入docker容器后才能执行以下命令，且注意自己的真实IP地址
```dockerfile
redis-cli --cluster create 192.168.0.120:6381 192.168.0.120:6382 192.168.0.120:6383 192.168.0.120:6384 192.168.0.120:6385 192.168.0.120:6386 --cluster-replicas 1
```
--cluster-replicas 1表示每个master创建一个slave节点
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1642344498422-c54f41d2-65eb-4f5b-8dfd-dfba71486d07.png#clientId=u770d0cbd-2984-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=907&id=ubb38487b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1814&originWidth=1172&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1077855&status=done&style=none&taskId=udb7414cc-8e5e-4a71-b35d-debd7972f62&title=&width=586)


查看集群信息
```dockerfile
cluster info
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1642490303533-2d59bc96-dcbe-46c1-a07a-d4893acca2d8.png#clientId=ua11cf2b8-2d2c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=305&id=ua1a523a5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=610&originWidth=784&originalType=binary&ratio=1&rotation=0&showTitle=false&size=282354&status=done&style=none&taskId=ucfcd7a2f-0c2b-4123-9172-2c95b42488b&title=&width=392)


查看集群节点情况
```dockerfile
cluster nodes
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1642490337594-05550568-aa0a-4114-b6c3-3ce391176b58.png#clientId=ua11cf2b8-2d2c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=130&id=u4b65d431&margin=%5Bobject%20Object%5D&name=image.png&originHeight=260&originWidth=2492&originalType=binary&ratio=1&rotation=0&showTitle=false&size=385098&status=done&style=none&taskId=u65b27f1f-b60a-4eb5-8d20-706a815d51f&title=&width=1246)
**使用客户端连接redis时，请使用redis-cli -p 6381 -c**
**加入-c参数，优化路由**


查看集群详细信息
```dockerfile
redis-cli --cluster check 192.168.0.120:6381
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1642491878425-0eb02be6-5cfd-412c-b878-eb9cdac58d9d.png#clientId=ua11cf2b8-2d2c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=517&id=u46d0ffc8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1034&originWidth=1256&originalType=binary&ratio=1&rotation=0&showTitle=false&size=729144&status=done&style=none&taskId=u022f5d52-0f1a-42ce-aad2-4ae63d82581&title=&width=628)




**集群扩容**
将新节点加入集群
```dockerfile
redis-cli --cluster add-node ip地址:6387 ip地址:6381
```
6387就是将要作为master新增节点
6381就是原来集群节点里面点主节点
​

**重新分派槽号**
```dockerfile
redis-cli --cluster reshard 192.168.0.120:6381
```
**重新挂载从节点**
```dockerfile
redis-cli --cluster add-node 新slaveip地址:6387 新masterip地址:6381 --cluster-slave --cluster-master-id 新主机节点id

redis-cli --cluster add-node 192.168.0.120:6388 192.168.0.120:6387 --cluster-slave --cluster-master-id bac9cc96b59c91d785acdbceeec6f75e71318738
```
集群索容


先删除从机
```dockerfile
redis-cli --cluster del-node ip地址:端口 节点id
```
重新分配槽号
```dockerfile
redis-cli --cluster reshard 192.168.0.120:6381
```
删除主节点


```dockerfile
redis-cli --cluster del-node ip地址:端口 节点id
```


坑1:**--net hos**
**MacOS和docker网络交互，不支持host模式（--net host），需要使用默认的bridge模式（使用-p映射端口）**
坑2:**Waiting for the cluster to join **
redis-cli --cluster create环节，一直卡到"Waiting for the cluster to join”环节。
Redis集群中的各个节点，需要开放一个端口，同其他节点建立连接，用于接收心跳数据等操作。也就是说，redis-node1节点，开放6379端口供client连接时，同时提供16379端口(10000 + 6379)，供其他Redis节点连接。

集群初始化过程中，需要同其他Redis建立连接，进行通信。若节点间无法连接，此时会阻塞，这也就是一直阻塞到"Waiting for the cluster to join"环节的原因。

官方通过--net=host，指定网络类型为host，使得容器与宿主机使用同一网络，从而规避了这类问题。
当然，若不想修改容器网络类型的话，则，需要同时暴露两个端口，用于提供client和其他节点
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1642344952745-9fd6bfea-3693-4c02-904b-1ead46e751da.png#clientId=ua11cf2b8-2d2c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=249&id=u966e6ca3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=498&originWidth=1848&originalType=binary&ratio=1&rotation=0&showTitle=false&size=124779&status=done&style=none&taskId=ud5460791-20c6-4072-a4a4-6501031f2d6&title=&width=924)





















