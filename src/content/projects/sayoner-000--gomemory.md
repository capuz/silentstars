---
repo: "Sayoner-000/gomemory"
name: "gomemory"
description: "Memoria colectiva para agentes de código — persistente, portable, plug-and-play"
readmeQualityOk: true
url: "https://github.com/Sayoner-000/gomemory"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-03T12:17:15Z"
lastCommitAt: "2026-10-29T21:24:41Z"
lastReleaseAt: "2026-07-11T16:13:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["Sayoner-000", "josegomezJ3810"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbcd954e711ce5c39f3b40fa4d2c5f15d40fb40913c8f4889bf506846ba2e2bf/Sayoner-000/gomemory"
---

---

Your coding agent starts every session from zero. It doesn't remember why you
picked that architecture last week, how the flaky test got fixed, or which
approach you already tried and threw away. So you explain it again, and pay for
those tokens again.

gomemory keeps that context for it. Decisions, bug fixes, learnings and session
checkpoints go into a local SQLite store, one per project, and come back to the
agent through the [Model Context Protocol](https://modelcontextprotocol.io/)
(MCP) when it needs them.

It is a single Go binary. There is no cloud service, no API key and no database
server. Memory lives outside your repository; the project only gets a
`.memory/` folder for settings and hook state, which `mem install` adds to
`.gitignore`.

## Quick start

**1. Install the binary**

```bash
# Linux / macOS
curl -fsSL https://raw.githubusercontent.com/Sayoner-000/gomemory/main/scripts/install.sh | bash
```

On Windows, download `mem_windows_amd64.zip` from
[Releases](https://github.com/Sayoner-000/gomemory/releases/latest), check it
against `checksums.txt` and put `mem.exe` on your PATH. The exact PowerShell
commands are in…
