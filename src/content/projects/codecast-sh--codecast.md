---
repo: "codecast-sh/codecast"
name: "codecast"
description: "Your team and its agents, in one workspace. Chat, calls, tasks, docs, pull requests and decisions, with Claude Code, Codex, Cursor, Gemini, OpenCode and pi as teammates. Everything links back to the session that did it."
readmeQualityOk: true
url: "https://github.com/codecast-sh/codecast"
homepage: "https://codecast.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agents", "claude", "claude-code", "codex", "cursor", "gemini", "orchestration", "agent-monitoring", "ai", "cli"]
stars: 51
forks: 9
openIssues: 2
closedIssues: 13
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2025-12-10T02:44:09Z"
lastCommitAt: "2026-11-23T10:20:22Z"
lastReleaseAt: "2026-01-29T04:32:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 53
maintainers: ["JasonBenn", "alexfgreen", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2b285cdeea097dda5751be78bab620313405d14732caf1c7f3f1acafbf2ec5a/codecast-sh/codecast"
---

Raise your AI army. Stay in command.

---

Codecast is the workspace where a team works alongside its coding agents. Chat, calls, tasks, docs, pull requests and decisions live in one place, with Claude Code, Codex, Cursor, Gemini, OpenCode, pi, Grok and Muse Spark as teammates in every one. Everything links back to the session that did it.

It works with the agents you already run. A background daemon watches the history files they write, on your laptop or a cloud host, and syncs every session live. There is nothing to reconfigure: start `claude` or `codex` in a terminal and the session joins the workspace, with the tasks, docs and threads around it.

One person can run dozens of agents and still be in command of them. An inbox sorts every session by who acts next. A decision queue collects the choices only a person can make. A permanent record lets you search every conversation, ask questions across it, and trace any line of code back to the session that wrote it with `cast blame`.

## Install

```bash
curl -fsSL codecast.sh/install | sh   # installs cast, starts the daemon, signs you in
cast setup                            # start the daemon on login
```

On Windows:
