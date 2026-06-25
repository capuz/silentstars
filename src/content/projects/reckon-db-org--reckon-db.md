---
repo: "reckon-db-org/reckon-db"
name: "reckon-db"
description: "ReckonDB is a BEAM-native Event Store"
url: "https://github.com/reckon-db-org/reckon-db"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [95]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-03T06:24:40Z"
lastCommitAt: "2026-06-25T06:40:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 45
maintainers: ["rgfaber"]
openGraphImageUrl: "https://opengraph.githubassets.com/39441ded2af9bc824fd86202ddd2380a0bc81baa094603b34269e780197be878/reckon-db-org/reckon-db"
---

# reckon-db

BEAM-native Event Store built on Khepri/Ra with Raft consensus.

## Overview

reckon-db is an Erlang implementation of a distributed event store designed for:
- **Event Sourcing**: Store and replay events with optimistic concurrency
- **Clustering**: Automatic node discovery and Raft-based replication
- **High Throughput**: Partitioned writers for concurrent stream writes
- **Edge & Datacenter**: Works on Nerves devices and Kubernetes clusters

## Features

- Event stream operations (append, read, subscribe) with versioning and optimistic concurrency
- **Dynamic Consistency Boundary (DCB)** — conditional append on a tag-filter context query (see [guides/dcb.md](guides/dcb.md))
- Persistent subscriptions (stream, event type, pattern, payload matching)
- Snapshot management for aggregate state
- Emitter pools for high-throughput event delivery
- UDP multicast and Kubernetes DNS discovery
- BEAM telemetry with optional OpenTelemetry exporters

## Installation

Add to your `rebar.config`:

```erlang
{deps, [
    {reckon_db, "2.1.0"}
]}.
```

Pure Erlang implementation - works everywhere, no native dependencies.

## Quick Start

```erlang
%% Start the application…
