---
repo: "619dev/ppl-android"
name: "ppl-android"
description: "PaperPhoneLite 的 Android 客户端，内嵌 Tor。"
readmeQualityOk: true
url: "https://github.com/619dev/ppl-android"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-18T12:34:50Z"
lastCommitAt: "2026-09-03T08:14:06Z"
lastReleaseAt: "2026-08-21T07:37:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 44
maintainers: ["619dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/c957038e804fcb733099e06d65542535ee0149978b6fcfad5643ba6dd6fcde1e/619dev/ppl-android"
---

# PaperPhoneLite Android

[English](https://github.com/619dev/ppl-android/blob/HEAD/README_EN.md) · [更新历史](https://github.com/619dev/ppl-android/blob/HEAD/changelog.md)

> [PaperPhoneLite](https://github.com/619dev/PaperPhoneLite) 的 Android 客户端，使用 Capacitor 8 打包上游 React/TypeScript 前端，并内嵌 Tor。

## 项目范围

本仓库只包含 Android 客户端，不包含 Rust 服务端、MySQL、Redis 或 onion service 部署配置。服务端和自托管文档位于[上游仓库](https://github.com/619dev/PaperPhoneLite)。

当前客户端提供：

- 私聊、群聊、联系人、群组及好友申请。
- 文字、图片、视频、文档、语音、Emoji 和 Telegram 贴纸消息。
- X25519 + ML-KEM-768 混合密钥协商、XSalsa20-Poly1305 消息加密、群聊 Sender Key 和安全号码。
- 消息同步、本地离线缓存、持久化发件箱、已读状态和输入状态。
- 消息自动删除、拉黑、好友标签、二维码和 TOTP 两步验证。
- 额外消息密码、8 种文本外观、前后台自动锁定及启动解锁提示。
- Android 可选的 ntfy 通知注册与订阅流程。

PaperPhoneLite 3.x **不提供**朋友圈、公开时间线、单聊或群聊语音/视频通话、LiveKit、Cloudflare R2 或 Web/PWA 生产发行。

## Tor 与网络边界

- Release APK 内嵌 Guardian Project `tor-android 0.4.8.17.2`，仅面向 64 位 ARM 设备（`arm64-v8a`）。为避免反射/JNI 依赖在运行时闪退，3.0.20 暂停 R8 代码压缩与 Android 资源裁剪。Debug 构建仍可用于本地开发测试。
- 原生 Tor 服务监听本机 SOCKS5 `127.0.0.1:9050`；只有 Tor 引导进度达到 100% 后，Android WebView 代理才切换到该端口，避免线路尚未可用时误报成功并发送登录请求。
- 直接 Tor 连接 20 秒内无法建立线路时，客户端会从 Tor Project 官方 circumvention settings 接口获取当前 WebTunnel bridge，通过内嵌 IPtProxy/Lyrebird 重启…
