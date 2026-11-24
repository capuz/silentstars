---
repo: "KIDLi1412/dsh-session-cost"
name: "dsh-session-cost"
description: "DSH web plugin: conversation status bar with per-session token cost estimate (per-model CNY pricing) and live DeepSeek API balance; display mode configurable (standalone bar or merged into the stats line)."
originalDescription: "DSH web plugin: conversation status bar with per-session token cost estimate (per-model CNY pricing) and live DeepSeek API balance; display mode configurable (standalone bar or merged into the stats line)."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/KIDLi1412/dsh-session-cost"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["balance", "deepseek-harness", "dsh-plugin", "token-usage"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-16T03:47:29Z"
lastCommitAt: "2026-11-24T14:07:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["abworks-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a08ab16a4ebf411c9fbc51e0d7b1b0beb98e3664f2f9ae58b3d1826cbf70ec9/KIDLi1412/dsh-session-cost"
---

# dsh-session-cost

DSH (DeepSeek Harness) Web plugin: merges the **per-session token cost estimate** and the **DeepSeek API balance** into the **built-in stats bar** below the input box.

- Cost estimation: the server prices each model separately. It folds each model's input, output, and cache-hit tokens from the session event log (semantics consistent with the `tokenUsage` projection of `dsh-token-meter`), then calculates costs using the CNY unit price table (`lib/cost.js`), so sessions that mix multiple models are also accurate.
- Balance lookup: reuses the official balance endpoint `GET {baseURL}/user/balance` (following the balance approach of the plugin [dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats)). Credentials are resolved through DSH's credentials seam, with a 2-minute in-memory cache and single-flight debouncing. `?refresh=1` forces the cache to be bypassed (the ⟳ manual refresh in the status bar uses this parameter).
- Costs refresh every 30 seconds and balance every 5 minutes. Token usage changes automatically trigger a cost refresh. **Clicking the cost pill** in the stats bar expands a per-model breakdown and balance composition (top-up / gifted).
