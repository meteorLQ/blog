---
date: 2022-01-03
title: 常用分布式ID解决方案
tags:
- vitepress
- markdown
  description: 常用分布式ID解决方案
---

# ![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1641348787471-e489ef4f-d7fe-4a71-b8e9-f180300fc113.png#clientId=u16403895-af71-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u4478e249&margin=%5Bobject%20Object%5D&name=image.png&originHeight=338&originWidth=720&originalType=url&ratio=1&rotation=0&showTitle=false&size=101603&status=done&style=none&taskId=u776fd6e4-2c91-4ec5-a0f7-002f15cf47d&title=)


# 一、为什么用分布式id？
## 1.什么是分布式id？
分布式id是依托于分布式系统诞生的概念。
分布式id是分布式系统中一个重要的概念。
拿pg举例，以前我们的项目用户量少可能需要单机pg就够用了，但是随着时间的推移，用户量也极具上升，单机已无法满足业务需求，所以我们将单机更换为了集群并进行了分库分表。
集群搭建之后，数据存放于不同的DB，如果使用传统的方式（数据库自增主键），就无法保证全局唯一，所以此时急需一种可以生成全局id的系统。
## 2.分布式id满足条件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1641352212752-0cf4cf3c-c99a-4f79-b3b1-a5282ea59780.png#clientId=uccbbe311-339e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u2f0357ff&margin=%5Bobject%20Object%5D&name=image.png&originHeight=411&originWidth=421&originalType=url&ratio=1&rotation=0&showTitle=false&size=182314&status=done&style=none&taskId=u5960f88f-c503-430f-8bfb-d4a13042016&title=)

- **全局唯一**：必须保证id是全局性唯一（基本要求）
- **高性能**：高可用低延时，id生成响应要快，否则可能会成为业务瓶颈
- **高可用**：100%的可用性是不可能达到的，但是要无限接近于100%
- **易用性**：代码侵入性小，符合设计原则，在设计和实现上尽可能的简单
- **趋势递增**：最后趋势递增，无硬性要求，结合具体业务场景
- **其他**： 安全、有具体的业务含义、独立部署
# 二、分布式id解决方案有哪些？
## 1、UUID
uuid是Universally Unique Identifier（通用唯一标识符）的缩写。UUID包含32个16进制数字。
jdk自带UUID实现，一行代码搞定。
```java
UUID.randomUUID()
```
RFC4122中关于UUID的示例：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1641522931058-31a42163-c13b-4bb0-8318-bd7d27c3decd.png#clientId=ud14f2d89-40c9-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u82cda5dd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=340&originWidth=1400&originalType=url&ratio=1&rotation=0&showTitle=false&size=60448&status=done&style=none&taskId=uc4c70918-c275-4c38-ab5b-8f9aa9fff2f&title=)


5种不同版本的值分别对应的含义

- 版本1：UUID是根据时间和节点ID（通常是MAC地址）生成
- 版本2：UUID是根据标识符（通常是组或用户id）
- 版本3、版本5：版本5-确定性UUID通过散列（hashing）名字空间（namespace）标识符和名称生成
- 版本4：UUID使用随机性或伪随机性生成。



JDK中生成的UUID默认版本是4。
```java
UUID uuid = UUID.randomUUID();
int version = uuid.version();// 4
```
UUID可以保证唯一性，因为其生成规则包括MAC地址、时间搓、名字空间（namespace）、随机或伪随机、时序等元素，计算机基于这些规则生成的UUID是肯定不会重复的。
UUID虽然可以做到唯一性，但是不合适作为数据库的主键，数据库主键要约短约好，而UUID销耗存储空间比较大。UUID是无序的，影响数据库性能。
### 优点：

- 生成简单
- 本地生成无网络消耗
- 唯一性
### 缺点：

- 无序的字符串，不具备趋势自增特性
- 没有具体业务含义
- 长度过长（16字节，128位，36位长度字符串），数据库存储空间大
## 2.数据库主键自增
通过关系型数据库自增主键实现
以mysql为例（oracle可以使用序列（SEQUENCE））
```sql
CREATE DATABASE `SEQ_ID`;
CREATE TABLE SEQID.SEQUENCE_ID (
    id bigint(20) unsigned NOT NULL auto_increment, 
    value char(10) NOT NULL default '',
    PRIMARY KEY (id),
) ENGINE=MyISAM;

insert into SEQUENCE_ID(value)  VALUES ('values');

```
当我们需要一个id时，向表中插入一条记录并返回主键id。
### 优点：

- 实现简单，id自增，数值类型查询速度快
### 缺点：

- 数据库单点故障（使用集群，但是需要维护成本）
- 无法支持高并发
- 安全问题（可能通过id规律推测数据），增加数据库压力
## 3、基于数据库集群模式
​

将上面的单机数据库更换为集群模式，变成主从模式集群。如何一个主节点宕机，可以变成双主模式集群，也就是说可以有两个节点生成id。
​

如果两个节点都从1开始，会产生重复的id？
​

解决方案：设置初始值和自增步长
MySQL_1 配置：
```sql
set @@auto_increment_offset = 1;     -- 起始值
set @@auto_increment_increment = 2;  -- 步长
```

 MySQL_2 配置：
```sql
set @@auto_increment_offset = 2;     -- 起始值
set @@auto_increment_increment = 2;  -- 步长
```

 这样他们产生的id就是 1、3、5 。。。 和2、4、6。。。
​

那如果集群后的性能还是扛不住高并发咋办？就要进行MySQL扩容增加节点，这是一个比较麻烦的事。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1641462942816-49ba5325-223c-4d1d-9dcf-653728d40e92.png#clientId=ud14f2d89-40c9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=249&id=u5addae4e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=412&originWidth=748&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51313&status=done&style=none&taskId=u5425f82f-d763-42b7-a6e3-e67c8a7ff1a&title=&width=452)​
增加第三台MySQL实例需要人工修改一、二两台MySQL实例的起始值和步长，把第三台机器的ID起始生成位置设定在比现有最大自增ID的位置远一些，但必须在一、二两台MySQL实例ID还没有增长到第三台MySQL实例的起始ID值的时候，否则自增ID就要出现重复了，**必要时可能还需要停机修改**。
### 优点：

- 解决DB单点问题
### 缺点：

- 不利于后续扩容，而且实际上单个数据库自身压力还是大，依旧无法满足高并发场景。
##  4、基于数据库号段模式
号段模式也是当前分布式id主流实现方式之一，号段模式可以理解为从数据库中批量获取自增id，然后加载到内存中。
```sql
CREATE TABLE id_generator (
  id int(10) NOT NULL,
  max_id bigint(20) NOT NULL COMMENT '当前最大id',
  step int(20) NOT NULL COMMENT '号段的布长',
  biz_type	int(20) NOT NULL COMMENT '业务类型',
  version int(20) NOT NULL COMMENT '版本号',
  PRIMARY KEY (`id`)
) 
```
​

biz_type ：代表不同业务类型
max_id ：当前最大的可用id
step ：代表号段的长度
version ：是一个乐观锁，每次都更新version，保证并发时数据的正确性
```sql
INSERT INTO `id_generator` (`id`, `max_id`, `step`, `version`, `biz_type`)VALUES (1, 1000, 2000, 0, 101);
```
等这批号段用完，再次向数据库申请新号段，对max_id字段做一次update操作，update max_id=max_id+step,update成功则说明新号段获取成功，新的号段范围是（max_id,max_id+step]。
```sql
update id_generator set max_id = #{max_id+step}, version = version + 1 where version = # {version} and biz_type = XXX
```
由于多业务端可能同时操作，所以采用版本号version乐观锁方式更新，这种分布式id生成不强依赖于数据库，不会频繁的访问数据库，对数据库的压力小很多。
### 优点：

- 解决了方式2中数据库频繁访问的问题
### 缺点：

- 安全问题（可能通过id规律推测数据）、单点故障（集群解决）、id没有业务含义
## 5、基于redis模式
基于NoSQL实现，实现原来就是利用redis的incr命令来实现id的原子性自增。
```sql
127.0.0.1:6379> set seq_id 1     // 初始化自增ID为1
OK
127.0.0.1:6379> incr seq_id      // 增加1，并返回递增后的数值
(integer) 2
```
为了高可用和高并发，我们有时可以使用Redis Cluser。Redis Cluser是redis官方提供的redis集群解决方案（3.0+版本）。
使用redis需要注意一点，就是考虑redis持久化的问题，redis有两种持久化方法RDB和AOF。

- RDB会定时打一个快照进行持久化，假如连续自增但redis没有及时持久化，redis宕机，重启redis后会出现id重复的情况。
- AOF会对每条写命令进行持久化，即使reids宕机也不会出现重复id的情况，但由于incr命令的特殊性，会导致redis重启恢复数据的时间过长。
### 优点：

- 基于内存性能不错并且生成的 ID 是有序递增的
### 缺点：

- 同数据库自增
## 6、基于MongoDB ObjectId
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1641522799488-8fed8495-f4c6-4b1c-bb51-312fcdd1991b.png#clientId=ud14f2d89-40c9-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u9317c355&margin=%5Bobject%20Object%5D&name=image.png&originHeight=185&originWidth=793&originalType=url&ratio=1&rotation=0&showTitle=false&size=15759&status=done&style=none&taskId=ud1438b19-e177-4997-bf40-db51edeecd9&title=)
MongoDB ObjectId 一共需要 12 个字节存储：

- 0~3：时间戳
- 3~6： 代表机器 ID
- 7~8：机器进程 ID
- 9~11 ：自增值
### 优点 ： 

- 性能不错并且生成的 ID 是有序递增的
### 缺点 ：

-  需要解决重复 ID 问题（当机器时间不对的情况下，可能导致会产生重复 ID） 、有安全性问题（ID 生成有规律性）
## 7、基于snowflake（雪花算法）模式
Snowflake是Twitter开源的分布式id生成算法。Snowflake由64bit的二进制数字组成，这64bit的二进制被分成了几部分，每一部分存储的数据都有特定的含义：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1641523377646-d307456a-c03e-4353-aa4f-729cf50e7567.png#clientId=ud14f2d89-40c9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=233&id=u03141c11&margin=%5Bobject%20Object%5D&name=image.png&originHeight=242&originWidth=843&originalType=binary&ratio=1&rotation=0&showTitle=false&size=64423&status=done&style=none&taskId=u3f4ed87d-9d6e-4e07-b97a-c9f77e45758&title=&width=810.5)
Snowflake生成的是Long类型的ID，一个Long类型占8个字节，每个字节占8比特，也就是说一个Long类型占64个比特。
Snowflake ID组成结构：正数位（占1比特）+ 时间戳（占41比特）+ 机器ID（占5比特）+ 数据中心（占5比特）+ 自增值（占12比特），总共64比特组成的一个Long类型。
​


- **第 0 位**： 符号位（标识正负），始终为 0，没有用，不用管。
- **第 1~41 位** ：时间戳部分，一共 41 位，用来表示时间戳，单位是毫秒，可以支撑 2 ^41 毫秒（约 69 年）
- **第 42~52 位** ：工作机器id也被叫做workId，一共 10 位，一般来说，前 5 位表示机房 ID，后 5 位表示机器 ID（实际项目中可以根据实际情况调整）。这样就可以区分不同集群/机房的节点。
- **第 53~64 位** ：序列号部分，12 位，用来表示序列号。 序列号为自增值，代表单台机器每毫秒能够产生的最大 ID 数(2^12 = 4096),也就是说单台机器每毫秒最多可以生成 4096 个 唯一 ID。
### 优点：

- 生成速度比较快、生成的 ID 有序递增、比较灵活（可以对 Snowflake 算法进行简单的改造比如加入业务 ID）
### 缺点：

- 需要解决重复 ID 问题（依赖时间，当机器时间不对的情况下，可能导致会产生重复 ID）。
```java
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

/**
 * twitter的snowflake算法 -- java实现
 *
 * @author beyond
 * @date 2016/11/26
 */
public class SnowFlake {

    /**
     * 起始的时间戳
     */
    private final static long START_STMP = 1288834974657L;

    /**
     * 每一部分占用的位数
     */
    private final static long SEQUENCE_BIT = 12; //序列号占用的位数
    private final static long MACHINE_BIT = 5;   //机器标识占用的位数
    private final static long DATACENTER_BIT = 5;//数据中心占用的位数

    /**
     * 每一部分的最大值
     */
    private final static long MAX_DATACENTER_NUM = -1L ^ (-1L << DATACENTER_BIT);
    private final static long MAX_MACHINE_NUM = -1L ^ (-1L << MACHINE_BIT);
    private final static long MAX_SEQUENCE = -1L ^ (-1L << SEQUENCE_BIT);

    /**
     * 每一部分向左的位移
     */
    private final static long MACHINE_LEFT = SEQUENCE_BIT;
    private final static long DATACENTER_LEFT = SEQUENCE_BIT + MACHINE_BIT;
    private final static long TIMESTMP_LEFT = DATACENTER_LEFT + DATACENTER_BIT;

    private long datacenterId;  //数据中心
    private long machineId;     //机器标识
    private long sequence = 0L; //序列号
    private long lastStmp = -1L;//上一次时间戳

    private static final Random RANDOM = new Random();


    public SnowFlake(long datacenterId, long machineId) {
        if (datacenterId > MAX_DATACENTER_NUM || datacenterId < 0) {
            throw new IllegalArgumentException("datacenterId can't be greater than MAX_DATACENTER_NUM or less than 0");
        }
        if (machineId > MAX_MACHINE_NUM || machineId < 0) {
            throw new IllegalArgumentException("machineId can't be greater than MAX_MACHINE_NUM or less than 0");
        }
        this.datacenterId = datacenterId;
        this.machineId = machineId;
    }

    /**
     * 产生下一个ID
     *
     * @return
     */
    public synchronized long nextId() {
        long currStmp = getNewstmp();
        // 解决时间回拨问题
        if (currStmp < lastStmp) {
            long offset = lastStmp - currStmp;
            if (offset <= 5) {
                try {
                    //时间偏差大小小于5ms，则等待两倍时间
                    wait(offset << 1);
                    currStmp = getNewstmp();
                    if (currStmp < lastStmp) {
                        //还是小于，抛异常并上报
                        throw new RuntimeException("Clock moved backwards.  Refusing to generate id");
                    }
                } catch (InterruptedException e) {
                    throw new RuntimeException("Clock moved backwards.  Refusing to generate id");
                }
            } else {
                throw new RuntimeException("Clock moved backwards.  Refusing to generate id");

            }
        }

        if (currStmp == lastStmp) {
            //相同毫秒内，序列号自增
            sequence = (sequence + 1) & MAX_SEQUENCE;
            //同一毫秒的序列数已经达到最大
            if (sequence == 0L) {
                // 序列号生成添加随机源，会稍微减少同一个毫秒内能产生的最大ID数量。
                sequence=RANDOM.nextInt(100);
                currStmp = getNextMill();
            }
        } else {
            //序列号生成添加随机源，会稍微减少同一个毫秒内能产生的最大ID数量。
            sequence = ThreadLocalRandom.current().nextLong(1L, 3L);;;
        }

        lastStmp = currStmp;

        return (currStmp - START_STMP) << TIMESTMP_LEFT //时间戳部分
                | datacenterId << DATACENTER_LEFT       //数据中心部分
                | machineId << MACHINE_LEFT             //机器标识部分
                | sequence;                             //序列号部分
    }

    private long getNextMill() {
        long mill = getNewstmp();
        while (mill <= lastStmp) {
            mill = getNewstmp();
        }
        return mill;
    }

    private long getNewstmp() {
        return System.currentTimeMillis();
    }

    public static void main(String[] args) {
        SnowFlake snowFlake = new SnowFlake(1, 1);

        for (int i = 0; i < 10; i++) {
            System.out.println(snowFlake.nextId());
        }

    }
}
```
## 8、百度（uid-generator）
uid-generator是由百度技术部开发
uid-generator是基于Snowflake算法实现的，与原始的snowflake算法不同在于，uid-generator支持自定义时间戳、工作机器ID和 序列号 等各部分的位数，而且uid-generator中采用用户自定义workId的生成策略。
uid-generator需要与数据库配合使用，需要新增一个WORKER_NODE表。当应用启动时会向数据库表中去插入一条数据，插入成功后返回的自增ID就是该机器的workId数据由host，port组成。
**对于uid-generator ID组成结构**：
workId，占用了22个bit位，时间占用了28个bit位，序列化占用了13个bit位，需要注意的是，和原始的snowflake不太一样，时间的单位是秒，而不是毫秒，workId也不一样，而且同一应用每次重启就会消费一个workId。


## 9、美团（Leaf）
[Leaf](https://github.com/Meituan-Dianping/Leaf)由美团开发

 Leaf 提供了 **号段模式** 和 **Snowflake(雪花算法)** 这两种模式来生成分布式 ID。并且，它支持双号段，还解决了雪花 ID 系统时钟回拨问题。不过，时钟问题的解决需要弱依赖于 Zookeeper 。


## 10、滴滴（Tinyid）


[Tinyid](https://github.com/didi/tinyid)是滴滴开源的一款基于数据库号段模式的唯一 ID 生成器。


