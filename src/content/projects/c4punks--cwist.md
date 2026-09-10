---
repo: "c4punks/CWIST"
name: "CWIST"
description: "A high-performance C17 web framework supporting HTTP/3, WebTransport, and PQC."
readmeQualityOk: true
url: "https://github.com/c4punks/CWIST"
homepage: "https://religiya-serdtsa.github.io/CWIST/"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["boringssl", "c", "http2", "http3", "http3-server", "io-uring", "lightweight", "low-level", "openssl", "quic"]
stars: 8
forks: 3
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-01-07T12:06:07Z"
lastCommitAt: "2026-09-10T08:17:28Z"
lastReleaseAt: "2026-08-09T01:28:40Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 72
maintainers: ["gg582", "github-actions[bot]", "DPS0340"]
openGraphImageUrl: "https://opengraph.githubassets.com/05caeb8433eb5afa5b4d8a0af96389da764140b438efb438fb4fd3a3d5f54fa7/c4punks/CWIST"
---

</p>

<h1 align="center">CWIST</h1>

Pronunciation: [kʰú.i̯.sɯ̂t̚] (or [kʰu˧˥i̯.sɯ˥˩t̚])<br>
(Yes, this strictly adheres to the Korean pitch accent from my hometown: peak the pitch
sharply on the rounded [u], glide into a relaxed [i], and drop rapidly through the [s]
until cut off cleanly by the unreleased [t̚]. Or, you know, just say "twist" with a
sharp "K".)
</p>

CWIST is a C17 web framework and application server with built-in HTTP/1.1, HTTP/2,
HTTP/3 (QUIC), WebSocket, and WebTransport support, hybrid post-quantum TLS
(X25519MLKEM768), an embedded SQLite ORM, and a synchronous io_uring/epoll/kqueue
reactor. It is written in plain C, links statically, and serves ~152k req/s at
1.59ms average latency in ~9.1MB of RSS (CI: `wrk -t12 -c400 -d10s` after warmup,
C1M reactor mode — see the benchmark block below; a tuned `wrk -t4 -c100` profile
reaches 0.41ms average at ~155k req/s).
</p>

[Heavy Benchmark on CWIST APP](https://github.com/gg582/fly.board/blob/main/README.md)

Latest Web Server Benchmark (wrk -t12 -c400 -d10s (after 10s warmup, warmup discarded)):
- **CWIST (classic pool)**: 119107 req/s | Latency 1.76ms (P90 3.75ms, P99 7.42ms, P99.999 33.07ms) | RSS 12800KiB | Csw…
