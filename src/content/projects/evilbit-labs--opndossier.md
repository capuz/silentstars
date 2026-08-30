---
repo: "EvilBit-Labs/opnDossier"
name: "opnDossier"
description: "Generate meaningful output from your OPNsense/pfSense configuration file"
readmeQualityOk: true
url: "https://github.com/EvilBit-Labs/opnDossier"
homepage: "https://opndossier.com/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["configuration-backup", "documentation", "documentation-generator", "firewalls", "golang", "opnsense"]
stars: 62
forks: 8
openIssues: 36
closedIssues: 150
watchers: 1
contributors: 7
recentReleases: 3
createdAt: "2024-02-15T18:52:08Z"
lastCommitAt: "2026-08-30T00:45:19Z"
lastReleaseAt: "2026-08-22T03:14:46Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 58
maintainers: ["dependabot[bot]", "unclesp1d3r", "intigenesis"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5d1e8ef730c2f389f93c6390672e209c3617f6501e7330c9d9e0cbcad7c2276/EvilBit-Labs/opnDossier"
fundingLinks: ["GITHUB:https://github.com/EvilBit-Labs"]
discussionCount: 3
---

# opnDossier - OPNsense and pfSense Configuration Processor

## Overview

opnDossier is a command-line tool for network operators and security professionals who work with OPNsense and pfSense firewalls. It turns XML config files into readable documentation and flags security issues, misconfigurations, and dead firewall rules.

It runs entirely offline, with no external dependencies and no telemetry, so it works in fully airgapped environments.

### What It Does

- **Security Analysis** - Automatically detect vulnerabilities, insecure protocols, weak configurations
- **Dead Rule Detection** - Find unreachable firewall rules and unused interfaces
- **Configuration Validation** - Comprehensive checks for misconfigurations and best-practice issues
- **Multi-Format Export** - Convert to markdown documentation, JSON, or YAML for integration
- **Offline Operation** - Works completely offline, suitable for airgapped networks

> [!NOTE]
> pfSense support is strong for core firewall and service areas, but some report and audit sections are still in progress. If you work with pfSense, see the [device support…
