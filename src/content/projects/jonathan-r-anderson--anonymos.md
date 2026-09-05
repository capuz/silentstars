---
repo: "Jonathan-R-Anderson/anonymOS"
name: "anonymOS"
description: "an operating system for the future"
readmeQualityOk: true
url: "https://github.com/Jonathan-R-Anderson/anonymOS"
language: "D"
languages: ["D", "C"]
languagePcts: [57, 28]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-06-01T20:45:05Z"
lastCommitAt: "2026-09-05T07:48:21Z"
lastReleaseAt: "2026-06-24T03:28:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 50
maintainers: ["Jonathan-R-Anderson"]
openGraphImageUrl: "https://opengraph.githubassets.com/efb116eeefc50335284a39e6058106de9b31898496ab94124b16becee1b4990a/Jonathan-R-Anderson/anonymOS"
---

# anonymOS

💬 **Join the community on Discord:** [discord.gg/bDRHfBCcBN](https://discord.gg/bDRHfBCcBN)
🗨️ **Or on IRC:** `##anonymOS` on [irc.libera.chat](https://web.libera.chat/###anonymOS) (`/server irc.libera.chat` → `/join ##anonymOS`)

**A capability-secured, object-graph operating system** — a from-scratch x86_64
kernel that boots a real Linux desktop while, underneath, reducing everything
(tasks, files, windows, identities, services, even the Linux personality itself)
to a single capability-gated object model with a declarative configuration system.

The kernel boots Limine → a D kernel (no GC, `-betterC`) → a **Linux
personality** that runs unmodified musl binaries, BusyBox, Weston, GTK apps and
the real Z Shell — all answering to ~160 syscall numbers. Beneath that surface,
*nothing* is a Unix uid or a file inode: every resource is an **Object** with
identity, capabilities, and typed edges in a validated **Object-Reference-Graph**.
One JSON file (`system.json`) is the declarative source of truth for the whole
running system.

> The boot banner reads `=== EpinAnonymOS ===`. Code and docs use the names
> interchangeably.

---

## What works today

The system boots,…
