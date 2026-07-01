---
repo: "Hey-sayiwanna/TencentSports-Surge"
name: "TencentSports-Surge"
description: "去除腾讯体育各类广告：包括开屏、文章底部、浏览界面、专题栏目、视频广告等等"
url: "https://github.com/Hey-sayiwanna/TencentSports-Surge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-27T08:11:38Z"
lastCommitAt: "2026-07-01T07:05:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: ["Hey-sayiwanna"]
openGraphImageUrl: "https://opengraph.githubassets.com/a30ed125e9e329573ba19e2f0e54c4e8eef4321beabbdf89659ed658c3f5be03/Hey-sayiwanna/TencentSports-Surge"
---

# TencentSports-Surge

腾讯体育 iPhone / iPad App 的 Surge 去广告模块。主要用于去除开屏广告、首页信息流强插广告、社区文章底部广告、赛事页横幅/组件广告和体育会员弹窗等内容。

> [!IMPORTANT]
> 本项目只在 **iPhone / iPad 端腾讯体育 App + Surge** 环境下测试。Android、macOS 客户端，以及 Quantumult X、Loon、Shadowrocket、Stash 等其他代理工具均未测试，也没有提供适配配置。

> [!NOTE]
> 首次启用模块或更新规则后，需要卸载重装腾讯体育已清除app本地缓存。并安装信任 Surge MITM 证书、开启 HTTPS 解密并开启屏蔽 QUIC

## 一、基础模块引用

> [!CAUTION]
> 以下两个基础模块引用自 @QingRex 的 [LoonKissSurge](https://github.com/QingRex/LoonKissSurge) / [surge.qingr.moe](https://surge.qingr.moe/) 项目，不属于本仓库原创内容。建议先安装并在 Surge 模块列表中保持优先生效，以去除视频播放前60秒广告

广告平台拦截器.beta.sgmodule：

```text
https://raw.githubusercontent.com/QingRex/LoonKissSurge/refs/heads/main/Surge/Beta/%E5%B9%BF%E5%91%8A%E5%B9%B3%E5%8F%B0%E6%8B%A6%E6%88%AA%E5%99%A8.beta.sgmodule
```

HTTPDNS拦截器.beta.sgmodule：

```text
https://raw.githubusercontent.com/QingRex/LoonKissSurge/refs/heads/main/Surge/Beta/HTTPDNS%E6%8B%A6%E6%88%AA%E5%99%A8.beta.sgmodule
```

## 二、安装

一键安装页面（包含两个基础模块和Surge模块）：https://hey-sayiwanna.github.io/TencentSports-Surge/

基础模块安装完成后，在 Surge 中通过模块链接安装本模块：

```text
https://raw.githubusercontent.com/Hey-sayiwanna/TencentSports-Surge/main/TencentSportsAdBlock.sgmodule
```

Quantumult X / 圈x 测试配置链接：…
