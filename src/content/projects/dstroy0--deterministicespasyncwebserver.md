---
repo: "dstroy0/DeterministicESPAsyncWebServer"
name: "DeterministicESPAsyncWebServer"
description: "Built from scratch with determinism and modernization as the main goal, it preserves all ESPAsyncWebServer functionality and extends it."
readmeQualityOk: true
url: "https://github.com/dstroy0/DeterministicESPAsyncWebServer"
language: "C++"
languages: ["C++", "C"]
languagePcts: [68, 21]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-19T19:25:34Z"
lastCommitAt: "2026-07-16T06:01:20Z"
lastReleaseAt: "2026-06-26T23:15:37Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["github-actions[bot]", "dstroy0"]
openGraphImageUrl: "https://opengraph.githubassets.com/83a31a80362bed4e82b983df94d6b1c8bb85596d13bf86dbe824a713a7870531/dstroy0/DeterministicESPAsyncWebServer"
discussionCount: 2
---

</p>

# DeterministicESPAsyncWebServer (@dstroy0)

A multi-protocol network server for ESP32 with a fully deterministic memory footprint, RFC 7230 compliant request parsing, and an OSI-layered architecture. It serves HTTP/1.1 and HTTP/2 (with HTTP/3 over QUIC, host-tested), WebSocket, and Server-Sent Events, with optional HTTPS/TLS, SSH, Telnet, SNMP, CoAP, Modbus TCP, MQTT, and OPC UA.

# Active development

> [!WARNING]
> **Expect breaking changes.** This library ships fast: on a busy day that can mean dozens of new features and several public-API breaks.
> **We fix things the right way and put security and correctness first, even when that breaks backwards compatibility**
>
> - include paths, method signatures, defaults, and wire behavior can change between releases.
>   **We do not write backwards-compatibility shims**
> - We **only** support the current library, toolchains, and platforms; removing cruft is the price of a clean, auditable, deterministic core.
>   **Releases are version-tagged**
> - Pin an exact version if you need stability until we lock the core.
>   **The code is the source of truth**
> - Read…
