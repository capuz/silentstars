---
repo: "github/gh-aw-firewall"
name: "gh-aw-firewall"
description: "GitHub Agentic Workflows Firewall"
url: "https://github.com/github/gh-aw-firewall"
homepage: "https://github.github.com/gh-aw-firewall/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 31]
topics: ["agentic", "github", "workflows"]
stars: 99
forks: 28
openIssues: 53
closedIssues: 2934
watchers: 3
contributors: 2151
recentReleases: 0
createdAt: "2025-10-16T22:26:49Z"
lastCommitAt: "2026-06-24T00:20:17Z"
lastReleaseAt: "2026-01-06T00:14:11Z"
status: "thriving"
tags: ["hidden_gem", "community_hub"]
healthScore: 99
undervaluedScore: 41
maintainers: ["Copilot", "lpcox", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/43bc5fcced38fe90b61ab028e52fcb288259dda15d5a47a5353e95f0bf9e11f5/github/gh-aw-firewall"
discussionCount: 771
---

# Agentic Workflow Firewall

> [!WARNING]
> Releases v0.25.21 through v0.25.39 were retired due to a bug that impacted billing. If you are running one of these versions, please upgrade to the latest release as soon as possible.

A network firewall for agentic workflows that restricts outbound HTTP/HTTPS to an allowlist of domains.

> [!TIP]
> This project is a part of GitHub's explorations of [Agentic Workflows](https://github.com/github/gh-aw). For more background, check out the [project page](https://github.github.io/gh-aw/)! ✨

## How it works

`awf` runs your command inside a Docker sandbox with three containers:

- **Squid proxy** — filters outbound traffic by domain allowlist
- **Agent** — runs your command; all HTTP/HTTPS is routed through Squid
- **API proxy sidecar** *(optional)* — holds LLM API keys so they never reach the agent process

## Requirements

- **Docker**: 20.10+ with Docker Compose v2
- **Node.js**: 20.19.0+ (for building from source)
- **OS**: Ubuntu 22.04+ or compatible Linux distribution (x86_64 and arm64)

See [Compatibility](docs/compatibility.md) for full details on supported versions and tested configurations.

## Get started fast

```bash
curl -sSL…
