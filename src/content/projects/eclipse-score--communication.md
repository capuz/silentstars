---
repo: "eclipse-score/communication"
name: "communication"
description: "Repository for the communication module LoLa"
readmeQualityOk: true
url: "https://github.com/eclipse-score/communication"
language: "C++"
languages: ["C++"]
languagePcts: [86]
stars: 55
forks: 86
openIssues: 68
closedIssues: 76
watchers: 9
contributors: 251
recentReleases: 2
createdAt: "2025-03-05T14:47:37Z"
lastCommitAt: "2026-07-24T05:51:31Z"
lastReleaseAt: "2026-07-13T17:10:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 60
maintainers: ["castler", "bemerybmw", "jorgecasal"]
openGraphImageUrl: "https://opengraph.githubassets.com/b91ccef80f49cbe4725e6598319c7ce88deb31a1429af7a607490b5e3f951948/eclipse-score/communication"
discussionCount: 6
---

# Communication Module (LoLa)

- A high-performance, safety-critical communication middleware implementation based on the Adaptive AUTOSAR Communication Management specification.
- This module provides zero-copy, shared-memory based inter-process communication (IPC) in embedded systems.

## Overview

The Communication Module (also known as **LoLa** - Low Latency) is an open-source implementation that provides:

- **High-Performance Intra-ECU IPC**: Zero-copy shared-memory communication for minimal latency within ECUs
- **AUTOSAR Compliance**: Partial implementation of Adaptive AUTOSAR Communication Management (ara::com)
- **Event-Driven Architecture**: Publisher/subscriber pattern with skeleton/proxy framework
- **Service Discovery**: Flag file-based service registration and lookup mechanism
- **Safety-Critical**: Designed for automotive safety standards (ASIL-B qualified)
- **Multi-Threading Support**: Thread-safe operations with atomic data structures
- **Memory Management**: Custom allocators optimized for shared memory usage
- **Tracing Infrastructure**: Zero-copy, binding-agnostic communication tracing support
- **Multi-Platform**: Supports Linux and QNX operating systems

##…
