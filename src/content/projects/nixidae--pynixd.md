---
repo: "nixidae/pynixd"
name: "pynixd"
description: "Nix daemon protocol in Python"
readmeQualityOk: true
url: "https://github.com/nixidae/pynixd"
homepage: "https://nixidae.github.io/pynixd/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["binary-cache", "build-cache", "distributed-builds", "nix", "nix-daemon", "nixos", "python", "remote-builds"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-23T21:14:14Z"
lastCommitAt: "2026-11-10T14:43:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 56
maintainers: ["Lillecarl"]
openGraphImageUrl: "https://opengraph.githubassets.com/32354e9e3479db9dc6a5ec8749efbefa74a1cd1e94243b54b52978563849a977/nixidae/pynixd"
---

# pynixd

> Built by me with a bunch of AI models

A Nix daemon protocol proxy and distributed build cache implemented in Python using AsyncSSH. pynixd acts as an intermediary between Nix clients and remote builders, providing query caching, build deduplication, and intelligent scheduling across multiple build backends.

## nanopynix umbrella

`pynixd` is preparing to be the daemon-service project under the broader
`nanopynix` Python-and-Nix umbrella. It remains a standalone package and Nix
project while the integration shape is decided. The intended ownership boundary
and staged convergence plan are documented in [pynixd in the nanopynix
umbrella](https://github.com/nixidae/pynixd/blob/HEAD/docs/umbrella.md).

## Features

- **Nix Daemon Protocol Proxy**: Implements the Nix daemon wire protocol over SSH, allowing Nix clients to connect and route builds to remote machines
- **Build Caching**: Deduplicates concurrent builds for the same derivation, reducing redundant work
- **Multi-Backend Scheduling**: Distributes builds across SSH-connected builder machines with locality-aware scheduling
- **Local Query Cache**: Serves path queries (IsValidPath, QueryPathInfo, NarFromPath) from a…
