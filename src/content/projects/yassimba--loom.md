---
repo: "Yassimba/loom"
name: "loom"
description: "Curated agent skills, Pi packages, and Herdr plugins with one setup CLI"
readmeQualityOk: true
url: "https://github.com/Yassimba/loom"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [48, 33]
stars: 6
forks: 0
openIssues: 1
closedIssues: 20
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-07-17T09:11:28Z"
lastCommitAt: "2026-08-30T00:44:55Z"
lastReleaseAt: "2026-07-17T09:12:33Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 60
maintainers: ["Yassimba", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d6bbec87b99212434c6816a558952bc69f52dc8ebbe1592914bfbb25fac69d6/Yassimba/loom"
---

# Loom

Loom weaves a coding-agent setup into one installable collection: 50+ skills, Pi packages, and pinned tools. Its guided installer walks you through the collection, sets up anything you're missing (like Pi or Herdr), and checks that it all works.

## A working agent setup in five minutes

On macOS or Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/Yassimba/loom/main/install.sh | sh
loom status
cd your-project
loom init
```

On Windows:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/Yassimba/loom/main/install.ps1 | iex"
loom status
Set-Location your-project
loom init
```

Choose **Recommended** in the first-time wizard for a small, editable coding workflow. Review the exact plan, install it, then start Claude, Codex, Pi, OpenCode, Cursor, Grok, or another agent that reads the selected skill tree. `loom status` verifies the selected resources; `loom init` prepares agent instructions, issue tracking, domain docs, editor links, and coding standards for the repository.

Project-scoped skill installs are registered locally. `loom update` refreshes every surviving registered project without adding skills…
