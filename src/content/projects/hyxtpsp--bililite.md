---
repo: "HYXTPSP/BiliLite"
name: "BiliLite"
description: "学习专注型 B 站第三方客户端(黑白极简)"
readmeQualityOk: true
url: "https://github.com/HYXTPSP/BiliLite"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
stars: 28
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-08-22T03:46:57Z"
lastCommitAt: "2026-08-28T15:33:01Z"
lastReleaseAt: "2026-08-28T15:09:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 26
maintainers: ["HYXTPSP"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd2d69ced8282e6a7074ec7f500ef8623580b3154c8f050a2645b356e15992a8/HYXTPSP/BiliLite"
---

# BiliLite

> 学习专注型 B 站第三方客户端 —— 黑白极简,为深度学习而生

BiliLite 是一款用极简风格设计的,专注于学习的学习版 B 站,从根源上屏蔽娱乐内容。

当前版本: v0.5.0 (versionCode 18)

## 下载

- 最新 APK: [GitHub Releases](https://github.com/HYXTPSP/BiliLite/releases)

## 功能特性

- **B 站账号登录**:支持二维码、验证码、密码三种登录方式,登录后画质与功能完整
- **UP 主管理**:搜索添加 UP 主(显示粉丝数,防止选错),添加后可集中查看其全部视频
- **首页视频流**:仅展示已添加 UP 主的视频,无推荐流、无广告;竖卡/横排双布局
- **内嵌播放器**:
  - 自动记录观看进度,支持断点续播
  - 双击暂停/继续播放
  - 左右滑动调节亮度/音量(带指示器)
  - 双指缩放(1x-4x)+ 撤销
  - 三击打书签 + 书签列表 + 半屏侧栏
  - 原生风格控制条,无上一P/下一P干扰
  - 多P视频缓存与断点续传
- **收藏队列**:收藏视频集中管理,合并去重
- **观看历史**:自动记录,支持一键清除
- **BV 号搜索**:直接输入视频 BV 号精准定位
- **检查更新**:自动检测新版本
- **无干扰**:无评论区、无弹幕、无自动连播
- **插件系统**(v0.5.0 新增):
  - 统一插件框架,支持主题插件与功能插件
  - 主题插件:一键切换全局 UI 配色/背景/圆角(如初音、水墨、野性主题)
  - 功能插件:通过 Lua 脚本拓展播放器/数据/网络能力(如自动跳过片头、禁用云收藏、字幕大小调节)
  - 插件管理:应用内列表启停/卸载,安装即用

### 插件接口说明

插件系统目前处于**早期阶段**,已提供的基础接口包括:

- `ui.*`:主题切换、菜单注册、设置项注册、弹窗/Toast
- `player.*`:播放/暂停/跳转/倍速/事件订阅
- `data.*`:收藏/历史/书签数据访问
- `network.*`:带登录态的 B 站 API 请求
- `events.*`:全局事件订阅
- `system.*`:插件目录读写、私有存储、日志

**当前接口数量有限,后续会持续拓展**(更多 UI 组件注入、播放器深度控制、数据操作等)。接口规范遵循语义化版本管理,升级核心不会破坏已有插件。

## 界面预览

### 手机端效果

<table>
  <tr>
    <td align="center"><img src="docs/screenshots/phone_1.jpg"…
