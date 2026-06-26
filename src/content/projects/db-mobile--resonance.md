---
repo: "db-mobile/resonance"
name: "resonance"
description: "Local-first, zero-account Open Source API Client"
url: "https://github.com/db-mobile/resonance"
homepage: "https://db-mobile.github.io/resonance/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [70]
topics: ["api-rest", "javascript", "open-source", "tauri", "rust"]
stars: 38
forks: 4
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-06-28T19:17:19Z"
lastCommitAt: "2026-06-26T06:46:44Z"
lastReleaseAt: "2026-01-26T23:17:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 56
maintainers: ["db-mobile"]
openGraphImageUrl: "https://opengraph.githubassets.com/c51270f06b34db9c36e134391dad367c36e97c928cdbcd5fd04fd15aba98e8dc/db-mobile/resonance"
---

# Resonance

A local-first, zero-account API client with excellent user experience built with Tauri. Resonance is designed to be resource-friendly — with a ~15MB bundle size and ~50MB memory footprint, it runs lean compared to Electron-based alternatives.

![Resonance API Client](https://img.shields.io/badge/License-MIT-blue.svg)
![Tauri](https://img.shields.io/badge/Tauri-v2.0.0-brightgreen.svg)
![Rust](https://img.shields.io/badge/Rust-Latest-orange.svg)

## Installation

### Package Managers

#### Flathub (Linux)

Install from Flathub:

```bash
flatpak install flathub io.github.db_mobile.resonance
```

Run the application:

```bash
flatpak run io.github.db_mobile.resonance
```

#### Snap (Linux)

Install from Snap Store:

```bash
snap install db-mobile-resonance
```

To store secret variables and credentials in the OS keychain (encryption at rest), connect the password-manager interface after installing:

```bash
snap connect db-mobile-resonance:password-manager-service
```

Without this connection the strict snap cannot reach the Secret Service (GNOME Keyring / KWallet), and secrets fall back to unencrypted local storage. Verify the connection with `snap connections…
