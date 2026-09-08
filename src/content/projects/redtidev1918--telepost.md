---
repo: "redtidev1918/TelePost"
name: "TelePost"
description: "功能强大的 Telegram 频道投稿机器人，支持媒体上传、全文搜索、热度统计、标签系统等功能"
readmeQualityOk: true
url: "https://github.com/redtidev1918/TelePost"
homepage: "https://redtidev1918.github.io/TelePost/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["automation", "bot-framework", "chinese-segmentation", "content-management", "docker", "docker-compose", "full-text-search", "open-source", "python", "python-telegram-bot"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-10-24T09:22:36Z"
lastCommitAt: "2026-09-08T08:17:25Z"
lastReleaseAt: "2026-09-08T08:14:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 60
maintainers: ["redtidev1918", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6031a29845796b11f17a27f157db03e1e715d3a99c0693b46164b94b2a14dd06/redtidev1918/TelePost"
discussionCount: 0
---

# TelePost

Telegram 频道投稿机器人，支持聊天投稿、审核队列、全文搜索、多 Bot 和 HTTP API。

## 能做什么

- 在 Telegram 内完成上传、预览、编辑、匿名/剧透切换与发布
- 分别控制聊天投稿和 HTTP API 投稿是否进入私有审核群
- 搜索频道历史、标签、个人投稿和本地热榜
- 用一个 supervisor 运行多个相互隔离的 Bot
- 通过 Bearer Token API 接收外部自动化投稿
- 在 Polling、Webhook 与 `AUTO` 模式间切换
- 在 Fly.io 保留 Webhook 后自动休眠，并由下一次请求唤醒

## 最快开始

从 [最新 Release](https://github.com/redtidev1918/TelePost/releases/latest) 下载当前平台的
单文件程序，首次运行会进入配置向导：

```bash
chmod +x telepost-linux-x64
./telepost-linux-x64
```

源码运行：

```bash
git clone https://github.com/redtidev1918/TelePost.git
cd TelePost
python3 -m venv .venv
./.venv/bin/pip install -r requirements.txt
./.venv/bin/python run.py --setup
./.venv/bin/python run.py
```

最少需要：

| 配置 | 说明 |
|---|---|
| `TOKEN` | 从 [@BotFather](https://t.me/BotFather) 获取 |
| `CHANNEL_ID` | `@channel` 或 `-100…`；Bot 必须有发帖权限 |
| `OWNER_ID` | 推荐设置；启用敏感管理命令和 API Token 生成 |

环境变量优先于 `config.ini`。完整配置见
[配置参考](https://github.com/redtidev1918/TelePost/blob/HEAD/docs/CONFIGURATION.md)，部署方式见[安装与部署](https://github.com/redtidev1918/TelePost/blob/HEAD/docs/INSTALL.md)。

## 运行方式

| 场景 | 推荐模式 |
|---|---|
| 本地、无公网 HTTPS | `RUN_MODE=POLLING` |
| 有公网 HTTPS | `RUN_MODE=WEBHOOK` |
| 希望自动选择 | `RUN_MODE=AUTO`（默认） |…
