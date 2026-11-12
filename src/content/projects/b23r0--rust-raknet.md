---
repo: "b23r0/rust-raknet"
name: "rust-raknet"
description: "A high-performance asynchronous networking library written in Rust, implementing a Reliable UDP protocol for real-time messaging."
readmeQualityOk: true
url: "https://github.com/b23r0/rust-raknet"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["minecraft", "networking", "raknet", "reliable-udp", "udp", "udp-protocol", "accelerator", "arq", "asynchronous", "low-latency"]
stars: 227
forks: 22
openIssues: 0
closedIssues: 11
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2022-03-11T10:46:29Z"
lastCommitAt: "2026-10-13T01:27:11Z"
lastReleaseAt: "2022-10-04T15:22:46Z"
status: "quiet"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 36
maintainers: ["b23r0"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f45458744eb08688605f356d994e1c0c40c8231c144509442b428e522903abc/b23r0/rust-raknet"
discussionCount: 2
promoted: true
postedAt: "2026-11-12T05:52:24.648Z"
---

# rust-raknet

**English** | [简体中文](https://github.com/b23r0/rust-raknet/blob/HEAD/README.zh-CN.md)

**A high-performance implementation of the RakNet protocol in Rust.**

[Features](#features) · [Wiki](https://github.com/b23r0/rust-raknet/wiki) · [Get started](#get-started) · [Benchmarks](#benchmarks) · [Contributing](#contributing)

`rust-raknet` is a high-performance asynchronous networking library written in Rust, implementing a Reliable UDP protocol for real-time messaging.

## Features

- **Five delivery modes.** Send best-effort updates, discard stale state, deliver reliable events, or keep messages ordered on independent channels.
- **Async client and server.** Tokio-based connect, listen, accept, send and receive APIs, with IPv4 and IPv6 address encoding.
- **Blocking client and server.** The optional `blocking` feature provides synchronous connect, listen, accept, send, receive and timeout APIs backed by a shared Tokio runtime. Background workers keep ACKs and retries running between calls. [Usage](#blocking-api).
- **Message boundaries.** Receive complete application messages rather than reconstructing them from a byte stream. Large `ReliableOrdered` messages are…
