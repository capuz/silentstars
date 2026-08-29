---
repo: "0x10debug/security-audit"
name: "security-audit"
description: "VPS Security Audit - CIS Benchmark, Drift Detection & Auto-Fix"
readmeQualityOk: true
url: "https://github.com/0x10debug/security-audit"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-17T07:21:27Z"
lastCommitAt: "2026-08-29T12:13:12Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 11
maintainers: ["0x10debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ad22913f987dd912e4daee770598edc41cf9752b0dfcfbbbbd10607b6eb40e6/0x10debug/security-audit"
---

# VPS Security Audit — CIS Benchmark, Drift Detection & Auto-Fix

A self-hosted VPS security audit tool that checks your server against CIS Benchmark controls, analyzes auth logs for suspicious activity, scans running Docker containers for known CVEs, and detects configuration drift from a trusted baseline. Every finding ships with a ready-to-run fix command — you go from "problem found" to "problem fixed" in one step.

Built for operators who run their own Linux VPS and want continuous, automated security hardening without a commercial SIEM. Pairs naturally with [0x10debug/vps-bootstrap](https://github.com/0x10debug/vps-bootstrap) (initial server hardening) and [0x10debug/monitor-stack](https://github.com/0x10debug/monitor-stack) (metrics & alerting). Pure Bash, no runtime dependencies beyond standard system tools, and every script is idempotent so you can re-run safely.

---

## Audit Modules

| Module | What it checks | Fix command included |
|---|---|---|
| `cis-benchmark` | SSH hardening, firewall defaults, kernel sysctl params, Docker daemon config, auto-updates | Yes |
| `cis-v14` | CIS Benchmark v14.0 checks (same as cis-benchmark, aliased for explicit v14.0 runs) | Yes |…
