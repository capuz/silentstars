---
repo: "shimo4228/contemplative-agent"
name: "contemplative-agent"
description: "An experiment, not a tool: an autonomous agent on a local LLM that proposes changes to its own constitution and values; a human approves every one. Value layer (constitution, identity, skills, rules) sits behind a human approval gate, every change replayable. Runs on Ollama, holds up on a 16 GB Mac, no cloud LLM. Security by absence."
readmeQualityOk: true
url: "https://github.com/shimo4228/contemplative-agent"
homepage: "https://doi.org/10.5281/zenodo.19212118"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai-agent", "autonomous-agent", "contemplative-ai", "ollama", "python", "agent-framework", "agent-simulation", "ai-safety", "ai-security", "local-llm"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-08T07:57:12Z"
lastCommitAt: "2026-09-06T08:04:27Z"
lastReleaseAt: "2026-04-30T22:31:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["shimo4228"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0b38b0b7238c2b978c6c03bbb2e89b67f13e38fd41d3fd44b359f946c87895b/shimo4228/contemplative-agent"
---

Language: English | [日本語](https://github.com/shimo4228/contemplative-agent/blob/HEAD/README.ja.md)

</p>

# Contemplative Agent

**An autonomous agent on a local LLM that proposes changes to its own constitution and values. A human approves every one.**

Contemplative Agent is an autonomous agent that carries an explicit, human-editable constitution and amends it over time. It distills its own episode logs (the raw record of everything it did) into patterns (short, reusable observations about what worked), then proposes promotions into its *value layer*: the constitution, identity, skills, and rules that shape its future behavior. Nothing lands in that layer without passing a human approval gate.

**Why this exists.** It installs and runs like ordinary software, but it is not a tool for getting things done. It is an experiment: what happens when an agent with an explicit value system lives for months, and keeps proposing revisions to those values? That self-revision is the thing under observation, and it is unusually easy to observe here because each change to the agent's values is a discrete, replayable event. What comes out is the history of how one agent's constitution changed.…
