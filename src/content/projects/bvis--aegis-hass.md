---
repo: "bvis/aegis-hass"
name: "aegis-hass"
description: "Aegis — Unofficial Home Assistant integration for Ajax Security Systems and co-branded apps"
readmeQualityOk: true
url: "https://github.com/bvis/aegis-hass"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ajax-systems", "hacs", "home-automation", "homeassistant", "security-system", "aegis", "alarm-system", "custom-component", "home-assistant-integration"]
stars: 149
forks: 21
openIssues: 5
closedIssues: 218
watchers: 10
contributors: 7
recentReleases: 0
createdAt: "2026-04-11T17:11:17Z"
lastCommitAt: "2026-11-11T11:19:07Z"
lastReleaseAt: "2026-04-16T11:39:01Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 99
undervaluedScore: 32
maintainers: ["bvis", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fde6b5bc9d982b5357b939770010d3b9bf20aa7aeb65b6f8941cef8fd6fd32f/bvis/aegis-hass"
fundingLinks: ["CUSTOM:https://buymeacoffee.com/basiliovera"]
discussionCount: 3
---

# Aegis for Ajax — Home Assistant Integration

> **Disclaimer**: This is an **unofficial** third-party integration and is not affiliated with, endorsed by, or supported by Ajax Systems. Use at your own risk. This integration communicates with Ajax Systems servers using the same protocol as the official mobile app. Ajax Systems may change their API at any time, which could break this integration without notice.

**Aegis** is a Home Assistant custom integration for **Ajax Security Systems** — works with any co-branded Ajax app (Protegim, ADT, G4S, and many more).

Communicates via **gRPC** (the same protocol the official mobile app uses). No Enterprise API key required — just your regular account credentials.

## How It Works

Ajax Systems provides co-branded versions of their mobile app to security companies worldwide. Each co-branded app connects to the same Ajax cloud backend but uses a unique **application label** to identify itself. This integration emulates the mobile app's gRPC protocol, so it works with any co-branded variant.

**You need to know the application label of your Ajax provider.** This is an internal identifier that the app sends to the Ajax cloud (see the Known…
