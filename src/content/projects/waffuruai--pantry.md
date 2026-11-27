---
repo: "waffuruai/pantry"
name: "pantry"
description: "Waffuru security vulnerability scanner using OSV database and other CVE sources."
readmeQualityOk: true
url: "https://github.com/waffuruai/pantry"
homepage: "https://waffuru.ai/products/pantry"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["cve", "cve-scanning", "malware-detection", "secrets-detection", "security", "security-tools"]
stars: 14
forks: 2
openIssues: 48
closedIssues: 108
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-10-25T21:43:38Z"
lastCommitAt: "2026-11-27T12:33:35Z"
lastReleaseAt: "2026-11-26T04:33:12Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 56
maintainers: ["ekryski", "TheTom", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3d86c9dd56ffbe811b0a5a9800b9ccfdd624e279265955545ca7efcf45ac458/waffuruai/pantry"
---

# Pantry

Waffuru's vulnerability scanner for your computer and your code. It finds what actually applies to this machine, not everything that might. The command is `wpantry`.

[Full size](https://github.com/waffuruai/pantry/blob/HEAD/docs/images/architecture.png) · [SVG](https://github.com/waffuruai/pantry/blob/HEAD/docs/images/architecture.svg) · [How it works](https://github.com/waffuruai/pantry/blob/HEAD/docs/public/architecture.md)

## What it does

| | |
|---|---|
| **Patch what's exposed** | Checks only the versions installed or locked here: runtimes, packages, apps, browsers, the OS and every repo's lockfiles. Each finding has a severity, its CVSS score, its EPSS exploit likelihood and CISA's known-exploited mark. |
| **Catch malware** | Malware rules from YARA Forge, plus known-bad hashes, hosts and malicious packages. |
| **Stop supply-chain attacks** | Hooks a cloned repo runs on open, npm install scripts, typosquats, and code that steals credentials or swaps wallet addresses. |
