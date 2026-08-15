---
repo: "modyra/modyra"
name: "modyra"
description: "A framework-agnostic, type-safe form engine"
readmeQualityOk: true
url: "https://github.com/modyra/modyra"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [46, 45]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-16T18:12:12Z"
lastCommitAt: "2026-08-15T04:03:49Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["lorenzomusche"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1303104196/d06a6ca4-d928-457e-a6ac-3f1e4d40d25c"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="brand/05-social/readme-banner-dark.png">
</picture>

# Modyra

**Define a form once. Run it in every application that needs it.**

Modyra keeps form state, validation and operations in a framework-independent core, and describes a
form as portable data. Write that form in TypeScript, produce it from a Rust or Java service, or
build it visually in Studio — then render it with Angular, React, Vue, Lit, Solid, Preact, Svelte,
or with no framework at all.

## The problem

The same business form gets rebuilt in every application that shows it. The Angular portal has one
version, the React admin has another, the Java service validates it a third way, and the internal
builder holds a fourth. Four copies of one process, drifting apart, each with its own bugs.

Modyra's answer is to separate what a form *is* from how it is *drawn*:

- `@modyra/core` owns typed state, validation, drafts, history and submission — no framework
  runtime, no dependencies;
- the **Dynamic Form Contract** expresses a form as validated, serializable data that can cross a
  network, a language boundary or a build;
- adapters connect the same form…
