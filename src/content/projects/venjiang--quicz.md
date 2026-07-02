---
repo: "venjiang/quicz"
name: "quicz"
description: "A QUIC implementation in Zig following IETF QUIC (quicwg.org)"
url: "https://github.com/venjiang/quicz"
language: "Zig"
languages: ["Zig"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-28T07:26:00Z"
lastCommitAt: "2026-07-02T06:33:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 46
maintainers: ["venjiang"]
openGraphImageUrl: "https://opengraph.githubassets.com/26257312b965d981c08f5973fdad46fd0c56f72f39195b427583ae0260e872a4/venjiang/quicz"
---

# quicz

English | [简体中文](README_zh-CN.md)

A QUIC implementation in [Zig](https://ziglang.org/) aiming to follow the IETF QUIC standard defined at <https://quicwg.org/>.

> Status: **experimental / WIP**.  
> Goal: implement a practical QUIC transport subset aligned with the common
> capabilities expected from mature QUIC stacks. Optional extensions are
> tracked explicitly instead of being treated as required for the first usable
> transport.

## Features and Roadmap

### Implemented / In Progress

- [x] Buildable Zig package with `Connection`, frame-payload examples, and runnable loopback examples.
- [x] Core codec coverage for varints, packet headers, packet numbers, frames, transport parameters, transport errors including RFC 9368 version-negotiation close classification, Version Negotiation and compatible-version selection helpers, Retry, stateless reset, and QUIC v2 packet/key/token primitives.
- [x] Experimental in-memory transport state for streams, CRYPTO byte streams, flow control, connection IDs, Retry/tokens, path validation, close/idle timers, packet number spaces, and rollback on invalid frame payloads.
- [x] Packet protection helpers for QUIC v1/v2 Initial keys,…
