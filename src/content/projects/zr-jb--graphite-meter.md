---
repo: "zR-JB/graphite-meter"
name: "graphite-meter"
description: "Self-hosted network throughput, loaded latency, and WebTransport datagram-loss measurement with receiver-side accounting, selectable transports, and browser and terminal clients."
readmeQualityOk: true
url: "https://github.com/zR-JB/graphite-meter"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [44, 42]
topics: ["agpl", "bufferbloat", "docker", "homelab", "http3", "iperf-alternative", "latency", "network-measurement", "self-hosted", "speed-test"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 51
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-27T16:17:06Z"
lastCommitAt: "2026-11-14T10:46:48Z"
lastReleaseAt: "2026-07-23T17:24:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["zR-JB", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc44e81b9d663a3e29a622a5c011b41749b2c52b86e3ca8f4a8813cdf8f58ff0/zR-JB/graphite-meter"
discussionCount: 0
---

# Graphite Meter

A self-hosted speed and latency test, in one container or one binary, for the browser and the terminal.

## Why Graphite Meter

- **Receiver-timed.** The receiver times every transfer: your browser times downloads and the server times uploads, so bytes still queued never count.
- **Latency under load.** Idle and loaded latency are measured separately, each with median, P95, jitter and timeouts, so you see exactly how much a busy line adds.
- **Honest gaps.** Missing data shows as missing, never as zero, and no result is graded.
- **Every web transport.** Throughput over HTTP/1.1, HTTP/2, HTTP/3 or WebTransport, latency over WebSocket or WebTransport, picked automatically or by hand.
- **Several servers.** One run measures one to four servers on one schedule and shows them combined or one at a time.
- **Terminal client.** `graphite-meter-client` runs the same test and names its failures and outcomes in the same words as the browser.
- **Built for fast links.** Profile-optimized release builds and a server that spreads every protocol, HTTP/3 included, across all CPU cores.
- **Smooth while it measures.** Timing runs in background workers, so the page stays…
