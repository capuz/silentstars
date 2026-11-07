---
repo: "cgnl/plex-postgresql"
name: "plex-postgresql"
description: "Run Plex Media Server with PostgreSQL instead of SQLite"
readmeQualityOk: true
url: "https://github.com/cgnl/plex-postgresql"
homepage: "https://github.com/cgnl/plex-postgresql/wiki"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
topics: ["docker", "linux", "macos", "plex", "postgresql", "rust", "sqlite"]
stars: 49
forks: 10
openIssues: 0
closedIssues: 21
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2025-12-21T21:12:43Z"
lastCommitAt: "2026-11-07T10:36:23Z"
lastReleaseAt: "2026-01-30T19:49:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 52
maintainers: ["cgnl", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8a3bdb3f6e049c1f6707cec6311e369ee47450570103697d04af27370bcf760/cgnl/plex-postgresql"
---

# plex-postgresql

**Run Plex Media Server with PostgreSQL instead of SQLite.**

🇩🇪 [Deutsch](https://github.com/cgnl/plex-postgresql/blob/HEAD/README.de.md) | 🇳🇱 [Nederlands](https://github.com/cgnl/plex-postgresql/blob/HEAD/README.nl.md) | 🇮🇪 [Gaeilge](https://github.com/cgnl/plex-postgresql/blob/HEAD/README.ga.md) | 🟢 [Esperanto](https://github.com/cgnl/plex-postgresql/blob/HEAD/README.eo.md) | 🇪🇸 [Espa&ntilde;ol](https://github.com/cgnl/plex-postgresql/blob/HEAD/README.es.md)

A small shim library that catches Plex SQLite calls and sends them to PostgreSQL. You do not need to change Plex source code.

## Current validation status

**v1.3.26 is a certified release.** Linux AMD64/ARM64 and macOS ARM64 downloads are available, along with LinuxServer and PlexInc Docker images.

All eight Linux configurations passed 100 restart cycles, 5 hours 50 minutes of movie and TV playback load with four simultaneous clients, and recovery after a live PostgreSQL restart. All four native ZIP installation and migration checks passed. The macOS ARM64 build was checked separately; the full playback matrix ran on Linux.

The tested matrix is **LinuxServer and PlexInc × native AMD64 and…
