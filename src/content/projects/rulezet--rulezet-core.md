---
repo: "rulezet/rulezet-core"
name: "rulezet-core"
description: "Rulezet is an open-source web platform for sharing, evaluating, improving, and managing cybersecurity detection rules (YARA, Sigma, Suricata, etc). It aims to foster collaboration among professionals and enthusiasts to improve the quality and reliability of detection rules. "
readmeQualityOk: true
url: "https://github.com/rulezet/rulezet-core"
homepage: "https://rulezet.org/docs/"
language: "Python"
languages: ["Python", "JavaScript", "HTML"]
languagePcts: [36, 29, 23]
topics: ["cti", "network-detection", "network-security", "threat-intelligence", "yara"]
stars: 57
forks: 9
openIssues: 6
closedIssues: 47
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2025-04-14T06:48:13Z"
lastCommitAt: "2026-10-09T18:56:16Z"
lastReleaseAt: "2026-06-18T09:05:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 54
maintainers: ["ecrou-exact"]
openGraphImageUrl: "https://opengraph.githubassets.com/801d1d371533c15e2eadc65a3f09880b641936eeddd3a7c9ea2d3be25de12afa/rulezet/rulezet-core"
discussionCount: 0
---

## Community-Driven Detection Rules Platform

**Rulezet** is an open-source web platform for sharing, evaluating, improving, and managing cybersecurity detection rules (YARA, Sigma, Suricata, Zeek, CRS, Nova, NSE, Wazuh, Elastic). It fosters collaboration among security professionals and enthusiasts to improve the quality and reliability of detection rules.

Rulezet is available as an online service at [https://rulezet.org/](https://rulezet.org/)

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3.12 · Flask · Flask-Login · Flask-SQLAlchemy · Flask-RESTX |
| Frontend | Vue.js 3 · Bootstrap 5.3 · Font Awesome 6 |
| Database | PostgreSQL (production) · SQLite (testing) |
| Workers | Python `threading` — daemon background job queue |
| Similarity | TF-IDF + FAISS + rapidfuzz |

---

## Installation

> A Python virtual environment is strongly recommended.

```bash
# 1. Create a virtual environment
python3 -m venv env
source env/bin/activate

# 2. Install dependencies and initialize the database
python3 manage.py init

```

---

## Quick Start

### 1. Initialize the Database

If you have already run `init`, this step is likely complete. If you…
