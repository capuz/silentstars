---
repo: "engcapa/taomni"
name: "taomni"
description: "An AI-native remote workspace for developers — full-featured yet compact: terminal, SSH, SFTP, RDP/VNC, tunnels, and a database client in one refined desktop app."
url: "https://github.com/engcapa/taomni"
homepage: "https://newmob.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [48, 46]
stars: 5
forks: 1
openIssues: 8
closedIssues: 30
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-30T11:30:15Z"
lastCommitAt: "2026-06-24T00:19:41Z"
lastReleaseAt: "2026-05-09T11:30:54Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 68
maintainers: ["engcapa"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bbfb9a45d2fca169d68957de36dfc7d35fbca933733e6fa3276577607366b37/engcapa/taomni"
---

# Taomni

Taomni 是一款为开发者打造的 AI 原生远程工作台，基于 Tauri 2 + React 19 + TypeScript 构建，跨 Linux / macOS / Windows 运行。功能齐全却小巧精致：本地终端、SSH、SFTP、RDP/VNC、隧道、数据库客户端一应俱全，并将 AI 能力贯穿日常工作流。

## 功能

- **终端**：本地终端（PTY）、SSH 终端（russh），支持代理与单级 SSH 跳板机
- **会话管理**：会话/分组持久化，支持从 PuTTY / WSL / Tabby / OpenSSH 配置导入
- **文件传输**：SFTP 浏览与上传/下载传输队列
- **远程桌面**：RDP 客户端、VNC（RFB）查看器，并内置可作为服务端的 RDP server
- **隧道**：本地/远程/动态端口转发，支持开机自启
- **数据库客户端**：MySQL / PostgreSQL（sqlx）、ClickHouse、Redis，以及原生 HBase RPC 客户端；连接可经代理 / SSH 跳板机路由
- **AI 能力**：LLM 驱动的 Shell 命令生成（含安全审计）、Agent 工具执行与 Web 搜索、聊天、Tab 智能补全、语音输入（ASR）
- **凭据库**：argon2 + aes-gcm + 系统 keyring 的加密凭据存储

## 技术栈

- 前端：React 19、TypeScript、Vite、Tailwind CSS、xterm.js、CodeMirror 6
- 桌面端：Tauri 2、Rust（tokio 异步）
- 终端与协议：portable-pty、russh、russh-sftp、ironrdp（RDP）、自实现 RFB（VNC）
- 数据库：sqlx（MySQL/PostgreSQL）、redis-rs、原生 HBase（prost + ZooKeeper）
- AI：rig-core、llama.cpp sidecar、可选 sherpa-onnx 语音转写
- 状态与存储：Zustand、SQLite（rusqlite）

## 环境要求

- Node.js 18+
- pnpm
- Rust 1.94+
- protoc（Protocol Buffers 编译器，原生 HBase 客户端构建需要）
- Tauri 所需系统依赖（Windows 上的 WebView2、Linux 上的 webkit2gtk）

安装依赖：

```bash
pnpm install
```

## 开发

启动桌面应用开发模式：

```bash
pnpm tauri dev
```

仅启动前端 Vite 服务：

```bash
pnpm dev…
