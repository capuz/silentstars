---
repo: "bedrock-mc/cinnabar"
name: "cinnabar"
description: "A fast, vanilla-compatible Minecraft: Bedrock Edition client for desktop, written in Rust."
readmeQualityOk: true
url: "https://github.com/bedrock-mc/cinnabar"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 16
forks: 3
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-11T15:56:28Z"
lastCommitAt: "2026-08-04T06:11:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 37
maintainers: ["HashimTheArab"]
openGraphImageUrl: "https://opengraph.githubassets.com/6676b4ead69abe93daba28ecbd20ba8e86fd7253c6c10734f4e6a52048783a55/bedrock-mc/cinnabar"
---

Development is paused until August 1st i need to lock in

# Cinnabar

> Cinnabar is an independent, unofficial client compatible with Minecraft:
> Bedrock Edition. It is not approved by or associated with Mojang or Microsoft.
> Minecraft is a trademark of Microsoft Corporation.

Cinnabar is a greenfield Minecraft Bedrock client. The Rust workspace owns the client,
world model, and rendering, while the Go core will own upstream networking and identity.

Phase 0 is pinned to Bedrock 1.26.30 (protocol 1001).

## Workspace

- `app/`: the `bedrock-client` application.
- `crates/bridge/`: the local client-to-core stream bridge.
- `crates/protocol/`: the pinned Bedrock packet codec.
- `crates/world/`: the client-side world model.
- `crates/render/`: Bevy rendering.
- `core/`: the `bedrock-core` Go service.

Local reference repositories and BDS installations under `.local/` are read-only development
inputs. Committed builds do not depend on them.

## Architecture

The client is deliberately split at a local, packet-aware transport boundary:

```text
Cinnabar desktop client (Rust)
  Axolotl/Valentine protocol definitions + palette-native world + Bevy/WGPU renderer…
