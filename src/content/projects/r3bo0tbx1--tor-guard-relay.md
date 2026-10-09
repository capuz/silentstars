---
repo: "r3bo0tbx1/tor-guard-relay"
name: "tor-guard-relay"
description: "Hardened Docker AIO Tor Bridge, Relay & Exit Stack 🧅🐋🛡️"
readmeQualityOk: true
url: "https://github.com/r3bo0tbx1/tor-guard-relay"
homepage: "https://docker.brokenbotnet.com"
language: "Shell"
languages: ["Shell", "Python", "HTML"]
languagePcts: [49, 25, 21]
topics: ["anonymity", "anticensorship", "cosmos-cloud", "docker", "internet-freedom", "open-source", "tor-bridges", "tor-exits", "tor-hidden-services", "tor-relay"]
stars: 56
forks: 1
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2025-10-31T22:06:44Z"
lastCommitAt: "2026-10-09T18:57:04Z"
lastReleaseAt: "2026-07-22T16:55:36Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 49
maintainers: ["r3bo0tbx1", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1087421230/c4ee0d6c-9437-4ab1-ae35-664050b9f57d"
fundingLinks: ["CUSTOM:https://donate.brokenbotnet.com"]
---

# 🧅 Tor Guard Relay

**A hardened, production-ready Tor relay with built-in diagnostics and monitoring**

[Quick Start](#-quick-start) • [Features](#-key-features) • [🌐 Live Dashboard](https://relays.brokenbotnet.com/) • [Documentation](#-documentation) • [Gallery](#gallery) • [FAQ](https://github.com/r3bo0tbx1/tor-guard-relay/blob/HEAD/docs/FAQ.md) • [Architecture](https://github.com/r3bo0tbx1/tor-guard-relay/blob/HEAD/docs/ARCHITECTURE.md) • [Tools](#-built-in-tools) • [Contributing](#-contributing)

---

## 🆕 v2.2.0: safer operations and recovery

Current source version: v2.2.0.

> [!IMPORTANT]
> 🛡️ Tor **0.4.9.14 or newer** is required. This release is locally validated; publication and live-relay verification are separate steps. See the [curated release notes](https://github.com/r3bo0tbx1/tor-guard-relay/blob/HEAD/docs/releases/v2.2.0.md).

| Improvement | Operator benefit | Guide |
| --- | --- | --- |
| 🔎 Current-run health and `doctor` | Separate liveness, configuration, freshness and readiness | [Tools](https://github.com/r3bo0tbx1/tor-guard-relay/blob/HEAD/docs/TOOLS.md) |
| ⚙️ Validated atomic config changes | Mounted torrc remains authoritative; generated config…
