---
repo: "abapify/adt-cli"
name: "adt-cli"
description: "ABAP-relevant JS packages"
readmeQualityOk: true
url: "https://github.com/abapify/adt-cli"
homepage: "https://adt-cli.netlify.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 20
forks: 2
openIssues: 7
closedIssues: 16
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2024-10-07T17:22:10Z"
lastCommitAt: "2026-09-21T09:14:05Z"
lastReleaseAt: "2026-04-20T19:09:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 64
maintainers: ["ThePlenkov", "github-actions[bot]", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9284bf153c9a11d5b8dccde186d42c21fc7a8441dc22000d370a75739622d25d/abapify/adt-cli"
discussionCount: 1
---

# abapify — ADT CLI & SDK for SAP

**abapify** is a TypeScript monorepo that talks to [SAP ABAP Development
Tools (ADT)](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/4ec8641126391014adc9fffe4e204223.html).
It ships a CLI (`adt`), a typed SDK for programmatic use, an MCP server
that exposes ADT to AI assistants, and a handful of CLI plugins for
common workflows (ATC, abapGit, gCTS, unit tests, diff, export).

Why it exists: SAP ADT is a rich REST surface, but there's no
first-class CLI or npm SDK for it. `abapify` gives you one — typed,
scriptable, CI-friendly, without leaving the JS ecosystem.

## Quick start

### CLI

```bash
# Install
npm i -g @abapify/adt-cli
# or, run it one-shot
npx @abapify/adt-cli --help

# Configure a connection
adt login --url https://your-sap-system.example.com

# Do things
adt search "Z*" --type class
adt get class ZCL_MY_CLASS
adt atc run --package ZMYPKG --output sarif
adt export push ./src        # deploy local source to SAP
adt abapgit push              # serialize & push via abapGit
```

See the [CLI reference](https://adt-cli.netlify.app/cli/overview) for
every command and flag.

### SDK

```bash
npm i…
