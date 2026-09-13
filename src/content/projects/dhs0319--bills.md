---
repo: "dhs0319/Bills"
name: "Bills"
description: "一个简洁、原生、高性能的第三方b站客户端"
readmeQualityOk: true
url: "https://github.com/dhs0319/Bills"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "kotlin-android", "material3", "media3", "bilibili-api"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-08T04:40:08Z"
lastCommitAt: "2026-09-13T08:28:47Z"
lastReleaseAt: "2026-09-06T03:43:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["dhs0319", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdabe0b053cc6f07dc74a95d72fa06ff780f9d49e2f296af887b5071dab1af6a/dhs0319/Bills"
---

<h2 align="center">Bills</h2>

  </a>
  </a>
  </a>
  </a>
  </a>
  </a>
</p>

  一个好用的第三方哔哩哔哩 Android 客户端。持续施工中...
</p>

  ·
</p>

## 截图

</p>

## 当前功能

### 账号

- [x] 扫码登录
- [x] 短信登录
- [x] 多账号管理

### 内容

- [x] 首页推荐视频流
- [x] 视频搜索
- [x] 视频详情页
- [x] 评论区
- [x] 动态
- [x] 个人空间
- [x] 稍后再看

### 播放

- [x] 视频播放
- [x] 弹幕
- [x] 听视频
- [x] 直播
- [x] 应用内小窗
- [x] 应用内缓存
- [x] 点赞、投币、收藏、分享
- [x] 视频音频一键下载导出

### 社交

- [x] 即时消息

### 正在补全

- [ ] 字幕
- [ ] 分类搜索
- [ ] 空降助手
- [ ] 其他细节完善

## 技术实现

- `Kotlin` + `Jetpack Compose` + `Material 3`
- `Media3` 负责播放，`DanmakuFlameMaster` 负责弹幕渲染
- `Room` 和 `DataStore` 管理本地数据
- `OkHttp` `Retrofit` `Protobuf` 负责网络和协议层
- 实现 B 站 gRPC over HTTP/1.1 请求封装

## 下载与运行

- 用户安装：前往 [Releases](https://github.com/dhs0319/Bills/releases) 下载最新 APK
- 系统要求：Android 7.0 及以上
- 开发环境：JDK 17、Android SDK 36

## 说明

Bills基于[bbspace](https://github.com/naaammme/bbspace)项目二次开发，与哔哩哔哩官方无关。项目主要用于学习、研究和 Android 原生界面实现练习。仓库内涉及的接口信息均来自公开资料整理，仅用于技术交流，不包含破解和付费内容分发。

如果这个项目帮你省下了找实现细节和踩坑的时间，欢迎点个 Star。

## 致谢

- [bbspace](https://github.com/naaammme/bbspace)
- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
- [PiliPlus](https://github.com/bggRGjQaUbCoE/PiliPlus)
-…
