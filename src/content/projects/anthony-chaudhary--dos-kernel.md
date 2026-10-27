---
repo: "anthony-chaudhary/dos-kernel"
name: "dos-kernel"
description: "Catch your AI agents when they lie about what they shipped — verifies claims against git instead of believing the agent."
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/dos-kernel"
homepage: "https://pypi.org/project/dos-kernel/"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["agent-orchestration", "cli", "developer-tools", "llm-agents", "mcp", "multi-agent", "python", "trust", "verification", "agent-monitoring"]
stars: 20
forks: 4
openIssues: 122
closedIssues: 153
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-10T21:25:11Z"
lastCommitAt: "2026-10-27T04:07:27Z"
lastReleaseAt: "2026-06-13T06:46:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 44
maintainers: ["anthony-chaudhary", "webbrain-one"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1265531036/d13aecfc-8646-4d50-a7cb-2324cf885186"
discussionCount: 3
---

# DOS — the Dispatch Operating System

> ### Catch your AI agents when they lie about what they shipped.

> 📊 **See it run on real repos:** the **[scoreboard](https://anthony-chaudhary.github.io/dos-kernel/scoreboard/)**
> scores 15 popular AI-built repos (roborev, open-interpreter, crewAI, autogen, …)
> — how much agents wrote, which ones, and whether each commit's claim is backed
> by its own diff. Score yours: `dos commit-audit --sweep --workspace . BASE..HEAD`.

  exit code refuses the false "done". Every line is the real CLI's verbatim output —

  The only difference is a verdict DOS reads from the real world — here, git — never the agent's word.</em>

An AI agent will tell you it finished. DOS checks the real world instead of
taking its word — and the nearest piece of the real world is your git history.
An agent says it shipped the login endpoint; did it? Run one command,
`dos verify`, and it answers from the artifacts the work left behind, not from
what the agent typed: a commit backs the claim → `SHIPPED`, exit `0`; nothing
landed → `NOT_SHIPPED`, exit `1`. The agent's story never enters into it. (Git
is just the first witness DOS reads; the file tree, the clock, a CI…
