---
repo: "0x10debug/monitor-stack"
name: "monitor-stack"
description: "Self-Hosted Monitoring Stack for VPS - Uptime, Metrics & Alerts"
readmeQualityOk: true
url: "https://github.com/0x10debug/monitor-stack"
language: "Shell"
languages: ["Shell"]
languagePcts: [79]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-17T07:21:04Z"
lastCommitAt: "2026-08-29T12:14:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 16
maintainers: ["0x10debug"]
openGraphImageUrl: "https://opengraph.githubassets.com/010e729bf1f7b905ef42fd92353bceec48f41c32b948b1b65a774cb6fd59b3f9/0x10debug/monitor-stack"
---

# Self-Hosted Monitoring Stack for VPS — Uptime, Metrics & Alerts

A complete self-hosted monitoring stack for VPS servers, combining **Uptime Kuma** for uptime and availability monitoring, **Beszel** for performance metrics, **CrowdSec** integration for security event tracking, **Loki + Promtail** for log aggregation, **Blackbox Exporter** for active endpoint probing (HTTP/TCP/ICMP) with Prometheus alert rules, **Grafana** dashboard templates for visualizing system, security, availability, and log metrics, and **Alertmanager** for multi-channel alert notifications (Telegram, Slack, Discord) with severity-based routing, inhibition, and silencing. Deploy everything with Docker in minutes, configure alerts via Telegram, Discord, Email, or Slack, and monitor unlimited remote nodes from a single dashboard. No SaaS dependencies, no monthly fees — full control over your VPS monitoring.

> Part of the [0x10debug](https://github.com/0x10debug) VPS tool suite.

## What's Included

| Component | Purpose | Port | Data Path |
|-----------|---------|------|-----------|
| [Uptime Kuma](https://github.com/louislam/uptime-kuma) | Uptime & availability monitoring | 3001 | `/data/uptime-kuma` |
|…
