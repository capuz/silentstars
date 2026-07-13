---
repo: "zzzteph/Dutch_Gov_Scope"
name: "Dutch_Gov_Scope"
description: "Dutch Government Bugbounty scope, subdomains and endpoints"
readmeQualityOk: true
url: "https://github.com/zzzteph/Dutch_Gov_Scope"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bugbounty", "pentest", "security", "dutch", "infosec", "gemeente", "gemeenten", "rijksoverheid", "dutchbugbounty"]
stars: 40
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-13T20:26:04Z"
lastCommitAt: "2026-07-13T06:36:42Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 90
undervaluedScore: 52
maintainers: ["github-actions[bot]", "zzzteph"]
openGraphImageUrl: "https://opengraph.githubassets.com/72328dfe52fd8c1d8e18612eeb915d30ad6993f6d7277aca85f44418d9bfbdb0/zzzteph/Dutch_Gov_Scope"
fundingLinks: ["GITHUB:https://github.com/zzzteph", "PATREON:https://patreon.com/weakpass", "BUY_ME_A_COFFEE:https://buymeacoffee.com/zzzteph"]
---

# Dutch Government Bug Bounty Scope

Welcome to the repository dedicated to collecting and maintaining a precise list of the Dutch government's bug bounty scope. This includes domains and subdomains.  
*This is **NOT** an official bug bounty scope.*

To report a vulnerability or to learn more about Coordinated Vulnerability Disclosure (CVD), visit:  
👉 [https://www.ncsc.nl/contact/kwetsbaarheid-melden](https://www.ncsc.nl/contact/kwetsbaarheid-melden)

## Overview

This project aims to provide the **most accurate and detailed** list of domains and subdomains that are in scope of the Dutch government's bug bounty program. By mapping and monitoring relevant infrastructure, the goal is to support the security and visibility of government digital assets.

### What is in scope?

This repository focuses on verified, government-related resources. Each domain is included only after passing a multi-tier verification pipeline:

1. **HTTP + SSL signals**: Meta tags (`overheid:authority`, `rijksoverheid.org`), legal accessibility statements (`toegankelijkheidsverklaring.nl`), government analytics infrastructure, SSL certificate organisation field.
2. **Rendered DOM check**: Browser-rendered…
