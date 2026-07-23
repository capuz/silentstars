---
repo: "joular/joularcore"
name: "joularcore"
description: "Joular Core is a platform to measure power and energy across all systems, OSes and devices"
readmeQualityOk: true
url: "https://github.com/joular/joularcore"
homepage: "https://www.noureddine.org/research/joular/joularcore"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["energy", "green", "joular", "power", "rust", "software", "joular-core", "joularcore"]
stars: 40
forks: 2
openIssues: 8
closedIssues: 23
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-10-08T12:08:27Z"
lastCommitAt: "2026-07-23T06:16:36Z"
lastReleaseAt: "2026-03-26T09:19:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["adelnoureddine"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aa17856d86f47c0c0121a5a50d895c390758a59f1114a7912e42781a9259710/joular/joularcore"
---

# <a href="https://www.noureddine.org/research/joular/"><img src="https://raw.githubusercontent.com/joular/.github/main/profile/joular.png" alt="Joular Project" width="64" /></a> Joular Core :zap:

Joular Core is a Rust library for measuring power and energy across systems and devices.

It measures CPU and GPU power consumption in real time, and can break that down to individual processes or applications.
Joular Core runs on Linux, Windows, macOS, Raspberry Pi, and inside virtual machines.

It allows applications, telemetry services, benchmarks, and custom developer tools to monitor CPU, GPU, and total system power, as well as attribute energy usage to specific process IDs (PIDs) or multi-process applications.
It can export data to CSV files, a shared-memory ring buffer, and an HTTP/WebSocket API.

Full documentation (user and reference guides) are available at: [https://joular.github.io/joularcore/](https://joular.github.io/joularcore/).

The crate exposes reusable monitoring, output, IPC, and API building blocks that can be embedded in command-line tools, graphical applications, telemetry services, benchmarks, or custom developer tools.

Currently, the library is used in these…
