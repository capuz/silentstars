---
repo: "venjiang/quicz"
name: "quicz"
description: "A QUIC implementation in Zig following IETF QUIC (quicwg.org)"
readmeQualityOk: true
url: "https://github.com/venjiang/quicz"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-28T07:26:00Z"
lastCommitAt: "2026-07-17T06:03:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: ["venjiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c9dcabf105d3c8d6c8334d8f981516a703bac2dcf1f587804bc24703bdb1d0c/venjiang/quicz"
---

# quicz

English | [简体中文](https://github.com/venjiang/quicz/blob/HEAD/README_zh-CN.md)

`quicz` is an experimental IETF QUIC transport implementation in
[Zig](https://ziglang.org/). It targets a usable QUIC v1 transport rather than
every optional QUIC extension.

## Status and scope

The current core includes pure-Zig TLS 1.3, QUIC packet protection, streams,
flow control, Retry, connection-ID routing, path validation, loss recovery,
and a NewReno baseline. Real UDP loopback, separate-process Zig, and
certificate-verified Go/Rust/quic-go interoperability probes cover the primary
handshake and FIN-terminated stream-echo path.

It is still experimental. Production endpoint capacity policy, broader
interoperability, and several RFC edge cases remain in progress. HTTP/3/QPACK,
QUIC DATAGRAM, full QUIC v2/compatible-version behavior, multipath, qlog,
PMTU, GSO/GRO, and advanced congestion controllers are outside the first
transport milestone.

The authoritative status and evidence are in the
[transport task matrix](https://github.com/venjiang/quicz/blob/HEAD/docs/en/quic_transport_tasks.md).

## Quick start: use the library

Use Zig **0.16.0**. Add `quicz` to an application's…
