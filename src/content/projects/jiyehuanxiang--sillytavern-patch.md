---
repo: "JiYeHuanXiang/sillytavern-patch"
name: "sillytavern-patch"
description: "SillyTavern-Patch — A tailored fork of SillyTavern that focuses on two pain points: Chinese domestic LLM support and large-scale character card management. 专为国内大模型适配与大量角色卡管理而定制的 SillyTavern 分支。"
readmeQualityOk: true
url: "https://github.com/JiYeHuanXiang/sillytavern-patch"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-08T08:28:00Z"
lastCommitAt: "2026-08-28T14:24:23Z"
lastReleaseAt: "2026-08-21T03:49:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["JiYeHuanXiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/f56b155e3dafa4452ab1be23e8066c30610228a6fd3363b180b62b23ed6986a0/JiYeHuanXiang/sillytavern-patch"
---

# SillyTavern-Patch

**English** | [**简体中文**](https://github.com/JiYeHuanXiang/sillytavern-patch/blob/HEAD/README.zh-CN.md)

A personal, customized fork of [SillyTavern](https://github.com/SillyTavern/SillyTavern) with targeted improvements for **Chinese domestic LLMs** and **large character card collections**.

> ⚠️ This is a personal fork with **no affiliation** to the official SillyTavern project and does not represent the official stance. All custom features have undergone limited testing — evaluate stability for your own use case.

---

## ✨ What This Fork Does

### Custom Features

- **Thinking Mode Toggle for Chinese LLMs**: Adds a toggle for reasoning/thinking mode on DeepSeek, Qwen, and other Chinese domestic LLMs, allowing flexible control over reasoning output in roleplay scenarios.
  > Currently validated primarily against DeepSeek. Other domestic models have not been thoroughly tested.
  >
  > The toggle uses `{"thinking": {"type": "enabled/disabled"}}` — the DeepSeek format. Models using a different format or lacking a mechanism to disable thinking (e.g., GPT only offers a reasoning depth setting, where "low" still does not disable thinking) will not be affected.
-…
