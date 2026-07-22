---
repo: "Coding-Dev-Tools/engraphis"
name: "engraphis"
description: "Local-first, inspectable memory for coding agents: durable context across sessions and repositories, code-aware recall, bi-temporal history, MCP, and a self-hosted WebUI."
readmeQualityOk: true
url: "https://github.com/Coding-Dev-Tools/engraphis"
homepage: "https://engraphis.com/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-memory", "ai-agents", "developer-tools", "knowledge-graph", "local-first", "mcp", "python", "self-hosted"]
stars: 122
forks: 20
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 4
recentReleases: 3
createdAt: "2026-06-30T05:04:56Z"
lastCommitAt: "2026-07-22T06:11:15Z"
lastReleaseAt: "2026-07-18T22:24:21Z"
status: "newborn"
tags: ["solo_builder", "funded"]
healthScore: 90
undervaluedScore: 34
maintainers: ["Coding-Dev-Tools"]
openGraphImageUrl: "https://opengraph.githubassets.com/cdde24bfead2e59696b25ef95cd84f30e3fe0035cd0fc677dc224a3adb75d631/Coding-Dev-Tools/engraphis"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/Jaixii"]
discussionCount: 1
---

# Engraphis

https://engraphis.com/

https://discord.com/invite/Wfr2ejBmY

**Give your AI agents a memory. See it, search it, and watch it self-maintain — all in a beautiful WebUI on your own machine.**

<br>

  <br>
  <sup>Knowledge Graph · run <code>engraphis-dashboard</code> to see it live</sup>
</p>

<br>

---

> Open-source users: update regularly for the latest fixes and improvements.
>
> **Version 1.0:** the core engine, dashboard, MCP server, Pro features, and Team layer
> are generally available. Team includes multi-user authentication, roles, seat management,
> invitation and password-reset flows, audit history, and scoped cloud-sync tokens.

## The WebUI — one command, local-first

```bash
pip install "engraphis[server]"
engraphis-dashboard
```

Opens `http://127.0.0.1:8700` in your browser. No cloud, no signup, no API key for memory.
Memory lives in a local SQLite file on your machine. When hosted user accounts are enabled,
their credentials and sessions live in a companion `<database>.users.db`; back up both files.

**You'll see the full product** — a dark-themed (with multiple theme options in left sidebar), sidebar-navigated dashboard with 14 tabs:

**New graphical…
