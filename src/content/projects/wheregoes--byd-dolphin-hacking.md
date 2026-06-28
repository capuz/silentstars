---
repo: "wheregoes/byd-dolphin-hacking"
name: "byd-dolphin-hacking"
description: "Reverse engineering the BYD Dolphin head unit — CAN bus, AVAS, NFC keys, OTA, and more. DiLink 3 / Android 10."
url: "https://github.com/wheregoes/byd-dolphin-hacking"
language: "Python"
languages: ["Python", "Java"]
languagePcts: [39, 30]
topics: ["android", "byd", "can-bus", "car-hacking", "dilink", "reverse-engineering", "byd-dolphin"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-05-07T03:20:40Z"
lastCommitAt: "2026-06-28T01:43:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 38
maintainers: ["wheregoes", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a7b2f7df5ce4c41135008091075d26c047c67f24f1e5e29aeeb43825b2c218a/wheregoes/byd-dolphin-hacking"
---

# 🚗 BYD Dolphin Head Unit — Research & Reverse Engineering

Reverse engineering, documentation, and tooling for the **BYD Dolphin 25/26** infotainment system (DiLink 3, Android 10).

Everything here was discovered through ADB exploration, APK decompilation, and CAN bus probing — no proprietary documentation was used.

> ⚠️ **Disclaimer:** Unofficial, community-driven project — no affiliation with BYD.
> Reverse engineering of BYD's internal Android services for **educational and interoperability purposes only**.
> Use at your own risk — modifying vehicle software may void your warranty or violate BYD's terms of service.
> The authors assume no liability for any damage to your vehicle, software, or data.

---

## 📋 Table of Contents

- [Head Unit Specs](#-head-unit-specs)
- [Getting Started](#-getting-started)
- [Key Findings](#-key-findings)
- [Security Findings](#-security-findings)
- [Architecture](#-architecture)
- [Documentation](#-documentation)
- [Scripts](#-scripts)
- [Repository Structure](#-repository-structure)
- [License](#-license)

---

## 🖥️ Head Unit Specs

| Property | Value |
|----------|-------|
| Platform | DiLink 3.0 |
| Android | 10 (API 29) |
| SoC |…
