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
stars: 438
forks: 75
openIssues: 164
closedIssues: 284
watchers: 5
contributors: 21
recentReleases: 10
createdAt: "2026-10-12T21:30:57Z"
lastCommitAt: "2026-11-11T18:29:27Z"
lastReleaseAt: "2026-10-19T19:07:46Z"
status: "thriving"
tags: ["needs_contributors", "funded", "release_machine"]
healthScore: 91
undervaluedScore: 27
maintainers: ["benandez", "Kad26", "ferivoq"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4fa7b2f649163a7fb672c4bd0c51144941e1c4a6280c204499414516b86b734/UCS-Care-Group/mailcraft"
fundingLinks: ["GITHUB:https://github.com/UCS-Care-Group"]
---

# MailCraft

**An open-source mail, calendar, contacts and tasks program, written from scratch in Rust.**

MailCraft has been developed here since 12 October 2026; this repository and [mailcraft.work](https://mailcraft.work) are the project's only official homes.

MailCraft is a clean-room reimplementation of the mail client people already know how to use: the ribbon, the folder pane, the message list with its reading pane, conversations, flags, categories, rules, a calendar with recurring meetings, people and to-dos. It is a native, GPU-rendered app (no Electron, no web view), it also runs in a browser tab through WebAssembly, and every action in it is a command that scripts and AI agents can run too.

MailCraft follows the architecture and conventions of [WordCraft](https://github.com/storytold/wordcraft) and the other Craft apps: the same layered crates, the same "everything is a command" engine, the same egui front end and design tokens, the same control channel, MCP server, tooling and packaging.

## What works today

- **Mail:** accounts, nested folders and favourites, a virtualised message list grouped by date (or sender, importance), sort, filters, conversations, pinning,…
