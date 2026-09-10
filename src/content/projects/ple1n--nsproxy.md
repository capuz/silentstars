---
repo: "ple1n/nsproxy"
name: "nsproxy"
description: "Network-native containerization system for the desktop"
readmeQualityOk: true
url: "https://github.com/ple1n/nsproxy"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["network-namespace", "opsec", "systemd", "privacy", "proxychains", "devops", "docker", "socks5"]
stars: 85
forks: 4
openIssues: 0
closedIssues: 3
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2023-11-04T18:56:59Z"
lastCommitAt: "2026-09-10T08:17:02Z"
lastReleaseAt: "2025-10-01T16:14:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 32
maintainers: ["ple1n"]
openGraphImageUrl: "https://opengraph.githubassets.com/9359560071c7e6462996c043ef4196a3da929816102e554c43c1990d5ab35d35/ple1n/nsproxy"
discussionCount: 0
---

# Network-native containerization system

> nsproxy, network-namespace with SOCKS5 proxy

- You can run dockerd within a container, with everything proxied by a SOCK5 proxy
- The sandbox may defend against _casual_ attackers, or otherwise unnecessary state-cross-contamination of softwares
- The codebase is a singleton in full Rust. You are expected to modify the code. 
- Native [alacritty](https://github.com/alacritty/alacritty) integration at full speed
- It's shipped with a GUI written with EGUI, meant to daily-drive desktop with paranoia-level of network control
- You can control the degree of isolation. In the least isolated case, only network namespace is unshared, such that no softwares break.
- status, branch `main` is always production-ready
