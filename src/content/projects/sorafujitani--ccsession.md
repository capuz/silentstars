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
stars: 37
forks: 9
openIssues: 25
closedIssues: 39
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-05-26T01:13:48Z"
lastCommitAt: "2026-07-07T06:42:14Z"
lastReleaseAt: "2026-06-14T02:23:04Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 91
undervaluedScore: 43
maintainers: ["sorafujitani", "mozumasu", "StantonMatt"]
openGraphImageUrl: "https://opengraph.githubassets.com/20c9e4290580917b67509fe7443b9eb384bfa551ab07b18c20a5ed96da87ef86/sorafujitani/ccsession"
fundingLinks: ["GITHUB:https://github.com/sorafujitani"]
discussionCount: 3
---

# ccsession

> An fzf-powered session picker for resuming local agent sessions.

`ccsession` lists local agent sessions (Claude Code by default, with optional
OpenCode, Grok, Codex, and Pi backends), lets you fuzzy-find across all of your
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
  optional config file.

## Requirements…
