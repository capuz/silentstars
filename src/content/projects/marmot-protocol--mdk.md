---
repo: "marmot-protocol/mdk"
name: "mdk"
description: "Marmot Development Kit"
readmeQualityOk: true
url: "https://github.com/marmot-protocol/mdk"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 73
forks: 45
openIssues: 269
closedIssues: 1325
watchers: 1
contributors: 26
recentReleases: 0
createdAt: "2025-09-12T14:49:56Z"
lastCommitAt: "2026-11-13T05:08:28Z"
lastReleaseAt: "2026-07-06T21:33:40Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 54
maintainers: ["erskingardner", "dannym-arx", "Datawav"]
openGraphImageUrl: "https://opengraph.githubassets.com/69c6deb2c9f8a95c7753b442240fce4c0f1820f08d7fb041d6e2806643000ec6/marmot-protocol/mdk"
---

# MDK — Marmot Development Kit

MDK is the Rust implementation of [Marmot](https://github.com/marmot-protocol/marmot), an end-to-end encrypted group
messaging protocol built on [MLS (RFC 9420)](https://www.rfc-editor.org/rfc/rfc9420) with Nostr identity. It powers
White Noise: the protocol engine, encrypted storage, Nostr transport, the app runtime behind the mobile bindings, the
`wn` command-line app, and the `wn-agent` connector that brings AI agents into encrypted chats.

The protocol specification lives in [marmot-protocol/marmot](https://github.com/marmot-protocol/marmot). This repository
holds the implementation, its architecture notes, conformance tests, formal models, and release tooling.

## Contents

- [Find your way](#find-your-way)
- [Chat with an AI agent](#chat-with-an-ai-agent)
- [The `wn` command-line app](#the-wn-command-line-app)
- [Build an app on MDK](#build-an-app-on-mdk)
- [How MDK is built](#how-mdk-is-built)
- [How convergence works](#how-convergence-works)
- [Crate map](#crate-map)
- [Development](#development)
- [Releases](#releases)
- [License](#license)

## Find your way

| I want to… | Start here |
| --- | --- |
| Talk to Hermes, OpenClaw, Claude Code,…
