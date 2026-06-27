---
repo: "deeeed/farmslot"
name: "farmslot"
description: "Experimental agentic engineering framework and supervised dev-agent workflow."
url: "https://github.com/deeeed/farmslot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-03T08:03:05Z"
lastCommitAt: "2026-06-27T00:45:26Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 40
maintainers: ["abretonc7s", "deeeed"]
openGraphImageUrl: "https://opengraph.githubassets.com/af39a0f2827943170eabbe09fb5278460f997db519ba83c164ce5ba619b29ef9/deeeed/farmslot"
---

# farmslot

Project-agnostic orchestration for dispatching autonomous coding agents to a fleet of machines.

**Install with one command:**

```bash
curl -fsSL https://raw.githubusercontent.com/deeeed/farmslot/main/install.sh | bash
```

Checks prerequisites, sets up `~/dev/farmslot-workspace/`, and ends with a green `farmslot doctor` — nothing is auto-installed without telling you. If you have [GitHub CLI](https://cli.github.com/) signed in, the installer may ask once to star the repo (`gh repo star deeeed/farmslot`). [Getting started →](https://farmslot.io/docs/guides/getting-started)

> Why the name? I know. It stuck: agentic dev farming across many isolated slots. Naming is harder than scheduling the agents.

> [!WARNING]
> **Active development preview.** Farmslot is moving quickly while the product is finalized in
> this repo. Expect experimental features, rough edges, changing APIs, large/transient files, and
> docs that may lead the implementation in some areas. Use it as an early operator/developer tool,
> not as a stable production dependency yet.

## What it does

Manages a pool of machines (local or remote), each with one or more **slots** — isolated environments where…
