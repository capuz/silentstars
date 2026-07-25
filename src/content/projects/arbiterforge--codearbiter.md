---
repo: "arbiterForge/codeArbiter"
name: "codeArbiter"
description: "When you can't trust yourself with your code base, trust Arbiter. "
readmeQualityOk: true
url: "https://github.com/arbiterForge/codeArbiter"
homepage: "https://arbiterforge.github.io/codeArbiter/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [59, 31]
topics: ["claude", "orchestration", "ai", "ai-agents", "ai-coding", "ai-governance", "ai-safety", "ai-tools", "chatgpt", "claude-code"]
stars: 137
forks: 7
openIssues: 59
closedIssues: 146
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-08T22:08:21Z"
lastCommitAt: "2026-07-25T06:01:43Z"
lastReleaseAt: "2026-06-14T02:27:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 93
undervaluedScore: 35
maintainers: ["SUaDtL", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bf6ce507bac268f3d109ffeeea3b49216e73c2c66ebd09b788c54d537861b2d/arbiterForge/codeArbiter"
discussionCount: 1
---

**Shared enforcement and project-context parity across Claude Code, Codex CLI, and Pi.**

Every intent routes through a gated skill or reviewer agent. Nothing commits until the gates are green. Decisions go through SMARTS. The audit trail is append-only.

### [Read the documentation →](https://arbiterforge.github.io/codeArbiter/)

<sub>Install it globally; it stays dormant until you opt a repo in.</sub>

</div>

---

> **License notice.** As of v2.6.0, codeArbiter is licensed under the [GNU AGPLv3](https://github.com/arbiterForge/codeArbiter/blob/HEAD/LICENSE), a change from its earlier MIT license. Copyright (C) 2026 SUaDtL, who reserves the right to dual-license under separate proprietary terms; commercial licenses are not offered at this time. See [Dual-Licensing & Contributions](#dual-licensing--contributions).

## What it is

codeArbiter is a governance layer for Claude Code, Codex CLI, and Pi. It lives in a repository of
four sibling plugins: the three governance hosts (`ca`, `ca-codex`, and `ca-pi`) plus the
`ca-sandbox` infrastructure plugin. The governance adapters are generated from one shared surface
and enforce one checked-in `.codearbiter/` project store. Instead of…
