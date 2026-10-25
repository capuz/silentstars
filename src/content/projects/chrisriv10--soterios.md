---
repo: "chrisriv10/Soterios"
name: "Soterios"
description: "Open-source, local-first desktop security suite for malware scanning, system audits, and maintenance."
readmeQualityOk: true
url: "https://github.com/chrisriv10/Soterios"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["antivirus", "maintenance", "open-source", "security", "security-tools", "good-first-issue", "help-wanted", "electron", "firewall-management", "local-first"]
stars: 20
forks: 20
openIssues: 8
closedIssues: 83
watchers: 1
contributors: 20
recentReleases: 3
createdAt: "2026-06-21T22:48:37Z"
lastCommitAt: "2026-10-25T02:46:23Z"
lastReleaseAt: "2026-09-20T04:14:01Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 63
maintainers: ["chrisriv10", "dependabot[bot]", "LouisDeconinck"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276375938/6e2c68c0-bc59-4187-adee-4b2436e53b12"
discussionCount: 3
---

Scan files, inspect processes, audit your system, manage your firewall, test password strength, and check known breaches privately.

---

## Download & Install

| Requirement | Details |
|-------------|---------|
| OS | Windows 10/11 (x64) |
| Platform | Windows only; macOS and Linux are not supported (`dist:mac` / `dist:linux` scripts are packaging experiments only) |
| Privileges | Administrator required for the installer; privileged features need elevation, everyday features run in a normal session |

Many security and maintenance features rely on Windows-specific APIs and integrations (Defender, Firewall, WMI/CIM, Registry, scheduled tasks).

Download the latest Windows release from the **[releases page](https://github.com/chrisriv10/Soterios/releases/latest)** (NSIS installer, per-machine install). At runtime, privileged features — firewall changes, Defender controls, system audits, process memory dumps, and some maintenance operations — need elevation and report access-denied errors without it. Everyday features such as scanning your own files, viewing reports, and the password tools work in a normal session.

Releases also include a versioned…
