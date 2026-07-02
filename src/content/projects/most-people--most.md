---
repo: "most-people/most"
name: "most"
description: "基于 Holepunch 技术栈（底层核心为 hypercore 和 hyperswarm）"
url: "https://github.com/most-people/most"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [46, 44]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-03-13T01:11:19Z"
lastCommitAt: "2026-07-02T06:32:29Z"
lastReleaseAt: "2026-06-12T03:43:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["seateam", "ye4u"]
openGraphImageUrl: "https://opengraph.githubassets.com/c423a62c5d295e95e1e3f4dba0c45e93c21f1aeb831c8d254d9d35b07ecc0c71/most-people/most"
discussionCount: 1
---

# MostBox：聊天优先的 P2P 工具箱

> 用户之间直接连接的 P2P 工具箱。
> 从聊天开始，直连传文件，把重要内容整理成知识库。
>
> Channel 承载消息、文件附件和知识库入口。文件分享仍使用 `most://` 链接、CID 校验和下载后做种；游戏和 Web3 工具箱保留独立能力，但暂不进入聊天详情主流程。
>
> CID 是 MostBox 的文件身份：发布、做种、发现、下载和校验都围绕 CID 进行。文件名和目录只用于展示与本地保存路径，不作为内容是否存在或是否可信的依据。

## 为什么用 MostBox？

| 入口 | 用户理解 | 协议边界 |
| ---- | -------- | -------- |
| 聊天 | 先创建聊天或房间，分享房间 ID 给朋友 | Channel + WebSocket + Corestore/Hypercore |
| 附件 | 在聊天里直接传文件 | `most://` + CID 校验 + 下载后做种 |
| 知识库 | 把重要消息和想法沉淀成 Markdown | `/note/` 保留现有本地笔记库能力 |
| 游戏 | 独立游戏页面保留 | `game.*` channel 事件，不新增独立后端协议 |
| Web3 | 密钥、钱包和地址工具 | 独立工具箱，不是聊天或文件分享前置条件 |

## 演示

在线 Web 入口：[MostBox](https://Most.Box)

> Web 入口只负责连接已有 MostBox 节点；要在本机发布、下载、校验和持续做种，优先使用桌面客户端，或在本机运行 `npx most-box@latest` 启动完整节点。

## 🚀 立即使用

### 方式一：桌面客户端（推荐）与 Android Alpha

前往 [MostBox 下载页](https://Most.Box/download) 下载客户端，支持 Windows、macOS、Linux 和 Android Alpha。桌面端内置本地 MostBox 节点，提供完整 P2P 文件分享、下载校验和持续做种能力，无需单独安装 Node.js；Android Alpha APK 支持前台聊天附件、下载校验和做种。

### Android Alpha

移动端优先按 Android 聊天优先完整种子 MVP 推进，参考 Keet/Pear 的“P2P 核心端 + 平台 UI 壳”分层：手机端先验证自己能加入聊天、收发消息、用 `most://` 附件传文件、下载校验并在前台继续做种，再扩展后台能力、iOS 和商店分发。当前内测验收范围见 [docs/mobile-android-alpha.md](docs/mobile-android-alpha.md)。…
