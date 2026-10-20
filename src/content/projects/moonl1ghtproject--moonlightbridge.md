---
repo: "MoonL1ghtProject/MoonLightBridge"
name: "MoonLightBridge"
description: "Typed Java ↔ Rust RPC with generated APIs, streaming, retries, mTLS, and minimal infrastructure overhead."
readmeQualityOk: true
url: "https://github.com/MoonL1ghtProject/MoonLightBridge"
homepage: "https://moonlightproject.ru"
language: "Java"
languages: ["Java", "Rust"]
languagePcts: [48, 48]
topics: ["async", "codegen", "distributed-systems", "folia", "java", "java-rust", "kotlin", "minecraft", "mtls", "networking"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-09-09T10:10:46Z"
lastCommitAt: "2026-10-20T08:49:27Z"
lastReleaseAt: "2026-10-20T04:46:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 45
maintainers: ["1VicTim1"]
openGraphImageUrl: "https://opengraph.githubassets.com/69f99104f78f5bdd841b4e0c6d90f735cc3171ce087c3088408d3f73d23872c1/MoonL1ghtProject/MoonLightBridge"
---

MoonLightBridge is an embedded Java 21+ library, not a sidecar SDK or mandatory Minecraft plugin.
Describe an API in Java, Kotlin, Rust, or an ordinary `.proto` file and call a Rust service through
a generated `CompletableFuture` client. The same API works in ordinary JVM applications and
Paper/Folia plugins over TCP, mutual TLS, or Unix-domain sockets.

## Why MoonLightBridge?

- **Typed end to end.** Code-first annotations or a handwritten `.proto` schema generate Java
  clients, Rust service traits, batch methods and server events.
- **Built for the hot path.** Multiplexed requests, a dedicated bounded writer, burst
  coalescing and reusable buffers keep the bridge overhead small.
- **Universal first.** The lifecycle, reconnect, batching, health and event API has no Bukkit
  dependency; Paper/Folia support is a thin scheduler-aware adapter.
- **Failure is explicit.** Deadlines, cancellation, heartbeat, reconnect supervision,
  backpressure, protocol validation and structured remote errors are part of the core.
- **Observable by the service owner.** Opt-in Micrometer/Prometheus metrics and OpenTelemetry
  traces stay under the application's exporter and retention policy, never…
