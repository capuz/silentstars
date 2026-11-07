---
repo: "ethical-buddy/vx6"
name: "vx6"
description: "A decentralized IPv6-native self-hosting fabric that eliminates the need for tunnels, relays, and centralized infrastructure."
readmeQualityOk: true
url: "https://github.com/ethical-buddy/vx6"
homepage: "https://vx6.tech"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 85
forks: 13
openIssues: 19
closedIssues: 32
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-04-19T11:57:30Z"
lastCommitAt: "2026-11-07T10:37:29Z"
lastReleaseAt: "2026-05-03T11:47:45Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 77
undervaluedScore: 27
maintainers: ["ethical-buddy", "sapphire-2112", "zinkazame"]
openGraphImageUrl: "https://opengraph.githubassets.com/784d9145c3b45b5d9f87623930daaba437b262184e682d33ab9784037119d5d4/ethical-buddy/vx6"
discussionCount: 4
---

# VX6

VX6 is a peer-to-peer service network for applications that already run locally. A VX6 node publishes signed service records, discovers peers through the DHT, and opens encrypted connections so another node can reach a service without exposing it directly to the public internet.

The core project is a Go module. It provides the `vx6` command and the Go SDK. Optional desktop, browser, and mobile projects live under [`products/`](https://github.com/ethical-buddy/vx6/blob/HEAD/products/README.md) and build independently.

## What VX6 provides

- Node identities and signed service records
- Direct and DHT-backed service discovery
- Encrypted node sessions and local service forwarding
- Public, private, and invite-based hidden services
- Relay paths and file transfer
- Local status and runtime reload controls

The current transport is TCP. QUIC and eBPF/XDP acceleration are not production transport paths. Hidden-service routing is under active hardening and should not be treated as equivalent to a mature anonymity network. See [security and limitations](https://github.com/ethical-buddy/vx6/blob/HEAD/docs/security.md).

The DHT keeps separate name and NodeID routing indexes. Its…
