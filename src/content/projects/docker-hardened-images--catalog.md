---
repo: "docker-hardened-images/catalog"
name: "catalog"
description: "DHI definition files and catalog metadata"
url: "https://github.com/docker-hardened-images/catalog"
homepage: "https://dhi.io"
language: "Shell"
languages: ["Shell"]
languagePcts: [65]
stars: 225
forks: 57
openIssues: 225
closedIssues: 130
watchers: 8
contributors: 71
recentReleases: 0
createdAt: "2025-12-05T08:44:45Z"
lastCommitAt: "2026-06-24T23:38:11Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 69
undervaluedScore: 27
maintainers: ["dhi-bot", "rnjudge"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2553326afcac3c7aa7ea8699ad9d6e6ed8dc733e7aea181c4287b6f97381d34/docker-hardened-images/catalog"
discussionCount: 57
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
