---
repo: "reportedip/reportedip-blacklist"
name: "reportedip-blacklist"
description: "  Community-driven IP threat intelligence feed with curated and dynamic blacklists, updated daily.                                                                      "
readmeQualityOk: true
url: "https://github.com/reportedip/reportedip-blacklist"
homepage: "https://reportedip.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-28T12:02:57Z"
lastCommitAt: "2026-08-26T04:15:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["cmsadmins"]
openGraphImageUrl: "https://opengraph.githubassets.com/f31ec63c87c7e6947add8259d450673073f5f8c7016eb64269919da10cec8d69/reportedip/reportedip-blacklist"
---

# ReportedIP Blacklist

Community-driven IP threat intelligence, updated daily.

**[https://reportedip.com](https://reportedip.com)**

> **Die hier veroeffentlichten Daten haben eine Verzoegerung von 48 Stunden gegenueber dem Live-System.**
> Fuer Echtzeit-Bedrohungsdaten per API wenden Sie sich an: **1@reportedip.com**
>
> **The data published here is delayed by 48 hours compared to the live system.**
> For real-time threat intelligence via API, contact: **1@reportedip.com**

---

## Repository-Struktur / Repository Structure

```
reportedip-blacklist/
├── README.md
├── LICENSE                         CC BY 4.0
├── metadata.json                   Version, SHA-256 Checksums, Stats
│
├── blacklist-all.txt               All IPs, one per line
├── blacklist-all.json              All IPs with confidence + categories
├── blacklist-all.csv               ip, confidence, categories, last_reported
│
├── lists/                          Thematic lists
│   ├── spam.txt                    Web / Email / Blog Spam
│   ├── brute-force.txt             FTP / SSH / Login Brute-Force
│   ├── cms-login.txt               WordPress / Drupal / CMS Backend Login
│   ├── web-attacks.txt             SQLi,…
