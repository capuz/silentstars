---
repo: "yepzdk/claude-sessions-monitor"
name: "claude-sessions-monitor"
description: "A lightweight CLI tool to monitor your Claude Code sessions across multiple projects."
readmeQualityOk: true
url: "https://github.com/yepzdk/claude-sessions-monitor"
language: "Go"
languages: ["Go"]
languagePcts: [86]
stars: 6
forks: 4
openIssues: 6
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-17T13:15:09Z"
lastCommitAt: "2026-09-08T08:18:00Z"
lastReleaseAt: "2026-01-19T07:46:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 65
maintainers: ["yepzdk", "sergeykad", "bparker2200"]
openGraphImageUrl: "https://opengraph.githubassets.com/fddce5018a70960afd11f9e675b68f4f51605f83fae2cf241e1dcefdbf12ac22/yepzdk/claude-sessions-monitor"
---

# ~~Claude~~ Coding Sessions Monitor (csm)

A lightweight CLI tool to monitor your coding agent sessions — Claude Code and
Oh My Pi — across multiple projects.

> csm started life as *Claude* Sessions Monitor. It watches
> [Oh My Pi](https://github.com/badlogic/oh-my-pi) sessions too now, so the C
> stands for Coding. Same `csm`, same install, nothing to migrate — the
> repository keeps its old name so existing clones and `go install` paths still
> work.

## Features

- **Live dashboard** showing all active sessions from Claude Code and Oh My Pi in one list
- **Both agents, auto-detected** — no flag to set. csm reads `~/.claude/projects/` and `~/.omp/agent/sessions/`, and skips whichever it doesn't find. When both are on screen the origin column carries a `[cc]` / `[omp]` badge after the origin name
- **Web dashboard** with `--web` flag for rich session inspection in the browser
- **History view** to browse past sessions with activity summaries
- **Process detection** distinguishes running vs inactive sessions
- **Ghost detection** identifies orphaned agent processes — ones whose launching shell or IDE has exited and whose log has been silent for over an hour. A session left open…
