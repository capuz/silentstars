---
repo: "619dev/PaperPhoneLite"
name: "PaperPhoneLite"
description: "PaperPhoneLite 是轻量级端到端加密即时通讯项目，使用 React 19/TypeScript Web 客户端与 Rust/Axum 服务端。服务端和客户端均使用tor完全隐藏IP地址。"
readmeQualityOk: true
url: "https://github.com/619dev/PaperPhoneLite"
homepage: "https://paperphone.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-18T07:15:59Z"
lastCommitAt: "2026-09-01T08:51:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 29
maintainers: ["619dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/65303370913acb46c3246557979450b7e468c87c1bdd156a14754bf09947bdfd/619dev/PaperPhoneLite"
---

# PaperPhoneLite 3.0.16

[简体中文](https://github.com/619dev/PaperPhoneLite/blob/HEAD/README.md) · [English](https://github.com/619dev/PaperPhoneLite/blob/HEAD/README_EN.md) · [日本語](https://github.com/619dev/PaperPhoneLite/blob/HEAD/README_JA.md) · [한국어](https://github.com/619dev/PaperPhoneLite/blob/HEAD/README_KO.md) · [Français](https://github.com/619dev/PaperPhoneLite/blob/HEAD/README_FR.md) · [Deutsch](https://github.com/619dev/PaperPhoneLite/blob/HEAD/README_DE.md) · [Русский](https://github.com/619dev/PaperPhoneLite/blob/HEAD/README_RU.md) · [Español](https://github.com/619dev/PaperPhoneLite/blob/HEAD/README_ES.md)

[更新历史](https://github.com/619dev/PaperPhoneLite/blob/HEAD/changelog.md)

PaperPhoneLite 是轻量级端到端加密即时通讯项目，使用 React 19/TypeScript Web 客户端与 Rust/Axum 服务端。

保留功能：私聊、群聊、文字/图片/视频/语音/文档消息、联系人、群组、消息同步、离线缓存、阅后定时删除、Android ntfy 与 iOS Bark 后台提醒、二维码、2FA 与拉黑。

<details>
<summary>应用截图</summary>

</details>

## 特性

| 功能 | 说明 |
|------|------|
| 🔐 端到端加密 | X25519 + ML-KEM-768 混合密钥协商与 XSalsa20-Poly1305 消息加密，支持 Signal 风格安全号码验证 |
| 🗝️ 零知识加密范围 | 服务器保存加密会话密文，仅处理账号、好友/群组、路由和推送等必要元数据；身份私钥与 Sender Key 保留在本地 |
| 🎭 文本外观与额外加密 | 可为本设备上的聊天设置额外密码和 8 种文本外观，支持手动锁定和离开前台后自动锁定 |
| 🎤 语音消息与变声 |…
