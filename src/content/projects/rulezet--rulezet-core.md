---
repo: "rulezet/rulezet-core"
name: "rulezet-core"
description: "Rulezet is an open-source web platform for sharing, evaluating, improving, and managing cybersecurity detection rules (YARA, Sigma, Suricata, etc). It aims to foster collaboration among professionals and enthusiasts to improve the quality and reliability of detection rules. "
readmeQualityOk: true
url: "https://github.com/rulezet/rulezet-core"
homepage: "https://rulezet.org/docs/"
language: "Python"
languages: ["Python", "HTML", "JavaScript"]
languagePcts: [31, 28, 27]
topics: ["cti", "network-detection", "network-security", "threat-intelligence", "yara"]
stars: 56
forks: 9
openIssues: 14
closedIssues: 35
watchers: 8
contributors: 10
recentReleases: 1
createdAt: "2025-04-14T06:48:13Z"
lastCommitAt: "2026-09-09T08:18:56Z"
lastReleaseAt: "2026-06-18T09:05:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 54
maintainers: ["ecrou-exact"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcb6e10f2772da243a9438a6424ecf60dcf03a72bc07e44ba5b75871d4763ca1/rulezet/rulezet-core"
discussionCount: 0
---

<br>

  <p>
    </a>
  </p>

  <p>
  </p>
</div>

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

---Here is the updated documentation in English, harmonized with your `manage.py` structure.

---

## Installation

> A Python virtual environment is strongly recommended.

```bash
# 1. Create a virtual environment
python3 -m venv env
source env/bin/activate

# 2. Install dependencies and initialize the database
python3…
