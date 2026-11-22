---
repo: "a775828b-dot/xtier"
name: "xtier"
description: "Cross-tier CPU/GPU hybrid MoE inference for SGLang (plugin, tracks upstream main)"
originalDescription: "Cross-tier CPU/GPU hybrid MoE inference for SGLang (plugin, tracks upstream main)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/a775828b-dot/xtier"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 87
forks: 14
openIssues: 3
closedIssues: 7
watchers: 0
contributors: 5
recentReleases: 9
createdAt: "2026-10-22T15:43:18Z"
lastCommitAt: "2026-11-22T11:52:36Z"
lastReleaseAt: "2026-11-21T21:05:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 36
maintainers: ["Cyrusxc5", "iounstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/832e15d8f4aba289a9feecc7e6de58368fdde691976f18f1852c0ad59e3ea3a5/a775828b-dot/xtier"
discussionCount: 0
---

# XTier

[English](https://github.com/a775828b-dot/xtier/blob/HEAD/docs/README.en.md) · [Documentation index](https://github.com/a775828b-dot/xtier/blob/HEAD/docs/README.md) · [Quick start](https://github.com/a775828b-dot/xtier/blob/HEAD/docs/quickstart.md) · [Support status](https://github.com/a775828b-dot/xtier/blob/HEAD/docs/support.md)

XTier is a plugin for the official [SGLang](https://github.com/sgl-project/sglang) (tracking the main branch) that performs CPU/GPU tiered MoE inference. Experts are spread across two tiers, VRAM and system memory, placed by heat and scheduled on demand. NVMe only holds the rows of embedding tables (DeepSeek's Engram, Qwen's PLE). When memory cannot hold all the experts, an optional cold expert pool moves rarely used experts to disk and reads them back into memory when needed. The pool's size and speed are limited by the disk's speed and type.
