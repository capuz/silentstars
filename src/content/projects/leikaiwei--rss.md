---
repo: "leikaiwei/rss"
name: "rss"
description: "订阅rss推送到telegram频道"
readmeQualityOk: true
url: "https://github.com/leikaiwei/rss"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-18T07:08:27Z"
lastCommitAt: "2026-08-14T05:15:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 54
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a915afd8ba84ab38fa91f520553e07c3f896b6fa8dbc02a8648e328bae73e4d7/leikaiwei/rss"
---

# RSS Telegram Bot

一个轻量的 RSS 订阅推送脚本：定时拉取 RSS 源，将最新内容推送到 Telegram 或 Webhook，并通过本地历史记录避免重复发送。

> English version: [README_EN.md](https://github.com/leikaiwei/rss/blob/HEAD/README_EN.md)

## 功能特性
- 使用 `rss.config` 维护 RSS 订阅地址，一行一个链接。
- 通过 `data.json` 记录已推送条目，避免重复。
- 支持 Telegram 与 Webhook 多通道推送，可单独启用或同时发送。
- 提供来源标识、加粗标题与简介展示的 Telegram 消息格式。
- 可通过 GitHub Actions 定时运行。

## 目录结构
- `rss_bot.py`：主脚本。
- `rss.config`：RSS 订阅列表配置。
- `data.json`：推送历史记录。
- `.github/workflows/rss_bot.yml`：定时任务工作流配置。

## 快速开始
1. 安装依赖：
   ```bash
   pip install -r requirements.txt
   ```
2. 配置 RSS 地址：
   ```text
   # 在 rss.config 中每行填入一个 RSS 地址
   https://news.google.com/rss
   ```
3. 配置消息通道：
   ```bash
   export TELEGRAM_BOT_TOKEN="你的机器人 Token"
   export WEBHOOK="你的 Webhook 地址"
   ```
4. 运行脚本：
   ```bash
   python rss_bot.py
   ```

## 使用说明
- `rss.config` 中以 `#` 开头的行会被忽略。
- `data.json` 会在首次运行时自动创建。
- 若需修改推送频道，请在 `rss_bot.py` 中调整 `TELEGRAM_CHAT_ID`。
- 通道开关集中在 `rss_bot.py` 的 `NOTIFICATION_CHANNELS`，可启用 Telegram、Webhook 或两者同时启用（默认启用 Webhook，关闭 Telegram）。
