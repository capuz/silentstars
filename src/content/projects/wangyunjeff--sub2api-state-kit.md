---
repo: "wangyunjeff/sub2api-state-kit"
name: "sub2api-state-kit"
description: "Sub2API Account-Level STATE Extension: Pro/Team Selection, Fixed Proxy Re-verification and 312 Exception Dynamic Guardian (Experimental Version)"
originalDescription: "Sub2API 账号级 STATE 扩展：Pro/Team 选择、固定代理复验与 312 异常动态守护（实验版）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wangyunjeff/sub2api-state-kit"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [41, 36]
stars: 57
forks: 28
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-09-18T14:25:18Z"
lastCommitAt: "2026-09-19T08:13:53Z"
lastReleaseAt: "2026-09-19T05:36:01Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 26
maintainers: ["wangyunjeff"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fbdec510ea054c0443bc9280948f24c727492fdd90b76dda3af986da808d9fa/wangyunjeff/sub2api-state-kit"
---

# Sub2API STATE Kit

**For addressing recent issues of model quality degradation and decreased concurrency in ChatGPT / Codex accounts.** Model quality degradation mainly manifests as requested models being routed to other models; decreased concurrency refers to OpenAI upstream limiting the number of concurrent requests an account can handle simultaneously, resulting in reduced actual available concurrency.

Provides **incremental version, complete deployment version, and plugin version** in three forms. **Incremental version is recommended first**, making it convenient to merge this extension on top of existing Sub2API source code; complete deployment version and plugin version can also be chosen based on your own deployment method, with download links provided below.

Adds **account-level STATE management, Pro / Team selection, and exception dynamic guardian** to Sub2API. Can edit, enable, or disable on a per-account basis: only enable for accounts that need handling, normal accounts continue using the original workflow.

## 🚀 Addressing Model Quality Degradation and Upstream Concurrency Limits

> **Dynamically collect IP STATE, use fixed business proxy re-verification;…
