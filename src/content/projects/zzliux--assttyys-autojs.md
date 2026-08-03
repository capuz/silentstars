---
repo: "zzliux/assttyys_autojs"
name: "assttyys_autojs"
description: "痒痒鼠安卓辅助，基于Auto.js Pro开发。支持御魂、御灵、业原火、突破、狗粮、百鬼夜行、抽厕纸、逢魔日常、地鬼日常、妖气自动排队、斗技、喂蛋、合结界卡、六道之门、定时寄养等"
readmeQualityOk: true
url: "https://github.com/zzliux/assttyys_autojs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["autojs", "autojs-pro", "autojs-webview", "onmyoji"]
stars: 433
forks: 97
openIssues: 3
closedIssues: 32
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2021-04-30T03:17:40Z"
lastCommitAt: "2026-08-03T06:18:35Z"
lastReleaseAt: "2024-02-20T03:55:55Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 37
maintainers: ["shui670", "zzliux", "ZMSUser123"]
openGraphImageUrl: "https://opengraph.githubassets.com/e803152ce9f3a087a0366b8347f759a95ffc1c348cc16a88df5a6bda5beda8a6/zzliux/assttyys_autojs"
---

# ASSTTYYS NG
ASISTTANT YYS NEXT GENERATION<br/>
仅作学习用途，请勿用于其他非法途径！<br/>
欢迎在issue中提出bug与建议，也欢迎有能力的同学加入开发与维护的队列中来<br/>

# 分辨率支持情况
脚本开发分辨率为 720 * 1280 该分辨率的横屏或竖屏均能兼容，其他分辨率兼容原理见 <https://gitee.com/yiszza/ScriptLib> 中 README 所提到的锚点比色 与 多点找色，开发分辨率得到的相关坐标点都会在运行分辨率上进行一次缩放与位移，但未测试过其他分辨率，因目前大多真机都是异型屏，阴阳师对异型屏有特殊优化，导致几乎所有异型屏都不支持锚点比色做阴阳师的多分辨率兼容，建议使用配合虚拟机或云手机使用。

# 目录说明
前端已从本项目分离，见 [zzliux/assttyys_ui](https://github.com/zzliux/assttyys_ui)
```
assttyys_autojs
├─assets                                       资源目录，不经过webpack打包，运行时可加载该目录下的文件
│  ├─img                                       
│  └─lib
├─build                                        aj打包时自动产生的构建目录
├─config                                       webpack打包配置
├─dist                                         webpack打包目标目录
├─docs                                         文档
│  └─img
├─hotrun                                       热更新壳程序
│  ├─build
│  └─res
├─node_modules                                 npm依赖包路径
├─res                                          aj打包时自动产生的资源目录
├─src                                          源码目录
│  │  index.ts                                 入口文件
│  ├─common                                    公共模块
│  │  │…
