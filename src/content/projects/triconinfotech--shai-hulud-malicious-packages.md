---
repo: "triconinfotech/shai-hulud-malicious-packages"
name: "shai-hulud-malicious-packages"
description: "Autonomous “Shai-Hulud” engine that ingests malicious NPM package advisories from OSV, tracks versions and metadata, and maintains a continuously updated threat intelligence database."
readmeQualityOk: true
url: "https://github.com/triconinfotech/shai-hulud-malicious-packages"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["npm", "shai-hulud", "shai-hulud-detector", "shai-hulud2-detector", "supply-chain-security", "malicious-packages-db", "automation", "infosec", "npm-security", "osv"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-26T21:07:22Z"
lastCommitAt: "2026-08-20T04:08:45Z"
lastReleaseAt: "2025-11-28T07:30:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 51
maintainers: ["hemachandsai"]
openGraphImageUrl: "https://opengraph.githubassets.com/9810465746e9cdc02bb4148147145ed57a88ae5a1cee9949bafe127d6006a532/triconinfotech/shai-hulud-malicious-packages"
---

# 🪱📦 Shai-Hulud: Malicious NPM Packages Database

</p>

**Shai-Hulud** is an autonomous threat-intelligence engine that ingests confirmed **malicious NPM package advisories** from OSV and consolidates them into a continuously updated, machine-readable JSON database.  
It exists so automated scanners, CI pipelines, and supply-chain monitoring systems can rely on a **single, deterministic intelligence file** rather than parsing hundreds of OSV advisories individually.

---

## 📦 What This Repository Provides

* A **single consolidated JSON database** [`malicious_npm_packages.json`](https://github.com/hemachandsai/shai-hulud-malicious-packages/blob/main/malicious_npm_packages.json) containing all known malicious NPM packages and their corresponding versions, enriched with advisory metadata and automatically updated every 30 minutes.  
* This file serves as a compact “malicious package signature database” that can be fed directly into scanners and security tools.

---

## 🔥 Why This Project Exists

OSV and related feeds publish high-quality malicious-package advisories — but not in a format that is trivial for automation, scanners, or monitoring systems to consume.

This…
