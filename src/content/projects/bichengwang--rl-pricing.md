---
repo: "BichengWang/RL-pricing"
name: "RL-pricing"
description: "A reproducibility lab for trading AI: published RL and LLM trading claims re-tested under a pre-registered protocol, with a causal benchmark and a live track."
readmeQualityOk: true
url: "https://github.com/BichengWang/RL-pricing"
homepage: "https://bichengwang.github.io/RL-pricing/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["algorithmic-trading", "backtesting", "benchmark", "deep-reinforcement-learning", "leaderboard", "llm-agents", "portfolio-management", "quantitative-finance", "reinforcement-learning", "reproducibility"]
stars: 343
forks: 22
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 3
createdAt: "2021-05-16T21:16:16Z"
lastCommitAt: "2026-11-06T12:16:59Z"
lastReleaseAt: "2026-11-02T22:02:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 40
maintainers: ["BichengWang", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc8949513d59efe74c2f1bf6fb2afd91f48afa1f26bcb642b014510b0ba7640a/BichengWang/RL-pricing"
discussionCount: 1
---

# RL-pricing: a reproducibility lab for trading AI

  Every verdict is published next to the authors' reply, including the verdicts against our own paper.

Three public instruments back every verdict: a causal backtesting benchmark,
a live track scored only on market data that did not exist when a policy was
published, and a ledger of decisions committed before each US market open.

In the press: [*Five Years After His Trading-AI Paper, a Bay Area Engineer Put It on Trial*](https://www.sfbayareatimes.com/articles/bicheng-kenneth-wang-rl-pricing-trading-ai-claims),
SF Bay Area Times, October 2026.

## Verdicts

| Report | Claim | Level | Claimed | Ours (95% interval) | Verdict |
| --- | --- | --- | --- | --- | --- |
| [r0-wang-zhang-2026](https://github.com/BichengWang/RL-pricing/blob/HEAD/reports/r0-wang-zhang-2026/report.md) | `ddpg-annual-return` (annual_return) | L2 | 55.5% | 24.6% [17.3%, 31.9%] | ✗ does not hold |
| [r0-wang-zhang-2026](https://github.com/BichengWang/RL-pricing/blob/HEAD/reports/r0-wang-zhang-2026/report.md) | `ddpg-sharpe` (sharpe) | L2 | 1.38 | 1.16 [0.93, 1.39] | ◐ partly holds |
|…
