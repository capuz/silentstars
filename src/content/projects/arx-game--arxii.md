---
repo: "Arx-Game/arxii"
name: "arxii"
description: "Arx II - successor game to Arx: After the Reckoning"
readmeQualityOk: true
url: "https://github.com/Arx-Game/arxii"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 6
forks: 1
openIssues: 149
closedIssues: 2353
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-02-04T07:44:48Z"
lastCommitAt: "2026-10-27T12:40:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 77
maintainers: ["TehomCD", "ApostateCD", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/53b7122f08ca3d920fdeb965e41ddd67d805c3ac3bbd758bce2b62d459dee718/Arx-Game/arxii"
discussionCount: 1
---

# Arx II

Arx II is the sequel to Arx: After the Reckoning, built on the Evennia framework.

## Sandboxed devcontainer (recommended for Claude Code)

Run Claude Code with `--dangerously-skip-permissions` safely inside a Docker container
with an egress firewall. The container is the filesystem boundary; the firewall is the
network boundary. Bootstrap the host once with `.\scripts\bootstrap-devcontainer-host.ps1`
(PowerShell; see the guide if execution policy blocks it), then `just dc-up` to start
the stack and `just dc-shell` to get a shell inside it.

See [docs/devcontainer-setup.md](https://github.com/Arx-Game/arxii/blob/HEAD/docs/devcontainer-setup.md) for the full guide.

## Development Setup (Windows)

This project uses [mise](https://mise.jdx.dev/) to manage runtime versions and [`uv`](https://github.com/astral-sh/uv) to manage Python dependencies.

### Prerequisites

- [Git ≥ 2.29](https://git-scm.com/)
- [mise](https://mise.jdx.dev/installation.html)
- [PowerShell 7+](https://github.com/PowerShell/PowerShell/releases) (Windows PowerShell 5.1 is not supported for shell hooks)

Note: Python 3.13 will be automatically installed by mise.

Install `mise` using winget in…
