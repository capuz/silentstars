---
repo: "kraven-security/hunting-packages"
name: "hunting-packages"
description: "A project designed to make the operationalization of open-source cyber threat intelligence more efficient."
readmeQualityOk: true
url: "https://github.com/kraven-security/hunting-packages"
language: "YARA"
languages: ["YARA"]
languagePcts: [90]
stars: 19
forks: 3
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2024-12-22T11:24:57Z"
lastCommitAt: "2026-07-15T05:53:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 63
maintainers: ["Adam-Goss"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5d509864818748127a2242f13b9bafb4070d373203b4a4d2c94f2a1f6764b78/kraven-security/hunting-packages"
---

# Threat Hunting Packages

A project designed to make the operationalization of open-source cyber threat intelligence more efficient. It includes hunting packages that you that allow you to easily use open-source threat intelligence and threat hunting scripts to use this intelligence with your favorite security tooling.

## OSINT Articles

A collection of open-source threat intelligence articles with their indicators (IOCs) and detection/hunting opportunities stripped out to them make actionable. These threat hunting packages can be used to proactively defend yourself against the latest cyber threats described in open-source reports.

## Threat Hunting Scripts

A collection of scripts that target various security tool. These are designed to make the indicators included in open-source threat intelligence articles easy to operationalize.

Scripts includes:

- `verify-iocs-vt.py`: Verify IOCs using VirusTotal Community API.
- `iocs-to-cs.py`: Upload IOCs to CrowdStrike Falcon IOC Management for detection and blocking.
