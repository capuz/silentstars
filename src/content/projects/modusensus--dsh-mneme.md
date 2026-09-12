---
repo: "modusensus/dsh-mneme"
name: "dsh-mneme"
description: "🧠 The memory that dreams — cross-session memory for DeepSeek Harness. Offline & private, auto-consolidates in its sleep (autoDream), visualized in a memory panel."
readmeQualityOk: true
url: "https://github.com/modusensus/dsh-mneme"
homepage: "https://www.npmjs.com/package/@modusensus/dsh-mneme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent-memory", "autodream", "deepseek-harness", "dsh-plugin", "knowledge-management", "semantic-search", "vector-search", "agent-memory-system", "memory-consolidation", "persistent-memory"]
stars: 93
forks: 11
openIssues: 16
closedIssues: 32
watchers: 2
contributors: 11
recentReleases: 10
createdAt: "2026-08-13T15:18:08Z"
lastCommitAt: "2026-09-12T08:03:47Z"
lastReleaseAt: "2026-08-16T04:26:41Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 37
maintainers: ["modusensus", "Anans-Ivresse", "483218131"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1333254657/9e5e4be6-11e2-492f-804e-59f3504a4a04"
discussionCount: 5
---

</p>

<h1 align="center">dsh-mneme</h1>

</p>

---

# 🧬 给 LLM 装上会自我进化的记忆

**dsh-mneme** 是 [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) 的跨会话记忆插件。它不只「存得下」，更「管得好」：后台自动去重合并、矛盾先冻结等你裁决、全程可回放审计、默认全离线，还支持导出成人可读的 Markdown。

> **Mneme**（Μνήμη）源自希腊记忆女神 **Mnemosyne**。她掌管记忆与梦境——正如 `autoDream` 在后台默默巩固你的记忆库。

## 它解决什么问题

每次新开对话，AI 都像第一次认识你？

**dsh-mneme 给 DeepSeek Harness 装上跨会话记忆。** 你聊过的项目、提过的偏好、做过的决定，AI 都记得——即使关掉了窗口，下次打开还在。

| 场景 | 没装插件 | 装了插件 |
|------|---------|---------|
| 周一聊完项目需求，周三继续 | "能再描述一下你的项目吗？" | "你指的是上周提到的博客重构吗？当时你说想用 Astro。" |
| 告诉 AI 你的编码习惯 | 每轮都要重复交代 | 一次设定，长期生效 |
| 整理大量资料后关窗口 | 资料丢了 | 自动归档，随时检索找回 |

> 但 dsh-mneme 的可信之处，恰恰在你**看不见**的后台。下面这些，才是它和「一个会存东西的插件」的本质区别。

## 为什么可以信任它

- 🧾 **可回放、可追责** — 每次自动整理都留一张「决策凭证」：输入快照 + 决策明细 + 结果哈希，同样的整理可复现回放，**不默默吞错、不留无法追溯的改动**。
- ⚖️ **矛盾先冻结，等你裁决** — 两条记忆打架时，不擅自替你做主。可疑冲突会**挂起待审**，你确认后才生效。复杂判断，人永远在线。
- 🌙 **夜深人静才动手**（可关）— 空闲时自动分层归档：常看的留在热区、久不用的压成摘要、陈旧的彻底归档。记忆库**越用越精炼，不膨胀**。
- 🧠 **本地语义检索，默认离线** — 自带本地 Embedding 与精排，不强求 API Key，网络断了也能检索。
- 📝 **Markdown 双向同步** — 记忆就是本地 `.md` 文件，随时打开编辑；**人工改动会被优先尊重**，不会被机器覆盖。
- 💾 **删对话 ≠ 删记忆** — 清空聊天窗口，已保存的记忆仍在（可配置）。

## 5 分钟上手

```bash
# 安装插件
dsh plugin --profile web add…
