---
repo: "rodolfo-terriquez/workflowy-cli"
name: "workflowy-cli"
description: "WorkFlowy CLI — command-line interface for agents, automations, and power users"
readmeQualityOk: true
url: "https://github.com/rodolfo-terriquez/workflowy-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-05-14T23:53:12Z"
lastCommitAt: "2026-07-11T05:57:36Z"
lastReleaseAt: "2026-07-11T05:59:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 45
maintainers: ["rodolfo-terriquez"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c48e3c079860165b8974ae8da3c019b3833aa74bf3f275f342bc1b12dc5fada/rodolfo-terriquez/workflowy-cli"
---

# wf — WorkFlowy CLI

```text
  ╦ ╦╔═╗╦═╗╦╔═╔═╗╦  ╔═╗╦ ╦╦ ╦
  ║║║║ ║╠╦╝╠╩╗╠╣ ║  ║ ║║║║╚╦╝
  ╚╩╝╚═╝╩╚═╩ ╩╚  ╩═╝╚═╝╚╩╝ ╩
```

`wf` is the WorkFlowy command-line and agent toolkit: a local-first CLI, cache, automation layer, and MCP server that lets humans, scripts, and AI agents safely read, search, organize, and edit a WorkFlowy account.

## Install in one command

### macOS and Linux

Copy and paste this into your terminal:

```bash
curl -fsSL https://github.com/rodolfo-terriquez/workflowy-cli/releases/latest/download/install.sh | bash
```

### Windows PowerShell

Copy and paste this into PowerShell:

```powershell
irm https://github.com/rodolfo-terriquez/workflowy-cli/releases/latest/download/install.ps1 | iex
```

Then connect your WorkFlowy account:

```bash
wf login
wf cache:sync
wf doctor
```

The interactive login prompt hides the key. For automation, pipe it over stdin instead of placing it in shell history:

```bash
printf %s "$WORKFLOWY_API_KEY" | wf login --stdin
```

That’s it. The installer auto-detects your OS and CPU architecture, downloads the latest prebuilt binary, installs `wf`, and adds it to your PATH when possible.

This project is WorkFlowy-native:

-…
