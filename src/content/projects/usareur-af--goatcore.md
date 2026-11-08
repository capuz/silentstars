---
repo: "USAREUR-AF/goatcore"
name: "goatcore"
description: "goat — software-defined tactical data fabric: identity-based mesh (NetBird/WireGuard) + brokerless Zenoh data plane. Core substrate: CLI, builder, roles, gates, design record."
readmeQualityOk: true
url: "https://github.com/USAREUR-AF/goatcore"
language: "Go"
languages: ["Go", "Rust"]
languagePcts: [28, 25]
stars: 5
forks: 5
openIssues: 29
closedIssues: 5
watchers: 1
contributors: 10
recentReleases: 6
createdAt: "2026-11-03T08:26:35Z"
lastCommitAt: "2026-11-08T14:13:44Z"
lastReleaseAt: "2026-11-06T20:26:25Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 79
undervaluedScore: 65
maintainers: ["dlf-dds", "0mlml"]
openGraphImageUrl: "https://opengraph.githubassets.com/811b2e962e2d176f6947a2ffa184639c969b3dc43f8e095900739e82b49b2939/USAREUR-AF/goatcore"
discussionCount: 0
---

A self-hosted data fabric that keeps working when the network around it fails.

> [!NOTE]
> goat is pre-1.0: interfaces can still change between releases.

## What goat is

goat connects people, machines and services across sites into one network, and lets them publish and subscribe to data with access decided by who they are, not where they sit. It is built for places where connectivity is poor or intermittent: once a device has joined, it keeps talking to its peers directly, with or without the cloud and with or without the central services that enrolled it.

goat is an integration of established open-source projects, assembled and operated as one system:

| Concern | Built on |
|---|---|
| Network | [WireGuard](https://www.wireguard.com/) peer-to-peer tunnels, managed by [NetBird](https://github.com/netbirdio/netbird), with relays for peers that cannot reach each other directly |
| Data | [Eclipse Zenoh](https://zenoh.io/) publish/subscribe with no central broker |
| Identity | [Ory](https://www.ory.sh/) for people and services, [SPIFFE](https://spiffe.io/) for workloads, an offline certificate authority for machines |
| Site state | PostgreSQL, replicated active-active between…
