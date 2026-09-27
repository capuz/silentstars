---
repo: "BeMySlaveDarlin/aacpanel"
name: "aacpanel"
description: "A control panel for one machine and the Claude Code sessions on it: containers, load, conversation and terminal — from a phone and from a monitor"
readmeQualityOk: true
url: "https://github.com/BeMySlaveDarlin/aacpanel"
homepage: "https://aacpanel.bemyslavedarlin.ru/"
language: "Go"
languages: ["Go"]
languagePcts: [49]
topics: ["claude-code", "docker", "golang", "homelab", "postgresql", "preact", "pwa", "self-hosted", "tmux"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-11T16:02:50Z"
lastCommitAt: "2026-09-27T09:27:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 46
maintainers: ["BeMySlaveDarlin"]
openGraphImageUrl: "https://opengraph.githubassets.com/a56c4fadc0aeae49898f5b0fc602db9cae7e2ec1b376c155abe153ce65b7b38a/BeMySlaveDarlin/aacpanel"
---

# aacpanel

A control panel for one machine and the [Claude Code](https://claude.com/claude-code)
sessions on it — from a phone and from a monitor.

Not a dashboard: the panel does not only show containers, load and live
sessions, it **runs** them — brings containers up and down, opens and closes
sessions, writes messages into them, answers the model's questions, sends files
and slash commands.

One Go binary in a container, the front end embedded with `embed`, no npm in
the project.

- [What it does](#what-it-does)
- [How it works](#how-it-works)
- [Sign-in](#sign-in)
- [What the machine needs](#what-the-machine-needs)
- [Stack](#stack)
- [The tree](#the-tree)
- [Next](#next)

## What it does

| Screen | What is on it |
|---|---|
| **Sessions** | live sessions with the model and how full the context is; the conversation as a feed — messages, thinking, tool calls, subagent messages, attachments; the composer from the phone, typed or dictated; the `AskUserQuestion` card — answer with an option, answer in your own words, or dismiss it; an answer to a permission prompt; stopping the turn, a piece of background work or a subagent; slash commands from a closed list; the session…
