---
repo: "thevibeworks/claude-code-docs"
name: "claude-code-docs"
description: "Everything Anthropic ships for builders, archived as markdown and refreshed 4× daily. 4,200+ files: API, Claude Code, MCP, support, cookbooks, skills, plugins."
readmeQualityOk: true
url: "https://github.com/thevibeworks/claude-code-docs"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [100]
topics: ["ai-agents", "claude", "claude-code", "agent-sdk", "anthropic", "documentation", "mcp", "agent-skills", "anthropic-api", "claude-agent-sdk"]
stars: 167
forks: 28
openIssues: 2
closedIssues: 45
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-06-24T03:58:44Z"
lastCommitAt: "2026-10-31T15:58:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 43
maintainers: ["github-actions[bot]", "lroolle"]
openGraphImageUrl: "https://opengraph.githubassets.com/d18cb3fec1ad54092cb30054b3d8c0081aae6696e26ca2d98869110a1a9db241/thevibeworks/claude-code-docs"
---

# Claude Code Docs

> Auto-updating archive of Anthropic's builder documentation: every source
> that publishes markdown, fetched 4x daily. 4,100 files from six live sources,
> plus a frozen archive of the engineering blog.

Clone this repo and point Claude Code at it. Every doc, tutorial, cookbook,
skill, and engineering post Anthropic publishes on a markdown surface --
searchable, version-controlled, and offline.

## Install

```bash
git clone https://github.com/thevibeworks/claude-code-docs
cd claude-code-docs
```

Then ask Claude Code anything:

```bash
claude "how does the agent loop work?"
claude "show me the MCP spec for tool annotations"
claude "what did the 'Building Effective Agents' post recommend?"
claude "how do I set up hooks in the Agent SDK?"
```

## Content

Counts are files on disk as of 2026-09-09; `uv run scripts/fetcher.py --tree`
prints them live.

| Source | Section | Files | What |
|--------|---------|------:|------|
| code.claude.com | `--section claude-code` | 198 | Claude Code + Agent SDK docs |
| platform.claude.com | `--section api` | 2,228 | API reference, build guides |
| claude.com/docs | `--section products` | 226 | Claude Tag, Cowork, office…
