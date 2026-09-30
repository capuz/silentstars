---
repo: "Alpha-Park/genpark-length-bias-penalty-reward-calibrator-skill"
name: "genpark-length-bias-penalty-reward-calibrator-skill"
description: "Verbosity penalty and length bias calibrator normalizing raw model rewards against response token lengths"
readmeQualityOk: true
url: "https://github.com/Alpha-Park/genpark-length-bias-penalty-reward-calibrator-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "alignment", "developer-tools", "eval-metrics", "length-bias", "mcp", "python-standard-library", "reward-calibration", "rlhf", "score-normalizer"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 0
recentReleases: 0
createdAt: "2026-09-30T09:56:17Z"
lastCommitAt: "2026-09-30T09:56:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 15
maintainers: ["alphaparkinc"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f9f0b2a8bf4d58a3163a7deb317ddadc882fa609bbf057f181698af55648969/Alpha-Park/genpark-length-bias-penalty-reward-calibrator-skill"
---

# genpark-length-bias-penalty-reward-calibrator-skill

Verbosity penalty calibrator discounting inflated reward signals associated with excessively long model outputs.

## Architecture

```mermaid
flowchart LR
    Length[Token Length] --> Excess[max(0, Length - Target)]
    Excess --> Penalty[Penalty = alpha * Excess]
    Raw[Raw Model Reward] --> Discount[Calibrated Reward = Raw - Penalty]
    Penalty --> Discount
```

## Features
- **Linear and Exponential Decay**: Flexible penalty profiles.
- **Zero Dependencies**: 100% Python Standard Library.
