---
repo: "bigbeartechworld/big-bear-universal-apps"
name: "big-bear-universal-apps"
description: "The Big Bear Universal Apps repository is the single source of truth for all Big Bear app definitions. Apps are maintained in a universal, platform-agnostic format and automatically converted to platform-specific formats."
readmeQualityOk: true
url: "https://github.com/bigbeartechworld/big-bear-universal-apps"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
stars: 10
forks: 16
openIssues: 17
closedIssues: 32
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2025-09-06T00:15:31Z"
lastCommitAt: "2026-10-21T21:15:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 83
maintainers: ["renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a9f34ccb3548701888b371b88f2c602ccabfcc1d476acba29835bce506c8385/bigbeartechworld/big-bear-universal-apps"
---

# Big Bear Universal Apps

The **Big Bear Universal Apps** repository is the **single source of truth** for all Big Bear app definitions. Apps are maintained in a universal, platform-agnostic format and automatically converted to platform-specific formats.

## 🎯 Overview

This repository serves as the central hub for Big Bear app definitions. All apps are stored in a standardized universal format and converted to various platform-specific formats:

- **CasaOS** - Home server operating system
- **Portainer** - Container management platform
- **Runtipi** - Self-hosted app platform
- **Dockge** - Docker compose management
- **Cosmos** - Reverse proxy and app platform
- **Umbrel** - Personal server OS

## 📁 Repository Structure

```
big-bear-universal-apps/
├── apps/                      # Universal app definitions (source of truth)
│   ├── jellyseerr/
│   │   ├── app.json          # App metadata and configuration
│   │   └── docker-compose.yml # Standard Docker Compose file
│   ├── plex/
│   └── ...
├── converted/                 # Platform-specific converted apps (generated)
│   ├── casaos/
│   ├── portainer/
│   ├── runtipi/
│   ├── dockge/
│   ├── cosmos/
│   └── umbrel/
├──…
