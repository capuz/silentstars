---
repo: "serious-snow/HE-Music-Flutter"
name: "HE-Music-Flutter"
description: "HE-Music Flutter版本，主要为移动端"
url: "https://github.com/serious-snow/HE-Music-Flutter"
language: "Dart"
languages: ["Dart"]
languagePcts: [94]
stars: 11
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-03-26T07:53:50Z"
lastCommitAt: "2026-06-24T06:39:42Z"
lastReleaseAt: "2026-05-29T10:22:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["serious-snow"]
openGraphImageUrl: "https://opengraph.githubassets.com/77d2eaac31e7036f96db526700c4c7a79a86117d3626528d4f33f3806d864bd2/serious-snow/HE-Music-Flutter"
---

# HE Music Flutter

一个基于 Flutter 的音乐应用项目，延续桌面端 [HE-Music](https://github.com/serious-snow/HE-Music.git) 的产品方向，并针对移动端与桌面端场景做适配。

项目当前以功能迭代为主，欢迎通过 PR 一起完善功能、体验与文档。

## 项目简介

HE Music Flutter 以 `feature-first` 方式组织代码，围绕播放器、在线内容浏览、本地音乐、下载管理、登录与个人中心等能力持续演进。当前仓库已经具备完整的应用骨架、核心业务模块与常用开发命令，适合作为持续开发中的 Flutter 音乐应用工程使用。

## 功能概览

- 首页发现与我的页双入口，适配移动端底部导航和桌面端侧边导航
- 内置播放器，包含迷你播放器、全屏播放器、播放队列、播放进度与播放模式管理
- 支持歌词展示，包含播放器内歌词面板与桌面悬浮歌词能力
- 支持本地音乐扫描与管理，可读取本地音频元数据
- 支持歌曲下载、下载任务管理，以及下载后元数据与歌词写入
- 支持登录与验证码流程，包含二维码扫码登录相关页面
- 支持在线能力聚合，包括搜索、热搜/联想、评论等页面
- 支持歌单广场、歌单详情、歌曲详情、专辑详情、歌手详情
- 支持排行榜、新歌、新碟、视频、电台等内容浏览
- 支持“我的”相关能力，包括收藏、历史记录、个人歌单详情
- 支持设置页与关于页，并内置 GitHub Release 更新检查

## 目录结构

```text
lib/
  app/       应用启动、路由、主题、配置
  core/      音频、网络、错误处理等基础设施
  features/  按业务功能划分的模块
  shared/    复用组件、辅助方法、模型与工具
test/        测试代码
assets/      静态资源
third_party/ 本地覆盖依赖
```

## 常用命令

项目根目录提供了 `Makefile`，日常开发优先使用以下命令：

```bash
make get            安装或同步依赖
make upgrade        升级依赖
make run            启动应用
make analyze        执行静态检查
make test           运行测试
make format         格式化 Dart 代码
make fix            自动应用 Dart 可修复项
make gen            执行代码生成
make clean          清理构建产物
make build-apk      构建 Android release APK（按 ABI 拆分）…
