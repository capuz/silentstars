---
repo: "tafcear/kimi-tide"
name: "kimi-tide"
description: "🌊 月汐（kimi-tide）— DSH 的「每一步自动选模型」插件：贴图自动走能看图的模型，写代码走编码模型，闲聊翻译走便宜模型，每次选了谁、为什么，面板看得见 · The per-step model router for DeepSeek Harness: any connected model, routed by your rules"
readmeQualityOk: true
url: "https://github.com/tafcear/kimi-tide"
homepage: "https://方法论研究https://github.com/tafcear/kimi-tide-research"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["deepseek-harness", "dsh-plugin", "kimi", "kimi-code", "llm-router", "model-routing", "dsh", "moonshot", "deepseek", "provider-agnostic"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-14T19:43:01Z"
lastCommitAt: "2026-09-11T08:14:21Z"
lastReleaseAt: "2026-09-11T04:05:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 67
maintainers: ["tafcear"]
openGraphImageUrl: "https://opengraph.githubassets.com/9563f97c0f3662a31d9ad298a753953e901d3f6fe1a6cbe2376dc5b94a4c6fa0/tafcear/kimi-tide"
discussionCount: 0
---

</p>

</p>
</p>

**月汐（kimi-tide）是 DSH 的「每一步自动选模型」插件。**

DSH（DeepSeek Harness）是 DeepSeek 官方开源的 AI 编程智能体框架——在网页里跟 AI 助手对话干活，模型、工具、界面都以插件形式装卸（官方口号：Everything is a Plugin）。你可以在 DSH 里接入多个模型：有的看得懂截图，有的写代码特别强，有的便宜又快。但 DSH 默认**一个会话从头到尾只用一个模型**——想换模型得手动切，切完还得记着切回来。

装上月汐后：**贴截图自动切到能看图的模型，写代码自动切到编码模型，闲聊翻译自动走便宜的模型**——每次选了谁、为什么，输入框下方的「🌙 月汐」面板写得清清楚楚；规则是你自己定的，随时改。Kimi 和 DeepSeek 只是开箱示例，**任何接入的模型都能按你的规则路由**。

**适合谁**：在用 DSH、且接了不止一个模型的人。
**不适合**：只用一个模型，或还没跑起 DSH 的人（先把 DSH 用起来，再回来装这个）。

---

## 它解决什么问题

**场景一：贴了张截图，模型说看不了**

- 以前：手动切到能看图的模型 → 贴图 → 问完 → 记得切回来。
- 装后：直接贴。带图的消息自动交给能看图的模型，下一条纯文字消息自动回到默认模型。

**场景二：切完模型，忘了切回来**

- 以前：为一张图切到贵的模型，之后整场会话都在烧贵的额度。
- 装后：月汐按「每一步」决策，一会话不绑死——图处理完，下一条消息就回到你的默认模型。

**场景三：额度总比预期烧得快**

- 以前：所有消息——包括「你好」和「帮我看下这句翻译」——都走最贵的模型。
- 装后：选「省钱」预设（一套配好的「默认模型 + 规则」方案），闲聊、翻译、日常杂活自动走便宜模型，代码和图才动用贵的模型；面板实时显示套餐余额（Kimi/GLM 等带套餐的模型，无套餐的置灰不显示）。

---

## 30 秒看懂路由逻辑

一条消息进来，月汐按这个顺序决定用哪个模型：

1. **显式点名**：消息里写了 `@kimi` 这类指令 → 直接用它（最高优先）。
2. **规则命中**：按预设里的规则逐条检查——带图？命中哪组关键词？→ 首条命中的规则说了算。
3. **默认打底**：都没命中 → 用预设的默认模型。
4. **带图保险**：就算选了纯文本模型，消息带图也会被强制改道给能看图的模型——不会崩。

```mermaid
flowchart LR
    A["💬 你的消息<br>（本轮新消息）"] --> B{"显式 @模型？"}
    B -- "@kimi 等" --> H["🎯 显式指令<br>最高优先"]
    B -- 否 -->…
