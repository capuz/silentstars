---
repo: "CatEacc/vps-xray-runbook"
name: "vps-xray-runbook"
description: "VPS Kernel Tuning + One-Click Deployment Scripts and Hands-On Manual for Four Schemes: Xray v26.11.9 / 3x-ui v3.11.0 / Hysteria 2"
originalDescription: "VPS 底层内核调优 + Xray v26.11.9 / 3x-ui v3.11.0 / Hysteria 2 四方案一键部署脚本与实战手册"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/CatEacc/vps-xray-runbook"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["3x-ui", "bbr", "cloudflare", "hysteria2", "linux", "reality", "runbook", "shell", "vless", "vps"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-11-23T15:14:53Z"
lastCommitAt: "2026-11-24T01:54:29Z"
lastReleaseAt: "2026-11-24T01:41:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 24
maintainers: ["CatEacc"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5e9ee75ba8d9adadd9a815f00fbde3912b430770a639cff425bfdd9d16501b7/CatEacc/vps-xray-runbook"
---

# Production-Grade VPS Deployment and Tuning Hands-On Manual (Xray v26.11.9 / 3x-ui v3.11.0)

> **Repository**: `github.com/CatEacc/vps-xray-runbook`  
> **Scope**: This manual uses `3x-ui` to balance visual management with production-grade security hardening. All Linux kernel stack parameters, Xray routing templates, REALITY / XHTTP specifications, and residential-broadband hardening scripts described here also apply to plain `Xray-core` JSON deployments.

---

## One-Click Setup for Beginners (interactive four-scheme menu, Enter for default port / one-click residential relay support)

On a fresh machine, run the script below as `root`, then enter `1`–`4` at the prompt to choose a scheme (**press Enter to use the default port `443`, or type any port manually**; deployment is idempotent by default to prevent re-entry, and the panel is automatically locked to `127.0.0.1`):

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/CatEacc/vps-xray-runbook/main/setup.sh)
```
