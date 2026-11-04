---
repo: "norandom/OpenUltraCode"
name: "OpenUltraCode"
description: "Ultracode making for OpenCode, inspired by Claude Code. Model fusion for open-weight models to beat frontier models at scale, cost and quality. "
readmeQualityOk: true
url: "https://github.com/norandom/OpenUltraCode"
homepage: "https://osroadwarrior.info/ultracode-and-ultrathink-for-opencode-fusion-to-beat-fable/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["model-fusion", "multi-agent", "opencode", "plugin", "ultracode", "ultrathink"]
stars: 19
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-06-16T06:18:32Z"
lastCommitAt: "2026-11-04T11:27:14Z"
lastReleaseAt: "2026-11-04T09:39:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 41
maintainers: ["norandom"]
openGraphImageUrl: "https://opengraph.githubassets.com/056507665777a11eed8cf3f91038912659be0ecca648b44a8db4a78b72af10fd/norandom/OpenUltraCode"
---

# OpenUltraCode

OpenUltraCode adds UltraCode-style workflow discipline to OpenCode 2: structured phases, adversarial review, and evidence-based completion checks on top of the opencode session you already run. It keeps the model you already selected, then adds slash commands, role agents, a skill, and a small plugin for workflow state and verification tools.

Model selection is up to you. OpenUltraCode uses no proxy and does not replace the selected model, create synthetic model IDs, or route provider traffic. Change models with opencode's normal model selection at any time; the only place OpenUltraCode names models is the opt-in fusion agents described below, and the installer's init dialogue asks you which model IDs those should use.

## Quick start

### Prerequisites

- [opencode](https://opencode.ai) is installed and on your `PATH`.
- For the development path only: Node.js 22+ and `pnpm` (the repo pins `pnpm@11.4.0` via Corepack).

### Release install (recommended)

Linux / macOS (sh):

```sh
curl -fsSL https://raw.githubusercontent.com/norandom/OpenUltraCode/main/install.sh | sh
```

Windows (PowerShell):

```powershell
irm…
