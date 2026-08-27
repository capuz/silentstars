---
repo: "ReinaMacCredy/maestro"
name: "maestro"
description: "Local-first coordination for human and agent work: durable work, decisions, dispatches, evidence, and prompt-first methods, powered by TypeScript and Bun."
readmeQualityOk: true
url: "https://github.com/ReinaMacCredy/maestro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["claude-code", "plugin", "ai-agents", "mcp", "orchestration", "typescript", "workflow", "agent-skills", "cli", "codex"]
stars: 230
forks: 24
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-12-19T16:40:23Z"
lastCommitAt: "2026-08-27T14:20:10Z"
lastReleaseAt: "2026-04-22T06:52:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 28
maintainers: ["ReinaMacCredy"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a6446fdcb08a2d491cb7eb6f2a7205889f9012002e4ac913ec5700e2d6175b5/ReinaMacCredy/maestro"
---

# maestro

Maestro is a local-first coordination system for human and agent work. It keeps
durable work, decisions, sessions, evidence, dispatches, and handbacks in each
repository's shared Git root. It is written in TypeScript, runs on Bun, and does
not require a background service.

Documentation: [maestro.maccredyreina.me](https://maestro.maccredyreina.me/)

Version 0.108.0 is the first TypeScript release. It continues the version line
after 0.107.x, the final Rust release.

## Three layers

- **Mechanism kernel** owns the SQLite store, event log, sessions, CLI dispatch,
  plugin loading, and readiness projection. It does not impose workflow policy.
- **Plugins** provide verbs and optional policy gates. Repositories enable or
  disable policies such as proof and breakdown in `.maestro/config`.
- **Recipes and skills** provide prompt-first working methods as Markdown. Use
  `maestro recipe list` to browse recipes and `maestro recipe show <name>` to
  read one without copying it into a repository.

## Install, update, and remove

Maestro is distributed from source. Install with one command (needs `git`
and [Bun](https://bun.sh)):

```sh
curl -fsSL…
