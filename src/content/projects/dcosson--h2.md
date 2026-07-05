---
repo: "dcosson/h2"
name: "h2"
description: "An agent runner, messaging, and orchestration layer."
readmeQualityOk: true
url: "https://github.com/dcosson/h2"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 154
forks: 12
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-02T04:21:09Z"
lastCommitAt: "2026-07-02T17:40:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 26
maintainers: ["dcosson", "mikeschinkel"]
openGraphImageUrl: "https://opengraph.githubassets.com/e676b22c072904e35d5a79043143c2a05115d733198a3c1fd1966e6e4e475b5b/dcosson/h2"
---

# h2

A harness for your harnesses. An agent runner, messaging, and orchestration layer for AI coding Agents.

</p>

## What it does

h2 manages AI coding agents as background processes, lets them message each other and you, and coordinates teams of agents working on projects together. It's a 3-tier system — use as much or as little as you need.

h2 is not a custom harness — it wraps existing agent tools (Claude Code, Codex, etc.) by communicating through their TTY interface. It works with Claude Max and ChatGPT Pro plans out of the box. No API keys or `setup-token` required.

## Tier 1: Agent Runner

Launch, monitor, and manage AI coding agents.

```bash
h2 run                          # start an agent with the default role
h2 run --role concierge         # start with a specific role
h2 run coder-1 --detach  # start in background
h2 list                         # see all agents and their current state
h2 peek coder-1                 # check what an agent is working on
h2 attach coder-1               # take over an agent's terminal
h2 stop coder-1                 # stop an agent
```

The command `h2 run` will run a new agent with the default role and attach to it in the…
