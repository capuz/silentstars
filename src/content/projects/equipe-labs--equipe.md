---
repo: "equipe-labs/equipe"
name: "equipe"
description: "Spin up a full software squad of AI agents — PO, Designer, FE, BE, QA, DevOps — that build real projects together."
readmeQualityOk: true
url: "https://github.com/equipe-labs/equipe"
homepage: "https://equipe.im"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-10T10:39:10Z"
lastCommitAt: "2026-11-03T19:04:53Z"
lastReleaseAt: "2026-10-13T12:24:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 45
maintainers: ["livelikeabel"]
openGraphImageUrl: "https://opengraph.githubassets.com/997468af1fffd0301257355724e73953788357163d3bb1099cebfea03e7235c1/equipe-labs/equipe"
---

# equipe

### Spin up a full software squad of AI agents — and ship real projects, and the work around them.

  working off a shared board, in your repo.

> **Status: early.** A squad already lives in a background daemon on your own
> plans: you tell the PM what you want, it puts tickets on the board, engineers
> pick them up and work on their own branches inside a sandbox, asking you before
> anything beyond it, and you accept the work. Handoffs and a phone channel are
> next. Watch it build itself.

## Why

A single coding agent is great in a chat window and falls apart on a real project:
no one owns the spec, nothing gets reviewed, there's no division of labor.

equipe isn't another agent loop — mature ones already exist. It's the **team layer
on top of them**: roles, a board as the single source of truth, isolated git
worktrees for parallel work, and human approval gates where they matter.

## How it works

```
                    You ── talk to the PM, or to anyone directly
                     │
      ┌──────────────▼──────────────┐   equipe's rules, in code:
      │  PM — plans, splits tickets │   assignment · order · budgets · approval gates…
