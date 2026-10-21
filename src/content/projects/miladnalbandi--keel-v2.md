---
repo: "MiladNalbandi/keel-v2"
name: "keel-v2"
description: "keel's test-first flow as a LangGraph graph with LangChain agents, a dashboard, MCP tools, budgets and Claude/Codex/Copilot logins — in one Docker image"
readmeQualityOk: true
url: "https://github.com/MiladNalbandi/keel-v2"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [41, 37]
topics: ["ai-agents", "docker", "keel", "langchain", "langgraph", "mcp", "tdd"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-03T22:34:53Z"
lastCommitAt: "2026-10-21T08:40:05Z"
lastReleaseAt: "2026-10-07T06:23:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 47
maintainers: ["MiladNalbandi"]
openGraphImageUrl: "https://opengraph.githubassets.com/16df8d91da71ef8b2955f99853a455546101edb0a5961adec2eeac3016cbfeda/MiladNalbandi/keel-v2"
---

Everything runs in one Docker container: a dashboard, a terminal app and an MCP server for your own AI tools.

## Start

You need [Docker](https://docs.docker.com/get-started/get-docker/).

**1. Install keel** (once)

```bash
curl -fsSL https://raw.githubusercontent.com/MiladNalbandi/keel-v2/main/install.sh | bash
```

**2. Start it for your project** (a git folder). Your browser opens http://localhost:8080.

```bash
keel2 start ~/path/to/your/project
```

**3. Log in:** **Connections › Set up login**, then pick Claude, Codex or GitHub Copilot.

**4. Start work:** **Flow › Start a flow**. Write what you want. Approve when keel asks you (◆).

## How it works

```
 you: "show each player's rank"
         │
         ▼
  1. spec     an agent writes what to build              ◆ you approve
  2. test     an agent writes a test that fails
  3. code     an agent writes code until the test passes ◆ you approve
  4. review   agents check the whole change              ◆ you approve
         │
         ▼
 done: tested commits on a new branch. keel never pushes.
```

## What you see

| Page | What it shows |
|---|---|
| **Flow** | the running flow, step by step; several flows side by side (a…
