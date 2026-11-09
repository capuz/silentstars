---
repo: "PkLavc/Autotrader"
name: "Autotrader"
description: "Autonomous AI trading system powered by Kronos. Forecasts markets, builds portfolios and paper-trades automatically with GitHub Actions."
readmeQualityOk: true
url: "https://github.com/PkLavc/Autotrader"
homepage: "https://pklavc.com/Autotrader"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [72, 24]
topics: ["ai-trading-system", "algorithmic-trading-quantitative", "artificial-intelligence", "automated-trading-tool", "deep-learning", "finance", "financial-machine-learning", "github-actions", "machine-learning", "market-prediction"]
stars: 35
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-07T02:43:14Z"
lastCommitAt: "2026-11-09T03:31:11Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 37
maintainers: ["PkLavc", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbd2b76e960f16bb13764892f343b26cf2aa8b551e4ac60c7e4edea3b9f280e6/PkLavc/Autotrader"
---

# Autotrader

Autonomous daily-market research and guarded broker-execution platform powered by the
[Kronos](https://github.com/shiyu-coder/Kronos) financial foundation model.

**Dashboard:** https://pklavc.com/Autotrader/

> The research portfolio is paper trading. Broker execution is disabled until an owner
> explicitly configures credentials and safety gates. Profit is not guaranteed and the
> project is not investment advice.

## Architecture

```text
Adjusted daily market data + corporate actions
                    |
                    v
       deterministic Kronos forecast
                    |
                    v
       risk-adjusted rank + constraints
                    |
             close-of-day signal
                    |
                    v
       next-session-open paper execution
                    |
       accounting + costs + state audit

Optional broker lane (separate book):
signal report -> guarded plan -> Alpaca paper -> reconciliation audit
                                      |
                         live remains hard-locked

Private fleet lane:
one signal -> isolated queue job per account -> private account snapshots…
