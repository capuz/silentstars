---
repo: "RustCityRS/rs-majula"
name: "rs-majula"
description: "A Multi-Revision RuneScape 2 Game Server & Engine in Rust"
url: "https://github.com/RustCityRS/rs-majula"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["game-engine", "game-server", "rust", "high-performance"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-01T01:16:28Z"
lastCommitAt: "2026-07-02T06:33:10Z"
lastReleaseAt: "2026-06-27T02:45:17Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 62
maintainers: ["ultraviolet-jordan", "tyler27"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ae4dc6be299e712c0d167765170c654f1b2e863e36cd9b046b933ff986a05a7/RustCityRS/rs-majula"
---

<pre>
██████╗ ██╗   ██╗███████╗████████╗ ██████╗██╗████████╗██╗   ██╗
██╔══██╗██║   ██║██╔════╝╚══██╔══╝██╔════╝██║╚══██╔══╝╚██╗ ██╔╝
██████╔╝██║   ██║███████╗   ██║   ██║     ██║   ██║    ╚████╔╝ 
██╔══██╗██║   ██║╚════██║   ██║   ██║     ██║   ██║     ╚██╔╝  
██║  ██║╚██████╔╝███████║   ██║   ╚██████╗██║   ██║      ██║   
╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝    ╚═════╝╚═╝   ╚═╝      ╚═╝   
</pre>
</div>

----

# rs-majula

> **The first fully feature-complete, multi-revision, RuneScape private server engine written in
> Rust** -- and the first private server to build its game cache from source assets
> to CRCs that perfectly match the original Jagex game cache.

> [!IMPORTANT]  
> `rs-majula` is the project, Cargo workspace, and canonical engine name: a
> from-scratch Rust reimplementation of a **RuneScape 2** game server, with
> byte-identical protocol and content emulation, a single-threaded deterministic game
> loop, and an async `tokio` host. The stock client connects and plays against
> unmodified cache content.

----

## Overview

The workspace is 19 crates organized by responsibility:

- **`rs-engine/`** -- See [`rs-engine/README.md`](rs-engine/README.md) for the full…
