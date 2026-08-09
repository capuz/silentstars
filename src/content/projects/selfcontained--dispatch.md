---
repo: "selfcontained/dispatch"
name: "dispatch"
description: "local agent manager"
readmeQualityOk: true
url: "https://github.com/selfcontained/dispatch"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 9
forks: 4
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-03-08T05:36:55Z"
lastCommitAt: "2026-08-09T04:48:08Z"
lastReleaseAt: "2026-04-11T16:42:44Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 53
maintainers: ["selfcontained", "github-actions[bot]", "lukebrevoort"]
openGraphImageUrl: "https://opengraph.githubassets.com/b41c87376644b2642738f21d586246af2e066b8e1f455ad4f3f5f15cba3dabd3/selfcontained/dispatch"
---

# Dispatch

Dispatch is a local-first control plane for running and managing multiple AI coding agents, with browser-based terminal access and media sharing. It runs on macOS and Linux.

## Quick Install

Install and start PostgreSQL 14+ first, then run this on macOS or Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/selfcontained/dispatch/main/bin/install-dispatch.sh | bash
```

The installer selects the latest stable release, creates a private local
database and credentials when it can administer PostgreSQL, installs the
platform-matched binary at `~/.dispatch/server/dispatch`, and registers a
user service. For a managed database, pass its URL instead:

```bash
curl -fsSL https://raw.githubusercontent.com/selfcontained/dispatch/main/bin/install-dispatch.sh | bash -s -- --database-url 'postgres://…'
```

The service listens on `127.0.0.1:6767`. Verify with
`curl http://127.0.0.1:6767/api/v1/health`. Normal UI updates atomically
replace the fixed executable and restart the service.

## Features

- Start, monitor, and stop multiple long-running agents (Claude, Codex, Cursor, OpenCode, or a plain tmux terminal) remotely.
- Persist each agent in `tmux` so browser…
