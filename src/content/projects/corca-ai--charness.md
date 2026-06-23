---
repo: "corca-ai/charness"
name: "charness"
description: "Charness - Corca Harness"
url: "https://github.com/corca-ai/charness"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 5
forks: 3
openIssues: 2
closedIssues: 392
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-09T06:39:34Z"
lastCommitAt: "2026-06-23T23:17:25Z"
lastReleaseAt: "2026-04-19T10:51:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 74
maintainers: ["spilist"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ab522f6faf2c7e1be36e0465e6d3a2a0a455dac2ff3d58e510345b68d028e09/corca-ai/charness"
---

# Charness - Corca Harness

It helps Claude Code and Codex turn repo instructions, skills, scripts, and
checks into a repeatable product-development workflow.

`charness` is a Claude Code / Codex plugin developed by
[Corca](https://www.corca.ai/), with agent skills, scripts, and a CLI packaged
as one harness.

It was built from the patterns Corca uses across the product-development loop,
from ideation to release, and reflects the core philosophy the Corca AX team
has developed around products and agents.

## Quick Start

Make sure your machine has Python 3. Then install the managed `charness` CLI
and host plugin with:

```bash
curl -fsSLo /tmp/charness-init.sh \
  https://raw.githubusercontent.com/corca-ai/charness/main/init.sh
bash /tmp/charness-init.sh
```

If you prefer, inspect the install script before running it. `setup`
changes repo files by proposing ordinary diffs; review those diffs before
committing them.

Start a fresh Claude Code or Codex session in your repository and ask the
agent to initialize the repo:

```md
Use charness to initialize this repo.
```

The agent will load
[`charness:setup`](./skills/public/setup/SKILL.md) to update the
repo's…
