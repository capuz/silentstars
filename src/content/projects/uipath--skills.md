---
repo: "UiPath/skills"
name: "skills"
description: "This is a repository of skills for interfacing UiPath capabilities to external developers."
readmeQualityOk: true
url: "https://github.com/UiPath/skills"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 186
forks: 64
openIssues: 118
closedIssues: 33
watchers: 4
contributors: 223
recentReleases: 0
createdAt: "2026-01-21T21:13:53Z"
lastCommitAt: "2026-11-27T16:04:31Z"
lastReleaseAt: "2026-07-12T07:02:32Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 32
maintainers: ["vlad-uipath", "DevMomo", "danmunteanu1"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb5ff96a77f67a8a698445f9859e92796379246c7800bba95d62c84edbc534d7/UiPath/skills"
---

# UiPath Agent Skills

> **Note**
>
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
