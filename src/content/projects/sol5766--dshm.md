---
repo: "sol5766/dshm"
name: "dshm"
description: "deepseek harnes HarmonyOS PC client"
originalDescription: "deepseek harnes HarmonyOS PC client"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sol5766/dshm"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
topics: ["deepseek-harness", "deepseek-harness-plugins", "dsh-plugin", "dsh-plugin-market", "dsh-plugins", "sentation"]
stars: 24
forks: 2
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-20T13:28:50Z"
lastCommitAt: "2026-10-05T10:46:51Z"
lastReleaseAt: "2026-08-25T05:39:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 28
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/22010f61bb79b03b99f2298b2aae30d0b8a452a379daea53e1ab07c7a9f6fa22/sol5766/dshm"
discussionCount: 0
---

# DSHM

**Self-sufficient execution of DeepSeek Harness on HarmonyOS**

DSHM puts the **runtime body** of [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (dsh) into a HarmonyOS application: the HAP includes a built-in Node runtime and dsh core tree, the core starts a Host on the local machine `127.0.0.1`, and the native ArkUI pages within the application serve as clients for this local Host.

**It is not a remote controller for dsh on PC**, nor does it require any service running constantly on your computer: install and use, data resides only in the local application sandbox.

Supports HarmonyOS phones / foldable screens / tablets / 2-in-1 devices.

> **This is a platform porting**: moving the official desktop-focused runtime (Electron) to run self-sufficiently on OpenHarmony arm64.
> During the porting process, every conflict with HarmonyOS platform semantics, root causes, and solutions are summarized in
> **[`docs/70-鸿蒙移植踩坑与修复总览.md`](https://github.com/sol5766/dshm/blob/HEAD/docs/70-鸿蒙移植踩坑与修复总览.md)** (organized by technical topic).
> **Two fundamental constraints** determined nearly all subsequent design decisions: `jitless ⇒ WebAssembly === undefined`,
> and…
