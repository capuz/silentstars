---
repo: "vyogotech/frappista"
name: "frappista"
description: "s2i based images for Frappe Framework. Experience all in one pre-installed Frappe and apps."
readmeQualityOk: true
url: "https://github.com/vyogotech/frappista"
language: "Shell"
languages: ["Shell"]
languagePcts: [70]
stars: 11
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-03-31T03:14:26Z"
lastCommitAt: "2026-08-12T05:14:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 67
maintainers: ["varun-krishnamurthy"]
openGraphImageUrl: "https://opengraph.githubassets.com/f12c63fd3b86865303c3c88f44763f17cf59118b076259e7f0fd62358bdfae74/vyogotech/frappista"
---

# Single Node Frappista

## What is Single Node Frappista?

**Single Node Frappista** provides pre-packaged, zero-configuration Docker images for the [Frappe Framework](https://frappeframework.com/) and [ERPNext](https://erpnext.com/). 

Instead of spending hours setting up MariaDB, Redis, Node, Python, and the Frappe Bench locally, you can pull one of these images and have a fully running, single-node Frappe/ERPNext environment instantly. It comes pre-installed with a site named `dev.localhost`.

These images are perfect for:
- Rapid local development
- CI/CD pipelines
- Quick product demonstrations

---

## 📦 Image Coordinates

All images are actively published to Docker Hub and are natively built for both **AMD64** (Intel/AMD) and **ARM64** (Apple Silicon/M1/M2/M3/M4).

| Application | Tag / Version | Image Name |
|-------------|---------------|------------|
| **Frappe** | `version-14` | `docker.io/vyogo/frappe:sne-version-14` |
| **Frappe** | `version-15` | `docker.io/vyogo/frappe:sne-version-15` |
| **Frappe** | `develop` | `docker.io/vyogo/frappe:sne-develop` |
| **ERPNext** | `version-14` | `docker.io/vyogo/erpnext:sne-version-14` |
| **ERPNext** | `version-15` |…
