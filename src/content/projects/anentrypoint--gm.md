---
repo: "AnEntrypoint/gm"
name: "gm"
description: "gm: the canonical universal harness -- skill-driven orchestration for AI-native software engineering"
readmeQualityOk: true
url: "https://github.com/AnEntrypoint/gm"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-03T14:10:14Z"
lastCommitAt: "2026-10-14T08:57:50Z"
lastReleaseAt: "2026-09-15T10:00:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 59
maintainers: ["lanmower"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e9d78611517b29c9c6df4a89db8ebc39a4e1061caf6b4fc9c1441bdfd26091d/AnEntrypoint/gm"
---

# gm

gm is a skill and MCP server for coding agents (Claude Code, Cursor, Gemini CLI, Codex). It keeps a plan of tasks, runs real checks, and refuses to let the agent mark a task finished until those checks pass. It is for developers who already use one of these agents.

A gate decides when work is done, not the coding agent. Most agent harnesses ask the model to follow a process. gm turns the process into a state machine. Six edges in the graph carry gate predicates, and the edge from the gate state `G_SWEEP` into `COMPLETE` carries 21 of them. The CI check (`ci-validated-fresh`) reads the CI marker file `.gm/exec-spool/.ci-validated`, which `git_finalize` writes when its inline `ci-status` check reports success or no applicable workflow for HEAD. A hand-written marker that names HEAD also passes, so the check records intent and does not prove that CI ran.

[Releases](https://github.com/AnEntrypoint/gm/releases) | [License](https://github.com/AnEntrypoint/gm/blob/HEAD/LICENSE) (MIT) | [Discord](https://discord.com/invite/c9VV59MKNr) | [Site](https://anentrypoint.github.io/gm/)

## Install

Run this in a terminal (Node.js required):

```
npx github:AnEntrypoint/gm -g
```

It…
