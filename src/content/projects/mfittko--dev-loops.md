---
repo: "mfittko/dev-loops"
name: "dev-loops"
description: "Shared Pi workflow infrastructure for reusable local and remote development loops"
url: "https://github.com/mfittko/dev-loops"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 9
forks: 0
openIssues: 23
closedIssues: 488
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-13T07:25:52Z"
lastCommitAt: "2026-06-30T06:51:05Z"
lastReleaseAt: "2026-06-24T13:46:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 58
maintainers: ["mfittko"]
openGraphImageUrl: "https://opengraph.githubassets.com/8644937246cd5290ca7bb25fc65e595a9764d0e46b21207d65bef2cef2579705/mfittko/dev-loops"
---

# dev-loops

Turn GitHub issues into merged PRs with zero manual steps between issue and approval.

## What is a dev loop?

A dev loop is an AI-driven development cycle. It takes a GitHub issue through seven lifecycle phases — from intake to merge — with deterministic routing, self-correcting review gates, and autonomous execution until the human approval checkpoint.

**Lifecycle phases:**

| Phase | What happens |
|---|---|
| `issue_intake` | Normalize the issue, confirm scope, detect linked PRs |
| `refinement` | Elaborate spec, run bounded audit, harden acceptance criteria |
| `implementation` | Build the accepted scope on a feature branch or via Copilot |
| `draft_gate` | Gate review at the draft→ready boundary before marking PR ready |
| `feedback_resolution` | Fix, reply to, and resolve review threads on GitHub |
| `pre_approval_gate` | Final gate review: verify evidence, CI, and unresolved threads |
| `merge` | Merge the PR and write the retrospective checkpoint |

Each phase is consultable from the deterministic state model in `packages/core/src/loop/lifecycle-state.mjs`. The public routing contract is [Public Dev Loop Contract](./skills/docs/public-dev-loop-contract.md).…
