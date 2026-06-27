---
repo: "lm317379829/TGFileBot"
name: "TGFileBot"
description: "TG直链机器人"
url: "https://github.com/lm317379829/TGFileBot"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 158
forks: 29
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2025-10-16T10:00:24Z"
lastCommitAt: "2026-06-27T00:35:01Z"
lastReleaseAt: "2026-06-27T00:36:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 40
maintainers: ["lm317379829"]
openGraphImageUrl: "https://opengraph.githubassets.com/959c74089b4949bf0ac14fbd55382cea1bb30494ae94403e2bf41e6859a38604/lm317379829/TGFileBot"
---

# TGFileBot

TGFileBot 是一个 Telegram Bot 和 UserBot 深度结合的开源项目，旨在提供高性能的文件直链提取、媒体分片流式传输以及完善的远程机器人管理功能。

## 核心功能

- **🚀 高性能流式下载**: 基于协程并发的分片下载技术，支持 HTTP Range 请求，可实现视频在浏览器或播放器中的随拖随播（边看边播）。
- **🔗 智能链接提取**: 支持将 Telegram 消息（图片、文档、视频、音频）直接转换为 HTTP(s) 直链。支持私有频道和公开频道的链接解析。
- **🤖 双模式机器人管理**: 通过 Bot 客户端发送指令，远程管理 UserBot 的生命周期（登录、设置、白名单等），无需操作服务器控制台。
- **🛡️ 完善的权限控制**: 支持多管理员机制及白名单系统，所有敏感功能均受权限保护。
- **🔑 灵活的身份验证**: 支持通过密码（key）或动态哈希（hash）保护直链，防止链接被恶意滥用。
- **♻️ 自动引用刷新**: 针对 Telegram 资源引用过期（`FILE_REFERENCE_EXPIRED`）提供毫秒级自动重连和刷新机制，确保大文件下载不中断。
- **📝 伪静态与播控优化**: 提供 `/stream/{mid}/{filename}` 格式的伪静态链接，优化流媒体文件的识别与加载体验。

## 部署

### 1. 获取 API ID 和 API Hash

访问 [my.telegram.org](https://my.telegram.org/) 登录您的 Telegram 账号，创建一个新的应用以获取 `App ID` 和 `App Hash`。

### 2. 获取 Bot Token

在 Telegram 中搜索 `@BotFather`，创建一个新的 Bot 并获取 `Bot Token`。

### 3. 配置 `config.json`

在程序运行目录下或指定目录下创建 `config.json` 文件（可参考 `files/config.json.example`）。

```json
{
  "port": 8080,
  // 程序运行的 HTTP 端口
  "id": 0,
  // Telegram API ID
  "hash": "",
  // Telegram API Hash
  "site": "",
  // 反代域名或服务器 IP，用于生成直链
  "botToken": "",
  // 管理用 Bot 的 Token
  "userID": 0,
  // 主管理员 UserID (UserBot 对应的账号 ID)
  "password": "",
  // 接口访问密码 (可选，设置后需在…
