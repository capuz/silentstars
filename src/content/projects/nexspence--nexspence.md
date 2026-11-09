---
repo: "nexspence/nexspence"
name: "nexspence"
description: "Repository manager Nexspence"
readmeQualityOk: true
url: "https://github.com/nexspence/nexspence"
homepage: "https://nexspence.com"
language: "Go"
languages: ["Go"]
languagePcts: [75]
stars: 37
forks: 9
openIssues: 0
closedIssues: 222
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-04-29T10:27:46Z"
lastCommitAt: "2026-11-09T04:34:56Z"
lastReleaseAt: "2026-05-07T11:43:34Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 46
maintainers: ["skensell201", "dependabot[bot]", "strasvet"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1224486235/1ec6eaa2-9dad-4b46-9226-71f829082a18"
fundingLinks: ["GITHUB:https://github.com/nexspence"]
---

---

## 🎬 Demo

▶️ **[Watch the demo on nexspence.com](https://nexspence.com)**

---

## What is Nexspence?

Nexspence is a self-hosted artifact repository manager that supports **19 package formats**, three repository types (hosted, proxy, group), fine-grained RBAC, SSO via OIDC/LDAP, audit logging, S3-compatible storage, and a modern dark-theme web UI — all in a single binary backed by PostgreSQL. It exposes the full **Sonatype Nexus v1 REST API** at `/service/rest/v1/` for drop-in compatibility with existing CI/CD pipelines and package manager configs.

---

## Architecture

One Go binary — Gin HTTP layer, embedded React UI, pluggable artifact formats. Every node is stateless; all state lives in PostgreSQL, blob storage, and (for HA) Redis, so scaling out is a matter of running more nodes behind the load balancer.

View the full site with interactive architecture diagram, install guide, and comparison: **[nexspence.com](https://nexspence.com)** →

---

## Screenshots

### Dashboard & Repositories

### Admin & Security

### Cleanup & Search

### OCI, Vulnerabilities & Monitoring

---

## Quick Start

**Requirements:** [Docker](https://docs.docker.com/get-docker/) 24+ with…
