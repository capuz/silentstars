---
repo: "mfittko/dev-loops"
name: "dev-loops"
description: "Shared Pi workflow infrastructure for reusable local and remote development loops"
readmeQualityOk: true
url: "https://github.com/mfittko/dev-loops"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 11
forks: 0
openIssues: 31
closedIssues: 628
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-13T07:25:52Z"
lastCommitAt: "2026-07-10T07:01:15Z"
lastReleaseAt: "2026-06-24T13:46:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["mfittko"]
openGraphImageUrl: "https://opengraph.githubassets.com/4abe93894f4e7934144646ab1a0b485050a03c8574dbcb04bf82633f72c5638d/mfittko/dev-loops"
---

# dev-loops

Turn a GitHub issue into a merged PR autonomously, up to a human-approval checkpoint.

**Harness-agnostic by design.** The same dev loop runs three ways over one shared core (`packages/core`): as a **Claude Code plugin**, as a **Pi extension**, and as a standalone **CLI**. Routing, gates, and phases are defined once in the core; the plugin and extension are thin integrations over that shared workflow.

## What is a dev loop?

A dev loop takes a GitHub issue through seven lifecycle phases — from intake to merge — with deterministic routing, self-correcting review gates, and autonomous execution until a human approves. The phase is always consultable from the deterministic state model in `packages/core/src/loop/lifecycle-state.mjs`.

| Phase | What happens |
|---|---|
| `issue_intake` | Normalize the issue, confirm scope, detect linked PRs |
| `refinement` | Elaborate the spec, run a bounded audit, harden acceptance criteria |
| `implementation` | Build the accepted scope on a feature branch or via Copilot |
| `draft_gate` | Gate review at the draft→ready boundary before marking the PR ready |
| `feedback_resolution` | Fix, reply to, and resolve review threads on GitHub…
