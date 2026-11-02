---
repo: "joemooney/aida"
name: "aida"
description: "A requirements-graph layer for AI-assisted development written in Rust"
readmeQualityOk: true
url: "https://github.com/joemooney/aida"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 6
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-23T02:26:11Z"
lastCommitAt: "2026-11-02T13:15:49Z"
lastReleaseAt: "2026-05-12T04:49:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 76
maintainers: ["joemooney"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d4d57648ca502bc0b7540565ad4f432ed57794e68ac32aafbffb8801633eb30/joemooney/aida"
---

# AIDA

AIDA is an agent-collaboration substrate for a codebase. It gives humans and
coding agents (Claude Code, Codex CLI, and any harness with a shell) one shared,
project-owned record of what is being built and why, plus the coordination
machinery that lets several agents work in the same repository without
stepping on each other.

It is alpha software, Linux-only, and released under the MIT licence.

## What it provides

- **A git-canonical requirements graph.** Specs (stories, tasks, bugs, spikes,
  epics, decisions) are YAML objects on an orphan `aida-store` branch with
  stable IDs and typed relationships. A local SQLite cache makes reads fast and
  is rebuildable from available canonical store history. Cloning the repository brings the graph with it.
- **Code-to-intent links.** A `// trace:<SPEC-ID>` comment ties code to the spec
  it implements, and commits carry the spec ID in a trailer. `aida why
- **Isolated work sessions.** Each piece of work runs in its own git worktree
  (`aida worktree`, `aida agent new`), so parallel agents do not share a checkout.
- **Enforced review and merge gates.** Work lands through pull requests with
  an independent reviewer, required CI…
