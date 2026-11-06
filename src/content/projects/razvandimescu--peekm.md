---
repo: "razvandimescu/peekm"
name: "peekm"
description: "Real-time dashboard for AI coding sessions. Track every file edit, read full AI conversations, and browse learned context across all your projects. Single binary, zero config, all data local. Works with Claude Code today."
readmeQualityOk: true
url: "https://github.com/razvandimescu/peekm"
homepage: "https://peekm.dev"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [51, 29]
topics: ["claude-code", "cli", "golang", "session-tracking", "ai-coding", "developer-tools", "markdown-viewer", "observability"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-26T05:57:19Z"
lastCommitAt: "2026-11-06T12:17:12Z"
lastReleaseAt: "2026-02-25T16:47:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 39
maintainers: ["razvandimescu"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddfa32ebbdfd013772ed9ceec317ccd098d760bf46c6ed20089f37956466e4d4/razvandimescu/peekm"
---

# peekm

**Read and review your Claude Code sessions, and share the files they write.**

A Claude Code session leaves a git diff and a JSONL log. peekm shows the session as a transcript with line diffs. It also shows what Claude Code remembers about each project. You can ask a follow-up question in a read-only fork of a session. **[peekm.dev](https://peekm.dev)**

**peekm has no accounts and no telemetry. Your files leave your machine only when you share them or reply to a session.**

## Getting Started

```bash
npx @peekm/peekm .
```

Run the command in a project directory. To see all your projects, run it in their parent directory, for example `~/projects`. Then start a Claude Code session in one of these projects. The timeline shows the session while it runs.

AI tracking needs Claude Code or pi. The Claude Code hook also needs `jq`.

## Features

**Read and review:**

- **Transcripts**: A transcript shows the full conversation of a session, with tool calls, line diffs, and thinking blocks. It refreshes while the session runs.
- **Timeline**: The timeline shows the sessions of all projects in the directory that peekm browses, grouped by day. Each session shows its duration,…
