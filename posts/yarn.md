---
date: 2022-01-03
title: npm的替代工具yarn
tags:
- vitepress
- markdown
description: npm的替代工具yarn
---
<meta name="referrer" content="no-referrer" />

# 安装
## window
#### 下载安装程序
你将下载到一个 .msi 文件，当它运行时会指引你将 Yarn 安装到 Windows 上。
如果你使用此安装程序，需要先安装 [Node.js](https://nodejs.org/)。
#### 注意
请将您的项目目录和 Yarn 的缓存目录 (%LocalAppData%\Yarn) 列入杀毒软件的白名单中，否则会因为每次向磁盘写入文件时而被扫描，导致安装软件包变得很慢。


> 通过如下命令测试 Yarn 是否安装成功：
yarn --version

## Linux
> sudo yum install yarn
> ## OR
> sudo dnf install yarn 



## macos
### Homebrew安装
> brew install yarn 

升级yarn
> brew upgrade yarn

# 操作
## 初始化一个新项目
> yarn init 

## 添加依赖包
> yarn add [package] 
> yarn add [package]@[version]
>  yarn add [package]@[tag]

## 将依赖项添加到不同依赖项类别中
分别添加到 devDependencies、peerDependencies 和 optionalDependencies 类别中：
> yarn add [package] --dev 
> yarn add [package] --peer 
> yarn add [package] --optional 

## 升级依赖包
> yarn upgrade [package] 
> yarn upgrade [package]@[version] 
> yarn upgrade [package]@[tag] 

## 移除依赖包
> yarn remove [package] 

## 安装项目的全部依赖
> yarn

或者
> yarn install


