---
repo: "StellarCanary/ProtocolCanary-Action"
name: "ProtocolCanary-Action"
description: "Run Protocol-Canary compatibility checks in GitHub Actions."
readmeQualityOk: true
url: "https://github.com/StellarCanary/ProtocolCanary-Action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ci", "github-actions", "soroban", "stellar", "typescript"]
stars: 6
forks: 69
openIssues: 50
closedIssues: 270
watchers: 1
contributors: 57
recentReleases: 1
createdAt: "2026-09-02T08:43:37Z"
lastCommitAt: "2026-10-23T09:32:56Z"
lastReleaseAt: "2026-09-03T05:39:38Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 69
maintainers: ["Hollujay", "ZeePearl56", "billcode124"]
openGraphImageUrl: "https://opengraph.githubassets.com/4495fa5aaf4e7fe4b2597dedf280550dceb1f59536bb47ca93a1b933e5eb2a49/StellarCanary/ProtocolCanary-Action"
---

# ProtocolCanary-Action

The official GitHub Actions integration for [Stellar Protocol
Canary](https://github.com/StellarCanary/Protocol-Canary). It makes Stellar
protocol compatibility testing a normal part of GitHub CI.

[Documentation](https://stellarcanary.github.io/Protocol-Canary/) | [Protocol-Canary](https://github.com/StellarCanary/Protocol-Canary) | [Fixtures](https://github.com/StellarCanary/ProtocolCanary-Fixtures)

## Contents

- [What it does](#what-it-does)
- [Quick start](#quick-start)
- [Example workflow](#example-workflow)
- [Inputs](#inputs)
- [Outputs](#outputs)
- [How failures appear](#how-failures-appear)
- [Artifacts](#artifacts)
- [Installation & integrity](#installation--integrity)
- [Versioning](#versioning)
- [Limitations](#limitations)
- [Security](#security)
- [Code of Conduct](#code-of-conduct)
- [Maintainers & Community](#maintainers--community)
- [Development](#development)
- [License](#license)

## What it does

This Action is a thin wrapper around the real `stellar-canary` CLI. It does
not know what CAP-83 or CAP-85 mean, does not reimplement XDR/RPC/Soroban
testing, and never reinterprets a compatibility result the CLI didn't
report. It:

1.…
