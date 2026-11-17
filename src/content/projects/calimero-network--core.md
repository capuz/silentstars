---
repo: "calimero-network/core"
name: "core"
description: "Calimero is the confidential cloud for applications: you deploy an app, and nobody who runs the machines, including Calimero, can read its data, and every user can verify that before sending a byte."
readmeQualityOk: true
url: "https://github.com/calimero-network/core"
homepage: "https://calimero-network.github.io/core/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["confidential-computing", "intel-tdx", "passkeys", "raft", "remote-attestation", "rust", "tee", "webassembly"]
stars: 172
forks: 36
openIssues: 18
closedIssues: 920
watchers: 2
contributors: 29
recentReleases: 0
createdAt: "2024-01-22T13:55:34Z"
lastCommitAt: "2026-11-17T14:27:20Z"
lastReleaseAt: "2025-08-11T16:35:37Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 46
maintainers: ["chefsale", "rtb-12", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4dc13a3c28d4183bcdf4ebf80ae9673e26432eb9b28049da6cc2501c6bec42af/calimero-network/core"
discussionCount: 6
---

# Calimero Core

**Your app's whole backend, like Firebase. Except nobody can read your data, not even us.**

Calimero gives an app what a backend platform does (sign-in, a database,
functions, realtime, storage and hosting) in one deploy, but runs every app
inside attested Intel TDX hardware. The people operating the servers, including
us, can't see the data, and users don't have to take our word for it: their
client verifies the node before it sends anything.

This repository is the platform itself: the node, the command line, the app SDK
and the docs.

> **Full documentation**: <https://calimero-network.github.io/core/>, organized into **Cloud** (start here), **Build** (write apps), **Operate** (run a cluster), **Protocol Reference** and **Contribute** (work on core). Coming from the earlier peer-to-peer release? The [glossary](https://calimero-network.github.io/core/protocol/glossary/) maps its names to these.

## What you get

| You need | Calimero gives you |
| --- | --- |
| Auth | Passkey sign-in, sessions and scoped API keys, built in |
| Database | Replicated app state: maps, sets, tables with indexes, rich text |
| Functions | App methods in Rust, plus compute jobs,…
