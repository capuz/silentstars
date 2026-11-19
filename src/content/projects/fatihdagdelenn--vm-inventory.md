---
repo: "fatihdagdelenn/vm-inventory"
name: "vm-inventory"
description: "Self-hosted inventory for VMware vCenter and Proxmox VE. Searches VMs, hosts, datastores, snapshots and backups in one place, and records who changed what and when. Works read-only through the official APIs, with no SSH and no mandatory guest agent."
readmeQualityOk: true
url: "https://github.com/fatihdagdelenn/vm-inventory"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [56, 29]
topics: ["asset", "asset-management", "docker", "fastapi", "inventory", "proxmox", "vcenter", "vmware", "infrastructure", "self-hosted"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-06-12T07:37:39Z"
lastCommitAt: "2026-11-19T12:00:58Z"
lastReleaseAt: "2026-10-27T13:36:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 41
maintainers: ["fatihdagdelenn"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f628296ef5add7f677bd86d048ef246501c10b96b6c45e8ebef7a68b2fd984e/fatihdagdelenn/vm-inventory"
---

# 🖥️ VM Inventory

**One read-only inventory for all your VMware vCenter and Proxmox VE environments**

*Sub-second search across 500+ VMs and 20+ hosts — everything is served from a local cache, never from a live API call.*

**English** · [Türkçe](https://github.com/fatihdagdelenn/vm-inventory/blob/HEAD/README.tr.md)

---

## 📑 Contents

- [What is it for?](#-what-is-it-for)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Architecture](#-architecture-how-it-works)
- [Requirements](#-requirements)
- [Installation](#-installation-step-by-step)
- [First-time setup](#-first-time-setup)
- [User guide](#-user-guide)
- [Change history: who, what, when?](#-change-history-who-what-when)
- [Search syntax](#-search-syntax)
- [Roles and permissions](#-roles-and-permissions)
- [LDAP / Active Directory](#-ldap--active-directory-optional)
- [Production notes](#-production-notes)
- [Troubleshooting](#-troubleshooting)
- [Project layout](#-project-layout)
- [FAQ](#-faq)

---

## 🎯 What is it for?

A central inventory for teams running several **VMware vCenter** and **Proxmox VE** environments:
