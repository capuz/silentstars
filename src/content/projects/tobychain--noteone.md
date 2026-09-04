---
repo: "TobyChain/noteone"
name: "noteone"
description: "壹识，以AI为内核的个人知识系统"
readmeQualityOk: true
url: "https://github.com/TobyChain/noteone"
language: "TypeScript"
languages: ["TypeScript", "Swift"]
languagePcts: [62, 32]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-08T06:55:48Z"
lastCommitAt: "2026-09-04T08:00:26Z"
lastReleaseAt: "2026-09-04T08:00:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 31
maintainers: ["TobyChain", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38ba67aefe233fd8cb82d92ccb1f12a4539e5d068cdd685b0c40f68fb6ff7330/TobyChain/noteone"
---

# 壹识 · NoteOne

> 问渠那得清如许？为有源头活水来。
> —— 朱熹《观书有感》

壹识是一个以 AI 为内核的个人知识系统。

- **捕获 → 整理**：随手记下所见所闻，AI 静默打标、摘要、向量化
- **闹闹（Notty）**：核心 Agent，可调度本地终端、定时任务、新知补充等工具
- **新知（NewLore）**：每日扫遍 arXiv / GitHub / 官方博客 / 独立笔耕 / 会议论文 / 微信公众号，生成科技前沿日报
- **高见（FarView）**：汇总多源内容，计算最近 7 天内热度最高的 10 个有效话题
- **MCP**：让 Claude / Cursor 等外部 AI 直连你的笔记库

[中文](https://github.com/TobyChain/noteone/blob/HEAD/README.md) · [English](https://github.com/TobyChain/noteone/blob/HEAD/README.en.md) · [License](#license)

---

### 核心功能

> 随风潜入夜，润物细无声。
> —— 杜甫《春夜喜雨》

| 模块 | 能力 |
|---|---|
| **顺手捕获** | macOS 全局快捷键悬浮窗 / iOS Share Extension / 拖拽。自动抓取 URL、标题、选中文本、剪贴板图片 |
| **AI 静默整理** | 异步流水线：抓链接正文 → 生成标题与一句话摘要 → 四维度打标（format/topic/domain/module）→ 向量化入库 |
| **往事（OldEcho，笔记）** | 时间分组列表 + 语义搜索（不可用时全文降级）+ 标签筛选；完整分页加载；一键新建笔记；每条附 AI 摘要、来源、作者、标签 |
| **闹闹（Notty）** | 三层上下文管理 + doom-loop 检测 + 工具调用持久化 + Markdown 渲染。可调本地终端、定时任务、新知补充、联网检索等工具 |
| **新知（NewLore）** | 每日 6 模块并发抓取（arXiv / GitHub / 官方 / 博客 / 会议 / 微信），LLM 筛选翻译，生成带大纲导航的 HTML 日报；闹闹可逐模块编排 |
| **高见（FarView）** | 基于新知数据计算全局共享的最近 7 天话题热度榜；过滤通用噪声词，并展示来源构成和代表内容 |
| **定时任务** | 闹闹通过自然语言创建 cron 任务（如"每天 8 点补充新知"），DB 持久化 + 服务启动自动恢复 |
| **MCP Server** | Claude / Cursor / Codex 等 AI…
