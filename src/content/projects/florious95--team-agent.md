---
repo: "Florious95/team-agent"
name: "team-agent"
description: "Talk once, ship a team. A multi-agent runtime for Claude Code and Codex CLI where the lead does the orchestration — across providers, in conversation."
readmeQualityOk: true
url: "https://github.com/Florious95/team-agent"
homepage: "https://team-agent.net"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["agent-teams", "ai-agents", "claude", "claude-code", "codex", "codex-cli", "cross-provider", "harness", "mcp", "mcp-server"]
stars: 7
forks: 1
openIssues: 16
closedIssues: 22
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-17T11:16:52Z"
lastCommitAt: "2026-10-02T10:00:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 52
maintainers: ["Florious95"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0feba780fac54ac7f2042104766d00786179caa85c59e9f5d94a61a83003ce5/Florious95/team-agent"
---

**English** | [中文](https://github.com/Florious95/team-agent/blob/main/README.zh.md)

# Team Agent

> Use Claude Code the way you always do — now lead a whole team.

## What is this

Right now, when you use Claude Code (or Codex, or Copilot CLI), you have one pair of hands: while it writes the frontend, the backend waits; while it runs tests, you wait.

With Team Agent installed, it's still the same conversation window, but you can say:

> "This is too slow for one person. Build a team: one for backend, one for frontend, one for tests."

Then:

- New windows pop up, one per teammate, **all working in parallel**
- Teammates message each other directly (frontend asks backend for the API schema — no need to go through you)
- You only talk to the lead; the lead reports progress and only escalates when there's a real decision

No config files. No new UI to learn. If you can chat with Claude, you can run a team.

## Install

```bash
npx @team-agent/installer@latest install
```

Then start like this (instead of typing `claude` / `codex` / `copilot` directly):

```bash
team-agent claude
```

Two steps. Everything else happens in the conversation.

## What you can say

Team building and…
