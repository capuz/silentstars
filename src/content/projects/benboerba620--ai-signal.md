---
repo: "Benboerba620/ai-signal"
name: "ai-signal"
description: "和奔波儿r一起追踪 AI 一线声音：自动抓取 AI 播客、推文和论文，让你的 Agent 生成个性化日报。"
readmeQualityOk: true
url: "https://github.com/Benboerba620/ai-signal"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 71
forks: 19
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-30T01:36:49Z"
lastCommitAt: "2026-09-06T08:05:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 26
maintainers: ["github-actions[bot]", "Benboerba620"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ae0db972fab2f58ca229c7bc4d48578dbe2b8893149442666b991d147a31c8d/Benboerba620/ai-signal"
---

# AI Signal

追踪 AI 一线的声音——做事的人、写代码的人、下注的人，不是二手转述。

这是一份给 AI Agent 用户的精心筛选信息源。中央每天自动抓取播客、推文和论文；你的 Agent 读取 JSON，按你的口味生成日报。

**这份清单本身就是产品。**

如果这个项目对你有帮助，欢迎在 GitHub 点一下 Star，让更多需要 AI 一线信号的人看到它。

## 最近更新

- `2026-08-21`：SemiAnalysis 改为日常自动匹配官方 YouTube 字幕；Latent Space 与 Lenny 切换到 podcast-only RSS，避免把 newsletter 文章封面误当音频；维护者可在 Mac 上用共享 Whisper 引擎补齐无公开字幕的节目
- `2026-08-19`：新增 Ben Thompson（Stratechery）四通道——X [@benthompson](https://x.com/benthompson)、Sharp Tech 播客、人物访谈搜索、Stratechery 博客 RSS；付费墙后的内容只呈现标题导语和链接，不替他展开论点
- `2026-08-18`：接入 Y Combinator Startup Podcast 当前 RSS，替换已停在 2025 年的旧 Lightcone feed，恢复 YC 最新播客抓取
- `2026-08-05`：X 主题过滤按账号性质分档——分析师/决策者不再要求命中技术关键词（实测此前丢掉 @jimkxa 100%、@GavinSBaker 67% 的原创内容），引用推文连同被引用原推一起抓取和展示
- `2026-08-05`：X 信源换血——移除 NVIDIA 官方账号，改追黄仁勋本人 [@JensenHuang](https://x.com/JensenHuang)（7/24 开通）；新增买方视角 [@GavinSBaker](https://x.com/GavinSBaker)（Atreides Management）
- `2026-07-08`：新增 Naval Ravikant——加入 X 人物追踪、YouTube 人物访谈搜索和 Naval RSS 播客频道；Naval 频道单独使用 14 天窗口，避免错过低频长节目
- `2026-07-08`：人物追踪剔除"被谈论但本人没出场"的视频——标题语法守卫识别 "记者 on 某人"/"the truth about 某人" 这类评论内容，只收本人真实出场的访谈
- `2026-07-08`：定时任务默认限时拉到 15 分钟，避免网络或模型较慢时任务被中途杀掉后反复重启；OpenClaw cron 模板加 `--timeout-seconds 900`，其他平台要求任务限时…
