---
repo: "nightscout/nocturne"
name: "nocturne"
description: "A next-generation platform for diabetes management"
readmeQualityOk: true
url: "https://github.com/nightscout/nocturne"
homepage: "http://getnocturne.dev/"
language: "C#"
languages: ["C#"]
languagePcts: [74]
topics: ["cgm", "cgm-remote-monitor", "diabetes", "diabetes-app", "glucose-monitoring", "hba1c", "insulin-calculator", "type-1-diabetes", "oss-aid", "insulin"]
stars: 153
forks: 96
openIssues: 202
closedIssues: 943
watchers: 11
contributors: 46
recentReleases: 0
createdAt: "2025-11-15T17:41:39Z"
lastCommitAt: "2026-10-26T21:00:32Z"
lastReleaseAt: "2026-07-17T12:12:35Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 46
maintainers: ["ryceg", "BlackSoul697", "vasilygrz"]
openGraphImageUrl: "https://opengraph.githubassets.com/3653f35891314c9a1ed98c066159127c91dfa984c02ef8b137049c92249362ee/nightscout/nocturne"
fundingLinks: ["CUSTOM:https://www.nightscoutfoundation.org/donate"]
discussionCount: 4
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
