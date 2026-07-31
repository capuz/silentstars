---
repo: "laosb/agentc"
name: "agentc"
description: "Coding agents, easily containerized."
readmeQualityOk: true
url: "https://github.com/laosb/agentc"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["agent", "container", "containerization", "isolation", "security"]
stars: 69
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-30T09:58:14Z"
lastCommitAt: "2026-07-31T06:30:22Z"
lastReleaseAt: "2026-04-12T16:03:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 7
maintainers: ["laosb", "Alice39s"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a8a2593b69decd99b15e1d3220e45a5602866ef140ccd423e1753c237d7b1de/laosb/agentc"
fundingLinks: ["GITHUB:https://github.com/laosb"]
---

# agentc

Run AI coding agents in isolated containers with persistent profiles and per-project memory isolation.

Supports [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [GitHub Copilot CLI](https://gh.io/copilot-install), and more — with pluggable agent configurations via the [agent-isolation-configurations](https://github.com/laosb/agent-isolation-configurations) repo. Contributions for additional agents are welcome!

## Install

### Prerequisites

**macOS (Apple Container runtime):** macOS 15+, Apple Silicon or Intel.

**macOS / Linux (Docker runtime):** x64 or arm64, Docker Engine API v1.44+ (Docker, Podman with Docker compatibility, etc.).

### Install

```sh
curl -fsSL https://raw.githubusercontent.com/laosb/agentc/main/install.sh | sh
```

## Quick Start

```sh
agentc run                          # start default agent (claude) in $PWD
agentc run -c claude,copilot        # activate multiple configurations
agentc run "explain this code"      # forward args to the agent entrypoint
agentc run -e TZ=Europe/Berlin      # set a container environment variable
agentc sh                           # open a shell in the container
agentc sh -- ls -la /home/agent     #…
