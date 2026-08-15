---
repo: "v1-io/v1tamins"
name: "v1tamins"
description: "Daily supplements for healthy code - Shared Claude skills, Cursor commands, and MCP configs for the Version1 team"
readmeQualityOk: true
url: "https://github.com/v1-io/v1tamins"
language: "Python"
languages: ["Python"]
languagePcts: [79]
stars: 6
forks: 2
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-15T00:01:45Z"
lastCommitAt: "2026-08-15T04:04:56Z"
lastReleaseAt: "2026-02-25T06:32:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 63
maintainers: ["cmce6171", "humungasaurus", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b19be2b5064d2cbf7c7cc028fc88940204f7d507e4f310f9fef0754956019182/v1-io/v1tamins"
---

# v1tamins

```
██╗   ██╗  ██╗ ████████╗ █████╗ ███╗   ███╗██╗███╗   ██╗███████╗
██║   ██║ ███║ ╚══██╔══╝██╔══██╗████╗ ████║██║████╗  ██║██╔════╝
██║   ██║ ╚██║    ██║   ███████║██╔████╔██║██║██╔██╗ ██║███████╗
╚██╗ ██╔╝  ██║    ██║   ██╔══██║██║╚██╔╝██║██║██║╚██╗██║╚════██║
 ╚████╔╝   ██║    ██║   ██║  ██║██║ ╚═╝ ██║██║██║ ╚████║███████║
  ╚═══╝    ╚═╝    ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝
```

**AI coding agents fail in five predictable ways. v1tamins is one sharp skill for each.**

Daily supplements for healthy code, from the Version1 team. Plugin install for Claude Code and Codex. Skills compose into the workflows you actually use — idea → ship, bug → fix, weekly compounding. Mix and match.

## Install

v1tamins ships as a plugin for Claude Code and Codex. One shared `skills/` directory under `plugins/v1tamins/` serves both runtimes through sibling per-runtime manifests. Plugin-distributed skills carry a `v1-` prefix (`v1-pr`, `v1-debug`, `v1-goldpan`) to avoid colliding with other public or personal skills.

**Claude Code**

```text
/plugin marketplace add v1-io/v1tamins
/plugin install v1tamins@v1tamins
```

For local development against a checkout, point the…
