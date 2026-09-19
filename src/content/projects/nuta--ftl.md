---
repo: "nuta/ftl"
name: "ftl"
description: "A new operating system for clouds."
readmeQualityOk: true
url: "https://github.com/nuta/ftl"
homepage: "https://ftl-os.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 51
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-01-25T23:44:37Z"
lastCommitAt: "2026-09-19T01:15:41Z"
lastReleaseAt: "2026-09-15T03:18:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 41
maintainers: ["nuta"]
openGraphImageUrl: "https://opengraph.githubassets.com/537a169532e1c3c704ad9664f0de1596baac302e4c2cb92ef975d1e7048baa10/nuta/ftl"
discussionCount: 0
---

# FTL

FTL is a new operating system aiming to be an alternative OS in cloud environments to Linux/BSDs/Illumos.

```
    Container #1 (Linux compat)      Container #2 (custom OS)
┌────────────────────────────────┐     ┌─────────────────┐
│  VM space       VM space       │     │ VmSpace         │
│ ┏━━━━━━━━━━━━┓  ┏━━━━━━━━━━━━┓ │     │ ┏━━━━━━━━━━━━━┓ │
│ ┃            ┃  ┃            ┃ │     │ ┃             ┃ │
│ ┃   Linux    ┃  ┃   Linux    ┃ │     │ ┃ FTL native  ┃ │
│ ┃  Process   ┃  ┃  Process   ┃ │     │ ┃  unikernel  ┃ │
│ ┃            ┃  ┃            ┃ │     │ ┃             ┃ │
│ ┃ ╌╌╌╌╌╌╌╌ Linux ABI ╌╌╌╌╌╌╌╌┃ │     │ ┃╌╌╌╌╌╌╌╌╌╌╌╌╌┃ │
│ ┃   Linux compat library     ┃ │     │ ┃  Your own   ┃ │
│ ┃  (Process, VFS, TCP, ...)  ┃◀┄┄┐   │ ┃  custom OS  ┃ │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │ ┆   │ ┗━━━━━━━━━━━━━┛ │
└────────────────────────────────┘ ┆   └─────────────────┘
   ┆  Minimalistic system calls    ┆
   ▼                               ┆ user faults (syscalls)
╔════════════════════════════════════════════════════════╗
║                       Small kernel                     ║
║         (memory, vCPU, network multiplexing, ...)      ║…
