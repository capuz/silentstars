---
repo: "juicity/juicity-rs"
name: "juicity-rs"
description: "A Rust implementation of the [Juicity](https://github.com/juicity/juicity) protocol by AI and AI."
readmeQualityOk: true
url: "https://github.com/juicity/juicity-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
stars: 34
forks: 11
openIssues: 4
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-05-17T07:43:53Z"
lastCommitAt: "2026-11-07T10:37:05Z"
lastReleaseAt: "2026-05-19T15:11:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 37
maintainers: ["Zakkaus", "MarksonHon", "YonQua"]
openGraphImageUrl: "https://opengraph.githubassets.com/c66141f11b1b75c037481004bc05b690a627e55f6c9b3b8ee03b2a64851ccdb0/juicity/juicity-rs"
---

# Juicity-RS

**Juicity client, server and desktop GUI, written in Rust.**

English · [简体中文](https://github.com/juicity/juicity-rs/blob/HEAD/README-zh_hans.md)

[Features](#features) • [GUI](#gui) • [Build](#build) • [Configuration](#configuration) • [Usage](#usage) • [Protocol](#protocol)

A Rust implementation of the [Juicity](https://github.com/juicity/juicity) protocol — a QUIC-based proxy that improves on TUIC's UDP handling with **UDP over Stream**, multiplexing UDP traffic over bidirectional QUIC streams.

## Features

- **QUIC-based transport** — built on [`quinn`](https://github.com/quinn-rs/quinn) v0.11
- **SOCKS5 and HTTP CONNECT proxy** — local proxy server with full SOCKS5 (CONNECT + UDP ASSOCIATE) and HTTP CONNECT support
- **TCP/UDP port forwarding** — forward local ports to remote targets through the QUIC connection, with per-entry protocol filter (`/tcp`, `/udp`, or both)
- **Configurable congestion control** — BBR (default), CUBIC, or NewReno; applies to both client and server (see [Congestion Control](#congestion-control))
- **Full-cone NAT UDP** — underlay UDP encrypted with ChaCha20-Poly1305 (HKDF-SHA1), compatible with the Go version
- **TLS authentication**…
