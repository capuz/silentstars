---
repo: "Religiya-Serdtsa/CWIST"
name: "CWIST"
description: "A high-performance C17 web framework supporting HTTP/3, WebTransport, and PQC."
readmeQualityOk: true
url: "https://github.com/Religiya-Serdtsa/CWIST"
homepage: "https://religiya-serdtsa.github.io/CWIST/"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["boringssl", "c", "http2", "http3", "http3-server", "io-uring", "lightweight", "low-level", "mux", "openssl"]
stars: 7
forks: 3
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-01-07T12:06:07Z"
lastCommitAt: "2026-08-28T12:24:23Z"
lastReleaseAt: "2026-08-09T01:28:40Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 76
maintainers: ["gg582", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b93325e98cceca4fad350e85a92bbe4280372e11dd698d04540047c922cb3ef/Religiya-Serdtsa/CWIST"
---

</p>

<h1 align="center">CWIST</h1>

CWIST is a C17 web framework and application server with built-in HTTP/1.1, HTTP/2,
HTTP/3 (QUIC), WebSocket, and WebTransport support, hybrid post-quantum TLS
(X25519MLKEM768), an embedded SQLite ORM, and a synchronous io_uring/epoll/kqueue
reactor. It is written in plain C, links statically, and serves ~110k req/s at
sub-0.2ms average latency in ~14MB of RSS.
</p>

[Heavy Benchmark on CWIST APP](https://github.com/gg582/fly.board/blob/main/README.md)

Latest Web Server Benchmark (wrk -t12 -c400 -d10s (after 10s warmup, warmup discarded)):
- **CWIST (classic pool)**: 251709 req/s | Latency 0.93ms (P90 1.94ms, P99 5.71ms) | RSS 14704KiB | Csw 0
- **CWIST (C1M reactor)**: 259488 req/s | Latency 1.00ms (P90 2.03ms, P99 6.82ms) | RSS 10508KiB | Csw 0
- **Axum**: 250912 req/s | Latency 1.60ms (P90 2.91ms, P99 4.69ms) | RSS 16236KiB | Csw 0
- **Gin (Go)**: 191567 req/s | Latency 3.61ms (P90 9.60ms, P99 22.72ms) | RSS 32772KiB | Csw 0
- **Spring Boot**: 133136 req/s | Latency 2.98ms (P90 4.32ms, P99 6.51ms) | RSS 1307120KiB | Csw 0

Spring runtime env: **openjdk version "25.0.4.1" 2026-08-18 LTS**, Spring Boot **3.2.3** (Spring WebFlux + Reactor…
