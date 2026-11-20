---
repo: "GriffonAV/griffon"
name: "griffon"
description: "Griffon Security engine"
readmeQualityOk: true
url: "https://github.com/GriffonAV/griffon"
homepage: "https://griffon-av.vercel.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [57, 36]
stars: 11
forks: 3
openIssues: 20
closedIssues: 108
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2025-05-20T18:58:55Z"
lastCommitAt: "2026-11-13T10:22:31Z"
lastReleaseAt: "2026-11-12T05:01:23Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 81
maintainers: ["DiaboloAB", "ewen1507", "Sebabacou"]
openGraphImageUrl: "https://opengraph.githubassets.com/f557cea63bc98fdbf91d78bb9177852f50dfaab9647697f911ce85bd16aa23e8/GriffonAV/griffon"
discussionCount: 3
---

A modular, Rust-based security toolbox and antivirus for Linux.

---

## What is Griffon?

Griffon is a fast, secure, and easy-to-use antivirus and security toolbox for Linux. It ships as:

- a **desktop application** (built with [Tauri](https://v2.tauri.app/)),
- a **background daemon** that starts automatically,
- a **command-line interface** (`griffon-cli`),
- a **plugin-based engine**: write your tool as a Rust plugin, describe its UI in a TOML file, and Griffon generates the interface for you.

Built-in plugins include a **YARA-based scanner** (with quarantine and rule updates) and a **system cleaner** (caches, logs, packages, big files, Docker).

> **Warning**
>
> Griffon is an academic project in pre-release. It has not been professionally audited — see [SECURITY.md](https://github.com/GriffonAV/griffon/blob/HEAD/SECURITY.md).

## What can you do with Griffon?

Griffon provides a set of security and system maintenance tools, with the flexibility to extend its capabilities through your own plugins.
