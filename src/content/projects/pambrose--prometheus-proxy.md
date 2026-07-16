---
repo: "pambrose/prometheus-proxy"
name: "prometheus-proxy"
description: "Prometheus Proxy"
readmeQualityOk: true
url: "https://github.com/pambrose/prometheus-proxy"
homepage: "https://pambrose.github.io/prometheus-proxy/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
topics: ["prometheus", "prometheus-proxy", "grpc", "kotlin"]
stars: 156
forks: 29
openIssues: 0
closedIssues: 37
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2017-04-08T04:45:11Z"
lastCommitAt: "2026-07-16T06:00:41Z"
lastReleaseAt: "2017-12-30T06:41:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 44
maintainers: ["pambrose", "k3a"]
openGraphImageUrl: "https://opengraph.githubassets.com/239049ce96a2e1f05ff062cedf44b0821c787fb42c570b5b7d05fba724fe9323/pambrose/prometheus-proxy"
---

# Prometheus Proxy

[Prometheus](https://prometheus.io) is an excellent systems monitoring and alerting toolkit, which uses a pull model for
collecting metrics. The pull model is problematic when a firewall separates a Prometheus server and its metrics
endpoints.

[Prometheus Proxy](https://pambrose.github.io/prometheus-proxy/) enables Prometheus to scrape metrics endpoints running
behind a firewall and preserves the native pull-based model architecture.

## Table of Contents

- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Building from Source](#-building-from-source)
- [Configuration Examples](#-configuration-examples)
- [Docker Usage](#-docker-usage)
- [Advanced Features](#-advanced-features)
- [Monitoring & Observability](#-monitoring--observability)
- [Configuration Options](#-configuration-options)
- [Security & TLS](#-security--tls)
- [Troubleshooting](#-troubleshooting)
- [Documentation](#-documentation)
- [License](#-license)

## 🏗️ Architecture

> 📖 **Docs site:
** [Architecture](https://pambrose.github.io/prometheus-proxy/architecture/) for the full component breakdown and request flow, and the…
