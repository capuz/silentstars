---
repo: "docker-hardened-images/catalog"
name: "catalog"
description: "DHI definition files and catalog metadata"
readmeQualityOk: true
url: "https://github.com/docker-hardened-images/catalog"
homepage: "https://dhi.io"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [59, 21]
stars: 237
forks: 66
openIssues: 254
closedIssues: 150
watchers: 8
contributors: 77
recentReleases: 0
createdAt: "2025-12-05T08:44:45Z"
lastCommitAt: "2026-08-04T06:13:02Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 68
undervaluedScore: 30
maintainers: ["dhi-bot", "dhi-trawler[bot]", "joaopapereira"]
openGraphImageUrl: "https://opengraph.githubassets.com/71358be6c854851d2fd7865fbfa0b19895802e3061f2b579a08472b603f6aea1/docker-hardened-images/catalog"
discussionCount: 64
---

# Docker Hardened Images

This repository is the home of the [**Docker Hardened Images**](https://dhi.io) definition files. 
It contains declarative specifications for building secure, minimal, and production-ready container images and Helm charts.

## 🎯 Overview

Docker Hardened Images provides a curated collection of container images built with security and minimalism as core principles. Each image is:

- **Security-focused**: Built with minimal attack surface and hardened configurations
- **Continuously updated**: Regularly maintained with the latest security patches
- **Production-ready**: Configured with best practices for enterprise deployments
- **Transparent**: Fully open-source definitions enable auditability and customization

## 📁 Repository Structure

```
catalog/
├── image/              # Container image definitions
├── chart/              # Helm chart definitions
├── package/            # Reusable package definitions
├── LICENSE.txt         # Apache 2.0 license
├── CONTRIBUTING.md     # Contribution guidelines
└── CODE_OF_CONDUCT.md  # Code of Conduct
```

### 📦 Image Definitions (`image/`)

Contains definitions for **hardened container images** across various…
