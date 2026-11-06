---
repo: "davidxu277/alpha-timing"
name: "alpha-timing"
description: "Alpha Timing: regime-routed trading system — market-regime nowcaster + per-regime return predictors + cost-aware hysteresis"
readmeQualityOk: true
url: "https://github.com/davidxu277/alpha-timing"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 114
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-18T03:28:30Z"
lastCommitAt: "2026-11-06T02:43:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 22
maintainers: ["github-actions[bot]", "davidxu277"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ca1dad282ff6c3edf6b671099ff7d5b73b7d3c02aeb01f05d9be0c77dbe19b2/davidxu277/alpha-timing"
---

# Alpha Timing

### Regime-Aware Quantitative Trading

*A market-regime classifier routes each trading day to a specialist return predictor —*
*trading a small drag in bull markets for large protection in bear markets.*

**English** | [中文文档](https://github.com/davidxu277/alpha-timing/blob/HEAD/README.zh.md)

Xu Shuyao · NUS · 2026 · [LinkedIn](https://www.linkedin.com/in/shuyao-xu-4841103a7)

---

## Overview

**Alpha Timing** asks one question: *if a model can tell what state the market is currently in,
can it size positions more intelligently than simply staying fully invested?*

The system has three stages. A **regime classifier** identifies the market's current state each day
(Bull / Bear / Sideways / Crisis). Based on that state, one of **four specialist models** predicts the
near-term return. A **decision layer** turns that prediction into a position between 0 (cash) and 1
(fully long), with a defensive bias in risk-off regimes and an automatic volatility brake.

```
                       ┌──────────────────────────────┐
 daily features ──────►│ regime nowcaster (RandomForest)
 (trailing only)       │ Bull / Bear / Sideways / Crisis…
