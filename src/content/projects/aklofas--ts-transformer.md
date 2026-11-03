---
repo: "aklofas/ts-transformer"
name: "ts-transformer"
description: "Stream live video + MISB KLV telemetry from drones and other gimbaled platforms (aircraft, turrets) — MPEG-TS over UDP / TCP / RTP / SRT / RIST. Rust core; C, Python, and JVM bindings."
readmeQualityOk: true
url: "https://github.com/aklofas/ts-transformer"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
topics: ["c-abi", "ffi", "gimbal", "klv", "libsrt", "mbedtls", "misb", "mpeg-ts", "rust", "srt"]
stars: 12
forks: 0
openIssues: 3
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-04-30T08:24:24Z"
lastCommitAt: "2026-11-03T11:15:33Z"
lastReleaseAt: "2026-10-28T08:04:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 52
maintainers: ["aklofas"]
openGraphImageUrl: "https://opengraph.githubassets.com/908484d173bb5f8efdfab2b7a142b5624c9cad267e496a23aef607e4748f4a4b/aklofas/ts-transformer"
---

# ts-transformer

**Read, build, and transform MPEG-TS with typed MISB KLV metadata.** Mux and
demux transport streams, encode and decode ST 0601 telemetry, parse H.264 /
H.265 / H.266 / AV1 elementary streams — offline against files, or live. And
when you need a wire: stream over UDP, TCP / TLS, RTP (incl. RTSP), SRT, or
RIST, or publish HLS — with reconnect, encryption, and live stats built in.
Rust core; C, Python, and JVM bindings; `no_std` embedded support.

*The Swiss-Army knife for MPEG-TS + KLV streams.*

| Language | Status | Start here |
|---|---|---|
| **Rust** | Shipping | [`docs/languages/rust.md`](https://github.com/aklofas/ts-transformer/blob/HEAD/docs/languages/rust.md) |
| **C** | Shipping · ABI 0.27 | [`docs/languages/c.md`](https://github.com/aklofas/ts-transformer/blob/HEAD/docs/languages/c.md) |
| **Python** | Shipping · `tstrans` on PyPI | [`docs/languages/python.md`](https://github.com/aklofas/ts-transformer/blob/HEAD/docs/languages/python.md) |
| **JVM** | Shipping · `org.tstrans:tstrans-jvm` on Maven Central | [`docs/languages/jvm.md`](https://github.com/aklofas/ts-transformer/blob/HEAD/docs/languages/jvm.md) |
| **Embedded (bare-metal / RTOS)** | Shipping…
