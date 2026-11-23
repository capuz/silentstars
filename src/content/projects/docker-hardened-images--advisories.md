---
repo: "docker-hardened-images/advisories"
name: "advisories"
description: "CVE advisories for OSS packages distributed with DHIs"
readmeQualityOk: true
url: "https://github.com/docker-hardened-images/advisories"
language: "Shell"
languages: ["Shell"]
languagePcts: [84]
stars: 19
forks: 4
openIssues: 10
closedIssues: 0
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2025-05-05T09:20:08Z"
lastCommitAt: "2026-11-23T12:20:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: ["dhi-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8f26575ce828c054c5c89631d028be89570eebaac99ec5240e9c63baa63aa9c/docker-hardened-images/advisories"
---

# Docker Hardened Images - Advisories

This repository contains vulnerability advisories for OSS components built and distributed with Docker Hardened
Images (DHIs), along with VEX (Vulnerability Exploitability eXchange) documents.

## 🎯 Overview

Docker Hardened Images are security-focused container images that include:
- Security patches and hardening configurations
- Vulnerability tracking and advisories
- VEX statements documenting vulnerability assessments

This repository serves as the authoritative source for security information about components included in DHIs.

## 📁 Repository Structure

### Scanner Integration Guide (`integration`)

Review the [README.md](https://github.com/docker-hardened-images/advisories/blob/HEAD/integration/README.md) for information on how to integrate the OSV and VEX data contained in this repository
into a third-party scanner. 

### OSV Advisories (`osv/`)

Vulnerability advisories in [OSV (Open Source Vulnerability)](https://ossf.github.io/osv-schema/) format,
organized by component:
