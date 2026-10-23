---
repo: "DreamLab-AI/solid-pod-rs"
name: "solid-pod-rs"
description: "Rust-native Solid Pod server (LDP + WAC + NIP-98 + OIDC + Notifications)"
readmeQualityOk: true
url: "https://github.com/DreamLab-AI/solid-pod-rs"
homepage: "https://github.com/dreamlab-ai/solid-pod-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["did-nostr", "rust", "solid"]
stars: 8
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 7
createdAt: "2026-04-20T09:33:50Z"
lastCommitAt: "2026-10-23T08:47:25Z"
lastReleaseAt: "2026-10-14T21:07:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 51
maintainers: ["claude", "jjohare"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0d76f201047510cacccddd18d19b492674088bd15c3e52d497aa5b1d48ba9ac/DreamLab-AI/solid-pod-rs"
---

# solid-pod-rs

**A Rust Solid pod server and library workspace, ported from Melvin Carvalho's JavaScriptSolidServer.** Store resources over HTTP, control access with WAC, authenticate with Nostr or Solid-OIDC, and add provenance, payments or a git forge through explicit features.

[Start](#quick-start) · [Architecture](#architecture) · [Capabilities](#what-it-does) · [Status](#working-status) · [Docs](https://github.com/DreamLab-AI/solid-pod-rs/blob/HEAD/crates/solid-pod-rs/docs/README.md)

**Maintainer**: [John O'Hare](https://github.com/jjohare) · **Upstream IP**: [Melvin Carvalho](https://github.com/melvincarvalho) ([JSS](https://github.com/JavaScriptSolidServer/JavaScriptSolidServer), the AGPL-3.0 reference Solid pod server) · [MAINTAINERS.md](https://github.com/DreamLab-AI/solid-pod-rs/blob/HEAD/MAINTAINERS.md)

New to Solid, RDF/JSON-LD, WAC, or did:nostr? The concepts live in one place: the [Solid primer for Rust developers](https://github.com/DreamLab-AI/solid-pod-rs/blob/HEAD/crates/solid-pod-rs/docs/explanation/solid-primer.md). This README stays on what solid-pod-rs is and where it sits.

## Where it sits in VisionFlow

solid-pod-rs owns storage and access-control…
