---
repo: "gulagala001/dsh-intelligent-ui"
name: "dsh-intelligent-ui"
description: "Turn DeepSeek Harness answers into interactive UI: calculators, charts, forms, simulations and games."
originalDescription: "让 DSH 的回答变成能直接操作的界面：计算器、图表、表单、模拟和小游戏。 Turn DeepSeek Harness answers into interactive UI: calculators, charts, forms, simulations and games."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gulagala001/dsh-intelligent-ui"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["deepseek-harness", "dsh", "dsh-plugin", "generative-ui", "interactive-ui", "openui", "deepseek-harness-plugin", "dsh-bundle"]
stars: 26
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-09T05:17:11Z"
lastCommitAt: "2026-11-12T05:19:49Z"
lastReleaseAt: "2026-10-23T16:48:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 43
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3f3dccf0fa7f3ba8f27656cd947dc2cc00478892049978cca648f2286ba92867/gulagala001/dsh-intelligent-ui"
---

## Quick Start

**Requirements:** DSH **0.2.2-rc.2**, Node.js **24.9.0+**, and a model configured in DSH. How good the results are depends mainly on the model.

### 1. Install

In DSH, open **Plugins → ＋ Add plugin** and paste:

```text
https://github.com/gulagala001/dsh-intelligent-ui/releases/download/v0.2.2-rc.2.iui.1.0.17/dsh-intelligent-ui-0.2.2-rc.2.iui.1.0.17.tgz
```

Wait for your current tasks to finish, then fully restart DSH as prompted. Your existing settings and sessions are preserved. For command-line install, upgrade, and uninstall, see the [installation guide](https://github.com/gulagala001/dsh-intelligent-ui/blob/HEAD/docs/install.md). To verify the file, see [SHA256SUMS](https://github.com/gulagala001/dsh-intelligent-ui/releases/download/v0.2.2-rc.2.iui.1.0.17/SHA256SUMS).

### 2. Try One Thing First

Hover over **New session** in the sidebar and click **Chat** on the right; or type `/intelligent-ui` in a regular session. Then ask:

```text
Make an adjustable bill-splitting tool: bill of 387 yuan, plus an 8% service charge, split evenly among 5 people. The number of people, the amount, and the service charge can all be changed.
```

The answer will show a…
