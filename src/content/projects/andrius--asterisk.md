---
repo: "andrius/asterisk"
name: "asterisk"
description: "✨📞 Asterisk PBX in 🐳 Docker — Smallest Asterisk ever! 🚀"
readmeQualityOk: true
url: "https://github.com/andrius/asterisk"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [58, 27]
topics: ["asterisk-pbx", "docker", "docker-image", "voip"]
stars: 419
forks: 125
openIssues: 0
closedIssues: 42
watchers: 19
contributors: 3
recentReleases: 0
createdAt: "2016-05-10T13:14:04Z"
lastCommitAt: "2026-10-09T18:57:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 38
maintainers: ["github-actions[bot]", "andrius", "asterisk-release-automation[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/df3bbf46f8875c06c3a54286150a97bb5a63cda128123d7c700b4d348428d1bf/andrius/asterisk"
discussionCount: 1
---

# Asterisk Docker Images

Production-ready Docker images for Asterisk PBX with advanced DRY template system, supporting 25 versions from 1.2.40 to 24.0.0-rc2 plus git development builds.

## Quick Start

```bash
# Use pre-built images from Docker Hub
docker pull andrius/asterisk:latest
docker run --rm -p 5060:5060/udp andrius/asterisk:latest

# Check Asterisk version
docker run --rm andrius/asterisk:latest asterisk -V

# Use specific version for production
docker run --rm -p 5060:5060/udp andrius/asterisk:22.10.1_debian-trixie

# Or build latest stable version locally and run locally built container
./scripts/build-asterisk.sh 22.10.1
docker run --rm -p 5060:5060/udp 22.10.1_debian-trixie

```

Complete examples available in [`examples/`](https://github.com/andrius/asterisk/blob/HEAD/examples/) directory. Legacy code preserved in [`legacy` branch](https://github.com/andrius/asterisk/tree/legacy).

## 📢 Stay Updated

Get notified about new Asterisk releases and Docker image updates:

### Automated Announcements

- **Telegram**: [Join @asterisk_docker](https://t.me/asterisk_docker) - Instant release notifications
- **Mastodon**:…
