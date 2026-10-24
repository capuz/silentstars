---
repo: "Norman-else/dsh-claude"
name: "dsh-claude"
description: "Run Claude Code as a first-class DSH conversation while preserving its native agent loop, tools, skills, hooks, and MCP integrations in DSH."
readmeQualityOk: true
url: "https://github.com/Norman-else/dsh-claude"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["dsh-plugin", "dsh-plugin-desktop", "dsh-plugins", "dsh", "dsh-plugin-market"]
stars: 14
forks: 6
openIssues: 4
closedIssues: 19
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-15T09:17:32Z"
lastCommitAt: "2026-10-24T08:20:46Z"
lastReleaseAt: "2026-08-21T04:29:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 58
maintainers: ["Norman-else", "marcdagatan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e1754194da8487cff361b83f0bc641c738d75b4a02fdcee8a44a2ff02bfac4c/Norman-else/dsh-claude"
---

# dsh-claude

## Attention Please

## 1. Overview

`dsh-claude` runs the locally installed Claude Code CLI as a first-class conversation provider inside DeepSeek Harness (DSH). It uses Claude Code's official Agent SDK protocol instead of recreating the agent with a separate API client.

Claude Code remains responsible for its agent loop, tools, `CLAUDE.md`, Skills, Hooks, Plugins, MCP servers, settings, and authentication. DSH provides the conversation UI, approval and question surfaces, repository workflow, activity presentation, and managed process lifetime.

## 2. Installation and removal

### Requirements

- DeepSeek Harness Desktop with compatible public plugin APIs. This package is currently developed against the DSH `0.1.7-rc.2` package line (DSH Desktop 2.0.15) and requires it: 0.1.7 replaced directory-scanned presets with declared ones and renamed the shared icons. A Host still on `0.1.5` must pin `@norman-else/dsh-claude@0.1.57`; plugin 0.1.37 and later import symbols that do not exist on `0.1.1-rc.2`, so a Host on that line must pin `@norman-else/dsh-claude@0.1.36`.
- A local Claude Code installation that is already authenticated.
- Node.js 20 or later when installing…
