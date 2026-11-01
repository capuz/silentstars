---
repo: "AnEntrypoint/gm"
name: "gm"
description: "gm: the canonical universal harness -- skill-driven orchestration for AI-native software engineering"
readmeQualityOk: true
url: "https://github.com/AnEntrypoint/gm"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
stars: 6
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-03T14:10:14Z"
lastCommitAt: "2026-11-01T10:45:43Z"
lastReleaseAt: "2026-09-15T10:00:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["lanmower"]
openGraphImageUrl: "https://opengraph.githubassets.com/3451746508756752328a128025d43f1b17101e6d5f77fd0b4b4ece4c18847430/AnEntrypoint/gm"
---

# gm

gm = skill + MCP server for coding agents (Claude Code, Cursor, Gemini CLI, Codex). Keeps plan of tasks, runs real checks, refuses let agent mark task done till checks pass. For devs already using one of these agents.

Gate decides when work done, not coding agent. Most harnesses ask model follow process. gm turns process into state machine. Six edges carry gate predicates; edge from gate state `G_SWEEP` into `COMPLETE` carries 21 of them. CI check (`ci-validated-fresh`) reads CI marker file `.gm/exec-spool/.ci-validated`, which `git_finalize` writes when inline `ci-status` check reports success or no applicable workflow for HEAD. Hand-written marker naming HEAD also passes, so check records intent, does not prove CI ran.

[Releases](https://github.com/AnEntrypoint/gm/releases) | [License](https://github.com/AnEntrypoint/gm/blob/HEAD/LICENSE) (MIT) | [Discord](https://discord.com/invite/c9VV59MKNr) | [Site](https://anentrypoint.github.io/gm/)

## Install

One command. Needs Node.js (any current LTS, [nodejs.org](https://nodejs.org)); no npm, no npx, no clone. macOS or Linux:

```
curl -fsSL https://raw.githubusercontent.com/AnEntrypoint/gm/main/install.sh | sh
```

Windows…
