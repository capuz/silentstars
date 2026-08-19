---
repo: "venjiang/quicz"
name: "quicz"
description: "A QUIC implementation in Zig following IETF QUIC (quicwg.org)"
readmeQualityOk: true
url: "https://github.com/venjiang/quicz"
homepage: "https://quicz.dev"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
topics: ["quic", "tls13", "zig"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-02-28T07:26:00Z"
lastCommitAt: "2026-08-19T04:07:21Z"
lastReleaseAt: "2026-08-12T13:40:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["venjiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/8680682ee7bba8f7b077b4a5efb2d34e66db03fcbc6e0bc34336c353aeb90d18/venjiang/quicz"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.svg">
</picture>

# quicz

English | [简体中文](https://github.com/venjiang/quicz/blob/HEAD/README_zh-CN.md)

A QUIC / HTTP/3 implementation in pure Zig.

> **Current state:** Transport + application layer production-ready (36 features, 1883 tests,
> three-implementation interop verified). Full HTTP/3, QPACK, WebTransport, and HTTP Datagrams.
> Public APIs may still evolve.

---

## Features

- **QUIC v1 & v2** (RFC 9000 / RFC 9369) — handshake, streams, flow control, connection migration, path validation, Retry, stateless reset, key update, version negotiation, DATAGRAM, multipath, ECN, PMTUD, GSO/GRO
- **TLS 1.3** (RFC 8446 / RFC 9001) — pure Zig, no C dependencies. ECDSA P-256, X25519, AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305, 0-RTT, session resumption
- **Loss Detection & Congestion Control** (RFC 9002 / RFC 9438) — NewReno, CUBIC, packet pacing
   - **HTTP/3** (RFC 9114) — full connection management, SETTINGS, GOAWAY, stream state machine, QPACK static + dynamic table, production async runtime drivers
- **WebTransport** (draft-ietf-webtrans-http3) — full session management, uni/bidi framing,…
