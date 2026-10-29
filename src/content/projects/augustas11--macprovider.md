---
repo: "Augustas11/macprovider"
name: "macprovider"
description: "Mac Provider — pooled MLX inference network for Apple Silicon Macs"
readmeQualityOk: true
url: "https://github.com/Augustas11/macprovider"
language: "Go"
languages: ["Go", "Swift"]
languagePcts: [38, 38]
stars: 11
forks: 5
openIssues: 6
closedIssues: 460
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-05-28T10:10:37Z"
lastCommitAt: "2026-10-29T05:49:45Z"
lastReleaseAt: "2026-06-24T18:40:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["Augustas11", "antfleet-ops"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e0b5193cca3699d298d422b00a00ad3e41c5d7eb5f020a98dd811b910ef9f8d/Augustas11/macprovider"
---

# MacProvider

MacProvider is a pooled inference network built on Apple Silicon. Mac owners
run a small provider (`macprovider-cli`, or the Malibu menu-bar app) that serves
MLX models and earns for the work; developers call the pool through an
OpenAI-compatible API at `api.malibu.tech`. Provider Macs only dial out over a
WebSocket, so they need no open ports, and every response can carry a signed
receipt that buyers verify themselves.

The project includes the provider CLI and Malibu macOS app, the coordinator, the
buyer gateway, receipt verification tooling, web front ends, signed release
automation, operational runbooks, and the normative SPEC corpus that governs the
wire contracts.

## What It Provides

| For providers | For buyers |
|---|---|
| Serve MLX models from any M1+ Mac | Use `/v1/chat/completions` with OpenAI SDKs |
| No inbound ports; the Mac dials out to the coordinator | Route to the live pool or a pinned provider |
| Installer-integrated model recommendation and release verification | Streaming, tool calling, structured output, and sticky sessions |
| Provider portal for setup, identity, status, and earnings | Signed receipt verification with `macprovider-verify`…
