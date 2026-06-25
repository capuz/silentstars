---
repo: "steph-dove/klaussy-agents"
name: "klaussy-agents"
description: "Multi-agent repo boilerplate generator. One command to make any repo ready for Claude Code, Gemini CLI, Cursor, Codex, GitHub Copilot, and Google Antigravity — each gets the same conventions and the same workflow skills in its own native format."
url: "https://github.com/steph-dove/klaussy-agents"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-18T01:54:28Z"
lastCommitAt: "2026-06-25T02:06:40Z"
lastReleaseAt: "2026-06-24T23:51:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 46
maintainers: ["steph-dove"]
openGraphImageUrl: "https://opengraph.githubassets.com/57ca0454beebeebb283e532d8c6665410a59ac3bd7ec3b7a06162356fe62f322/steph-dove/klaussy-agents"
---

# klaussy

Multi-agent repo boilerplate generator. One command to make any repo ready for
**Claude Code, Gemini CLI, Cursor, Codex, GitHub Copilot, and Google Antigravity** — each gets the
same conventions and the same workflow skills in its own native format.

## Install

```bash
pip install klaussy-agents
```

Requires [klaussy-repo-conventions](https://pypi.org/project/klaussy-repo-conventions/) (installed automatically).

## Quick Start

```bash
cd your-repo
klaussy init
```

That's it. You'll be prompted for your base branch (auto-detects `dev`, `main`, etc.), then klaussy generates everything.

By default klaussy bootstraps **all** supported agents from the same conventions. To narrow to a subset, pass `--agents`:

```bash
klaussy init                                   # all agents (default)
klaussy init --agents claude                   # Claude Code only
klaussy init --agents claude,gemini,cursor     # a subset
```

See [Multi-agent targets](#multi-agent-targets) for what each agent gets.

## Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [What Gets Generated](#what-gets-generated)
- [Multi-agent targets](#multi-agent-targets)
- [Options](#options)
-…
