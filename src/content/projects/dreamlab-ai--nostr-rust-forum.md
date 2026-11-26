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
stars: 14
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-11T09:35:18Z"
lastCommitAt: "2026-11-26T12:59:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 55
maintainers: ["claude", "jjohare"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fb5853c33b48c6f173443d36f39dfff33420d9261fe7bfd5fafeb0331091e86/DreamLab-AI/nostr-rust-forum"
---

# nostr-rust-forum

### A Rust community kit for Nostr messaging, access control and agent governance

[Start](#quick-start) · [Architecture](#architecture) · [Governance](#signed-governance) · [Interop](#interoperability-and-deployment-profiles) · [Status](#working-status) · [Setup](https://github.com/DreamLab-AI/nostr-rust-forum/blob/HEAD/SETUP.md)

**Build a community where people and agents publish signed events under explicit access rules.** The kit supplies forum and retro browser clients, a relay, auth/pod/search/preview workers, shared libraries and operator tools. Branding, zones and deployment values belong in an operator configuration rather than a fork of the protocol implementation.

Use it for a layered community, team discussion, private messaging or a review surface for agent proposals. A signature identifies a key; roles and policy decide what that key may do. It does not by itself prove a human participated or that an approved action happened.

## Quick start

Copy the example configuration and read the setup path before provisioning infrastructure:
