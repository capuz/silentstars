---
repo: "Darkatek7/SonosControl"
name: "SonosControl"
description: "Self-hosted Sonos control and automation dashboard for multi-room playback, scenes, schedules, favourites, Radio, Spotify, YouTube, device management, and listening insights."
readmeQualityOk: true
url: "https://github.com/Darkatek7/SonosControl"
homepage: "https://hub.docker.com/r/darkatek7/sonoscontrol"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [55, 26]
topics: ["blazor", "docker", "docker-compose", "selfhosted", "sonos", "sonos-controller"]
stars: 28
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-12-06T06:30:49Z"
lastCommitAt: "2026-09-30T09:57:30Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 45
maintainers: ["Darkatek7"]
openGraphImageUrl: "https://opengraph.githubassets.com/56bf6867747fb5863d0defe04a01650be6ba2bcbcbafb930d4a1c7dd5d675862/Darkatek7/SonosControl"
---

# SonosControl - Self-Hosted Sonos Automation Dashboard

SonosControl is a deployer-friendly Blazor control centre organised around everyday playback, a unified source library, scene-based automation, listening insights, and role-aware administration.

## Quick Start

### 1. Run with Docker Compose

```yaml
services:
  sonos:
    build:
      context: .
      dockerfile: Dockerfile
    image: sonoscontrol:local
    container_name: sonoscontrol
    restart: unless-stopped
    ports:
      - "8080:8080"
    environment:
      TZ: Europe/Vienna
      ADMIN_USERNAME: admin
      ADMIN_EMAIL: admin@example.com
      ADMIN_PASSWORD: ChangeMe123!
      PLAYBACK_PUBLIC_BASE_URL: http://192.168.1.50:8080
    volumes:
      - ./Data:/app/Data
      - ./DataProtectionKeys:/app/DataProtectionKeys
      - ./artifacts:/app/artifacts
```

```bash
cp .env.example .env
docker compose up -d --build
```

Open `http://localhost:8080` and sign in with the seeded admin account.
Set `PLAYBACK_PUBLIC_BASE_URL` to the LAN URL that your Sonos devices can reach. `localhost` does not work for YouTube or uploaded MP3 audio streaming to Sonos.

### 2. Run locally with .NET 10

PowerShell:
```powershell
dotnet…
