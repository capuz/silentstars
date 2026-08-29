---
repo: "TheJanusStream/symbios-overlands"
name: "symbios-overlands"
description: "Symbios Overlands is a peer-to-peer 3D virtual world built on the Bevy engine, running natively and in the browser (WASM). It leverages the ATProto network for identity and data storage (PDS), rendering procedural, user-owned virtual worlds."
readmeQualityOk: true
url: "https://github.com/TheJanusStream/symbios-overlands"
homepage: "https://thejanusstream.github.io/symbios-overlands/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-31T18:59:30Z"
lastCommitAt: "2026-08-29T17:27:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 48
maintainers: ["TheJanusStream"]
openGraphImageUrl: "https://opengraph.githubassets.com/e49e3bfdbb72fd8d969466e6035cc7e3b55afc7eb1cb87095821437f65dd7c88/TheJanusStream/symbios-overlands"
---

# Symbios Overlands

> A peer-to-peer spatial web of user-owned virtual worlds for the ATProto network.

🌍 **[Enter the Overlands (Live Browser / WASM Demo)](https://thejanusstream.github.io/symbios-overlands)**

> 🚧 Prototype in active development

## What it is

Sign in with your ATProto identity, walk into a 3D world that belongs to you.
Edit the terrain, scatter buildings, dress your avatar, then step through a
portal into someone else's overland — no loading screen between worlds.
There are no central game servers hosting the worlds; only a small
broker for the WebRTC handshake. Once peers connect, every transform, edit and
chat message flows directly between them.

Built in Rust on the [Bevy](https://bevyengine.org/) engine. The same codebase
runs natively or in any modern browser via WASM.

## Core ideas

**Your DID is your domain.** Authenticate via ATProto OAuth — the app never
sees a password. Your world is deterministically seeded from your DID, so a
brand-new user already has a unique homeworld before they touch the editor:
its own landform, biome and settlement theme, its own colour palette, even its
own soundtrack — plus two socio-political dials, prosperity and…
