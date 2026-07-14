---
repo: "heyblueteam/cobalt"
name: "cobalt"
description: "Deploy anything, anywhere. "
readmeQualityOk: true
url: "https://github.com/heyblueteam/cobalt"
homepage: "https://blue.cc/cobalt"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 14
forks: 2
openIssues: 10
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-06T07:06:36Z"
lastCommitAt: "2026-07-14T05:53:26Z"
lastReleaseAt: "2026-05-09T05:26:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 49
maintainers: ["emanuelefaja"]
openGraphImageUrl: "https://opengraph.githubassets.com/d894626443fe1a5041258dbb2a42baaaac28800b5fe3a3a2555e9e921bedc1b2/heyblueteam/cobalt"
---

# Cobalt

**Cobalt** — Deploy anything, anywhere.

An open-source, self-hostable alternative to Heroku, Netlify, Render, Vercel, and AWS Amplify. Built for Docker Swarm with automatic HTTPS via Caddy.

Powers mission-critical infrastructure for over 19,000 organizations via [Blue](https://blue.cc).

## Install

### macOS / Linux (Homebrew)

```bash
brew install heyblueteam/tap/cobalt
```

### Windows (Scoop)

```bash
scoop bucket add heyblueteam https://github.com/heyblueteam/scoop-bucket
scoop install cobalt
```

### Docker

```bash
# Pull the latest image
docker pull ghcr.io/heyblueteam/cobalt:latest

# Run with Docker Compose (recommended)
curl -sL https://raw.githubusercontent.com/heyblueteam/cobalt/main/deploy/compose/docker-compose.yml | docker compose -f - up -d
```

### Binary Downloads

Download the latest release for your platform from the [GitHub Releases](https://github.com/heyblueteam/cobalt/releases) page:

| OS | Architecture | Download |
|----|--------------|----------|
| macOS | Apple Silicon | `cobalt_vX.X.X_darwin_arm64.tar.gz` |
| macOS | Intel | `cobalt_vX.X.X_darwin_amd64.tar.gz` |
| Linux | ARM64 | `cobalt_vX.X.X_linux_arm64.tar.gz` |
| Linux | AMD64 |…
