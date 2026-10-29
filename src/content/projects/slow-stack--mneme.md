---
repo: "slow-stack/mneme"
name: "mneme"
description: "🧠 The memory that dreams — cross-session memory for DeepSeek Harness. Local SQLite + Markdown mirrors, autoDream consolidation, 4-way recall (keyword/vector/BM25/entity), and a memory panel. 10 model tools, MCP server, CLI."
readmeQualityOk: true
url: "https://github.com/slow-stack/mneme"
homepage: "https://www.npmjs.com/package/@modusensus/dsh-mneme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent-memory", "autodream", "deepseek-harness", "dsh-plugin", "knowledge-management", "semantic-search", "vector-search", "agent-memory-system", "memory-consolidation", "persistent-memory"]
stars: 198
forks: 22
openIssues: 18
closedIssues: 125
watchers: 2
contributors: 18
recentReleases: 10
createdAt: "2026-08-13T15:18:08Z"
lastCommitAt: "2026-10-29T10:21:10Z"
lastReleaseAt: "2026-08-16T04:26:41Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 97
undervaluedScore: 34
maintainers: ["modusensus", "z2Ace0107"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ca182f60837afe3de2785dbb9a02b1bb5120360d4a4b7d9434b445f90f0096f/slow-stack/mneme"
discussionCount: 12
---

---

# 🧬 给 LLM 装上会自我进化的记忆

**dsh-mneme** 是 [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) 的跨会话记忆插件。它不只「存得下」，更「管得好」：后台自动去重合并、矛盾先冻结等你裁决、全程可回放审计、记忆只落在本机，还支持导出成人可读的 Markdown。

> **Mneme**（Μνήμη）源自希腊记忆女神 **Mnemosyne**。她掌管记忆与梦境——正如 `autoDream` 在后台默默巩固你的记忆库。

## 📰 最近更新

| 日期 | 版本 | 头条 |
|------|------|------|
| 2026-10-21 | **v0.9.4** | **三条链各自补上「最后一环」** — 这一版的三件事同一种形状：东西早就造好了，只差没人能叫它。① **agent 主动整理**（[#231](https://github.com/slow-stack/mneme/issues/231)）：引擎在 v0.8 就落在 `src/organize.js`（先 dryRun 出比对报告 → agent 判断 → apply 落库，筛除只归档不删，全程复用 `dream_runs` 回执），可它**没有任何调用入口**——工具表里没有它、两张 API 脸 0 命中、全仓 `.organize(` 零调用点，只有测试能调到。现在它有工具了：`memory_organize`，`organizeEnabled` 默认关（关 = 工具根本不注册，模型看不到就不会调）。② **画像能被反向提取了**（[#497](https://github.com/slow-stack/mneme/issues/497)）：面板「用户画像」加一个按钮，读活跃记忆、花一次宿主模型调用，产一段「助手眼中的用户」**草稿**——**只出草稿**：采用是你在面板上再点一次，你手写的原文不会被模型改写；空库和模型不配合都直接报错，绝不回一张空草稿冒充「这次没提炼出东西」（`profileExtractEnabled` 默认关）。③ **人格不再无条件进别人的会话**：`default` 卡以前会落给所有没建卡的身份，于是宿主里自带身份的外部 bot 每一帧都收到两句「你是谁」撞在一起，而界面上「关掉这张卡」实际不生效——新增 `personaStrictAddressing`（默认关，历史行为逐字节不变）把「身份没建卡」与「卡被显式关掉」都收回到不注入。同版补上蒸馏的**转录围栏 +…
