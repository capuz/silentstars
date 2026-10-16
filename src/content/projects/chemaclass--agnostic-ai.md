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
stars: 25
forks: 5
openIssues: 1
closedIssues: 1010
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-05-03T18:47:55Z"
lastCommitAt: "2026-10-16T08:26:19Z"
lastReleaseAt: "2026-05-14T20:15:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 48
maintainers: ["Chemaclass", "motechFR"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea2e832926d4286acc801a885b68b84285dd2d3404ea7df77acb2d8cbb944b31/Chemaclass/agnostic-ai"
fundingLinks: ["CUSTOM:https://chemaclass.com/sponsor"]
---

# agnostic-ai

agnostic-ai keeps one set of instructions for all your AI coding tools. You write agents, skills, rules, hooks, and MCP server settings once, and `agnostic-ai sync` writes the files each tool reads.

Each AI tool reads its instructions from different files. Kept by hand, those files fall out of step. agnostic-ai keeps one source in plain Markdown and YAML inside your repository. It needs no account and no service. See [Why agnostic-ai](https://agnostic-ai.org/docs/why-agnostic-ai/).

## Set up with a coding agent

Paste this into Claude Code, Codex, Cursor, or another coding agent:

```text
Set up agnostic-ai in this repository. Follow https://agnostic-ai.org/agent-setup.txt exactly. Preserve existing AI tool behavior. Before any sync, check for existing CLAUDE.md, AGENTS.md, and similar files, and ask me what to do with their content. Finish with agnostic-ai sync --check. Summarize the targets selected and every file changed.
```

The [agent setup guide](https://agnostic-ai.org/docs/agent-setup/) is the checklist the agent follows.

## Quickstart

From your project root, with Node 18 or newer:

```bash
npm install -g agnostic-ai
agnostic-ai init --from all…
