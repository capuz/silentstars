---
repo: "wz1st/go-iptv"
name: "go-iptv"
description: "A more user-friendly comprehensive IPTV management system"
originalDescription: "更好用的IPTV综合管理系统"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wz1st/go-iptv"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 113
forks: 55
openIssues: 5
closedIssues: 12
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2024-08-06T05:33:30Z"
lastCommitAt: "2026-10-15T08:23:42Z"
lastReleaseAt: "2026-10-06T11:17:17Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 52
maintainers: ["wz1st", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f3b43bc3a5a4a748e7778e101f75139e5c823c0d8fa714d73f16dc10590f4a9/wz1st/go-iptv"
---

## 清和iptv

## 仓库说明
> 本仓库是**组装仓**，存放后端源码 `iptv-api/`、配置文件、LOGO、APK 、nginx 规则
#### 相关仓库
- 前端 [iptv-web](https://github.com/wz1st/iptv-web)
- 启动器 [iptv-start](https://github.com/wz1st/iptv-start)
- 引擎 [iptv-engine](https://github.com/wz1st/iptv-engine)

## 简介
源自骆驼IPTV并大改，由原来的PHP+MySql改为Go+Sqlite，重构了前端架构

- 添加缺失功能
- 精简删除非必要页面功能
- 添加自动反编译APK，添加修改APK图标和背景
- 添加EPG订阅
- 添加套餐对接酷9等空壳平台
- 修改系统存在的安全漏洞
- 添加MYTV的对接
- 添加RTSP单播转组播
- 添加epg模糊识别
- 添加UA支持
- 添加一些自己的想法

## 注意
当前版本与之前PHP版本并不兼容，若要使用PHP版本，请使用`docker pull v1st233/iptv:20250905`     
v4.x.x 版本为AI重构版，纯混沌模式  bug未知

## 反馈bug
- Github: [Github issues](https://github.com/wz1st/go-iptv/issues)

- 邮箱： v1st233@gmail.com

- 博客： [清和's blog](https://www.qingh.xyz/go-iptv-docker/)

- QQ群：952354546     入群答案在docker容器内     &nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=pMPxYtnMvSlAL1irmcOzdSZSKhETKebC&jump_from=webapi&authKey=JluAYPajYgxbyuz+T0caZmrtfJbPQUxoZ6tORWtu1teN3PP/rEtu5lFZu+AUG1Bi"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="清和iptv" title="清和iptv"></a>

## [更新记录](https://github.com/wz1st/go-iptv/blob/HEAD/ChangeLog.md)

## 安装

### 方式一：docker compose（推荐）
本仓自带的 `docker-compose.yml`…
