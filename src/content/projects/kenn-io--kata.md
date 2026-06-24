---
repo: "kenn-io/kata"
name: "kata"
description: "Local-first issue tracking for AI-assisted software work, with an agent-friendly CLI and human-facing TUI"
url: "https://github.com/kenn-io/kata"
homepage: "https://www.katatracker.com"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 273
forks: 18
openIssues: 10
closedIssues: 15
watchers: 2
contributors: 11
recentReleases: 1
createdAt: "2026-04-30T01:44:15Z"
lastCommitAt: "2026-06-24T00:19:52Z"
lastReleaseAt: "2026-06-23T01:15:31Z"
status: "newborn"
tags: []
healthScore: 90
undervaluedScore: 27
maintainers: ["wesm", "mariusvniekerk", "cpcloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/091d7926503f7a083b06d9b1b8ea61caf67f01fe3facab91755c18f96d924074/kenn-io/kata"
---

# kata カタ

The issue tracker built for coding agents and the humans steering them.

Coding agents need somewhere durable to track work: not a chat thread, not a
markdown to-do list. kata gives them a local task ledger they can drive from the
CLI: create, claim, relate, and close issues with evidence. Humans supervise the
same work in a terminal UI. By default, issue state lives in a local SQLite
database, so your repo stays clean and no hosted tracker is required. When a team
of humans and agents needs to share, you can opt into a remote daemon or
federation.

The documentation in [`docs/`](docs/) is the definitive guide, published with
Zensical at <https://katatracker.com/>.

> **Pre-1.0:** kata publishes versioned pre-1.0 releases. The CLI, daemon, and
> TUI are usable, but command contracts and UI details can still change before a
> stable release.

## Install

macOS or Linux:

```sh
curl -fsSL https://katatracker.com/install.sh | bash
```

Windows PowerShell:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://katatracker.com/install.ps1 | iex"
```

The installer detects your OS and CPU architecture, downloads the latest GitHub
release archive, and verifies it…
