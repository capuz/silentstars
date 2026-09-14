---
repo: "chjm-ai/vococo"
name: "vococo"
description: "支持cc和gpt等订阅的个人 AI 助理 — 语音实时通话派活、任务管理、定时任务、三档安全闸、多供应商热切换"
readmeQualityOk: true
url: "https://github.com/chjm-ai/vococo"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [61, 26]
topics: ["agent-framework", "ai-agent", "claude", "llm", "mcp", "personal-assistant", "prompt-engineering", "python"]
stars: 41
forks: 9
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 2
recentReleases: 0
createdAt: "2026-08-04T03:26:39Z"
lastCommitAt: "2026-09-14T09:12:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7e4e02c5a6dc163dce102c41a69c238f7faf70d336be7fe3e1e9b187babdc221/chjm-ai/vococo"
---

</p>

<h1 align="center">vococo</h1>

  基于 <b>Claude 订阅</b> 的个人 AI 助理，单用户、常驻、语音优先、多渠道共用一个大脑。
</p>

</p>

---

## 截图

| 聊天 · 工具调用 | 工作台 |
|:---:|:---:|
|  |  |
| **语音对话** | **定时任务** |
|  |  |

---

> 完整需求与验收标准见 [REQUIREMENTS.md](https://github.com/chjm-ai/vococo/blob/HEAD/REQUIREMENTS.md)。

## 特性

- **多渠道，一个会话** — TUI / CLI / Web（自建 PWA，手机浏览器直达）；全端共享同一主会话
- **Web 自建 UI** — 多会话侧边栏、工具调用卡片、模型面板 + 限额环、设置页全在线改
- **语音优先** — 按住说话（STT）、TTS 朗读、Omni 实时免提通话（可打断）
- **后台任务引擎** — 语音派活 / cron / 独立新会话共用一套引擎，任务跑在独立 git worktree
- **长期记忆** — 启动注入 `~/AI_BRAIN`；`save_memory` 沉淀、`recall_past` 召回，纯 Markdown
- **多供应商热切换** — DeepSeek / Kimi / 任意 Anthropic 兼容中转，设置页添加即生效
- **运行数据面板** — 设置页「数据」:工作强度日历、各模型用量与花费、缓存命中/工具成功率，逐个会话可下钻
- **安全模型 + 自我运维** — 危险三档闸、手机审批；`vococo doctor` 自检、`restart_self` 安全重启、看门狗防假死

## 架构

```
vococo/__main__.py     CLI 入口:tui / chat / serve / cron / doctor
core/                  agent 循环(claude-agent-sdk)· client 保温池 · prompt 组装
                       · 每会话 git worktree 隔离 · 后台任务引擎(task_runner)
gateway/               平台内核(命令注册表 / converse / 会话路由)
  ├─ adapters/web        自建 PWA(SSE 流式 / 多会话 / 设置页)
  ├─ adapters/web_push   VAPID Web Push 系统通知
  ├─ settings_store.py…
