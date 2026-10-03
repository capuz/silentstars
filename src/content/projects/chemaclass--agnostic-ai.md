---
repo: "Chemaclass/agnostic-ai"
name: "agnostic-ai"
description: "One source to rule them all: write agents, skills, rules, and hooks once, then sync them to your AI tools."
readmeQualityOk: true
url: "https://github.com/Chemaclass/agnostic-ai"
homepage: "https://agnostic-ai.org"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["agentic-ai", "claude", "codex", "gemini", "agnostic-ai", "agents-md", "ai-agents", "claude-code", "cli", "copilot"]
stars: 20
forks: 5
openIssues: 5
closedIssues: 744
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-05-03T18:47:55Z"
lastCommitAt: "2026-10-03T09:23:02Z"
lastReleaseAt: "2026-05-14T20:15:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 51
maintainers: ["Chemaclass"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcf0cfd01bf6cfabacbfbccfdf9481cf92b3d9951c408a8eda4e31c7c6b4d637/Chemaclass/agnostic-ai"
fundingLinks: ["CUSTOM:https://chemaclass.com/sponsor"]
---

# agnostic-ai

agnostic-ai is for developers and teams using more than one AI coding tool, or preparing to change tools. Write agents, skills, rules, hooks, and MCP configuration once; `agnostic-ai sync` turns those specs into each tool's native files. See [Why agnostic-ai](https://agnostic-ai.org/docs/why-agnostic-ai/).

AI tools store instructions in different files. Keeping those files by hand makes them drift. agnostic-ai keeps the editable source in plain Markdown and YAML in your repository. It needs no account or service.

## Set up with a coding agent

Paste this into Claude Code, Codex, Cursor, or another coding agent:

```text
Set up agnostic-ai in this repository. Follow https://agnostic-ai.org/agent-setup.txt exactly. Preserve existing AI tool behavior. Before any sync, check for existing CLAUDE.md, AGENTS.md, and similar files, and ask me what to do with their content. Finish with agnostic-ai sync --check. Summarize the targets selected and every file changed.
```

It takes about two minutes. The [agent setup guide](https://agnostic-ai.org/docs/agent-setup/) is the checklist the agent follows.

## Quickstart

From your project root, with Node 18 or newer:

```bash
npm…
