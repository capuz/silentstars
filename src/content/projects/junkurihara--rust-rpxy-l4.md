---
repo: "junkurihara/rust-rpxy-l4"
name: "rust-rpxy-l4"
description: "An L4 reverse proxy with protocol multiplexer, written in Rust"
readmeQualityOk: true
url: "https://github.com/junkurihara/rust-rpxy-l4"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["http", "layer4", "multiplexer", "quic", "reverse-proxy", "ssh", "tcp", "tls", "udp", "wireguard"]
stars: 124
forks: 9
openIssues: 1
closedIssues: 11
watchers: 5
contributors: 4
recentReleases: 2
createdAt: "2025-02-03T06:45:21Z"
lastCommitAt: "2026-10-29T10:36:27Z"
lastReleaseAt: "2026-10-23T08:09:37Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 47
maintainers: ["junkurihara", "dependabot[bot]", "saeed-jalilian"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b37fc8e9fc11035df8fbaf3fbf9af2bd9e7b26aba73cf6c3ff50c5bff84c980/junkurihara/rust-rpxy-l4"
fundingLinks: ["GITHUB:https://github.com/junkurihara"]
discussionCount: 1
---

# rpxy-l4: A reverse proxy for the layer-4 (TCP+UDP) with protocol multiplexer, written in Rust

> **WIP project, early stage of development.** This project just started from the owner's personal interest and research activity. Not recommended for production use yet.

## Introduction

`rpxy-l4` is an L4 reverse proxy supporting both TCP and UDP protocols, which is designed on the same philosophy as [`rpxy`](https://github.com/junkurihara/rust-rpxy) (HTTP reverse proxy). It is written in Rust and aims to provide a high-performance and easy-to-use reverse proxy for layer-4 protocols.

## Features

- **Basic L4 reverse proxy feature**: `rpxy-l4` can forward TCP and UDP packets to the backend server.
- **Protocol multiplexing**: `rpxy-l4` can multiplex multiple protocols over TCP/UDP on the same port, which means `rpxy-l4` routes specific protocols to their corresponding backend servers. Currently, it supports the following protocols:
  - TCP: HTTP (cleartext), TLS, SSH, Socks5
  - UDP: QUIC (IETF QUIC[^quic]), WireGuard
- **Load balancing**: `rpxy-l4` can distribute incoming connections to multiple backend servers based on the several simple load balancing algorithms.
- **Protocol…
