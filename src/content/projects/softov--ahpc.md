---
repo: "softov/ahpc"
name: "ahpc"
description: "An Agent Host Protocol terminal client"
readmeQualityOk: true
url: "https://github.com/softov/ahpc"
homepage: "https://softov.github.io/ahpc/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent-host-protocol", "ahp", "ai-agents", "claude-code", "cli", "mcp", "mcp-server", "nodejs", "terminal", "tui"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-06T09:58:47Z"
lastCommitAt: "2026-11-04T13:05:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 51
maintainers: ["softov"]
openGraphImageUrl: "https://opengraph.githubassets.com/a097adca075f9880069144720c683e4f58091371a845c17e44467a92652f406e/softov/ahpc"
fundingLinks: ["GITHUB:https://github.com/softov", "THANKS_DEV:https://thanks.dev/softov"]
discussionCount: 1
---

# ahpc

A terminal client for the [Agent Host Protocol](https://microsoft.github.io/agent-host-protocol/).
It can be used as cli (commands), tui (interactive chat), or a tool server that lets an agent elsewhere drive the sessions on your host.

Connect to an AHP host, manage sessions, and work with agents directly from your terminal.

> [!NOTE]
> `ahpc` is a client. It does not run agents or models itself.
> You need an AHP-compatible host to connect to.

The interface is built with [TextUI](https://github.com/softov/textui), a component toolkit for terminal applications.

**[Read the documentation](https://softov.github.io/ahpc/)**

## Quick start

```sh
npm install -g @softov/ahpc
```

Or run it without installing, with `npx @softov/ahpc`.

The package is scoped; the command it installs is `ahpc`.

A scripted host is built in, so the screen runs with nothing else to set up:

```sh
ahpc
```

Point it at a real host:

```sh
ahpc --host ws://127.0.0.1:9187
ahpc session list --host ws://127.0.0.1:9187
```

[`ahpd`](https://github.com/softov/ahpd) and VS Code's agent host are both AHP hosts.

## What it does

| | |
|---|---|
| Sessions | List, create, configure, archive and delete…
