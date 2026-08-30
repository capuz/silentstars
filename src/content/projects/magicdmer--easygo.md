---
repo: "magicdmer/EasyGo"
name: "EasyGo"
description: "A quick launcher tool"
readmeQualityOk: true
url: "https://github.com/magicdmer/EasyGo"
language: "C++"
languages: ["C++", "C"]
languagePcts: [61, 39]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-03-18T13:27:26Z"
lastCommitAt: "2026-08-30T09:24:16Z"
lastReleaseAt: "2026-07-13T14:57:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 32
maintainers: ["magicdmer"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2452f11a21174bd9440a9ee592a1c20382b6d6642e40194d88888f67d3d965e/magicdmer/EasyGo"
discussionCount: 0
---

# EasyGo 快捷启动

## 简介
这是一款快捷启动软件，基本功能是快速查找所要打开的软件，并对其进行打开等操作。增强功能为软件所支持的各种插件，比如书签搜索，有道翻译 ，天气查询 等。插件支持python，c++和易语言三种语言，下面是动态图演示：

支持 win32/linux 两个平台

## 来历

一开始用的是开源的wox快捷启动，但是用了一段时间发现满足不了我的要求，作者长时间不维护，而我对c#又不是很熟悉，所以就打算自己用c++写一个类似的软件，然后就动手了。主要参考wox的功能界面和使用习惯，插件架构也参考了wox的逻辑，然后对wox中我感觉不太好的体验做了修正，对一些感觉薄弱的功能进行了加强，希望大家使用愉快

## 优点

主要的特性如下：

1. 使用everything的原理进行检索，减少建立程序索引的时间
2. 插件支持 **c++** ， **python** 和 **易语言**，其中python插件可以很方便的从wox移植过来，因为大体使用了wox的插件架构方式
3. 插件支持 **回车模式** 和 **实时模式** ，默认是 **实时模式** 。实时模式就是和wox一样，实时的查询输入的关键字，回车模式则是需要按回车后进行查询操作。对于一些网络插件，采用实时模式，很容易出现访问频率过于频繁的问题，比如之前用到的wox的有道词典插件，所以就加了回车模式
4. 插件支持文件类型操作结构，根据用户拖入的文件类型来调用注册了此文件类型的插件，并显示操作列表
5. 安装python插件的时候，可以自行根据插件里面的配置文件来自动安装相关依赖库
6. 支持 `ctrl+y` 分离窗口，执行多个操作
7. 支持自定义 `插件源仓库`，可以使用自己搭建的插件仓库
8. 支持音乐播放接口

## 插件仓库

参考 [EasyGoPlugin](https://github.com/magicdmer/EasyGoPlugin)

## 帮助文档
1. 可以直接查看 github 上的 wiki 分类
2. 查看压缩包类的 mht 文档

## 赞助

| 支付宝                     | 微信                     |
| -------------------------- | ------------------------ |
|  |  |

## 交流
1. QQ群：707119847
2. 小众软件论坛
3. Discussions
