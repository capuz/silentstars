---
repo: "i098/Crewship"
name: "Crewship"
description: "An opinionated, repeatable, effortless, and scalable cloud agent toolkit setup for maximizing parallel concurrent long-horizon agentic development and automations."
readmeQualityOk: true
url: "https://github.com/i098/Crewship"
homepage: "https://crewship.si"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [47, 22]
topics: ["agent-orchestration", "ai-agents", "coding-agents", "developer-tools", "devops", "infrastructure-as-code", "llm", "self-hosted", "terminal", "ubuntu"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 364
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-06T05:40:43Z"
lastCommitAt: "2026-10-21T20:01:04Z"
lastReleaseAt: "2026-10-20T19:35:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["i098"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1406758803/ad1b9e47-941d-4384-aa7c-869f79273b09"
fundingLinks: ["GITHUB:https://github.com/i098"]
discussionCount: 1
---

Crewship sets up a cloud server for developers who want coding agents to work in parallel.

**This makes it super easy to start using agents in the cloud, enjoy!**

[Docs](#more-docs) · [Install](#quick-start) · [Changelog](https://github.com/i098/Crewship/blob/HEAD/CHANGELOG.md) · [Discussions](https://github.com/i098/Crewship/discussions)

## Quick start

Use a fresh Ubuntu 24.04 server with systemd, at least 4 vCPUs and 16 GB of RAM.
Sign in over SSH with a non-root account that has sudo.
See [Capacity](https://github.com/i098/Crewship/blob/HEAD/docs/capacity.md) for sizing.
Ubuntu 26.04 is also supported.

Run this command on the server:

```bash
curl -fsSL https://raw.githubusercontent.com/i098/Crewship/main/install.sh | bash
```

The installer offers a feature checklist and installs omp agents and Firstmate.
Then check or resume setup from any directory:

```bash
"$HOME/Crewship/ship.sh" setup
```

Follow the printed commands and the [manual sign-in steps](https://github.com/i098/Crewship/blob/HEAD/SETUP.md#1-sign-in-to-github).
See [Setup checks](https://github.com/i098/Crewship/blob/HEAD/docs/configuration.md#commands) for the command's scope and limits.

For…
