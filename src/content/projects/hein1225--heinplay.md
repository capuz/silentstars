---
repo: "hein1225/HeinPlay"
name: "HeinPlay"
description: "海因影视，用于lunatv（moontv）的Android TV客户端，以及手机、Windows等多平台客户端，本地缓存比网页版更流畅的访问速度"
readmeQualityOk: true
url: "https://github.com/hein1225/HeinPlay"
language: "Dart"
languages: ["Dart"]
languagePcts: [80]
stars: 34
forks: 7
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-01T07:26:21Z"
lastCommitAt: "2026-08-11T04:47:55Z"
lastReleaseAt: "2026-07-17T14:13:23Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 69
undervaluedScore: 36
maintainers: ["hein1225"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3aef617f7c77c51f1fd493ef19666890a2a0fbb9077a1b8c112e6a82a9466c2/hein1225/HeinPlay"
---

# 海因影视

基于 Flutter 开发的跨平台影视播放应用。TV 版面向 Android TV 及大屏设备优化，支持遥控器焦点导航；tvLegacy 版兼容 Android 5.0+ 低版本电视设备；手机版为竖屏触屏版本，与 TV 版共用业务层。同时支持 Web 与 Windows 桌面端。

v1.2.5 新增「互联网服务器地址优先解析 IPv6」开关，为国内仅有 IPv6 公网、IPv4 受限的环境提供 IPv6 优先解析与自动回退 IPv4 能力，并统一复用 LunaTV API 的 HTTP 客户端，减少重复连接开销；v1.2.4 优化 TV 版渲染后端策略与若干界面显示问题：普通 TV 版改回 Vulkan（Impeller）以适配新设备，tvLegacy 继续用 OpenGL ES 兼容旧设备，修复 TV 版「获取日志」与软件介绍二维码显示不全的问题，并缩小 TV 更新日志字体避免内容溢出。

| TV / Windows 版界面预览 | 手机版界面预览 |
| :--- | :--- |
|  |  |

## 功能特性

### 影视浏览

- **首页推荐**：聚合热门影视内容，首页即看即播。
- **分类浏览**：电影、电视剧、综艺、动漫四大频道，支持横向小分类切换。
- **筛选与排序**：分类页支持按类型、地区、年份等维度筛选，并按近期热度、评分、时间等排序。
- **海报网格**：TV 风格海报墙，支持遥控器方向键流畅浏览；海报右上角展示豆瓣评分，动漫「每日放送」展示 Bangumi 评分。

### 详情与选集

- **影片详情**：展示影片简介、豆瓣评分、演职员、年份、地区、语言、集数、时长等信息；动漫「每日放送」同时展示 Bangumi 评分。
- **多播放源**：支持切换不同数据源，自动解析可播放地址。
- **剧集选集**：电视剧、综艺、动漫支持多集选择，自动连续播放下一集。

### 全屏播放

- **基础控制**：播放/暂停、快进/快退、进度拖动、音量/亮度调节。
- **画面比例**：支持原始比例、16:9、4:3 等画面比例切换。
- **控制栏自动隐藏**：无操作 10 秒后自动隐藏控制栏，移动/按键后恢复显示。
- **片头片尾跳过**：按电视剧维度设置跳过片段，自动跳过片头片尾并触发下一集。

### 多播放器后端

- **Android TV / Android 手机 / 平板**：默认使用 **ExoPlayer**，适配 HLS、DASH、普通 MP4 等主流网络格式。
- **Windows**：抛弃长期未更新的 `flutter_mpv`，默认使用 **fvp**，并保留 **vlc_player** 作为备用后端，提升桌面端格式兼容性与播放稳定性。
-…
