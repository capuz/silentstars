---
repo: "Chemaclass/agnostic-ai"
name: "agnostic-ai"
description: "One source to rule them all: write agents, skills, rules, and hooks once, then sync them to your AI tools."
readmeQualityOk: true
url: "https://github.com/Chemaclass/agnostic-ai"
homepage: "https://agnostic-ai.org"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["agentic-ai", "claude", "codex", "gemini", "agnostic-ai", "agents-md", "ai-agents", "claude-code", "cli", "copilot"]
stars: 25
forks: 5
openIssues: 6
closedIssues: 1084
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-05-03T18:47:55Z"
lastCommitAt: "2026-10-25T22:11:12Z"
lastReleaseAt: "2026-05-14T20:15:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 48
maintainers: ["Chemaclass", "SauronBot", "motechFR"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c4b11b6074ef743aad0648c452de27a8b0f33b791b4cf614f098a7e2a3835ff/Chemaclass/agnostic-ai"
fundingLinks: ["CUSTOM:https://chemaclass.com/sponsor"]
---

# agnostic-ai

agnostic-ai keeps your coding tools working from the same project instructions. Edit one source, then run `agnostic-ai sync` to write the files Claude Code, Codex, and your other tools read.

Each AI tool reads its instructions from different files. Kept by hand, those files fall out of step. agnostic-ai keeps one source in plain Markdown and YAML inside your repository. It needs no account and no service. See [Why agnostic-ai](https://agnostic-ai.org/docs/why-agnostic-ai/).

## Set up with a coding agent

Paste this into Claude Code, Codex, Cursor, or another coding agent:

```text
Set up agnostic-ai in this repository. Follow https://agnostic-ai.org/agent-setup.txt exactly. Preserve existing AI tool behavior. Before any sync, check for existing CLAUDE.md, AGENTS.md, and similar files, and ask me what to do with their content. Finish with agnostic-ai sync --check. Summarize the targets selected and every file changed.
```

The [setup guide](https://agnostic-ai.org/docs/getting-started/) walks through agent-assisted or terminal setup, including keeping existing instructions.

## Quickstart

From your project root, with Node 18 or newer:

```bash
npm install -g…
