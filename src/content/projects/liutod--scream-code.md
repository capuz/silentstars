---
repo: "LIUTod/scream-code"
name: "scream-code"
description: "中文UI / A terminal-based coding agent with unlimited concurrency, multi-agent orchestration, and a persistent Python runtime (RLM) for stateful data work and recursive subagent delegation"
readmeQualityOk: true
url: "https://github.com/LIUTod/scream-code"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["agent", "agent-cli", "agentic-ai", "chinese", "cli", "memory", "sag", "tui", "wolfpack", "screamcode"]
stars: 135
forks: 14
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-06T12:58:23Z"
lastCommitAt: "2026-09-01T08:42:40Z"
lastReleaseAt: "2026-06-30T03:38:23Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 77
undervaluedScore: 26
maintainers: ["LIUTod"]
openGraphImageUrl: "https://opengraph.githubassets.com/d924fd6494ada6bf5c7673d19522dc5b314d9a9093ebe68e393e3d5640db3d1d/LIUTod/scream-code"
---

</a>
</p>

</p>

</p>

</p>

---

### Installation

```bash
npm install -g scream-code
```

> [!NOTE]
> Requires **Node.js >= 22**. Git recommended. Same command installs and updates.

### Quick Start

```bash
scream            # terminal UI
scream web        # browser UI (http://localhost:3210)
scream --auto     # auto permission mode
scream -y         # auto-approve mode
```

On first launch Scream walks you through model setup (`/config`). 130+ providers built in — or point it at any OpenAI-compatible endpoint with `/config diy`. Switch models anytime with `/model`, no restart needed — or use `/model diy` to give each sub-agent its own model, letting every model do what it does best.

When Scream wants to modify files or run commands, an approval panel pops up — pick a number, press Enter.

### Features

- **Goal Loop** — autonomous, goal-driven execution with an independent judge agent and token/time budget control.
- **Wolfpack** — unlimited parallel sub-agents (coder / explore / plan / verify / reviewer / oracle / writer / worker).
- **Persistent Memory** — structured pain-point memory with FTS5 full-text + tag + vector retrieval, shared across sessions.
- **Local Knowledge…
