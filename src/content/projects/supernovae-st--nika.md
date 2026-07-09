---
repo: "supernovae-st/nika"
name: "nika"
description: "Intent as Code | the workflow language for AI. One file, 4 verbs, one Rust binary. Local-first, any model, AGPL-3.0. 🦋"
readmeQualityOk: true
url: "https://github.com/supernovae-st/nika"
homepage: "https://nika.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["automation", "cli", "devops", "rust", "supernovae", "workflow-engine", "yaml", "agents", "ai", "dag"]
stars: 22
forks: 1
openIssues: 17
closedIssues: 20
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-01-02T09:32:06Z"
lastCommitAt: "2026-07-09T20:43:59Z"
lastReleaseAt: "2026-07-06T09:09:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 91
undervaluedScore: 48
maintainers: ["ThibautMelen", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5f5135c1a3eec630d9a8e3c2c9ad3b148fd8962363ecfe127b3dd34707d3543/supernovae-st/nika"
fundingLinks: ["CUSTOM:https://supernovae.studio"]
discussionCount: 1
---

<picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://nika.sh/brand/nika-logo-dark.svg">
    </picture>
  </a>
</p>

# Nika

> **Intent as Code.** The workflow language for AI: one file, 4 verbs,
> one binary.

Useful AI work shouldn't disappear into chats. **Nika turns repeatable AI
work into files you can run, review, diff and share.** If you do the same
AI task twice, make it a workflow.

A Nika workflow is just a file: readable, portable, verifiable. It runs
locally, on whichever LLM you choose, with no cloud required. The language
is an open [Apache-2.0 spec](https://github.com/supernovae-st/nika-spec);
this repo is the reference engine, a single Rust binary (AGPL-3.0). The
way SQL pairs with PostgreSQL, or the Dockerfile with Docker.

</p>

## Does it run today?

Yes.

```sh
brew install supernovae-st/tap/nika    # or: curl -LsSf https://nika.sh/install.sh | sh
nika examples run 01-hello --model mock/echo            # zero setup: no key, no model server
nika examples run 01-hello --model ollama/qwen3.5:4b    # got Ollama? the same run, real + local
```

Nika audits a workflow **before a single token is spent** (plan, cost
ceiling, secret flows, types,…
