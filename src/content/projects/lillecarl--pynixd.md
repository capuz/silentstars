---
repo: "Lillecarl/pynixd"
name: "pynixd"
description: "Nix daemon protocol in Python"
readmeQualityOk: true
url: "https://github.com/Lillecarl/pynixd"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 6
forks: 0
openIssues: 35
closedIssues: 18
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-23T21:14:14Z"
lastCommitAt: "2026-09-19T02:45:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 77
undervaluedScore: 43
maintainers: ["Lillecarl"]
openGraphImageUrl: "https://opengraph.githubassets.com/d52f26dc49e6d918403841a97f7bba4ac204189f2b6b7fe92f3d46f38059fb01/Lillecarl/pynixd"
---

# pynixd

> Built by me with a bunch of AI models

A Nix daemon protocol proxy and distributed build cache implemented in Python using AsyncSSH. pynixd acts as an intermediary between Nix clients and remote builders, providing query caching, build deduplication, and intelligent scheduling across multiple build backends.

## nanopynix umbrella

`pynixd` is preparing to be the daemon-service project under the broader
`nanopynix` Python-and-Nix umbrella. It remains a standalone package and Nix
project while the integration shape is decided. The intended ownership boundary
and staged convergence plan are documented in [pynixd in the nanopynix
umbrella](https://github.com/Lillecarl/pynixd/blob/HEAD/docs/umbrella.md).

## Features

- **Nix Daemon Protocol Proxy**: Implements the Nix daemon wire protocol over SSH, allowing Nix clients to connect and route builds to remote machines
- **Build Caching**: Deduplicates concurrent builds for the same derivation, reducing redundant work
- **Multi-Backend Scheduling**: Distributes builds across SSH-connected builder machines with locality-aware scheduling
- **Local Query Cache**: Serves path queries (IsValidPath, QueryPathInfo, NarFromPath) from…
