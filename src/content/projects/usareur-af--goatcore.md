---
repo: "USAREUR-AF/goatcore"
name: "goatcore"
description: "goat: a self-hosted, open-source data fabric. WireGuard mesh (NetBird), brokerless Zenoh pub/sub and identity-based zero-trust access that keeps working when links fail. CLI, builder, roles and design record."
readmeQualityOk: true
url: "https://github.com/USAREUR-AF/goatcore"
homepage: "https://usareur-af.github.io/goatdocs/goat/"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [29, 23]
topics: ["ansible", "data-fabric", "edge-computing", "goat", "golang", "identity", "mesh-networking", "netbird", "pub-sub", "rust"]
stars: 34
forks: 15
openIssues: 110
closedIssues: 61
watchers: 1
contributors: 12
recentReleases: 10
createdAt: "2026-11-03T08:26:35Z"
lastCommitAt: "2026-11-26T23:34:14Z"
lastReleaseAt: "2026-11-09T19:43:50Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 46
maintainers: ["dlf-dds"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1444008872/d39d0a37-233f-4ecf-8a0d-9addd8820c84"
discussionCount: 1
---

A self-hosted data fabric that keeps working when the network around it fails.

> **Note**
>
> goat is pre-1.0: interfaces can still change between releases.
> To build on goat, use the [`stable`](https://github.com/usareur-af/goatcore/tree/stable) branch or the `goatcore/v` tag it points at. To contribute, open a pull request against `main`. [How the two fit together](https://github.com/USAREUR-AF/goatcore/blob/HEAD/docs/design/community-and-stable-line.md).

## What goat is

goat connects people, machines and services across sites into one network, and lets them publish and subscribe to data with access decided by who they are, not where they sit. It is built for places where connectivity is poor or intermittent: once a device has joined, it keeps talking to its peers directly, with or without the cloud and with or without the central services that enrolled it.

goat is an integration of established open-source projects, assembled and operated as one system:
