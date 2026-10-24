---
repo: "gussuri/codex-reset-observatory"
name: "codex-reset-observatory"
description: "Codex reset history and next-reset estimates in one place."
readmeQualityOk: true
url: "https://github.com/gussuri/codex-reset-observatory"
homepage: "https://codex.gussuriworks.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["dashboard", "forecasting", "nextjs", "openai-codex", "rate-limiting", "typescript"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 101
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-06T11:19:18Z"
lastCommitAt: "2026-10-24T08:08:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 61
maintainers: ["gussuri"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e9e664b2466f1e0c5e1779983aa2d236fc253c490b378d7a657e184d3f60f70/gussuri/codex-reset-observatory"
fundingLinks: ["GITHUB:https://github.com/gussuri"]
---

# Codex Reset Observatory

Track and explain signals around Codex usage-limit resets.

This dashboard collects reset signals related to OpenAI Codex and ChatGPT Work usage limits, then combines them with reset history and status information to estimate and visualize reset probabilities.

[**Open the live observatory →**](https://codex.gussuriworks.com/en)

## Features

- 📊 **Reset probability estimates**: Estimate the probability of a reset within 24 or 48 hours by combining recent reset history, elapsed time, incident counts, and the volume of community reports.
- 📝 **Official signal monitoring**: Collect posts by Tibo (`@thsottiaux`) through a Chrome extension and webhook, then store classification results and audit information.
- 🌐 **Multilingual dashboard**: Supports Japanese (`ja`), English (`en`), and Chinese (`zh`), including automatic interpretation of time expressions.

## Public API

The observatory provides a read-only endpoint for the current reset status and probability estimates:

```text
GET https://codex.gussuriworks.com/api/current
```

Pass a locale when you want localized labels in the response:

```text
GET…
