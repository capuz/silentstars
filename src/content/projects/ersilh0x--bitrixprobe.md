---
repo: "ErSilh0x/bitrixprobe"
name: "bitrixprobe"
description: "Open-source vulnerability assessment toolkit for 1C-Bitrix and Bitrix24 CMS audit, external pentest checks, and module/version analysis."
readmeQualityOk: true
url: "https://github.com/ErSilh0x/bitrixprobe"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["1c-bitrix", "bitrix", "bitrix-cms", "bitrix24", "cybersecurity", "security-scanner", "vulnerability-assessment", "vulnerability-detection", "vulnerability-scanner"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-27T11:36:05Z"
lastCommitAt: "2026-09-03T08:12:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 46
maintainers: ["ErSilh0x", "0x6379626572"]
openGraphImageUrl: "https://opengraph.githubassets.com/9888ebe1b293e1571907bfeac15f5c5ca6e4b75bde4dd7104bc8199fb64a3ee7/ErSilh0x/bitrixprobe"
---

**English** | [Русский](https://github.com/ErSilh0x/bitrixprobe/blob/HEAD/README_ru.md)

# BitrixProbe

BitrixProbe is a vulnerability assessment tool for CMS 1C-Bitrix/Bitrix24 installations. It is written in Python. 

It is designed around two separate assessment modes:
- `pentest`: external HTTP/HTTPS scans against a target URL.
- `audit`: authenticated local server scans over SSH.

### Legal Disclaimer & Responsible Use

BitrixProbe is intended only for authorized security testing, internal audits, research, and defensive assessment.

Please see [DISCLAIMER](https://github.com/ErSilh0x/bitrixprobe/blob/HEAD/DISCLAIMER.md) for the full legal disclaimer.

## Why I Built BitrixProbe

I started BitrixProbe after facing a recurring problem in vulnerability scanning and remediation approval.

Bitrix-based systems are often heavily modified by web developers and integrators. These custom changes can make 
remediation slow, risky, or difficult to approve, especially in corporate environments where business logic 
depends on legacy code and custom modules.

As a result, vulnerable code exist in production for a long time. In many cases, security teams do not have 
enough visibility…
