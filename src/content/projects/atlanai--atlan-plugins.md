---
repo: "atlanai/atlan-plugins"
name: "atlan-plugins"
description: "Atlan's plugins for Claude Code, Codex, Cursor and GitHub Copilot: the Atlan registry's MCP server and the skills to use it."
readmeQualityOk: true
url: "https://github.com/atlanai/atlan-plugins"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 13
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 27
recentReleases: 0
createdAt: "2026-10-30T07:00:01Z"
lastCommitAt: "2026-11-25T13:17:36Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 34
maintainers: ["bankavarun", "anirudhagarwal-atlan", "suseriAtlan"]
openGraphImageUrl: "https://opengraph.githubassets.com/06b3b0dfbfe571ddcbfe32123e3ac2829baff7727663c8ff42180852269dfe87/atlanai/atlan-plugins"
---

# Atlan plugins

Atlan's plugin marketplace for coding agents. Install it once and your agent can reach your
organization's Atlan Trident: the skills, agents, knowledge and MCP servers your teams have
already published. It can find what fits the task, use it in the current project, and publish
new work back, all under your own sign-in.

## Install

You need an account in an Atlan organization. You sign in through your browser with OAuth, so
there is no API key to create or paste.

**One command, every coding agent on this machine** (Node.js 18 or later):

```
npx plugins add atlanai/atlan-plugins
```

It finds Claude Code, Codex, Cursor, GitHub Copilot CLI, VS Code and the other agents the
[`plugins`](https://github.com/vercel-labs/plugins) installer supports, and installs `atlanai`
and `atlanai-analytics` into each through its own plugin system. Then sign in once per agent:
