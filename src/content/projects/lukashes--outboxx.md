---
repo: "lukashes/outboxx"
name: "outboxx"
description: "Outboxx - Lightweight PostgreSQL Change Data Capture in Zig"
url: "https://github.com/lukashes/outboxx"
language: "Zig"
languages: ["Zig"]
languagePcts: [83]
topics: ["cdc", "kafka", "postgresql", "ziglang", "zig-package", "zig"]
stars: 8
forks: 1
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-09-21T09:59:37Z"
lastCommitAt: "2026-06-29T07:21:49Z"
lastReleaseAt: "2026-06-29T06:42:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 41
maintainers: ["lukashes", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d76149ff284346562264571ca649e40eeb5c5580b94b253e04faab46d1e20f7/lukashes/outboxx"
---

# Outboxx

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="logo/dark/logo-animated-icon-only.svg">
  <source media="(prefers-color-scheme: light)" srcset="logo/light/logo-animated-icon-only.svg">
</picture>

**PostgreSQL Change Data Capture in Zig**

Lightweight tool that streams WAL changes to Kafka. Built in Zig for minimal resource consumption.

**🚀 Development Status**: Core CDC pipeline implemented with streaming replication. Under active optimization, approaching alpha release.

## What is Outboxx?

Outboxx captures PostgreSQL database changes in real-time and streams them to Kafka topics. Inspired by Debezium but designed for simplicity and low resource usage.

**Key Features:**
- PostgreSQL streaming replication (pgoutput) ✅
- Multi-table CDC streams ✅
- Kafka producer integration ✅
- TOML-based configuration ✅
- Memory-safe Zig implementation ✅

## Current vs Planned

| Component | Status |
|-----------|--------|
| PostgreSQL Streaming Replication | ✅ Working |
| Message Processing | ✅ Working |
| Kafka Producer | ✅ Working |
| TOML Configuration | ✅ Working |
| Multi-stream Support | ✅ Working |
| Schema Registry | 📋 Planned |
| Table/Column Filtering…
