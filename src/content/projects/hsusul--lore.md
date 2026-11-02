---
repo: "hsusul/lore"
name: "lore"
description: "Local desktop app that runs Claude Code and Codex in parallel git worktrees and supervises them until you merge."
readmeQualityOk: true
url: "https://github.com/hsusul/lore"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 134
forks: 37
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-08-10T22:07:29Z"
lastCommitAt: "2026-11-02T17:58:15Z"
lastReleaseAt: "2026-08-14T09:10:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 36
maintainers: ["hsusul"]
openGraphImageUrl: "https://opengraph.githubassets.com/670181c8090b382c942b08cd204c34739344863928bef9c7c6b8d3684fdd7c91/hsusul/lore"
---

# Lore

Lore is a local, private archive of your Claude Code and Codex sessions.

It reads the session logs those agents already keep on disk. It links each session to the git repository it worked in. You search and read the archive in a desktop app, or from the command line with `lorectl`. Agents can search their own past sessions through `lorectl mcp`.

The longer goal is long-term memory for AI agents. Today Lore is the archive that memory would be built on.

## Status

Lore is early. There is no signed build. The newest GitHub release, v0.1.1, predates the current app, and its macOS `.dmg` is unsigned.

Memory features are planned, not built. `lorectl mcp` can search and read past sessions. It has no memory store, no extraction, and no write tools.

## How it works

```text
~/.claude and ~/.codex session logs   (read only)
        |
scan: parse each session, scan its text for secrets, read git evidence
        |
local archive: SQLite database, blobs, backups
        |
redacted search index, full-text, with filters
        |
desktop app  ·  lorectl  ·  lorectl mcp
```

- **Scan.** Lore finds session files in `~/.claude/projects` and in `~/.codex/sessions` and…
