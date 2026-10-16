---
repo: "ks-tool/awg-admin"
name: "awg-admin"
description: "Manage AmneziaWG/WireGuard servers, interfaces, peers and users — desktop app or self-hosted web server, backed by a small per-server agent"
readmeQualityOk: true
url: "https://github.com/ks-tool/awg-admin"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [54, 42]
topics: ["amneziawg", "censorship-circumvention", "dpi-bypass", "go", "react", "self-hosted", "tunnel", "typescript", "vpn", "vpn-manager"]
stars: 68
forks: 1
openIssues: 0
closedIssues: 10
watchers: 4
contributors: 2
recentReleases: 2
createdAt: "2026-06-21T19:15:17Z"
lastCommitAt: "2026-10-16T08:26:50Z"
lastReleaseAt: "2026-09-03T04:40:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 24
maintainers: ["shulutkov", "ks-tool"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276278055/e5b493f6-c935-4ee6-8db1-eeeb63b15c0b"
---

# Amnezia-WG Admin (awg-admin)

[Русская версия](https://github.com/ks-tool/awg-admin/blob/HEAD/README_ru.md)

**Amnezia-WG Admin** is a centralized management application for AmneziaWG and WireGuard infrastructures. It stores the
configuration of managed servers, users, and VPN peers, and applies that configuration through an agent running on each
server.

A single instance can manage multiple servers simultaneously. The local database serves as the source of truth, while
agents are responsible for reconciling the actual server state with the stored configuration.

> 📖 **Installation, configuration, and full documentation:** [docs/GUIDE.md](https://github.com/ks-tool/awg-admin/blob/HEAD/docs/GUIDE.md)

## Overview

Amnezia-WG Admin provides centralized administration of AmneziaWG and WireGuard deployments without manually editing
configuration files or connecting to every server over SSH.

After a server has been added, the application can automatically deploy an agent over SSH. All subsequent management
operations are performed through the agent API, either over an SSH tunnel or directly via mTLS. If the actual server
state diverges from the stored configuration, the…
