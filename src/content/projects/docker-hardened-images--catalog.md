---
repo: "docker-hardened-images/catalog"
name: "catalog"
description: "DHI definition files and catalog metadata"
readmeQualityOk: true
url: "https://github.com/docker-hardened-images/catalog"
homepage: "https://dhi.io"
language: "Shell"
languages: ["Shell"]
languagePcts: [56]
stars: 254
forks: 86
openIssues: 282
closedIssues: 215
watchers: 11
contributors: 36
recentReleases: 0
createdAt: "2025-12-05T08:44:45Z"
lastCommitAt: "2026-10-15T08:33:30Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 69
undervaluedScore: 34
maintainers: ["dhi-bot", "dhi-trawler[bot]", "rnjudge"]
openGraphImageUrl: "https://opengraph.githubassets.com/6061511187acd064f91f2f782e9033ba8ffa0c2cc3a47ebbc042015a20c448cf/docker-hardened-images/catalog"
discussionCount: 76
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
