---
repo: "ZYHUO/nyat-bot"
name: "nyat-bot"
description: "NyatBot — Telegram AI 群聊喵娘机器人，拟人回复引擎"
readmeQualityOk: true
url: "https://github.com/ZYHUO/nyat-bot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-04-10T17:57:26Z"
lastCommitAt: "2026-09-05T07:49:09Z"
lastReleaseAt: "2026-08-24T14:14:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["ZYHUO", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b0fa5f48b9b0766c0ed0dfcdf63ad0fed7348aa0c047651d1d327e669345886/ZYHUO/nyat-bot"
---

# 🐱 NyatBot

**Telegram AI 群聊喵娘机器人 — 拟人回复引擎**

一只会思考、会回嘴、还会跟群友互动的 AI 群聊机器人。

[English](#english) · [中文](#中文)

</div>

---

## 中文

### ✨ 特性

**核心 AI**
- 🧭 **Meta + Subagent + CodeAct**（可选，默认关）— CyberGroupmate 同构编排：Attention 收消息 → Meta 写 JS 派活 → Subagent CodeAct 调 host API（发消息/记忆/贴纸）→ callback；灰度 `META_SUBAGENT_CHAT_IDS`，详见 [`docs/meta-subagent/`](https://github.com/ZYHUO/nyat-bot/blob/HEAD/docs/meta-subagent/)
- 🧱 **Context Engine** — `static|delta|ephemeral|volatile` 分段组装 + Manifest（前缀稳定利于 prompt cache）；Meta/Subagent 共用
- 📔 **梦境日记（Dream Journal）** — 夜间 cron 写 `data/dream-journal/`，可发频道；与记忆遗忘的 `memory-dream` 无关（`DREAM_JOURNAL_*`）
- ❤️ **心流层（Heart）** — 一颗带人格与"此刻自我状态"的心代替三个过滤器：L0 规则未命中的群消息走**一次**心流判断，自己决定 reply / wait / pass —— 决定"接不接"的我和决定"怎么说"的我是同一个我（更便宜：1 次调用 ≤ 旧的 1-3 次）；可选「念头」反思（`HEART_REFLECT_ENABLED`）
- 🔄 **回合制 Turn Actor** — MaiBot 式 per-chat 认知回合：连发合并成一个念头整体评估、生成中被新消息打断→重规划、"等TA说完"真的会回来接话（wait-resume）、有界自我接话（"对了…"/补贴纸）
- 🧠 **三级判断管线** — L0 本地规则 → L1 微型 AI → L2 完整 AI，智能决定是否回复（心流关闭时的回退链路；**Meta 灰度群不走此路径**，防双回复）
- 💬 **自然接话** — bot 说完话后保持"在场"：最近几条内你或它任一方是问句即接，陈述句也按概率接（MaiBot 式 talk-frequency），不需 @ 或引用；群太热/@别人时自动克制
- 🗣️ **自然语言调用指令** —…
