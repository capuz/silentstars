---
repo: "UCS-Care-Group/mailcraft"
name: "mailcraft"
description: "MailCraft: an open-source, clean-room mail, calendar and contacts program in pure Rust, for Microsoft 365, Outlook.com and IMAP. Early alpha."
readmeQualityOk: true
url: "https://github.com/UCS-Care-Group/mailcraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["calendar", "egui", "email-client", "imap", "mcp", "microsoft-graph", "outlook", "rust", "smtp", "wasm"]
stars: 205
forks: 36
openIssues: 82
closedIssues: 219
watchers: 3
contributors: 17
recentReleases: 10
createdAt: "2026-10-12T21:30:57Z"
lastCommitAt: "2026-11-04T13:04:50Z"
lastReleaseAt: "2026-10-19T19:07:46Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 94
undervaluedScore: 31
maintainers: ["benandez", "kartas39", "vangel76"]
openGraphImageUrl: "https://opengraph.githubassets.com/55fdddc3bcf8749b6b106da2dd0cd72109dd6144c445598fc1ccc163f791c648/UCS-Care-Group/mailcraft"
---

# MailCraft

**An open-source mail, calendar, contacts and tasks program, written from scratch in Rust.**

MailCraft is a clean-room reimplementation of the mail client people already know how to use: the ribbon, the folder pane, the message list with its reading pane, conversations, flags, categories, rules, a calendar with recurring meetings, people and to-dos. It is a native, GPU-rendered app (no Electron, no web view), it also runs in a browser tab through WebAssembly, and every action in it is a command that scripts and AI agents can run too.

> **Status: public beta (0.8).** For Microsoft accounts (personal, or work or school) on Windows, macOS and Linux, kept in step with Outlook on the web; keep Outlook to hand while you try it. A lot of what a daily driver needs is still to come. See [ROADMAP.md](https://github.com/UCS-Care-Group/mailcraft/blob/HEAD/ROADMAP.md) and [docs/gaps.md](https://github.com/UCS-Care-Group/mailcraft/blob/HEAD/docs/gaps.md) for an honest list.

MailCraft follows the architecture and conventions of [WordCraft](https://github.com/storytold/wordcraft) and the other Craft apps: the same layered crates, the same "everything is a command" engine, the same…
