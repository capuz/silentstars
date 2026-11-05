---
repo: "hyparam/hypaware"
name: "hypaware"
description: "The improvement loop for all your agents"
readmeQualityOk: true
url: "https://github.com/hyparam/hypaware"
homepage: "https://hypaware.ai"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agent", "ai", "claude", "claude-code", "codex", "llm", "observability", "traces"]
stars: 16
forks: 1
openIssues: 234
closedIssues: 1058
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-05-21T14:35:44Z"
lastCommitAt: "2026-11-05T11:18:36Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 48
maintainers: ["HypForge", "philcunliffe", "platypii"]
openGraphImageUrl: "https://opengraph.githubassets.com/661bd88bf4c35bf72781f11141a6f132ebeccc3ee74bfce41c9dc36c14aeca6e/hyparam/hypaware"
---

# HypAware

HypAware is the improvement loop for all your agents. It records every
session from your AI clients (Claude Code, Codex, Cursor, OpenCode, and
more) into one queryable history on your machine. Then it helps you find
what went wrong, what keeps repeating, and what to fix.

- **Collect.** A lightweight background daemon captures sessions from the
  clients you already use. No changes to how you work.
- **Store.** Sessions land in a local cache of open table files, linked as a
  graph of sessions, repos, files, tools, and skills. No data warehouse.
- **Analyze.** Query everything with SQL or search, or have your client
  answer a question in plain English.
- **Act.** HypAware turns patterns in your history into concrete fixes, like a
  skill worth adding, with the sessions that prove it.

## Install

Requires Node.js 22.12 or newer, on macOS or Linux.

```sh
npm install -g hypaware
hyp setup
```

You can also ask your AI agent to install HypAware using these same two
commands. Without a terminal, `hyp setup` prints a guide so the agent can
walk you through the choices and run unattended setup. You complete any
browser sign-ins yourself. Agents using a terminal can read…
