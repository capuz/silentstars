---
repo: "patdhlk/taktora"
name: "taktora"
description: "Rust execution framework on top of iceoryx2"
url: "https://github.com/patdhlk/taktora"
homepage: "http://taktora.eu"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["beckhoff", "can", "ethercat", "executor-runtime", "iceoryx2", "industrial-automation", "industrial-iot", "plc", "real-time", "sdv"]
stars: 29
forks: 26
openIssues: 19
closedIssues: 23
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-08T16:05:49Z"
lastCommitAt: "2026-06-28T02:03:12Z"
lastReleaseAt: "2026-05-18T23:39:07Z"
status: "thriving"
tags: ["release_machine", "under_pressure", "fork_magnet"]
healthScore: 90
undervaluedScore: 56
maintainers: ["patdhlk", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e103cff0804313aea0f35f75d69d8100b4dde377c176e3fec5bbd4bb0675ddff/patdhlk/taktora"
---

# taktora

A Rust workspace exploring how to build a high-level execution framework and a
connector framework on top of [iceoryx2](https://github.com/eclipse-iceoryx/iceoryx2).

Four layered pieces:

- **`taktora-executor`** — items triggered by IPC, intervals, and request/response
  activity; sequential chains; parallel DAGs; signal/slot; lifecycle observability.
- **`taktora-connector-*`** — typed channels with codec-pluggable payloads,
  uniform connector health, and four reference connectors — EtherCAT (driving a
  SubDevice's process data), Zenoh (pub/sub + query/reply over a Zenoh session),
  CAN/SocketCAN, and J1939 (SAE J1939 PGN routing, BAM/RTS-CTS/ETP transport
  protocol, and J1939-81 address claiming layered on CAN) — all exposing the same
  plugin-facing `ChannelWriter` / `ChannelReader` types every other connector
  reuses.
- **EtherCAT build-time codegen toolchains** — turn vendor descriptions into
  strongly-typed Rust at build time, with zero runtime parsing: a *device-driver*
  toolchain (ESI XML → typed `EsiDevice` drivers) and a *network-config* toolchain
  (network YAML → PDO maps / routing tables / validated SM-watchdog
  config for the connector).
-…
