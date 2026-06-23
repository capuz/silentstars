---
repo: "docker-hardened-images/advisories"
name: "advisories"
description: "CVE advisories for OSS packages distributed with DHIs"
url: "https://github.com/docker-hardened-images/advisories"
language: "Shell"
languages: ["Shell", "Go"]
languagePcts: [74, 21]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 62
recentReleases: 0
createdAt: "2025-05-05T09:20:08Z"
lastCommitAt: "2026-06-23T06:42:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 62
maintainers: ["dhi-bot", "dhi-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/045dc6ed76ac3d592a2bc1d8c1146901215bcb04e6bea96b912de4cda1e4e1d0/docker-hardened-images/advisories"
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

Review the [README.md](integration/README.md) for information on how to integrate the OSV and VEX data contained in this repository
into a third-party scanner. 

### OSV Advisories (`osv/`)

Vulnerability advisories in [OSV (Open Source Vulnerability)](https://ossf.github.io/osv-schema/) format,
organized by component:

```
osv/
├── aspnetcore/
├── clickhouse-server/
├── cosign/
├── envoy/
├── fluentd/
├── gradle/
├── grafana/
├── grist/
├── keycloak/
├── netdata/
├── node/
├── open-policy-agent/
├── openfga/
├── opensearch/
├──…
