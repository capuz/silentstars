---
repo: "nebari-dev/nebi"
name: "nebi"
description: "Server and CLI for managing multi-user Pixi environments"
readmeQualityOk: true
url: "https://github.com/nebari-dev/nebi"
homepage: "https://nebi.nebari.dev/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [72, 26]
stars: 21
forks: 8
openIssues: 70
closedIssues: 197
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2025-10-24T17:41:59Z"
lastCommitAt: "2026-08-27T14:27:02Z"
lastReleaseAt: "2026-02-20T12:46:04Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 60
maintainers: ["MUFFANUJ", "jbouder", "aktech"]
openGraphImageUrl: "https://opengraph.githubassets.com/cad3bcd6ad872422753ec337a096e57828b2692059fa1ae3186a34b3330becb3/nebari-dev/nebi"
---

# Nebi

</div>

  Environment management for teams
</p>

  </a>
  </a>
  </a>
  </a>
  </a>
</p>

---

> **⚠️ Alpha Software**: Nebi is currently in alpha. APIs, UI, CLI and available features may change without notice. Not recommended for production use.

## What is Nebi?

If your Python projects need compiled libraries like GDAL or CUDA, you know `pip install` often isn't enough. [Pixi](https://pixi.sh) solves that by managing both Python packages and system libraries in one lockfile.

Nebi builds on Pixi to add what teams need: version history, rollback, sharing environments through registries, and access control over who can change production dependencies.

**Key features:**

- Install system libraries alongside Python packages (via Pixi)
- Push, pull, and diff versioned environments across machines
- Share environments through OCI registries (Quay.io, GHCR, etc.)
- Roll back when a dependency update breaks your workflow
- Control who can modify shared environments with role-based access
- Activate any workspace by name from any directory

## Quick Start

### Install

Pixi is a required Nebi dependency. If not already installed, install pixi as described in the [pixi…
