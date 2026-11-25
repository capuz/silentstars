---
repo: "JulienCr/streamdeck-claude"
name: "streamdeck-claude"
description: "Stream Deck plugin showing live Claude Code CLI session states (MacOS, WSL + Windows-native)"
readmeQualityOk: true
url: "https://github.com/JulienCr/streamdeck-claude"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [68, 21]
stars: 7
forks: 4
openIssues: 10
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-09T12:47:06Z"
lastCommitAt: "2026-11-25T13:23:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 54
undervaluedScore: 21
maintainers: ["JulienCr"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c2ecbc34caf0497f52970322c270ade3087425473c57bbb1bb120dff0d4a4d3/JulienCr/streamdeck-claude"
---

# streamdeck-claude

> A Stream Deck plugin that mirrors live [Claude Code](https://github.com/anthropics/claude-code) CLI session state on as many keys as you assign it.

Each running `claude` CLI session lights up one key on your deck — project name, current state, animated when it's working, pulsing when it needs you. Press a key to copy the session's `cwd` to your clipboard and, when possible, bring its terminal to the foreground.

## State gallery

| | State | Meaning |
|---|---|---|
| <img src="https://raw.githubusercontent.com/JulienCr/streamdeck-claude/HEAD/icons/working.svg" width="64" alt="working"> | `working` | Claude is generating / running tools |
| <img src="https://raw.githubusercontent.com/JulienCr/streamdeck-claude/HEAD/icons/subagent.svg" width="64" alt="subagent"> | `subagent` | Claude has delegated to a subagent (parent waiting) |
| <img src="https://raw.githubusercontent.com/JulienCr/streamdeck-claude/HEAD/icons/idle.svg" width="64" alt="idle"> | `idle` | Claude is waiting for your next prompt |
