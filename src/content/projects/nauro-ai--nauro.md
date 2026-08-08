---
repo: "Nauro-AI/nauro"
name: "nauro"
description: "Human controlled project context"
readmeQualityOk: true
url: "https://github.com/Nauro-AI/nauro"
homepage: "https://nauro.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-ai", "ai-agents", "codex", "cursor", "developer-tools", "llm", "mcp", "model-context-protocol", "claude-code"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-06T18:47:46Z"
lastCommitAt: "2026-08-08T04:35:58Z"
lastReleaseAt: "2026-07-13T04:06:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 65
maintainers: ["sronix"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1203130197/523c65c3-be80-4584-9018-c00a916a6474"
discussionCount: 0
---

# Nauro

**Give your agents the context code leaves out.**

Nauro keeps current state, open questions, and human-approved project judgment in one record, ready for every agent you connect.

The record combines project scope, state, open questions, and the rationale behind decisions. Nauro surfaces the relevant slice before work, then carries approved judgment and reported progress into later sessions and connected tools.

**Status:** Stable (1.x). Semantic versioning covers the CLI, local stdio MCP contract, on-disk store format, and curated `nauro-core` import API. Cloud sync and hosted MCP are versioned separately.

## See it in practice

https://github.com/user-attachments/assets/f75ede99-db11-4460-bc09-801c86df1e19

*A real Codex session, then a Claude session in Pareto, Nauro's development mock project.*

## Install

```bash
uv tool install nauro
```

Install `uv` with `curl -LsSf https://astral.sh/uv/install.sh | sh` on macOS or Linux, or use the [Windows instructions](https://docs.astral.sh/uv/getting-started/installation/). With Python 3.10 or newer, `pipx install nauro` also works.

## Try the demo

Pennykeep, the bundled demo, needs no account or agent setup:

```bash…
