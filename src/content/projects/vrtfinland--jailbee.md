---
repo: "VRTFinland/jailbee"
name: "jailbee"
description: "Fence a coding agent inside a whole Linux machine, one per git branch: Incus system containers with their own services, Docker daemon, IDE, browser and egress allowlist"
readmeQualityOk: true
url: "https://github.com/VRTFinland/jailbee"
homepage: "https://jailbee.gisgro.io/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-sandbox", "ai-agents", "claude-code", "cli", "coding-agent", "containers", "developer-tools", "development-environment", "devops", "devtools"]
stars: 7
forks: 4
openIssues: 6
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-12T15:48:51Z"
lastCommitAt: "2026-10-14T08:19:02Z"
lastReleaseAt: "2026-10-13T14:18:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 63
maintainers: ["tuomas2"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfdb8bd7a5093a6a6555ba2c82e2ea881ae67f6a14641d0573776d92e9d3063f/VRTFinland/jailbee"
---

width="220" alt="JailBee">

    src="https://github.com/VRTFinland/jailbee/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
    src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License: GPL v3"></a>

**JailBee gives each git branch its own Linux development environment.** Run
several full stacks on one host — services, databases, Docker, browsers and
IDEs — without making each branch compete for the same ports or Docker names.
The environments are [Incus](https://linuxcontainers.org/incus/) system
containers, not VMs: each has its own userland and network stack, but shares
the host kernel.

That makes parallel coding-agent work practical: give each attempt its own
working tree and runtime, see which Claude Code session needs you in the
terminal dashboard, and bring commits back through a local git bridge.
The same workflow works for development and review without an agent.

The CLI is `jailbee`, or **`jb`** for short. It requires a **Linux host with
Incus**. JailBee is project-agnostic: a repo's `.jailbee/config.yaml` describes
its environment. Built at GISGRO, but not tied to GISGRO's stack.

## See it work…
