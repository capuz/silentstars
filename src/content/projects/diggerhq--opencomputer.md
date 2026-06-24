---
repo: "diggerhq/opencomputer"
name: "opencomputer"
description: "Secure cloud computers for AI agents."
url: "https://github.com/diggerhq/opencomputer"
homepage: "https://opencomputer.dev"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [48, 23]
stars: 345
forks: 30
openIssues: 1
closedIssues: 36
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-12-09T23:35:00Z"
lastCommitAt: "2026-06-24T23:37:19Z"
lastReleaseAt: "2026-03-13T00:38:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 29
maintainers: ["ZIJ", "breardon2011", "motatoes"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba525e0003afc6a72dd712cd910182bc5e853cf15474d1f6d157f526c3785095/diggerhq/opencomputer"
---

# OpenComputer

Long-running cloud infrastructure for AI agents. Real computers, not sandboxes.

Every OpenComputer is a real VM - a real computer with a real filesystem, full OS access, and persistent state. Not a container. A full Linux machine with root access.

Think of it as the compute equivalent of a laptop that sleeps when you close the lid and is right where you left off when you open it. Except it's in the cloud, it scales to thousands, and you're not paying for it while it's asleep.

## Features

- **Persistent VMs** - Hibernate/wake instead of timeouts. Your VM sleeps when idle and wakes in seconds, right where you left off.
- **Checkpoints** - Instant snapshots. Fork or restore to any point. Break something, roll back in a second.
- **Preview URLs** - Expose ports externally with auth (Clerk) and custom domains. Give every environment a live URL.
- **Per-tenant package control** - Manage and hot-swap software versions inside running VMs. Every tenant gets exactly the stack they need.
- **Claude Agent SDK** - Optimised for Claude Agent SDK workloads, with higher-level primitives for streaming.

## Quick start

### CLI

Download the latest `oc` binary from [GitHub…
