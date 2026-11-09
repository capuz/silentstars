---
repo: "UiPath/skills"
name: "skills"
description: "This is a repository of skills for interfacing UiPath capabilities to external developers."
readmeQualityOk: true
url: "https://github.com/UiPath/skills"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 178
forks: 62
openIssues: 102
closedIssues: 26
watchers: 4
contributors: 213
recentReleases: 0
createdAt: "2026-01-21T21:13:53Z"
lastCommitAt: "2026-11-09T11:59:22Z"
lastReleaseAt: "2026-07-12T07:02:32Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 31
maintainers: ["tmatup", "dmetzgar", "danmunteanu1"]
openGraphImageUrl: "https://opengraph.githubassets.com/faf76513378b71d410fed6c490d486f599fd1d8c4e96ca793706383e90dcff25/UiPath/skills"
---

# UiPath Agent Skills

> [!NOTE]
> **Work in Progress** — This repository is under active development. Skills are being added and refined. Contributions, feedback, and ideas are welcome! See [Contributing](#contributing) below.

UiPath Agent Skills give AI coding agents the domain knowledge to build, run, test, and deploy UiPath automations and agents — directly from your development environment. Each skill is a self-contained package of instructions and resources that teaches your coding agent how to perform a specific UiPath task.

## Quick Start

Use the official onboarding installer. It installs Node.js >= 20, `@uipath/cli`, UiPath skills for installed AI coding agents, .NET SDK 8.0, and Python 3.11-3.14.

**macOS/Linux**
```bash
curl -fsSL https://download.uipath.com/uipath-cli/install.sh | bash
```

**Windows**
```powershell
irm https://download.uipath.com/uipath-cli/install.ps1 | iex
```

The installer runs `uip skills install --no-interactive` to wire the skills into detected AI coding agents. To re-run manually or install for one agent, use `uip skills install` or pass `--agent <name>` (e.g. `--agent claude`).

For CI or a CLI-only machine, skip agent skills and runtime…
