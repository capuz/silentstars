---
repo: "nightscout/nocturne"
name: "nocturne"
description: "A next-generation platform for diabetes management"
readmeQualityOk: true
url: "https://github.com/nightscout/nocturne"
homepage: "http://getnocturne.dev/"
language: "C#"
languages: ["C#"]
languagePcts: [75]
topics: ["cgm", "cgm-remote-monitor", "diabetes", "diabetes-app", "glucose-monitoring", "hba1c", "insulin-calculator", "type-1-diabetes", "oss-aid", "insulin"]
stars: 108
forks: 57
openIssues: 122
closedIssues: 74
watchers: 10
contributors: 29
recentReleases: 6
createdAt: "2025-11-15T17:41:39Z"
lastCommitAt: "2026-08-17T04:19:56Z"
lastReleaseAt: "2026-07-17T12:12:35Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine", "fork_magnet"]
healthScore: 87
undervaluedScore: 43
maintainers: ["ryceg", "ichnixverstehen", "w3lld1"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fd1e456f934b99e0feb0a248292d31c430b07ea26e854061351c1199f2bb695/nightscout/nocturne"
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
