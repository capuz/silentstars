---
repo: "NiKrause/orbitdb-storage-bridge"
name: "orbitdb-storage-bridge"
description: "Back up, restore and replicate OrbitDB databases through pluggable storage backends (Aleph, Pinata, …), with hash and identity preservation"
readmeQualityOk: true
url: "https://github.com/NiKrause/orbitdb-storage-bridge"
language: "JavaScript"
languages: ["JavaScript", "Svelte"]
languagePcts: [80, 20]
topics: ["filecoin", "helia", "ipfs", "libp2p", "orbitdb", "aleph", "backup", "local-first", "storage", "aleph-cloud"]
stars: 6
forks: 6
openIssues: 14
closedIssues: 41
watchers: 1
contributors: 7
recentReleases: 8
createdAt: "2025-08-14T09:29:33Z"
lastCommitAt: "2026-10-23T08:46:39Z"
lastReleaseAt: "2026-09-19T22:06:52Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 97
maintainers: ["NiKrause", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d49303461bff6da5945b455484d7fd18f16874b51271d2d0b2c0fb072cca5479/NiKrause/orbitdb-storage-bridge"
fundingLinks: ["GITHUB:https://github.com/NiKrause"]
---

# OrbitDB Storage Bridge

> Back up, restore and replicate OrbitDB databases through pluggable storage backends, with hash and identity preservation.

> [!NOTE]
> Published as `orbitdb-storacha-bridge` up to 0.6.0 and as `@le-space/orbitdb-storage-bridge`
> from 0.7.0, because Storacha is no longer the only backend it bridges to. The rename changed no
> API — only the dependency and the import specifiers. Names that refer to Storacha itself stay as
> they are: `OrbitDBStorachaBridge`, `backends/storacha`, and the `libp2p:orbitdb-storacha:*` debug
> namespace.

## What it does

An OrbitDB database is a set of content-addressed blocks and a log whose heads tie them together.
This package moves those blocks somewhere else and brings them back with their CIDs and the
writer's identity intact — so a restored database is the same database, and its original author can
still write to it.

Where "somewhere else" is, is a choice:

| Backend | Needs | |
| --- | --- | --- |
| `aleph` | nothing | the only backend a browser can write to with no key; ingest only — nothing is kept, listed or deleted here, see `aleph-pin` |
| `aleph-pin` | a signing key: the paying account's, or one it authorised…
