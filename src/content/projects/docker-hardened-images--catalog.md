---
repo: "docker-hardened-images/catalog"
name: "catalog"
description: "DHI definition files and catalog metadata"
readmeQualityOk: true
url: "https://github.com/docker-hardened-images/catalog"
homepage: "https://dhi.io"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [62, 20]
stars: 239
forks: 68
openIssues: 256
closedIssues: 164
watchers: 9
contributors: 77
recentReleases: 0
createdAt: "2025-12-05T08:44:45Z"
lastCommitAt: "2026-08-17T04:18:51Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 69
undervaluedScore: 31
maintainers: ["dhi-bot", "dhi-trawler[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d37080c76d389efb8ebf6ec569231fc93741c500fd455bc55046cb030a31b59/docker-hardened-images/catalog"
discussionCount: 65
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
