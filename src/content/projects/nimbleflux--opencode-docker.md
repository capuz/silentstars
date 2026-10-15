---
repo: "nimbleflux/opencode-docker"
name: "opencode-docker"
description: "Docker container for OpenCode."
readmeQualityOk: true
url: "https://github.com/nimbleflux/opencode-docker"
language: "Dockerfile"
languages: ["Dockerfile", "Go Template"]
languagePcts: [73, 27]
stars: 14
forks: 3
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-05T17:25:30Z"
lastCommitAt: "2026-10-15T08:32:56Z"
lastReleaseAt: "2026-02-20T09:31:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 12
maintainers: ["renovate[bot]", "github-actions[bot]", "rojanDinc"]
openGraphImageUrl: "https://opengraph.githubassets.com/1da8cf6e8686f926d15b96622d934660e56c0b141314fdd14fa8bc9dc826d358/nimbleflux/opencode-docker"
---

# OpenCode Docker

> **Docker image and deployment setup for [OpenCode](https://opencode.ai)**

This project provides container deployment options for running [OpenCode](https://opencode.ai) as a web service. OpenCode is an AI-powered development environment - this repository makes it easy to run in containerized environments.

## What is OpenCode?

OpenCode is an AI coding assistant that provides a terminal-based interface for software development. It supports multiple AI providers (Anthropic, OpenAI, Google, AWS, etc.) and includes tools for file editing, bash commands, and project management.

**For detailed information about OpenCode features and configuration, visit [opencode.ai](https://opencode.ai)**

## Deployment Options

This repository provides:
- **Docker image** - Ready-to-use container with OpenCode and common development tools
- **Docker Compose** - Simple local deployment with persistent volumes
- **Helm chart** - Kubernetes deployment with full lifecycle management

## Quick Start

### Docker

```bash
docker run -p 4000:4000 \
  -v opencode-workspace:/home/opencode/workspace \
  ghcr.io/nimbleflux/opencode-docker:latest
```

### Docker Compose (Recommended)…
