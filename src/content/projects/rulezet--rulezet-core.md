---
repo: "rulezet/rulezet-core"
name: "rulezet-core"
description: "Rulezet is an open-source web platform for sharing, evaluating, improving, and managing cybersecurity detection rules (YARA, Sigma, Suricata, etc). It aims to foster collaboration among professionals and enthusiasts to improve the quality and reliability of detection rules. "
readmeQualityOk: true
url: "https://github.com/rulezet/rulezet-core"
homepage: "https://rulezet.org/docs/"
language: "Python"
languages: ["Python", "HTML", "JavaScript"]
languagePcts: [33, 27, 26]
topics: ["cti", "network-detection", "network-security", "threat-intelligence", "yara"]
stars: 56
forks: 9
openIssues: 4
closedIssues: 45
watchers: 8
contributors: 10
recentReleases: 0
createdAt: "2025-04-14T06:48:13Z"
lastCommitAt: "2026-09-29T08:10:30Z"
lastReleaseAt: "2026-06-18T09:05:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["ecrou-exact"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0f1b019ccf16f839d114da4f125d7fb757072d77a4253187fa32a01b237653b/rulezet/rulezet-core"
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
