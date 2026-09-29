---
repo: "Blave-TW/blave-agent"
name: "blave-agent"
description: "Quant infrastructure for AI agents — a free, open-source macOS workspace where your Claude Code or Codex turns a trading idea into a backtested strategy and runs it live."
readmeQualityOk: true
url: "https://github.com/Blave-TW/blave-agent"
homepage: "https://blave.org"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [59, 37]
topics: ["ai-agent", "algorithmic-trading", "backtesting", "claude-code", "codex", "crypto", "electron", "macos", "mcp", "quant"]
stars: 84
forks: 15
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-04-28T03:27:20Z"
lastCommitAt: "2026-09-29T07:47:51Z"
lastReleaseAt: "2026-09-28T17:40:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 37
maintainers: ["Blave-Wei"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1223137280/ec05fd14-c484-418c-ae3f-54e360d3b787"
discussionCount: 0
---

# Blave Agent

**Agentic Quant Workspace**

## Turn Your Agent into a Quant

Free and open source. Connect your Claude Code or Codex. You describe the idea; it writes the strategy, runs the backtest, and trades it live.

**English** | [繁體中文](https://github.com/Blave-TW/blave-agent/blob/HEAD/README.zh-TW.md)

 

https://github.com/user-attachments/assets/7b33edb7-9c65-4e19-854a-40295c6e8b74

[Download the macOS app](https://github.com/Blave-TW/blave-agent/releases/latest) · [Quick start (from source)](#quick-start) · [Run it with your computer off](https://blave.org/agent/en)

Star the repo if this is useful — and Watch › Releases to get notified of new versions.

## What Makes It Different

### Backtests That Check Whether It Was Luck

- Every Type A backtest runs a Monte Carlo permutation test by default (MCPT, `lib/validation.py`) and records a p-value: could shuffled data have done as well?
- A parameter scan (`lib/param_scan.py`) looks for a plateau of parameters that all work, not the single best cell.
- Rolling walk-forward (`lib/walk_forward.py`) measures out-of-sample performance.
- The fee has to match the real market. A fee of 0 is flagged by `lib/quality_check.py` and…
