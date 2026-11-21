---
repo: "dsh-cc/dsh-cc"
name: "dsh-cc"
description: "A batteries-included coding agent for DeepSeek Harness — Claude Code-style workflows, your choice of models, TUI, skills, subagents, hooks, MCP, memory, and worktrees."
readmeQualityOk: true
url: "https://github.com/dsh-cc/dsh-cc"
homepage: "https://dsh-cc.github.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["deepseek-harness", "dsh-plugin", "dsh-plugins"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 16
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-05T12:58:31Z"
lastCommitAt: "2026-11-21T10:36:28Z"
lastReleaseAt: "2026-09-14T07:47:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 71
maintainers: ["jianxx", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1358192745/1c269e2f-d990-41a6-80fe-b6dc59aaacdc"
---

# dsh-cc

**English** | [简体中文](https://github.com/dsh-cc/dsh-cc/blob/HEAD/README.zh.md)

## Coding and document workflows on DeepSeek Harness

`dsh-cc` adds Claude Code workflows to [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness). You select the models, tools, permissions, and agent configuration.

- Reuse `.claude/agents`, `SKILL.md`, `CLAUDE.md`, hooks, slash commands, and saved sessions.
- Map model aliases to the provider and model that your deployment has.
- Use TUI, MCP, memory, subagents, background tasks, worktrees, and structured output.
- Use `context-crusher` and `context_retrieve` for reversible tool-output compression.
- Add evidence checks for documents with the optional `vwa-writing` skill.

`dsh-cc` is a plugin stack for DeepSeek Harness. It is not Claude Code or a wrapper for Claude Code.

## Quick start

Install DeepSeek Harness and the launcher.

```sh
npm install -g @deepseek-ai/dsh @dsh-cc/cli
dsh-cc
```

The launcher must have `dsh >= 0.2.2-rc.5`. If dsh is an earlier version, the launcher stops with an upgrade message.

If the necessary dsh version is installed, install only the launcher.

```sh
npm install -g @dsh-cc/cli
dsh-cc
```
