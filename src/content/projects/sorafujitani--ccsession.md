---
repo: "sorafujitani/ccsession"
name: "ccsession"
description: "pick any past Claude Code session via fzf, then resume it from the right cwd"
readmeQualityOk: true
url: "https://github.com/sorafujitani/ccsession"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["claude-code", "anthropicanthropic", "claude", "cli", "developer-tools", "fzf", "golang", "session-management", "terminal"]
stars: 45
forks: 10
openIssues: 27
closedIssues: 39
watchers: 0
contributors: 8
recentReleases: 4
createdAt: "2026-05-26T01:13:48Z"
lastCommitAt: "2026-09-01T08:50:33Z"
lastReleaseAt: "2026-06-14T02:23:04Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 41
maintainers: ["sorafujitani", "mozumasu", "StantonMatt"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bd69663c2a593680f0695dcb97c0b1ddcccb7f23f8026f07f8f85339d657d46/sorafujitani/ccsession"
fundingLinks: ["GITHUB:https://github.com/sorafujitani"]
discussionCount: 3
---

# ccsession

> An fzf-powered session picker for resuming local agent sessions.

`ccsession` lists local agent sessions (Claude Code by default, with optional
OpenCode, Grok, Codex, Pi, Oh My Pi, and Kiro CLI backends), lets you fuzzy-find across all of your
projects with a live preview pane, and resumes the one you pick in its original
working directory.

## Features

- **Cross-project listing** — every session from every project in one view,
  sorted by last activity.
- **Three search modes** — fuzzy (default), directory-only, and full-text
  grep over JSONL transcripts, with configurable mode-switch keys.
- **Live preview** — last 30 messages of the highlighted session, with
  timestamps and roles. In grep mode the matched query is highlighted in the
  preview so you can spot the hit at a glance. Set
  `CCSESSION_PREVIEW_MESSAGES` to change the preview length.
- **Faithful resume** — `chdir`s back to the session's original `cwd` before
  exec'ing the selected agent's resume command, so paths and tooling Just Work.
- **Single static binary** — written in Go with no cgo; bundles a pure-Go
  SQLite reader (for OpenCode support) and a small TOML parser for the
  optional config…
