---
repo: "Zer00n/z-cmdb"
name: "z-cmdb"
description: "准确性优先、零门槛、面向中小团队的轻量级配置管理数据库"
url: "https://github.com/Zer00n/z-cmdb"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [44, 38]
stars: 35
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-20T12:48:21Z"
lastCommitAt: "2026-06-28T07:06:50Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 34
maintainers: ["Zer00n"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0dfb899e7a551337689079774eb7adebcbd948335cb05153ac17a6176962e42/Zer00n/z-cmdb"
---

**English** | [中文](README_zh.md)

# Z-CMDB Lite

> Accuracy-first, zero-barrier, lightweight CMDB for small and medium teams

---

## Introduction

Z-CMDB Lite is designed for IT operations and security engineers in **small-to-medium teams (5–50 people)**. It manages intranet / office network / IDC / cloud assets via nmap scan uploads, for:

- Daily operations asset ledger
- Security audit & compliance readiness
- HVV / Red-Blue exercise asset inventory
- Port exposure analysis

**Core design principles**: SQLite single-file, zero middleware dependency, all write operations are auditable, sensitive data stays on-premises.

### Deployment

Z-CMDB supports three deployment methods: **Windows double-click launcher** (zero-install, embedded Python), **Linux bare-metal** (venv + systemd), and **Docker** (layered images, bind-mounted database). All methods use single-port FastAPI hosting with auto-generated JWT secrets.

| Method | Best For | Docs |
|---|---|---|
| 🪟 Windows Launcher | End users, air-gapped machines | [`deploy/DEPLOY_EN.md §1`](deploy/DEPLOY_EN.md#1-windows-double-click-launcher) |
| 🐧 Linux Bare-Metal | Small servers, VMs | [`deploy/DEPLOY_EN.md…
