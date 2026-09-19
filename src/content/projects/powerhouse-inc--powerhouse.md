---
repo: "powerhouse-inc/powerhouse"
name: "powerhouse"
description: "LLM-driven tool-set that keeps work, payments, and governance in sync."
readmeQualityOk: true
url: "https://github.com/powerhouse-inc/powerhouse"
homepage: "https://www.powerhouse.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 7
forks: 3
openIssues: 79
closedIssues: 1526
watchers: 3
contributors: 17
recentReleases: 0
createdAt: "2024-08-02T17:00:04Z"
lastCommitAt: "2026-09-19T02:46:20Z"
lastReleaseAt: "2024-10-09T18:35:59Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 99
undervaluedScore: 83
maintainers: ["thegoldenmule", "froid1911", "acaldas"]
openGraphImageUrl: "https://opengraph.githubassets.com/eec8eff2c66c04295180658f9e4ea74f287e305590299f07e20c4f46387824e6/powerhouse-inc/powerhouse"
discussionCount: 0
---

---

# Powerhouse Monorepo

This repository uses pnpm workspaces and Nx to manage a monorepo with multiple projects and packages.
The latest documentation for developers on Powerhouse Vetra can be found on https://academy.vetra.io

The Powerhouse monorepo has the following branching strategy: - Ongoing development happens on the main branch with tag `dev`

- A pre-release is branched off on Release/staging/v.x.x with tag `staging` - Production is the latest release Release/production/v.x.x accessed with tag `latest` or `prod`

## Table of Contents

- [How to Run this Repo](#clone-repo)
- [Linking Dependencies Between Projects and Packages](#linking-deps)
- [Adding a New Package or App](#add-new-package)
- [Using Docker](#using-docker)
- [How to contribute to this project](#how-to-contribute)

## How to Run this Repo <a id="clone-repo"></a>

### Prerequisites

| Tool | Version | Why |
|---|---|---|
| Node.js | `>=24` (see `engines.node`) | |
| pnpm | 11.x | CI installs `latest` via `pnpm/action-setup` |
| bun | 1.3.x | **Required to build.** The `postbuild` steps of `ph-cli`, `ph-cmd` and `registry` shell out to it, so `pnpm build` cannot finish without it. |

`playwright install…
