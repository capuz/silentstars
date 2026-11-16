---
repo: "vnovick/itervox"
name: "itervox"
description: "Your codebase's journey, narrated by agents - Orchestrate AI agents across issues, profiles, and machines. Full visibility from dispatch to PR."
readmeQualityOk: true
url: "https://github.com/vnovick/itervox"
homepage: "https://itervox.dev"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [65, 20]
stars: 43
forks: 11
openIssues: 3
closedIssues: 126
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-18T13:52:33Z"
lastCommitAt: "2026-11-16T11:58:10Z"
lastReleaseAt: "2026-09-28T21:39:50Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 50
maintainers: ["claude", "vnovick"]
openGraphImageUrl: "https://opengraph.githubassets.com/4118d89da97afe121f3ed031589177b40900e1b902e28f9554ce492131aa7e85/vnovick/itervox"
fundingLinks: ["GITHUB:https://github.com/vnovick"]
---

# itervox

### Your codebase's journey, narrated by agents

Orchestrate AI agents across issues, profiles, and machines. Full visibility from dispatch to PR.

**[itervox.dev](https://itervox.dev)** · **[Docs](https://itervox.dev/getting-started/)**

---

Itervox is a long-running Go daemon that polls Linear, GitHub Issues or Markdown issue files in the repository, spawns Claude Code, Codex, OpenCode or Cursor agents per issue, and gives you a live web dashboard and terminal commands (`itervox watch`, `itervox logs -f`) while they work. One `WORKFLOW.md` per project, one static binary, no runtime. It's a full Go implementation of the [OpenAI Symphony spec](https://github.com/openai/symphony/blob/main/SPEC.md) — formerly known as "Symphony Go".

## Spec conformance

Itervox is the reference implementation of the
[Orchestrated Coding spec](https://github.com/vnovick/orchestrated-coding) and
conforms at **L3** — every L1–L3 MUST verified against code with named
regression tests run under `-race`. Evidence: the audited conformance map in
[IMPLEMENTATIONS.md](https://github.com/vnovick/orchestrated-coding/blob/main/IMPLEMENTATIONS.md)
and the closed-gaps ledger in…
