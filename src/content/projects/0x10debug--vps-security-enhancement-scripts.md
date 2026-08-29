---
repo: "0x10debug/vps-security-enhancement-scripts"
name: "vps-security-enhancement-scripts"
description: "VPS Handbook — The Bedside Book for VPS & Cloud Ops (Script + 8-Chapter Handbook + Cheatsheets)"
readmeQualityOk: true
url: "https://github.com/0x10debug/vps-security-enhancement-scripts"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 42
forks: 4
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 2
recentReleases: 0
createdAt: "2026-08-17T07:21:50Z"
lastCommitAt: "2026-08-29T12:10:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 20
maintainers: ["0x10debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/02837c0dfd1326738e56eb1fefdb6e8559f19661ee865cb611d8fe4b8f41301b/0x10debug/vps-security-enhancement-scripts"
---

# VPS Security Enhancement Scripts — Harden Your VPS from First Login to Incident Response

A security-first interactive bash script for VPS hardening, with a scenario-driven handbook and cheatsheets included. One script, zero dependencies, one command to start — plus a real handbook that tells you *why*, not just *how*.

> This is a **living repo**: the script and handbook expand by security direction over time. The current release ships a 2650-line interactive script + 8-chapter handbook + 4 cheatsheets as the starting point. Future iterations add CIS/STIG audit, container/K8s security, cloud CIS baselines, database hardening, big-data SSL, zero-trust, WAF, TLS lifecycle, secret scanning, and CrowdSec-based incident response.

## Quick Start

```bash
wget -O vps_security_enhance.sh https://raw.githubusercontent.com/0x10debug/vps-security-enhancement-scripts/main/vps_security_enhance.sh && chmod +x vps_security_enhance.sh && ./vps_security_enhance.sh
```

On a fresh server, select **`a1` Full Security Init** — completes in ~10 minutes: system update → firewall → BBR → swap → Fail2Ban → kernel hardening.

After installing the global command, type `secure-vps` from anywhere to…
