---
repo: "KISSMonX/LinkGauge"
name: "LinkGauge"
description: "A cross-platform iperf3 desktop GUI built with Rust, Tauri, and Vue for TCP/UDP/Ping testing, real-time metrics, logs, and reports."
readmeQualityOk: true
url: "https://github.com/KISSMonX/LinkGauge"
language: "Rust"
languages: ["Rust", "Vue"]
languagePcts: [51, 26]
topics: ["golang", "iperf3", "linux", "rust"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-03T04:44:46Z"
lastCommitAt: "2026-08-17T04:18:37Z"
lastReleaseAt: "2026-08-14T12:56:22Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 50
maintainers: ["KISSMonX", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/51da253b6bd77b51e80411c159a0e47db234ec64825d416efa55ee852f75fb5f/KISSMonX/LinkGauge"
---

# LinkGauge

[English](https://github.com/KISSMonX/LinkGauge/blob/HEAD/README.md) | [中文](https://github.com/KISSMonX/LinkGauge/blob/HEAD/README.zh-CN.md)

A desktop network performance testing application built with Rust, Tauri 2, Vue 3, and TypeScript. It provides a structured GUI workflow for Ping, TCP, and UDP testing. TCP/UDP tests run on a pure-Rust, in-process [riperf3](https://github.com/therealevanhenry/riperf3) engine that speaks the iperf3 wire protocol — no iperf3 binary is installed, bundled, or spawned; only Ping uses the system command. A built-in SSH console (also pure Rust, in-process) can start and stop the peer's iperf3 server on a remote host without leaving the app.

> Current release status: a `v*` tag (created automatically by release-please, see [Continuous integration](#continuous-integration)) builds five packages in CI — Windows x64 (NSIS), macOS x64 and arm64 (DMG), and Linux x64 and arm64 (AppImage + DEB). None of them are code-signed yet, so see the [Installation](#installation) notes for the SmartScreen / Gatekeeper prompts. No package contains a third-party network-testing binary.

## Screenshots

**Client view** — test selection and parameters on…
