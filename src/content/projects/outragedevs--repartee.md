---
repo: "outragedevs/repartee"
name: "repartee"
description: "A modern terminal IRC client built with Ratatui, Tokio, and Rust"
readmeQualityOk: true
url: "https://github.com/outragedevs/repartee"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 16
forks: 3
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-06T20:58:11Z"
lastCommitAt: "2026-08-14T04:15:00Z"
lastReleaseAt: "2026-05-06T09:21:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 34
maintainers: ["kofany"]
openGraphImageUrl: "https://opengraph.githubassets.com/c61907a7f3dc84c6ace198a6ceff855ecb47cca22ec69c2826de499decf70eb7/outragedevs/repartee"
---

# Repartee

**A modern terminal IRC client built with Rust, Ratatui, and Tokio.**

Inspired by irssi. Designed for the future.

---

## Demo

Terminal, mobile web, and desktop web — all in real-time sync:

> TUI (left) | Mobile web (center) | Desktop web (right) — 1:1 state sync across all interfaces.

---

## Features

- **Full IRC protocol** — channels, queries, CTCP, TLS, channel modes, ban/except/invex lists
- **IRCv3** — server-time, echo-message, away-notify, account-notify, chghost, multi-prefix, BATCH netsplit grouping, message-tags, and more
- **SASL** — PLAIN, EXTERNAL (client certificate), SCRAM-SHA-1/256/512, and ECDSA-NIST256P-CHALLENGE, auto-detected strongest-first
- **irssi-style navigation** — Esc+1–9 window switching, aliases, familiar `/commands`
- **Mouse support** — click buffers and nicks, scroll chat history
- **Lua 5.4 scripting** — event bus, custom commands, full IRC and state access, sandboxed per-script environments
- **Persistent logging** — SQLite with WAL, FTS5 full-text search, optional AES-256-GCM encryption
- **Netsplit detection** — batches join/part floods into single events
- **Flood protection** — blocks CTCP spam and nick-change floods…
