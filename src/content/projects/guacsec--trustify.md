---
repo: "guacsec/trustify"
name: "trustify"
description: "SBOM analysis platform for storing, correlating, and querying software bill of materials and security advisories (CSAF/VEX, OSV, CVE) at scale. Exposes a vulnerability correlation graph of vuln :left_right_arrow: component :left_right_arrow: product :left_right_arrow: VEX"
readmeQualityOk: true
url: "https://github.com/guacsec/trustify"
homepage: "https://matrix.to/#/#trustification:matrix.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["advisories", "csaf", "cve", "sbom", "vulnerabilities"]
stars: 70
forks: 51
openIssues: 63
closedIssues: 548
watchers: 9
contributors: 36
recentReleases: 0
createdAt: "2024-03-04T15:24:52Z"
lastCommitAt: "2026-09-19T07:47:08Z"
lastReleaseAt: "2024-07-23T13:42:07Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 58
maintainers: ["ruromero", "ctron", "rh-jfuller"]
openGraphImageUrl: "https://opengraph.githubassets.com/3955164d5fe75b62b84bd18bc58cde3076b90e33814330d30bc25b82e3abfb97/guacsec/trustify"
---

# Trustify

**The open-source platform for software supply chain security.**

Trustify brings SBOMs, vulnerability advisories, and VEX documents into a single searchable system — so you can understand what's in your software and respond to threats in minutes, not days.

## Why Trustify

| | |
|---|---|
| **Unified SBOM Management** | Ingest, store, and search CycloneDX and SPDX SBOMs in one place |
| **Vulnerability Intelligence** | Cross-reference SBOMs against advisories from Red Hat, GHSA, NVD, and OSV |
| **VEX Support** | Reduce alert fatigue with vendor vulnerability exploitability data (CSAF/VEX) |
| **Built-in Importers** | Automatically fetch and stay current with public vulnerability feeds |
| **REST API & Web UI** | Full API with OpenAPI spec, plus a modern web interface |
| **Single Binary Deployment** | One binary, one PostgreSQL database — no microservices to wrangle |

## See It In Action

## Quick Start

### Option 1: Download a release

Download the latest `trustd-pm` binary from
[Releases](https://github.com/guacsec/trustify/releases), then:

```shell
AUTH_DISABLED=true ./trustd-pm
```

### Option 2: Build from source

```shell
AUTH_DISABLED=true cargo run --bin…
