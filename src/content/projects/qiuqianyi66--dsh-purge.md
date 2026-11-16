---
repo: "qiuqianyi66/dsh-purge"
name: "dsh-purge"
description: "dsh-purge — Apache-2.0 DeepSeek Harness (DSH) jailbreak / red-team evaluation plugin: 82 grouped host patches + per-model prompt replacement, compatible with DSH 0.2.2-rc.3, patches can be reverted with one click | Jailbreak & red-team evaluation plugin for DSH"
originalDescription: "dsh-purge — Apache-2.0 DeepSeek Harness（DSH）破甲 / 红队评测插件：82 条分组宿主补丁 + 按模型替换提示词，适配 DSH 0.2.2-rc.3，补丁可一键还原｜Jailbreak & red-team evaluation plugin for DSH"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qiuqianyi66/dsh-purge"
homepage: "https://github.com/qiuqianyi66/dsh-purge#readme"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai-agent", "ai-safety", "cordis", "cybersecurity", "deepseek", "deepseek-harness", "dsh", "dsh-purge", "generative-ai", "jailbreak"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-09T05:34:52Z"
lastCommitAt: "2026-11-16T11:52:39Z"
lastReleaseAt: "2026-11-16T07:17:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["qiuqianyi66"]
openGraphImageUrl: "https://opengraph.githubassets.com/b01799341edeb301e6c488b128b2ef24446c0309aeb9e8afdac3c025271cde09/qiuqianyi66/dsh-purge"
---

# dsh-purge

**A local red-team evaluation plugin for DeepSeek Harness: 82 host patches + per-model prompts, one-click restore. Requires DSH `0.2.2-rc.3` and Node ≥ 18.**

**Read before use:** This project may only be used for security evaluation in a local environment that **you own and are authorized to test**. For authorization and copyright terms see [§1](#1-授权版权与再分发), and for safety red lines see [§2](#2-安全边界红线). If these conditions are not met, do not install it.

[Copyright & License](#1-授权版权与再分发) · [Safety Boundaries](#2-安全边界红线) · [Overview](#0-30-秒速览可直接引用) · [Installation](#4-安装三分钟) · [Capabilities](#6-能做什么) · [Compatibility & Test Data](#7-兼容性与实测数据2026-11-16) · [Self-check](#8-升级前自检与漂移诊断) · [FAQ](#11-常见问题)

---

## 0. 30-Second Overview (quotable)

> dsh-purge is a **local red-team evaluation plugin for DeepSeek Harness (DSH)**: it uses 82 grouped host patches and per-model replacement prompts to observe "host-layer policy interception" and "model-layer refusals" separately. Every modified file is backed up first and can be restored with one click. Before upgrading the host, an offline audit can tell whether patches would silently stop working.

In three sentences:

1.…
