---
repo: "rongxinzy/SwarmMind"
name: "SwarmMind"
description: "AI agent teams as primary actors — humans as referees."
readmeQualityOk: true
url: "https://github.com/rongxinzy/SwarmMind"
homepage: "https://www.rongxzyai.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [51, 46]
stars: 13
forks: 3
openIssues: 7
closedIssues: 22
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-20T15:59:20Z"
lastCommitAt: "2026-07-22T06:11:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 51
maintainers: ["hawkli-1994", "whz1106"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7626514946a05f5a174fe0a0b4fc8c259df7b452717e4576130e09f7cc292bd/rongxinzy/SwarmMind"
---

# SwarmMind

> **An open-source, self-hosted agent chat app. Plain B/S architecture.**
> Chat directly with models, run agent tasks, organize work into projects, and manage your org's accounts, models, and MCP permissions.

[中文文档](https://github.com/rongxinzy/SwarmMind/blob/HEAD/README_zh.md) · [Architecture](https://github.com/rongxinzy/SwarmMind/blob/HEAD/docs/architecture.md) · [CLI](https://github.com/rongxinzy/SwarmMind/blob/HEAD/docs/cli.md) · [Roadmap](https://github.com/rongxinzy/SwarmMind/blob/HEAD/docs/roadmap.md) · [Contributing](#contributing--community)

---

## What It Is

SwarmMind is a straightforward browser/server chat application with two modes, switched from the top of the sidebar:

**Chat mode** — talk to a model directly. No agent runtime, no plans, no orchestration. The frontend connects via the Vercel AI SDK; the model list is whatever your admin allocated to you.

**Work mode** — agent work. Two things live here:

- **Tasks**: agent sessions executed by the [DeerFlow](https://github.com/hawkli-1994/deer-flow) runtime. The agent plans, calls tools and MCP servers, and streams its progress.
- **Projects**: a workspace folder that holds multiple task…
