---
repo: "xzb177/YiMao"
name: "YiMao"
description: "YiMao · 云海求片助手 — 双核心 Telegram 影视求片机器人。订阅模式：TMDB 智能搜索一键订阅 / 趣味求片模式：AI 生成五层地狱闯关，通关解锁优先求片。深度集成 MoviePilot + Emby/Jellyfin。Go 1.24"
readmeQualityOk: true
url: "https://github.com/xzb177/YiMao"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["docker", "emby", "golang", "media-server", "telegram-bot", "ai-powered", "game", "jellyfin", "moviepilot", "tmdb"]
stars: 71
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-01-11T17:50:18Z"
lastCommitAt: "2026-08-27T14:27:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 69
undervaluedScore: 40
maintainers: ["xzb177"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b8c1c6d39f4ac0320dfdf968362df9c72d16a2914bfb016c08994e9176ebb9c/xzb177/YiMao"
---

# YiMao

YiMao 是面向 Telegram 的私人影视任务中心，把搜索、求片、审核、MoviePilot 下载/整理进度和 Emby 入库通知放在同一条链路中。用户可以使用 Bot 对话或 Mini App；AI 和许愿池是增强能力，不是部署主链路的前置条件。

## 工作方式

```text
Telegram Bot / Mini App
          |
          v
        YiMao
          |
          +-- MoviePilot：搜索、订阅、下载与整理状态
          +-- Emby：媒体库可见性与真正可播放状态
          +-- TMDB：元数据与海报
          +-- SQLite/JSON：绑定、审核、任务和用户偏好
```

普通求片的实际流程：

```text
搜索 -> 选择媒体/季度 -> 绑定与配额检查 -> 自动通过或管理员审核
     -> MoviePilot 订阅 -> 下载/整理 -> Emby 入库 -> Telegram 通知可以看
```

“MoviePilot 下载完成”和“Emby 已经可以看”是两个不同状态。YiMao 不会在外部系统失败时把错误伪装成空态或成功。

## 当前产品入口

- Bot 以搜索求片为默认路径，保留详情/季度、候选资源、求片进度、想看/拼车、许愿池、洗版、问题反馈和入库通知。
- Mini App 是 App-first 任务中心：首页先展示“今晚要看 / 卡住的事 / 正在替你办”，再进入找片、求片/洗版提交、任务时间线、想看、许愿和反馈。
- 游戏中心只保留电影情报站、盲盒、命运轮盘和观影画像；Roulette 的进入和再转一次回调都可用。
- 管理员负责求片/洗版审核、洗版认领与 MediaSource 安全核验、反馈处理和通知设置。洗版完成必须先进入明确确认，不会绕过旧版保留检查。

## 新用户一键部署

前置条件：Linux、Docker daemon、Git、curl，以及宿主机可访问的 MoviePilot。

```bash
git clone https://github.com/xzb177/YiMao.git /opt/YiMao
cd /opt/YiMao
./install.sh
```

首次执行会生成权限为 `0600` 的 `.env` 并退出。填写以下必需项：

- `TELEGRAM_BOT_TOKEN`
- `ADMIN_USER_IDS`，第一个 Telegram 数字 ID 是 root admin
- `MOVIEPILOT_URL`
- `MOVIEPILOT_API_KEY`
- `API_KEYS`，默认 API auth…
