---
repo: "robot-head/crabka"
name: "crabka"
description: "A Rust reimplementation of Apache Kafka. Apache 2.0, derivative work. Beta"
url: "https://github.com/robot-head/crabka"
homepage: "https://robot-head.github.io/crabka/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["kafka", "message-broker", "rust", "streaming"]
stars: 15
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-11T00:47:48Z"
lastCommitAt: "2026-07-04T19:19:42Z"
lastReleaseAt: "2026-05-15T06:31:58Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 54
maintainers: ["renovate[bot]", "robot-head", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1235046442/18ec5e62-bb7c-4806-a97f-8cb6ef24acd6"
discussionCount: 0
---

</p>

</p>

# Crabka

Crabka is a Rust reimplementation of [Apache Kafka](https://kafka.apache.org).
It speaks the Kafka wire protocol, stores records in Kafka-compatible log
segments, runs metadata on KRaft, and is validated against the official JVM
clients and command-line tooling.

Crabka is built for people who want Kafka-compatible streaming infrastructure
without the JVM runtime: memory-safe Rust, async I/O, no ZooKeeper, no GC pauses,
and a workspace that also includes native Rust clients, Schema Registry, a gRPC /
Connect-RPC gateway, a Kubernetes operator, a partition rebalancer, and
cross-cluster replication.

## Table of Contents

- [Project Status](#project-status)
- [Why Crabka](#why-crabka)
- [Features](#features)
- [Feature Compatibility](#feature-compatibility)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Architecture](#architecture)
- [Workspace Packages](#workspace-packages)
- [Development](#development)
- [Performance](#performance)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Status

Crabka is **beta**,…
