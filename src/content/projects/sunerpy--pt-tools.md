---
repo: "sunerpy/pt-tools"
name: "pt-tools"
description: "pt-tools 是一个专为PT站点设计的工具，支持通过rss订阅来下载免费种子和通过策略刷流、追剧等，帮助用户提高上传量，快速通过考核。支持docker、linux和windows等方式运行。"
url: "https://github.com/sunerpy/pt-tools"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["cli", "private-tracker", "pt", "pt-tools"]
stars: 120
forks: 17
openIssues: 1
closedIssues: 84
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2024-11-25T09:01:22Z"
lastCommitAt: "2026-06-28T02:03:07Z"
lastReleaseAt: "2025-07-01T07:46:11Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 46
maintainers: ["sunerpy", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/75ac376805ab4f1cd011ad43adcca080d0e4700bf3681c1f8bc5873e7508677c/sunerpy/pt-tools"
discussionCount: 0
---

# pt-tools

`pt-tools` 是一个功能强大的 PT（Private Tracker）站点自动化管理工具，提供 RSS 订阅自动下载、多站点种子搜索、用户信息统计、下载器管理等功能，帮助用户高效管理多个 PT 站点。

<details>
<summary>点击查看任务列表示例 (Click to view Task List Screenshot)</summary>

</details>

## 🤖 ChatOps & 机器人（v0.31+）

pt-tools 现支持通过 **QQ** 或 **Telegram** 机器人远程管理：

- 🇨🇳 **QQ OneBot** via [NapCat](https://github.com/NapNeko/NapCatQQ)（reverse-WebSocket，私聊命令，已端到端验证）
- 🌍 **Telegram Bot** via [BotFather](https://t.me/BotFather)（long-poll，私聊命令，支持代理，已端到端验证）
- 🛠️ 内置 13 个命令：`/help` `/status` `/version` `/tasks` `/sites` `/torrents` `/pause` `/resume` `/delete` `/bind` `/unbind` `/addrss` `/delrss`
- 📥 **互动管理 RSS**：`/addrss` 文本向导或单行快捷格式添加订阅，`/delrss` 先列出后按名称/ID/序号删除（均限管理员）
- 📡 **RSS 上新通知**：QQ/Telegram 推送站点新种，支持全量/规则匹配双模式 + 静默时段 + digest 合并
- 🔐 安全：管理员白名单、绑定码 TTL（5min/1h/1d/30d/永久）、AES-GCM 加密落库、HMAC 签名 webhook、操作审计日志

> **实验性出站通道（暂未端到端验证）**：企业微信群机器人 / 自定义 Webhook（HMAC-SHA256）— 代码已实现，欢迎贡献测试反馈。

详见：

- [快速开始 → ChatOps](docs/guide/chatops-quickstart.md)
- [QQ OneBot (NapCat) 配置](docs/guide/chatops-qq-napcat.md)
- [Telegram Bot 配置](docs/guide/chatops-telegram.md)
- [RSS 上新通知](docs/guide/chatops-rss-notify.md)

---

## 功能特性

| 功能                 | 描述…
