---
repo: "bennyjo/phil"
name: "phil"
description: "Phil is a self-improving trader: an AI agent that trades short-term prediction markets and rewrites his own strategy after every settled bet. Paper 24/7 in the cloud; small capped real stakes via Pearl Connect."
readmeQualityOk: true
url: "https://github.com/bennyjo/phil"
homepage: "https://www.pearl.you/connect"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-agents", "autonomous-agents", "claude-code", "olas", "polymarket", "prediction-markets"]
stars: 240
forks: 157
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-30T21:45:01Z"
lastCommitAt: "2026-10-29T05:49:28Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 87
undervaluedScore: 29
maintainers: ["claude", "bennyjo"]
openGraphImageUrl: "https://opengraph.githubassets.com/48e66de535278e3df40072f5c636c951b4c9132bb4dcf795973e5f1e60c3ebee/bennyjo/phil"
---

# Phil the self-improving trader

**Phil is a self-improving trader: an AI agent that trades short-term
prediction markets and rewrites its own strategy after every resolved
bet.** Paper trading is the 24/7 learning engine. Real money runs alongside
it, deliberately small: capped stakes through
[Pearl Connect](https://github.com/valory-xyz/connect), only in edge classes
whose settled evidence has earned it.

The name honors the man who relived the same day until he'd learned enough
to win it, and the groundhog who makes forecasts.

## The experiment

Claude Code gets a simulated $1,000 bankroll and the short-term Polymarket
universe: earnings beats, daily sports, pre-match esports, official economic
prints, near-term news. Crypto up-or-down coin-flips are banned. Every cycle
it settles yesterday's bets against official resolutions and scores its own
calibration against the market price it paid. It writes a retrospective when
bets have settled. A swarm of cheap screening subagents scores ~300 markets
per full cycle against the live price (`core/screen.py`), and the agent
spends its research slots on the largest divergences. It **edits its own
playbook, risk policy, tooling,…
