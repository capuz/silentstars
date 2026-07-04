---
repo: "bublhub/BubbleHub"
name: "BubbleHub"
description: "BubbleHub is a runtime control layer for AI agents with sandboxing and local execution."
readmeQualityOk: true
url: "https://github.com/bublhub/BubbleHub"
homepage: "http://BubbleHub.ai"
language: "Python"
languages: ["Python", "C"]
languagePcts: [55, 31]
stars: 9
forks: 4
openIssues: 8
closedIssues: 26
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-06-18T20:50:10Z"
lastCommitAt: "2026-07-04T22:52:25Z"
lastReleaseAt: "2026-06-19T13:35:44Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 60
maintainers: ["dBransky", "Copilot", "Akshaya-reddy18"]
openGraphImageUrl: "https://opengraph.githubassets.com/f310d69f2d18578bd9a899863c10a0b1369415c4526cb8890d05f5b6af8ca2d3/bublhub/BubbleHub"
discussionCount: 1
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/bubblehub-logo-dark.svg">
  </picture>
  <p>Local LLM serving and sandboxed agents in one command.</p>
  <p>
  </p>
</div>

## Install

Linux:

```bash
curl -fsSL https://bubblehub.ai/install.sh | bash
```

Windows PowerShell installer:

```powershell
irm https://bubblehub.ai/install.ps1 | iex
```

Windows double-click installer:

```powershell
irm https://bubblehub.ai/download/latest/BubbleHub-0.1.0-x64.exe -OutFile BubbleHub-0.1.0-x64.exe
.\BubbleHub-0.1.0-x64.exe
```

Check it:

```bash
bubble --help
```

Open the app:

```bash
bubblehub
```

Docker image:

```bash
docker pull ghcr.io/bublhub/bubblehub:latest
```

Use a release image as a base:

```dockerfile
FROM ghcr.io/bublhub/bubblehub:v0.1.0
```

## Quick Start

Ask the local model a question:

```bash
bubble prompt --text "Say hello from BubbleHub"
```

Run an agent in the sandbox:

```bash
bubble run --root-dir ./examples/basic --binary ./examples/basic/basic_agent.py --memory 16G
```

Name an agent for `bubble ps`, the shell prompt, and the BubbleHub desktop app:

```bash
bubble shell --name reviewer --root-dir ./workspace
bubble ps --kill agt-...…
