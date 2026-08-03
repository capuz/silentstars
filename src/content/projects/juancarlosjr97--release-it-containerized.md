---
repo: "juancarlosjr97/release-it-containerized"
name: "release-it-containerized"
description: "🚀 A Containerized release-it to run anywhere"
readmeQualityOk: true
url: "https://github.com/juancarlosjr97/release-it-containerized"
language: "Shell"
languages: ["Shell", "Dockerfile", "JavaScript"]
languagePcts: [45, 34, 21]
topics: ["automation", "changelog", "containerization", "git", "github", "gitlab", "release-helper", "release-it", "semver"]
stars: 14
forks: 2
openIssues: 7
closedIssues: 60
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-02-10T09:58:07Z"
lastCommitAt: "2026-08-03T06:45:49Z"
lastReleaseAt: "2024-02-11T19:59:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 68
maintainers: ["renovate[bot]", "juancarlosjr97", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac7716f7dc17f986f8ef8112a1eacb1d3ec54d528ba5d1b8bc4d1123b0000f5c/juancarlosjr97/release-it-containerized"
---

# Release It - Containerized

A containerized version of [release-it][8] that runs in any environment without requiring a Node.js installation. This project is a wrapper providing the environment and setup to execute release-it directly from a container.

> [!NOTE]
> This project is released using release-it and this containerized version, including pre-releases.

## How It Works

At runtime the container:

1. Configures Git (user, email, remote URL, safe directory)
2. Imports GPG key and enables signed commits (if provided)
3. Configures SSH key and starts the SSH agent (if provided)
4. Installs the requested NPM and release-it version (defaults to `latest`)
5. Installs any additional release-it plugins from `RELEASE_IT_PLUGINS`
6. Executes `release-it` with the arguments passed to the container

The project must include a valid [release-it configuration][9] file.

## Quick Start

### Docker

```bash
docker run \
    -e GITHUB_TOKEN="<token>" \
    -e GIT_EMAIL="you@example.com" \
    -e GIT_USERNAME="Your Name" \
    -v $(pwd):/app \
    ghcr.io/juancarlosjr97/release-it-containerized \
    release-it --ci
```

### GitHub Action

```yaml
- name: Release
  uses:…
