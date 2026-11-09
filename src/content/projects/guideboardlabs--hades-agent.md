---
repo: "GuideboardLabs/hades-agent"
name: "hades-agent"
description: "Give an agent tools, not blind trust. A lean Rust runtime with explicit permissions, bounded autonomy, and receipts."
readmeQualityOk: true
url: "https://github.com/GuideboardLabs/hades-agent"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-19T16:12:44Z"
lastCommitAt: "2026-11-09T04:34:10Z"
lastReleaseAt: "2026-11-04T04:53:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 59
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6828cbf0f4f99bbaa8517a04b562d7b099683cf87e8eaf2b59dbf3de6cc9ec3c/GuideboardLabs/hades-agent"
---

One binary. Four crates. Its own state.

Hades runs a conversation, a scheduled job, or a piece of long-horizon work with a check and an attempt
budget. The point is not a plausible answer. The point is a result you can inspect afterwards: what ran,
what was allowed, what was refused, what changed, and why the run stopped.

It is a single-user runtime built around one rule:

> **A rule that can be a type is a type.**

A read job is not asked to avoid writing. It is handed no tool that writes. A memory change cannot happen
without a write permit. A refusal is a recorded decision, not a sentence in a prompt.

## Lineage and inspirations

Hades is a distilled harness, not a new kind of agent. Its direct ancestor is
[Hermes Agent](https://github.com/NousResearch/hermes-agent) by Nous Research, released under the MIT
License. Hades began as a fork of that harness and was then rebuilt as a Rust runtime. The tool loop, the
skill model, the session shape, the gateway and the memory seam are all distillations of ideas proved
there. The upstream Python tree is not shipped in this checkout.

The interaction model also owes a debt to the terminal coding agents that made plan, act, check and…
