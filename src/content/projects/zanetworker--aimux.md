---
repo: "zanetworker/aimux"
name: "aimux"
description: "Mission control for AI coding agents: see, steer and evaluate every session."
readmeQualityOk: true
url: "https://github.com/zanetworker/aimux"
homepage: "https://aimux.ai"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["ai-agents", "claude-code", "codex", "mcp", "observability", "tui"]
stars: 21
forks: 1
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-20T19:19:52Z"
lastCommitAt: "2026-11-26T13:00:43Z"
lastReleaseAt: "2026-04-20T09:00:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 48
maintainers: ["zanetworker"]
openGraphImageUrl: "https://opengraph.githubassets.com/23ddf0f972a03e0cb6862b89050263853689df01230ec9bdd8f427c6622f18eb/zanetworker/aimux"
---

You run five agents in five tmux panes and lose track of which one rewrote `auth.go`. aimux finds every running and past session, shows each one turn by turn (prompts, tool calls, diffs), and lets you label turns so the good and bad runs become eval data.

## Install

```sh
brew install zanetworker/aimux/aimux
```

Requires tmux. No config, SDK or instrumentation: aimux reads the session files Claude Code and Codex already write.

## Quickstart

```sh
aimux agents
```

```text
PID   PROVIDER  STATUS   PROJECT       MODEL
7     claude    Active   payments-api  opus
25    claude    Idle     docs          opus
13    claude    Idle     web           opus
19    claude    Waiting  infra         opus
```

Then open the dashboard:

```sh
aimux          # terminal UI
aimux web      # browser UI at localhost:3000
```
