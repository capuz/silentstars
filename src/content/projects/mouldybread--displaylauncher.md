---
repo: "mouldybread/DisplayLauncher"
name: "DisplayLauncher"
description: "Display Launcher is an API-controlled Android launcher for non-interactive displays like kiosks and digital signage. It launches apps programmatically via HTTP endpoints and includes a web-based control panel for remote management, eliminating the need for touch interaction."
readmeQualityOk: true
url: "https://github.com/mouldybread/DisplayLauncher"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "android-tv", "app-switcher", "chromecast", "digital-signage", "embedded", "headless", "home-automation", "iot", "jetpack-compose"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-10-17T07:29:13Z"
lastCommitAt: "2026-08-23T04:11:22Z"
lastReleaseAt: "2026-08-23T03:51:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 33
maintainers: ["mouldybread"]
openGraphImageUrl: "https://opengraph.githubassets.com/0881025a5d81c0994eafb90c18afd9fce0057a3f649a69ced9e56225d078b76a/mouldybread/DisplayLauncher"
---

# Display Launcher

A headless Android launcher designed for digital signage, kiosks, and remote displays. Controls application execution via a local HTTP API or browser-based control panel.

## Features

- REST API endpoints for programmatic application launching and intent execution.
- Embedded web interface for device management.
- Remote APK upload, installation, and package removal.
- Intent parameter passing (actions, data URIs, and extra key-value pairs).

> [!CAUTION]
> This application has **NO built-in authentication or encryption**. The web server runs on port 9091 with **unrestricted access** to network clients.
>
> ❌ **DO NOT** expose this app directly to the internet  
> ❌ **DO NOT** port forward port 9091  
> ❌ **DO NOT** deploy on untrusted networks  
> ❌ **DO NOT** assume any built-in security controls exist

## Installation

### Requirements

- Android 7.0 (API 24) or higher.
- Android 14+ recommended for full foreground service type compliance.

### Setup Procedure

1. Install the APK package on the target device.
2. Launch the application locally.
3. Press **D-Pad DOWN** 3 times rapidly (or tap the center of the screen 3 times within 1 second) to invoke the…
