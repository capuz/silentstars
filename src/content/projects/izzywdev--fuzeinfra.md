---
repo: "izzywdev/FuzeInfra"
name: "FuzeInfra"
description: "Shared infrastructure platform for microservices development"
readmeQualityOk: true
url: "https://github.com/izzywdev/FuzeInfra"
language: "Python"
languages: ["Python"]
languagePcts: [66]
stars: 5
forks: 0
openIssues: 73
closedIssues: 293
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-06-11T15:23:29Z"
lastCommitAt: "2026-10-08T10:51:55Z"
lastReleaseAt: "2026-06-19T16:13:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 77
maintainers: ["izzywdev", "fuze-agent[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/48fe3c6b0aee60633e1e31692b4e21c888eb5e73b6a3a78677ab36292ddb6d9c/izzywdev/FuzeInfra"
---

# FuzeInfra - Shared Infrastructure Platform

A comprehensive containerized shared infrastructure platform providing databases, monitoring, networking, and deployment tools for microservices development. Features include local DNS management, HTTPS certificates, tunnel management, and webhook automation.

## ✨ New Features

- 🔍 **Service Discovery** (Consul) - Industry-standard service registration and discovery
- 🌐 **Local DNS Server** (dnsmasq) with wildcard `*.dev.local` support
- 🔒 **HTTPS Certificates** (mkcert) for all services with browser trust
- 🚇 **Cloudflare Tunnel** integration for secure external access
- 🔗 **Webhook Management** with automatic URL updates for GitHub/Atlassian
- 📊 **Comprehensive Monitoring** with Prometheus, Grafana, and Loki
- 🔧 **Development Orchestrator** with port allocation and clean URLs

## 🚀 Quick Start

FuzeInfra runs two ways — pick one:

### A) Docker Compose (fastest local path)

1. **Clone repository**: `git clone --recursive https://github.com/izzywdev/FuzeInfra.git`
2. **Set up environment**: `python scripts-tools/setup_environment.py`
3. **Generate certificates**:…
