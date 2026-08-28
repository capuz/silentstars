---
repo: "ze-software/ze"
name: "ze"
description: "Ze networking software you didn't know you were looking for."
readmeQualityOk: true
url: "https://github.com/ze-software/ze"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["bgp", "cli", "fib", "flowspec", "golang", "looking-glass", "networking", "plugin", "rib", "ssh"]
stars: 50
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-27T11:15:32Z"
lastCommitAt: "2026-08-28T14:15:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 32
maintainers: ["thomas-mangin"]
openGraphImageUrl: "https://opengraph.githubassets.com/a23a21f02c0c245ff9807f7d905641ce2a5cf100ed4b3bd1840af5cff5cf21e2/ze-software/ze"
---

# Ze

**[ze-software.net](https://ze-software.net)**

> **Pre-release.** Ze is under active development and has not been released yet. The core BGP engine works, and it is covered by 20,000+ unit tests, 1,600+ functional tests, 70+ fuzz targets, chaos replay and 100+ Docker interop scenarios which run it against FRR, BIRD and GoBGP. I keep OpenBGPd, FreeRtr, RustyBGP and rustbgpd images alongside those, for comparison. Some of the more advanced features are still incomplete, and the API and the config syntax may change before a release.

Ze is an open-source configuration and protocol engine. The network operating system I built on it speaks BGP, manages Linux network interfaces, programs the FIB and serves its own configuration over SSH and a web UI.

None of that is in the core. The core is a supervisor which holds a message bus, a config provider and a plugin manager, and it knows nothing about BGP or about any other protocol. BGP, interface management and the rest of it register themselves as subsystems and plugins. Each one arrives with its own YANG and augments the configuration tree at the point where it belongs.

The CLI, the completion, the validation, the web editor and…
