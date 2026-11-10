---
repo: "vtz/opensomeip"
name: "opensomeip"
description: "An implementation for the open some/ip spec."
readmeQualityOk: true
url: "https://github.com/vtz/opensomeip"
language: "C++"
languages: ["C++"]
languagePcts: [76]
topics: ["some-ip", "someip", "opensomeip"]
stars: 48
forks: 16
openIssues: 30
closedIssues: 180
watchers: 3
contributors: 8
recentReleases: 1
createdAt: "2025-12-15T22:04:14Z"
lastCommitAt: "2026-11-10T11:38:53Z"
lastReleaseAt: "2026-10-05T06:49:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 47
maintainers: ["vtz", "abdelhalim"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d3713b4498266e6f9f0f9a5620be9a5717b1322f227d912508dbc701ad7da27/vtz/opensomeip"
---

# OpenSOME/IP - Open Source SOME/IP Protocol Stack

**OpenSOME/IP** (`opensomeip`) is a modern, open-source C++17 implementation of the Scalable service-Oriented MiddlewarE over IP (SOME/IP) protocol for automotive and embedded systems.

**Rust bindings:** the [`opensomeip` crate](https://github.com/vtz/opensomeip-rs-bind) (`opensomeip-sys` plus a safe wrapper) is documented in the [Rust binding guide](https://github.com/vtz/opensomeip-rs-bind/blob/main/README.md).

> **Keywords**: SOME/IP, AUTOSAR, automotive middleware, service-oriented architecture, SOA, embedded systems, vehicle communication, ECU, CAN replacement, Ethernet automotive, in-vehicle networking, IVN

## Overview

OpenSOME/IP provides a complete, standards-compliant C++ implementation of the SOME/IP protocol stack for automotive and embedded systems. This open-source alternative enables service-oriented communication over Ethernet, supporting AUTOSAR-compatible vehicle networks and IoT applications.

### Core Features

- **Message Format & Serialization**: Complete SOME/IP message handling with big-endian serialization
- **Service Discovery (SD)**: Full multicast-based service discovery with offer/find/subscribe…
