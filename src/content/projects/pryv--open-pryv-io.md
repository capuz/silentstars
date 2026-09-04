---
repo: "pryv/open-pryv.io"
name: "open-pryv.io"
description: "Open-source version of Pryv.io"
readmeQualityOk: true
url: "https://github.com/pryv/open-pryv.io"
homepage: "https://pryv.github.io"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [49, 49]
topics: ["pryv", "health-data", "personal-data", "gdpr", "hipaa", "consent", "privacy", "privacy-tools", "middleware", "data-life-cycle"]
stars: 126
forks: 27
openIssues: 15
closedIssues: 76
watchers: 9
contributors: 7
recentReleases: 0
createdAt: "2020-06-07T19:35:30Z"
lastCommitAt: "2026-09-04T08:09:44Z"
lastReleaseAt: "2026-04-10T10:16:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 47
maintainers: ["perki"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/270411736/8e8ccc80-2832-11eb-9a40-89961eb7c35e"
---

# Open Pryv.io v2.0.0-rc.2

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="readme/logo-data-privacy-management-pryv-dark.png">
</picture>

**Personal data & privacy management — open source**

> **Release-candidate warning:** This is the v2 release candidate of Open Pryv.io. It is under active stabilization and not yet recommended for production workloads. For the last stable v1 release, see the [`release/1.9.3`](https://github.com/pryv/open-pryv.io/tree/release/1.9.3) branch.

## What is Pryv.io

Pryv.io is a data privacy management solution designed to collect, store and share personal data in compliance with privacy regulations (GDPR, HIPAA, LPD). It provides a RESTful API for managing user data organized into streams (hierarchical categories) and events (timestamped data points), with fine-grained access controls and real-time notifications.

Pryv.io serves as the backend for applications in health, quantified self, smart cities, and any domain requiring data sovereignty and consent management. Each user's data is isolated and access-controlled independently.

## What's new in v2

- **Pluggable storage engines** — PostgreSQL (default), SQLite, InfluxDB,…
