---
repo: "palemoky/dnspick"
name: "dnspick"
description: "🚀 Pick the DNS that fits you"
readmeQualityOk: true
url: "https://github.com/palemoky/dnspick"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 249
forks: 10
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2025-10-20T09:10:57Z"
lastCommitAt: "2026-07-16T05:58:35Z"
lastReleaseAt: "2026-06-27T05:32:23Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 33
maintainers: ["palemoky", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb4c800ed84dff53f2da04e59f46c6b6cc1183982eefb1647644019282c2da09/palemoky/dnspick"
---

# DNS Pick

Pick the DNS that fits you

**English** | [简体中文](https://github.com/palemoky/dnspick/blob/HEAD/README.zh-CN.md)

</div>

`dnspick` is a cross-platform command-line tool. It concurrently benchmarks a set of popular and custom DNS servers (over UDP, DoT, DoH and DoH3) by repeatedly querying a list of common domains, then scores them intelligently from **average latency** and **success rate**. It also folds in the default DNS you are currently using for comparison and gives a recommendation at the end.

---

## Features

*   **Cross-platform**: Runs on Windows, macOS, Linux, Raspberry Pi (ARM/ARM64) and other mainstream platforms.
*   **Multi-protocol**: Tests plain UDP DNS, DNS-over-TLS (DoT), DNS-over-HTTPS (DoH, RFC 8484 wire-format) and DNS-over-HTTP/3 (DoH3, over QUIC) side by side.
*   **More accurate measurement**: Reuses one connection per server and bounds concurrency to avoid requests contending with each other and distorting latency; DoT/DoH are warmed up before timing.
*   **Composite score**: More than just a speed test! Combines **average latency** and **success rate** into a single score (see [Scoring](#-how-is-the-composite-score-computed)) and recommends…
