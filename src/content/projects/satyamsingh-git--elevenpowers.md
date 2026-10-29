---
repo: "SatyamSingh-Git/ElevenPowers"
name: "ElevenPowers"
description: "make, but for correctness claims. Decides when a coding agent's work is actually done, and un-decides it when you edit the code."
readmeQualityOk: true
url: "https://github.com/SatyamSingh-Git/ElevenPowers"
homepage: "https://satyamsingh-git.github.io/ElevenPowers/architecture/"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["ai-agents", "claude-code", "developer-tools", "llm", "verification", "agent-skills", "agentic-coding", "agentic-workflow", "coding-assistant"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-09-09T03:14:18Z"
lastCommitAt: "2026-10-29T05:49:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 43
maintainers: ["SatyamSingh-Git"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e0b5193cca3699d298d422b00a00ad3e41c5d7eb5f020a98dd811b910ef9f8d/SatyamSingh-Git/ElevenPowers"
---

# ElevenPowers

### Your coding agent says it's done.<br/>This asks for the receipts.

**[The idea](#the-thirty-second-version)** · **[The survey](#first-i-went-and-read-the-competition)** · **[What's different](#whats-different-here)** · **[In your project](#using-elevenpowers-in-your-project)** · **[Install](#install)** · **[Status](#where-this-actually-is)** · **[Credit](#standing-on-fourteen-sets-of-shoulders)** · **[The journey](#this-is-a-work-in-progress-and-says-so-on-purpose)**

**[🗺️ Open the live architecture graph](https://satyamsingh-git.github.io/ElevenPowers/architecture/)** — five views, including a [contributor roadmap](https://satyamsingh-git.github.io/ElevenPowers/architecture/#planned)

---

> **What this is.** An evidence and verification layer for coding agents, with change-impact analysis and project health checks.
> It watches the commands your agent already runs, turns their output into **evidence**, and binds each record to the exact bytes of the files it observed.
> It helps identify what a change may affect, keeps earlier behavior checks visible across tasks, and **computes a verification state** when the agent claims it's done.
> Edit an observed file…
