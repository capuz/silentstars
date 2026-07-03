---
repo: "UiPath/skills"
name: "skills"
description: "This is a repository of skills for interfacing UiPath capabilities to external developers."
url: "https://github.com/UiPath/skills"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 118
forks: 41
openIssues: 43
closedIssues: 9
watchers: 3
contributors: 836
recentReleases: 0
createdAt: "2026-01-21T21:13:53Z"
lastCommitAt: "2026-07-03T12:39:46Z"
status: "thriving"
tags: []
healthScore: 81
undervaluedScore: 26
maintainers: ["cezara98t", "song-zhao-25", "gabrielavaduva"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f17ec88e477067ecfd1b230bd3970f2985e0024b071eb01a74f233aedcf2ccb/UiPath/skills"
---

# UiPath Agent Skills

> [!NOTE]
> **Work in Progress** — This repository is under active development. Skills are being added and refined. Contributions, feedback, and ideas are welcome! See [Contributing](#contributing) below.

UiPath Agent Skills give AI coding agents the domain knowledge to build, run, test, and deploy UiPath automations and agents — directly from your development environment. Each skill is a self-contained package of instructions and resources that teaches your coding agent how to perform a specific UiPath task.

## Quick Start

> **Prerequisite:** [Node.js](https://nodejs.org/) (LTS) is required — it includes `npm`.

```bash
npm -g install @uipath/cli
uip skills install
```

`uip skills install` finds the AI coding agents installed on your machine and installs the skills for all of them, into each agent's directory, ready to use. If it can't find any agent, it asks which one to target. To install for just one agent, pass `--agent <name>` (e.g. `--agent claude`).

<details>
<summary>Don't have Node.js installed?</summary>

**macOS**
```bash
brew install node
```

**Windows**
```bash
winget install OpenJS.NodeJS.LTS
```

**Linux**
```bash
curl -fsSL…
