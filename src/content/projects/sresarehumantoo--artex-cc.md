---
repo: "sresarehumantoo/ARTEX-CC"
name: "ARTEX-CC"
description: "Autonomous penetration testing platform for Claude Code. 65 MCP tools, dual-graph architecture, multi-instance coordination, web UI, recording proxy, and evidence capture."
readmeQualityOk: true
url: "https://github.com/sresarehumantoo/ARTEX-CC"
homepage: "https://artex-cc.com"
language: "Go"
languages: ["Go"]
languagePcts: [73]
topics: ["ai-security", "claude-code", "mcp", "mcp-server", "offensive-security", "penetration-testing", "security", "red-team", "cybersecurity", "golang"]
stars: 134
forks: 43
openIssues: 3
closedIssues: 53
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-21T15:59:34Z"
lastCommitAt: "2026-11-27T16:30:38Z"
lastReleaseAt: "2026-11-26T00:05:10Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 40
maintainers: ["sresarehumantoo", "zhang2y17"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1466709643/8c39e0a4-28cc-48b1-8753-4904875ae9e1"
discussionCount: 0
---

**Use your Claude subscription to run pentests. No API key needed.**

ARTEX is an autonomous penetration testing platform that exposes [upstream ARTEX](https://github.com/BaaRai/ARTEX)'s pentest model as MCP tools Claude Code calls through your existing Claude subscription. Asset graph, exploration tracking, finding management, coverage recording, traffic capture, and report generation, exposed as 65 MCP tools. No separate LLM API key, no token budget, no agent loop of its own.

You bring the brain. ARTEX brings the hands.

> **Authorized use only.** This is an offensive security tool, for penetration
> testing, red teaming, CTFs and lab work. Use it only against systems you own
> or have explicit permission to test.

## How it works

Claude Code decides what to test, what tools to call, and in what order. ARTEX executes the calls: inserting assets, tracking the exploration graph, recording findings and credentials, logging coverage, and capturing HTTP traffic through its built-in recording proxy. The exploration graph keeps Claude oriented across long engagements, so a session you stop today resumes tomorrow with `graph_overview`.
