---
repo: "autobutler-org/autobutler"
name: "autobutler"
description: "Turn old hard drives into fast, private, secure cloud storage at home."
url: "https://github.com/autobutler-org/autobutler"
homepage: "https://autobutler.org"
language: "HTML"
languages: ["HTML", "Dart", "Go"]
languagePcts: [38, 32, 29]
stars: 8
forks: 1
openIssues: 156
closedIssues: 401
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-02-08T06:40:12Z"
lastCommitAt: "2026-06-28T01:45:53Z"
lastReleaseAt: "2025-09-08T23:58:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 77
maintainers: ["dependabot[bot]", "exokomodo-bot", "brandonapol"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfc9552a19386dd68bf338762ff7b0a67aedb080bd6895feaf96ca62bd0b8c14/autobutler-org/autobutler"
---

# AutoButler

Your own private cloud, running in your house. Photos, files, documents — all on hardware you own, off servers you don't trust.

---

## What is it?

AutoButler is a self-hosted personal cloud that runs on a device in your home. Think Google Drive or iCloud, except the data never leaves your house and nobody's training AI on your family photos.

You buy the hardware once. No subscriptions. No data mining. It's yours.

## Stack

- **Go** + Gin — backend server
- **Flutter** — cross-platform frontend (web, iOS, Android)
- **SQLite** — embedded local database
- **OpenTelemetry** — observability

## Getting started

**Prerequisites:** Go, Flutter, Make, [air](https://github.com/air-verse/air), sqlc, swag

```bash
git clone https://github.com/autobutler-org/autobutler.git # Include --recursive if you want to do OS image builds
cd autobutler
make setup
make generate
make build
```

### Run it locally

Backend with hot reload:

```bash
make watch/backend
```

Frontend (web):

```bash
make serve/frontend
```

Frontend (mobile emulator):

```bash
make emulate          # default platform
make emulate/android  # or emulate/ios
make serve/frontend/mobile
```

> USB device…
