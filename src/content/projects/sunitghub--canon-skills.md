---
repo: "sunitghub/canon-skills"
name: "canon-skills"
description: "The agent workflow harness: plans, decisions and acceptance criteria live in your repo, and a second agent grades the work before a sprint closes."
readmeQualityOk: true
url: "https://github.com/sunitghub/canon-skills"
homepage: "https://getcanon.dev"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [38, 35]
topics: ["agent-workflow", "ai-agents", "claude-code", "cli", "code-review", "coding-agents", "developer-tools", "kanban", "local-first", "markdown"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-10T15:15:43Z"
lastCommitAt: "2026-10-21T23:26:40Z"
lastReleaseAt: "2026-10-09T21:26:15Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 64
maintainers: ["sunitghub", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d37f389f662a768fba603323eafe953933dd2dc2459fe87005e20be9fdbb767/sunitghub/canon-skills"
---

# canon

### Plan. Build. See it.

Two commands and a local board. Your agent forgets — your repo shouldn't.

*Don't let your agent self-review.*

## Install

**macOS / Linux**

```bash
curl -fsSL https://getcanon.dev/install.sh | bash
```

**Windows (PowerShell)** — canon's tools run in Git Bash; the installer adds Git for Windows with winget if it is missing (one admin dialog, where the default button is No: choose **Yes**)

```powershell
irm https://getcanon.dev/install.ps1 | iex
```

The installers put the latest verified release on your machine (`canon update` keeps it current; `canon update --to main` follows the development version; **[how `canon update` works](https://github.com/sunitghub/canon-skills/blob/HEAD/docs/setup.md#how-canon-update-works)**). Then run `canon`: add a project, create a ticket, press Start. See the **[Quick start →](https://getcanon.dev/docs/quick-start.html)**, or **[docs/setup.md](https://github.com/sunitghub/canon-skills/blob/HEAD/docs/setup.md)** for requirements, the Windows notes and every option.

Prefer the terminal? Register the sprint skill in a project with `~/.canon/tools/skills.sh add sprint`.

To remove canon, run `canon uninstall`…
