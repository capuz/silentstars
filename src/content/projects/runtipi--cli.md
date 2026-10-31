---
repo: "runtipi/cli"
name: "cli"
description: "The command line interface to configure and interact with Runtipi"
readmeQualityOk: true
url: "https://github.com/runtipi/cli"
homepage: "https://runtipi.io/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "runtipi"]
stars: 11
forks: 18
openIssues: 7
closedIssues: 14
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2024-01-12T13:48:20Z"
lastCommitAt: "2026-10-31T09:54:38Z"
lastReleaseAt: "2024-01-21T20:39:40Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 73
undervaluedScore: 56
maintainers: ["nicotsx", "DireMunchkin"]
openGraphImageUrl: "https://opengraph.githubassets.com/207050d79a8c619f4ff4dad8b4e767dcb10f5649c925ecb1d3ed54e2a47899c8/runtipi/cli"
---

# Runtipi CLI - Manage your Runtipi instance from the command line!

> [!NOTE]
> Runtipi CLI is written in Go! If you want to collaborate on a cool project, join the discussion on Discord!

Runtipi CLI is an updated version of the previous CLI implementations. Written in Go, this version offers improved performance, reliability, and a smaller footprint. It provides a streamlined experience for managing your Runtipi instance directly from the command line. To get started, follow the instructions below.

## Getting Started

The CLI is a core component of Runtipi, so it already exists in your installation. To use it simply run:

```bash
./runtipi-cli help
```

CLI authentication uses a private key created by the backend at `/data/.secrets/cli-secret` in the persistent Docker-managed `runtipi_auth` volume. Upgrade the CLI and backend together and recreate the backend with the updated Compose file before running authenticated CLI commands. The CLI reads the key through `docker exec`, so Docker-enabled users can authenticate without reading root-owned host files. Keep this volume when recreating the backend; deleting it invalidates existing CLI tokens.

Shared app/configuration…
