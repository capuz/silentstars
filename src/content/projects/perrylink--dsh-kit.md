---
repo: "PerryLink/dsh-kit"
name: "dsh-kit"
description: "PerryLink DSH plugin family: 96 mainline specs (88 active, 8 frozen) + 24 opt-in domain specs; roster 99 repos. Non-official; no certification."
readmeQualityOk: true
url: "https://github.com/PerryLink/dsh-kit"
homepage: "https://www.npmjs.com/package/dsh-kit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
topics: ["deepseek-harness", "dsh", "dsh-plugin", "installer", "starter-kit"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-16T09:38:38Z"
lastCommitAt: "2026-11-15T11:20:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 32
maintainers: ["PerryLink"]
openGraphImageUrl: "https://opengraph.githubassets.com/98d047d5c65b3b54470cc9b78be84bb8d73da5170a170b74034005ae41c2f184/PerryLink/dsh-kit"
discussionCount: 0
---

# dsh-kit

**One-command starter pack for the actively maintained PerryLink DeepSeek Harness plugins, plus frozen ones kept installable.**

[dsh-kit](https://github.com/PerryLink/dsh-kit) is the installer and mainline roster of [PerryLink's full DSH plugin family](https://github.com/PerryLink/PerryLink/blob/main/FAMILY.md) — three-level standards and checks, guides, the developer toolchain, runtime plugins, the 53-checker compliance suite, domain operations, catalogs, and the separate Phocinae decision line. Each plugin ships with a complete `dsh.bundle` manifest, five-language docs, CI, and npm publishing.

*Workflow overview: call → plugin → result. The kit is the maintenance surface.*

## Quick start

Pick a profile (e.g. `web`), then install everything:

```sh
# Linux / macOS
./install-all.sh web

# Windows PowerShell
.\install-all.ps1 -Profile web
```

Or install individual plugins:

```sh
dsh plugin --profile web add dsh-checkpoint-rewind   # /rewind equivalent
dsh plugin --profile web add dsh-permission-rules    # allow/deny/ask rules
dsh plugin --profile web add dsh-output-styles       # outputStyles equivalent
```

## What's inside (curated highlights — the installers…
