---
repo: "DreamLab-AI/nostr-rust-forum"
name: "nostr-rust-forum"
description: "Decentralized Nostr forum — all Rust. Leptos WASM client + 5 Cloudflare Workers. Passkey auth, Solid pods, trust system, moderation, badges. 469 tests."
readmeQualityOk: true
url: "https://github.com/DreamLab-AI/nostr-rust-forum"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["bbs", "cloudflare-workers", "decentralized", "forum", "leptos", "nostr", "rust", "wasm", "did-nostr"]
stars: 11
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-11T09:35:18Z"
lastCommitAt: "2026-09-06T08:03:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 56
maintainers: ["claude", "jjohare"]
openGraphImageUrl: "https://opengraph.githubassets.com/fac282a202a9d14d6126df98c975000dbef0d3e03bf685260dfc298e945b1ad2/DreamLab-AI/nostr-rust-forum"
---

# nostr-rust-forum — the human + agent communication substrate

**The one place in the mesh where a decision gets signed.** nostr-rust-forum is a
self-hostable community forum and Nostr relay written in Rust, in which humans and
agents are the same kind of participant: both hold a `did:nostr` keypair, both publish
signed events, and every governance decision is a Schnorr-signed Nostr event on an
immutable log. Agents watch and observe elsewhere; here a human puts their key on the
outcome. That is the whole point of the repo — it is the governance surface of the
[VisionFlow Dynamic Agentic Mesh](https://github.com/DreamLab-AI/VisionFlow), the layer
where machine coordination hands a decision back to a person to sign.

The kit ships **vanilla**. An operator stands up a community by copying
[`forum.example.toml`](https://github.com/DreamLab-AI/nostr-rust-forum/blob/HEAD/forum.example.toml) to `forum.toml`, filling in zones, branding,
and deployment values — no forking, no code changes.

**Maintainer**: [John O'Hare](https://github.com/jjohare) · **Upstream IP**: [Melvin Carvalho](https://github.com/melvincarvalho)…
