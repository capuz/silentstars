---
repo: "ScriptedAlchemy/tracedecay"
name: "tracedecay"
description: "Code intelligence tool with local semantic graph and holographic memory"
url: "https://github.com/ScriptedAlchemy/tracedecay"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 43
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 13
recentReleases: 10
createdAt: "2026-06-06T23:05:08Z"
lastCommitAt: "2026-07-04T06:12:09Z"
lastReleaseAt: "2026-06-24T01:28:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 44
maintainers: ["ScriptedAlchemy"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6a59d29e5821447d08349c04268c6fca3f9fe85b62b97e1079c494e6de47b6e/ScriptedAlchemy/tracedecay"
---

</p>

<h3 align="center">Semantic Code Intelligence for AI Coding Agents</h3>

</p>

</p>

---

## Why tracedecay?

AI coding agents waste tokens exploring codebases. Every grep, glob, and file read costs money. On complex tasks, agents spawn multiple Explore sub-agents that scan hundreds of files just to build context.

**tracedecay gives agents a pre-indexed semantic knowledge graph.** Instead of scanning files, the agent queries the graph and gets instant, structured answers -- the right symbols, their relationships, and source code, in one call.

### How It Works

```
┌──────────────────────────────────────────────────────────────┐
│  AI Coding Agent (Claude Code, Codex, Gemini, Cursor, ...)   │
│                                                              │
│  "Implement user authentication"                             │
│        │                                                     │
│        ▼                                                     │
│  ┌─────────────────┐       ┌─────────────────┐               │
│  │  Sub-agent      │ ───── │  Sub-agent      │               │
│  └────────┬────────┘       └─────────┬───────┘               │…
