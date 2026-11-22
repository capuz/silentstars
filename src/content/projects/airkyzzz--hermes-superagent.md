---
repo: "AirKyzzZ/hermes-superagent"
name: "hermes-superagent"
description: "Hermes Agent plugin: one router in front of a worker per task, a watchdog that restarts the stuck ones, and a ledger that never drops an issue, task or Claude Code session"
readmeQualityOk: true
url: "https://github.com/AirKyzzZ/hermes-superagent"
homepage: "https://hermes-agent.nousresearch.com/marketplace?q=superagent"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-orchestration", "ai-agents", "claude-code", "deepseek", "hermes-agent", "hermes-plugin", "multi-agent", "nous-research"]
stars: 9
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-05T11:11:37Z"
lastCommitAt: "2026-11-22T11:52:40Z"
lastReleaseAt: "2026-11-10T16:22:29Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 79
undervaluedScore: 45
maintainers: ["AirKyzzZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0c5acabd34f415c9efa491c338e4e3cf1f0c6f6a2419764a87ffa89d35b9606/AirKyzzZ/hermes-superagent"
---

**A plugin for [Hermes Agent](https://github.com/NousResearch/hermes-agent), Nous Research's AI agent, for when you run more agents than you can watch.**

You message one coordinator (the router) in chat, and every task goes to its own isolated agent. A separate process restarts the ones that hang and tells you when it can't fix them. A ledger keeps every issue and task listed until its source confirms it closed, and puts every Claude Code session on one board. [That part runs without Hermes](#install).

Based on DeepSeek's [Super-agent design](https://github.com/deepseek-ai/dsh-superagent-prototype).

## Quickstart

One command and about ten seconds. No Hermes, model or credentials: only the agents and the source data are scripted. The gate, router, watchdog, ledger and SQLite store are the real code, and each worker is a real process. You need [uv](https://docs.astral.sh/uv/) on macOS or Linux, and it fetches a newer Python if yours is too old.

```bash
uvx --from git+https://github.com/AirKyzzZ/hermes-superagent superagent-demo
```
