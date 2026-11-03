---
repo: "vitosans/rail"
name: "rail"
description: "A modern terminal mail client for Gmail and Microsoft 365, with an MCP server for AI agents"
readmeQualityOk: true
url: "https://github.com/vitosans/rail"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 82
forks: 6
openIssues: 1
closedIssues: 65
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-10-11T05:24:16Z"
lastCommitAt: "2026-11-03T19:05:02Z"
lastReleaseAt: "2026-11-02T16:46:06Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 39
maintainers: ["vitosans", "dependabot[bot]", "mheyd"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7c90a1eb1fb8608c4f16c2c64f2a18651d37b04d63cfec3614bfbfc62144544/vitosans/rail"
---

Rail is a terminal mail client for Gmail and Microsoft 365, written in Rust.

It keeps a local copy of your mail in SQLite, synced by a small background daemon. Every list,
search and open is a local query, so the interface never waits on the network.

It is built for people who live in a terminal and want something in the spirit of mutt, with
threads, a unified inbox across accounts, readable HTML and a command palette. It also speaks MCP,
so an AI coding agent can help you set it up without ever seeing your secrets.

> **Rail is pre-1.0.** Account setup, background sync, search, reading mail, acting on threads
> (archive, trash, star, read, move) and writing mail (new messages, replies and forwards, with
> undo send, and drafts saved to the account's Drafts) work today for Gmail and Microsoft 365.
> Labels are Gmail's; on Microsoft 365 `m` moves to a folder instead.

## Features

- **Local first.** A unified inbox and per-account and per-label lists over a local store, kept
  current by a background daemon that can start at login.
- **A reader built for threads.** Opens on the newest message with the older ones as cards,
  folded quotes, numbered (clickable) links, and HTML mail…
