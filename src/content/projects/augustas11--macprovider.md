---
repo: "Augustas11/macprovider"
name: "macprovider"
description: "Mac Provider — pooled MLX inference network for Apple Silicon Macs"
readmeQualityOk: true
url: "https://github.com/Augustas11/macprovider"
language: "Go"
languages: ["Go", "Swift"]
languagePcts: [45, 35]
stars: 11
forks: 4
openIssues: 20
closedIssues: 334
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-05-28T10:10:37Z"
lastCommitAt: "2026-09-24T08:40:48Z"
lastReleaseAt: "2026-06-24T18:40:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 54
maintainers: ["Augustas11", "antfleet-ops"]
openGraphImageUrl: "https://opengraph.githubassets.com/837b5d883b21c58057085789106da0d184d883f4bb2ef1d6f6868852f7b874b1/Augustas11/macprovider"
---

</p>

</p>

</p>

# MacProvider

MacProvider turns Apple Silicon Macs into remote-addressable MLX inference
providers behind the Malibu network. Provider Macs run `macprovider-cli` over an
outbound WebSocket connection, while buyers use an OpenAI-compatible API through
`api.malibu.tech`.

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
| Provider portal for setup, identity, status, and earnings | Signed receipt verification with `macprovider-verify` |

## Architecture

```text
Provider Mac
  macprovider-cli + mlx-lm
        |
        | outbound WebSocket
        v
Coordinator
  provider pool,…
