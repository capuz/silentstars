---
repo: "emrahaydemir960-ai/daimon-data-agent"
name: "daimon-data-agent"
description: "Open Source Data Science Agent for Discord and Slack"
readmeQualityOk: true
url: "https://github.com/emrahaydemir960-ai/daimon-data-agent"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["agents", "ai-agent", "anthropic", "bayesian-inference", "claude", "data-science", "discord-bot", "llm", "pymc", "slack-bot"]
stars: 58
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-22T20:09:29Z"
lastCommitAt: "2026-11-07T16:11:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 30
maintainers: ["github-actions[bot]", "emrahaydemir960-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dbd03183b96bbeb9cdb4bd17fa16b23b89435227559d14779cd455a59c0e6d3/emrahaydemir960-ai/daimon-data-agent"
---

# daimon

---

daimon is an open source data science agent that joins your team's Discord, Slack, or Microsoft Teams workspace and answers analysis questions directly in the thread. Mention it in a channel and it writes and runs code, fits Bayesian models with PyMC, and replies with charts, an uncertainty read, and a runnable marimo notebook that reproduces the result. Unlike general-purpose chatbots, it runs on Anthropic's Managed Agents with one tenant per server or workspace, so a single self-hosted deployment on your own API key can serve many communities with isolated memory and data. Anyone in the thread can follow up, and scheduled routines let recurring analyses post themselves where you ask.

## Features

- **Thread-native answers.** `@mention` the bot in a channel and it opens a thread, runs the analysis, and replies with a fitted model, a chart, a plain-English read on the uncertainty, and a [marimo](https://marimo.io) notebook that reproduces the result.
- **Shared context for the whole team.** Anyone in the server can follow up in the same thread; sessions keep their context across turns.
- **Scheduled routines.** Recurring analyses run headlessly and post results…
