---
repo: "TrixNEW/Bifrost"
name: "Bifrost"
description: "A next-generation Minecraft Bedrock asynchronous reverse proxy built in Zig for maximum performance and scalability."
readmeQualityOk: true
url: "https://github.com/TrixNEW/Bifrost"
language: "Zig"
languages: ["Zig"]
languagePcts: [97]
topics: ["async", "asyncio", "minecraft", "minecraft-bedrock", "minecraft-serverside", "proxy", "proxy-server", "reverse-proxy", "zig", "zig-package"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-27T01:00:40Z"
lastCommitAt: "2026-10-25T02:48:13Z"
lastReleaseAt: "2026-10-11T00:05:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["TrixNEW"]
openGraphImageUrl: "https://opengraph.githubassets.com/00ba514fadac03e7e80389e507be578c6f8c101fe514ce8d808276171003c21a/TrixNEW/Bifrost"
---

# Bifrost

A high-performance Minecraft: Bedrock Edition proxy written in Zig, designed for efficiency, extensibility, and low-latency networking.

Bifrost speaks NetherNet, the WebRTC transport Bedrock uses for direct connections, on both sides: players join it
like any server, and it reaches its backends the same way. It is built on
[nethernet-zig](https://github.com/Bedrock-Phanatics/nethernet-zig) and [bedwire](https://github.com/Bedrock-Phanatics/bedwire).

Built with **Zig 0.17.0**.

## Features

- **High Performance** -> Event-driven workers, no thread per player, zero-copy relaying where the session allows it.
- **Multi-Backend Support** -> Connect players to multiple backend servers.
- **Seamless Transfers** -> Move players between backends without reconnecting.
- **Session Modes** -> Accessible session handling.
- **Native Plugins** -> Extend functionality using Zig, C, or C++.
- **Packet Handling** -> Intercept, modify, and filter packets.
- **Configurable** -> Simple configuration.

## Getting Started

### Requirements

- Zig 0.17.0
- Git, CMake and a C/C++ toolchain, to build libdatachannel once
- Linux or Windows, x86_64

### Build

```bash
git clone…
