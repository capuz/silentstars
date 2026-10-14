---
repo: "n0-computer/irpc"
name: "irpc"
description: "A streaming rpc system for iroh"
readmeQualityOk: true
url: "https://github.com/n0-computer/irpc"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 58
forks: 10
openIssues: 6
closedIssues: 9
watchers: 9
contributors: 11
recentReleases: 0
createdAt: "2025-04-03T10:17:43Z"
lastCommitAt: "2026-10-14T08:58:43Z"
lastReleaseAt: "2026-06-15T13:26:10Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 36
maintainers: ["Frando", "dignifiedquire", "rklaehn"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c5fa22ddede5b0281a3c7b445c461603c1865f2dde6da83f3e76a8ff72d558f/n0-computer/irpc"
---

# IRPC

A streaming rpc system for iroh

[<img src="https://img.shields.io/badge/github-irpc-8da0cb?style=for-the-badge&labelColor=555555&logo=github" height="20" >][repo link] [![Latest Version]][crates.io] [](https://discord.com/invite/DpmJgtU7cW) [![Docs Badge]][docs.rs] ![license badge] [![status badge]][status link]

[Latest Version]: https://img.shields.io/crates/v/irpc.svg
[crates.io]: https://crates.io/crates/irpc
[Docs Badge]: https://img.shields.io/badge/docs-docs.rs-green
[docs.rs]: https://docs.rs/irpc
[license badge]: https://img.shields.io/crates/l/irpc
[status badge]: https://github.com/n0-computer/irpc/actions/workflows/rust.yml/badge.svg
[status link]: https://github.com/n0-computer/irpc/actions/workflows/ci.yml
[repo link]: https://github.com/n0-computer/irpc

# Goals

See the [module docs](https://docs.rs/irpc/latest/irpc/).

# Feature flags

| Feature | Default | Description |
|---------|---------|-------------|
| `rpc` | yes | Remote transport over noq. Without it, irpc only has in-process channels. |
| `iroh` | yes | Remote transport over iroh. Enables `rpc`. |
| `spans` | yes | Messages store the current tracing span in [`WithChannels::span`]. |
| `stream` |…
