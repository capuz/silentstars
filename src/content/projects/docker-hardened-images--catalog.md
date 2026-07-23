---
repo: "docker-hardened-images/catalog"
name: "catalog"
description: "DHI definition files and catalog metadata"
readmeQualityOk: true
url: "https://github.com/docker-hardened-images/catalog"
homepage: "https://dhi.io"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [58, 22]
stars: 233
forks: 64
openIssues: 239
closedIssues: 146
watchers: 8
contributors: 75
recentReleases: 0
createdAt: "2025-12-05T08:44:45Z"
lastCommitAt: "2026-07-23T06:15:22Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 69
undervaluedScore: 29
maintainers: ["dhi-bot", "dhi-app[bot]", "ForestEckhardt"]
openGraphImageUrl: "https://opengraph.githubassets.com/af4c910389b5a3311e5754438e0117d6a13bca87a87ccd617bd8034de1220fa6/docker-hardened-images/catalog"
discussionCount: 63
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
