---
repo: "nightscout/nocturne"
name: "nocturne"
description: "A next-generation platform for diabetes management"
readmeQualityOk: true
url: "https://github.com/nightscout/nocturne"
homepage: "http://getnocturne.dev/"
language: "C#"
languages: ["C#"]
languagePcts: [73]
topics: ["cgm", "cgm-remote-monitor", "diabetes", "diabetes-app", "glucose-monitoring", "hba1c", "insulin-calculator", "type-1-diabetes", "oss-aid", "insulin"]
stars: 89
forks: 48
openIssues: 81
closedIssues: 43
watchers: 9
contributors: 25
recentReleases: 5
createdAt: "2025-11-15T17:41:39Z"
lastCommitAt: "2026-07-08T05:43:20Z"
lastReleaseAt: "2026-07-03T11:16:56Z"
status: "thriving"
tags: ["needs_contributors", "funded", "release_machine", "fork_magnet"]
healthScore: 86
undervaluedScore: 42
maintainers: ["ryceg", "github-actions[bot]", "jwoglom"]
openGraphImageUrl: "https://opengraph.githubassets.com/0da0631384e36436bd5588915fe18057db5365546135fb57b7d8d5e6913ad3e5/nightscout/nocturne"
fundingLinks: ["CUSTOM:https://www.nightscoutfoundation.org/donate"]
discussionCount: 3
---

# Nocturne

A modern, high-performance diabetes management platform built with .NET 10. Nocturne is a complete rewrite of the Nightscout API with full feature parity, providing native C# implementations of all endpoints with optimized performance and modern cloud-native architecture.

## What is Nocturne?

Nocturne is a comprehensive diabetes data platform that provides:

- **Complete Nightscout API Implementation** - All Nightscout endpoints natively implemented in C# with full compatibility
- **Data Connectors** - Native integration with major diabetes platforms (Dexcom, Glooko, LibreLinkUp, MiniMed CareLink, MyFitnessPal, Nightscout)
- **Real-time Updates** - WebSocket/SignalR support for live glucose readings and alerts
- **Advanced Analytics** - Comprehensive glucose statistics, time-in-range calculations, and reports
- **Cloud-Native** - Built on Aspire for seamless local development and cloud deployment

## Architecture

```
Nocturne/
├── src/
│   ├── API/                        # REST API (Nightscout-compatible)
│   ├── Aspire/                     # Aspire orchestration
│   ├── Connectors/                 # Data source integrations (Dexcom, Libre, etc.)
│   ├── Core/…
