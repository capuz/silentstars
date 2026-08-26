---
repo: "gr2m/ai-provider-monitor"
name: "ai-provider-monitor"
description: "A service that monitors API specification changes from AI providers"
readmeQualityOk: true
url: "https://github.com/gr2m/ai-provider-monitor"
homepage: "https://ai-provider-monitor.vercel.app/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 13
forks: 1
openIssues: 1
closedIssues: 278
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-08-20T23:39:50Z"
lastCommitAt: "2026-08-26T04:15:26Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 68
maintainers: ["github-actions[bot]", "gr2m", "gr2m[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebf869b4cf4f52188adc093ebb3e16e7c1483754a6053d986f2d1581fb415c6f/gr2m/ai-provider-monitor"
fundingLinks: ["GITHUB:https://github.com/gr2m"]
---

# AI Provider API Changes

A GitHub Actions-powered service that monitors API specification changes from major AI providers and automatically creates pull requests when changes are detected.

When a change is detected and merged, repository dispatch events are sent to all repositories with the [ai-provider-monitor](https://github.com/apps/ai-provider-monitor) GitHub App installed. Each changed route triggers a separate `ai-provider-monitor:<provider>` event, e.g. `ai-provider-monitor:openai`.

## Get notified

1. Install the [ai-provider-monitor](https://github.com/apps/ai-provider-monitor) app in your repository
2. Add a GitHub Action workflow to handle the dispatch events:

```yaml
name: AI Provider API Change

on:
  repository_dispatch:
    types:
      - "ai-provider-monitor:openai"
      - "ai-provider-monitor:anthropic"

jobs:
  handle-change:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Provider: ${{ github.event.client_payload.provider }}"
          echo "Route: ${{ github.event.client_payload.route }}"
          echo "Breaking: ${{ github.event.client_payload.breaking }}"
          echo "Doc only: ${{ github.event.client_payload.doc_only }}"…
