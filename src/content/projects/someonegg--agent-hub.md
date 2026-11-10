---
repo: "someonegg/agent_hub"
name: "agent_hub"
description: "A local web hub for Codex and Claude Code that pairs readable conversations with live CLI interaction. Browse sessions by project, follow responses in near real time, and keep working with either runtime from desktop or mobile."
readmeQualityOk: true
url: "https://github.com/someonegg/agent_hub"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["codex", "codex-cli", "agent-hub", "claude-code", "coding-agents"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-29T14:44:08Z"
lastCommitAt: "2026-11-10T11:38:07Z"
lastReleaseAt: "2026-10-24T16:47:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["someonegg"]
openGraphImageUrl: "https://opengraph.githubassets.com/2726234c864361197aaa3424c0c1145923ccf3a51734b207c4eb99cc06481b60/someonegg/agent_hub"
---

# Agent Hub

English | [简体中文](https://github.com/someonegg/agent_hub/blob/HEAD/README.zh-CN.md) | [繁體中文](https://github.com/someonegg/agent_hub/blob/HEAD/README.zh-TW.md)

A local web hub for Codex and Claude Code that pairs readable conversations with live CLI interaction.
Browse sessions by project, follow responses in near real time, and keep working with
either runtime from desktop or mobile.

## Quick start

Runtime requirements:

- macOS or Linux with Node.js >=22.13 and npm
- A locally configured Codex or Claude Code CLI
- tmux for creating, resuming, and interacting with sessions

Hub reads `~/.codex` and `~/.claude` by default. You can use either runtime or both;
see [Agent configuration](https://github.com/someonegg/agent_hub/blob/HEAD/docs/usage.md#multiple-agents) for custom directories.

Try it without a global installation:

```sh
npx @someonegg/agent-hub@latest
```

Or install it for regular use:

```sh
npm install -g @someonegg/agent-hub
agent-hub
```

Open <http://127.0.0.1:4173>. Open **Settings → Language** at the bottom of the sidebar to switch between English (the default), 简体中文, and 繁體中文. The choice is saved in this browser. Press `Ctrl-C` to stop the server.…
