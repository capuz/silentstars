---
repo: "rix4uni/xssrecon"
name: "xssrecon"
description: "XSSRecon is a fast reflected-parameter discovery tool that uses unique numbered payloads to detect input reflection in HTTP responses and JavaScript-rendered DOMs."
readmeQualityOk: true
url: "https://github.com/rix4uni/xssrecon"
homepage: "https://krazeplanet.com"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["bug-bounty", "bugbounty", "bugbountytips", "hacking", "infosec", "masshuntxss", "osint", "osint-resources", "osint-tool", "penetration-testing"]
stars: 61
forks: 12
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2025-09-09T07:16:07Z"
lastCommitAt: "2026-11-19T11:55:45Z"
lastReleaseAt: "2026-11-19T11:54:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 54
undervaluedScore: 30
maintainers: ["rix4uni"]
openGraphImageUrl: "https://opengraph.githubassets.com/d50d9be21b2d6e26b257677c0437446f591e262b62230cfe66bf83e706f3a74d/rix4uni/xssrecon"
---

## XSSRecon

XSSRecon is a fast reflected-parameter discovery tool that uses unique numbered payloads to detect input reflection in HTTP responses and JavaScript-rendered DOMs.

## Prerequisites
* **Chrome/Chromium**: Required for DOM checking (automatically used when HTML check fails)
  - Chrome or Chromium must be installed on your system
  - The tool will automatically use it for DOM-based reflection detection

## Installation

```
go install github.com/rix4uni/xssrecon@latest
```

## Download prebuilt binaries

```
wget https://github.com/rix4uni/xssrecon/releases/download/v0.0.9/xssrecon-linux-amd64-0.0.9.tgz
tar -xvzf xssrecon-linux-amd64-0.0.9.tgz
rm -rf xssrecon-linux-amd64-0.0.9.tgz
mv xssrecon ~/go/bin/xssrecon
```

Or download [binary release](https://github.com/rix4uni/xssrecon/releases) for your platform.

## Compile from source

```
git clone --depth 1 https://github.com/rix4uni/xssrecon.git
cd xssrecon; go install
```
