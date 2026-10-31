---
repo: "Aoisop/mawoagent"
name: "mawoagent"
description: "An auditable, reversible, evaluable local agent runtime that turns feedback into skills — and ships them only when evidence and tests say so."
readmeQualityOk: true
url: "https://github.com/Aoisop/mawoagent"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 109
forks: 11
openIssues: 0
closedIssues: 0
watchers: 28
contributors: 1
recentReleases: 4
createdAt: "2026-10-18T09:51:11Z"
lastCommitAt: "2026-10-31T07:46:36Z"
lastReleaseAt: "2026-10-28T03:07:34Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 28
maintainers: ["Aoisop"]
openGraphImageUrl: "https://opengraph.githubassets.com/69208de8aa6e8f477c8fdd0b65d969097d09935e7a67385944c1a89eb3e1ea75/Aoisop/mawoagent"
---

# mawoagent

[English](#en) · [简体中文](#zh)

## English

mawoagent is a local, Python-based **Agent Runtime** created and maintained by Aoisop, with both a web workbench and a command-line entry point. It connects model reasoning, tool execution, permission confirmation, session recovery, long-term memory, Skills, and self-evolution workflows, making it useful for project analysis and coding assistance as well as for learning how an agent runtime works and extending it.

The focus is the **Harness**: the model proposes actions, and the Runtime decides permissions, executes tools, persists state, and writes results back. The web UI and the CLI share the same capabilities.

### Quick start: frontend and backend

**Run `python -m agents.web` to start both the backend API and the frontend.** The frontend is plain HTML / CSS / JavaScript served by the same Python process. There is no need to install npm dependencies or run a separate frontend dev server.

| Part | Source | How to start or access |
| --- | --- | --- |
| Backend service | `agents/web.py`, `agents/` | `python -m agents.web` |
| Frontend page | `web/` | Open <http://127.0.0.1:8765> after the backend starts |
| CLI entry…
