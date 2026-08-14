---
repo: "sahil87/run-kit"
name: "run-kit"
description: "A remote, phone-first console for your tmux — agent-agnostic, no database. Spawn and watch coding agents in parallel worktrees, or anything else you run."
readmeQualityOk: true
url: "https://github.com/sahil87/run-kit"
homepage: "https://shll.ai/run-kit"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [58, 39]
topics: ["agents", "terminal", "tmux", "fab-kit", "claude-code", "developer-tools", "orchestration", "cli", "mobile", "web-ui"]
stars: 56
forks: 12
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-03-02T11:52:31Z"
lastCommitAt: "2026-08-14T05:13:59Z"
lastReleaseAt: "2026-03-20T20:53:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 41
maintainers: ["sahil-noon", "sahil87", "asim-noon"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4a646aca5eb13a04d4c67c845371dbae4ed11894af395004d730485600df18a/sahil87/run-kit"
---

# <img src="https://raw.githubusercontent.com/sahil87/run-kit/main/assets/logo.svg" alt="run-kit logo" width="32" height="32"> run-kit

> Part of the [shll toolkit](https://shll.ai) — see all projects there.

**Your tmux, in the browser and on your phone.** run-kit is a remote console for the machine you actually work on — every tmux session and pane as a live terminal, in a sidebar, from your desk or your couch. It's the modern, terminal-native answer to the old server web-console: nothing to configure, no database, state read straight from tmux.

What makes it so good right now is that what tend to run in those panes: **AI coding agents, many at once.** `rk riff` spawns each one in its own [git worktree](https://github.com/sahil87/wt), and the dashboard lets you watch the whole fleet. But run-kit never wraps the agent — a pane is just a pane. It's equally a build, a REPL, an ssh session, `htop`. **The agent is one of the things you run, not the thing run-kit is.** That's the point: when the agent tooling churns underneath you (and it does, monthly), the terminal layer stays put.

## Install

```sh
curl -fsSL https://shll.ai/install | sh
```

Installs the entire shll toolkit via…
