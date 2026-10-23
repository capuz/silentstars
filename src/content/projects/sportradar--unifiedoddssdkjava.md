---
repo: "sportradar/UnifiedOddsSdkJava"
name: "UnifiedOddsSdkJava"
description: "UnifiedFeed SDK is a client library that enables easier integration with the Betradar XML feeds. SDK exposes XML feed service interface in a more user-friendly way and isolates the client from having to do XML feed parsing, proper connection handling, error recovery, event queuing, data caching and dispatching."
readmeQualityOk: true
url: "https://github.com/sportradar/UnifiedOddsSdkJava"
homepage: "https://sportradar.github.io/UnifiedOddsSdkJava/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 29
forks: 18
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 8
recentReleases: 0
createdAt: "2018-01-05T14:40:33Z"
lastCommitAt: "2026-10-23T12:01:09Z"
lastReleaseAt: "2024-10-28T14:56:01Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 62
undervaluedScore: 36
maintainers: ["artyom-spradar", "gmusial-sr", "dhrovat"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbe2d1303fd5309e6ae3726d63df49b3f196a37840749050e418ac1bc8f72b89/sportradar/UnifiedOddsSdkJava"
---

# Sportradar Unified Odds SDK for Java 4.x

A comprehensive Java SDK that simplifies access to Sportradar's real-time odds and sports data for bookmakers. This SDK seamlessly integrates message subscriptions with RESTful API calls, providing a unified interface while handling complex recovery mechanisms automatically.

## 📋 Migration Information

- **Upgrading from version 2.x to 3.x?** See our [Migration Guide v3](https://github.com/sportradar/UnifiedOddsSdkJava/blob/HEAD/migration-guide-v3.md)
- **Upgrading from version 3.x to 4.x?** See our [Migration Guide v4](https://github.com/sportradar/UnifiedOddsSdkJava/blob/HEAD/migration-guide-v4.md)

## 🚀 Quick Start Guide

### Step 1: Implement Event Listeners

Create your custom listeners to handle incoming messages and events:

- **[UofListener](https://sportradar.github.io/UnifiedOddsSdkJava/com/sportradar/unifiedodds/sdk/UofListener.html)** - Handles odds and betting-related messages
- **[UofGlobalEventsListener](https://sportradar.github.io/UnifiedOddsSdkJava/com/sportradar/unifiedodds/sdk/UofGlobalEventsListener.html)** - Handles system-wide events and status updates

### Step 2: Initialize and Configure the SDK

```java
//…
