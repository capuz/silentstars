---
repo: "acking-you/pb-mapper"
name: "pb-mapper"
description: "P2P-first tunnels to private TCP/UDP services: direct QUIC with automatic relay fallback, one TCP + one UDP port for every service, built-in scoped keys and event listeners. Rust CLI plus Rust and Node SDKs, made for agent-harness remote control."
readmeQualityOk: true
url: "https://github.com/acking-you/pb-mapper"
homepage: "https://docs.rs/pb-mapper"
language: "Rust"
languages: ["Rust", "Dart"]
languagePcts: [62, 28]
topics: ["ai-agents", "flutter", "frp-alternative", "hole-punching", "intranet-penetration", "nat-traversal", "nodejs", "p2p", "port-forwarding", "quic"]
stars: 75
forks: 6
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-09T20:36:00Z"
lastCommitAt: "2026-11-02T17:56:47Z"
lastReleaseAt: "2026-01-20T05:07:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["acking-you"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5471beaaa7a0c057befd094039e422bf42f364047c133faf4b764523b5b8138/acking-you/pb-mapper"
---

---

**pb-mapper** reaches private TCP and UDP services behind NAT. Run `register`
next to a service and `connect` wherever you need it, and the service appears on
a local port. Each connection tries a **peer-to-peer QUIC path** first. If the
network will not allow one, it falls back to the **relay** before a single
byte is sent. Nobody picks a path by hand: the CLI and the SDKs decide per
connection, and keep the tunnel up through relay restarts, outages and network
changes.

```text
                 ┌──── direct: UDP hole punching + QUIC ────┐
 your app ─► connect                                         register ─► private service
   :9090         └──── fallback: relay.example.com:7666 ─────┘
```

## Why pb-mapper

**🧩 An SDK that handles the network for you.** `register` and `connect` are
the whole API. Hole punching, mutually authenticated QUIC, relay fallback,
reconnection, DNS refresh and recovery after a network change all happen inside
them, for TCP and UDP alike. One process can hold any number of tunnels, each
with its own credential.

**🔌 One TCP port relays everything; one UDP port punches for everything.**
`7666/tcp` carries registration, subscription, status,…
