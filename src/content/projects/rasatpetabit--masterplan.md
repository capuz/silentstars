---
repo: "rasatpetabit/masterplan"
name: "masterplan"
description: "Brainstorm → plan → execute development workflow plugin for Claude Code"
readmeQualityOk: true
url: "https://github.com/rasatpetabit/masterplan"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai-agent", "anthropic", "automation", "claude", "claude-code", "claude-code-plugin", "codex", "planning", "superpowers", "workflow"]
stars: 9
forks: 2
openIssues: 3
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-05-01T17:26:24Z"
lastCommitAt: "2026-09-08T08:16:12Z"
lastReleaseAt: "2026-09-08T05:45:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 58
maintainers: ["rasatpetabit"]
openGraphImageUrl: "https://opengraph.githubassets.com/76dab73f041bdfaa36c781eef590b188e9ae4057f697c934878afdf6a6818702/rasatpetabit/masterplan"
---

# masterplan

> A Claude Code & Codex CLI plugin for durable multi-hour engineering work — brainstorm → plan → execute → finish on top of `obra/superpowers` skills.

Current release: **v10.0.6** · **License:** MIT · **Works with:** Claude Code, Codex CLI · See [CHANGELOG.md](https://github.com/rasatpetabit/masterplan/blob/HEAD/CHANGELOG.md)

---

## What is masterplan

masterplan provides the `/masterplan` slash command. It orchestrates a **brainstorm → plan → execute → finish** development lifecycle on top of the `obra/superpowers` skills suite.

The core design principle: **state lives on disk, not in the chat session.** A run bundle at `docs/masterplan/<slug>/` is the single source of truth. The orchestrator sequences decisions; all real work is delegated to short-lived subagents that return digests, never raw logs. If the session crashes, compacts, or is cleared, `/masterplan` re-reads the bundle and picks up exactly where it left off.

---

## The Four-Phase Lifecycle

```
brainstorm  →  plan  →  execute  →  finish
```

| Phase | What happens |
|---|---|
| **brainstorm** | Codebase discovery; `spec.md` authored and reviewed |
| **plan** | `spec.md` → task decomposition →…
