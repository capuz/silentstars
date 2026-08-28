---
repo: "modyra/modyra"
name: "modyra"
description: "The typed contract between your backend and every frontend form"
readmeQualityOk: true
url: "https://github.com/modyra/modyra"
homepage: "https://modyra.github.io/modyra"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["contract-first", "form-builder", "form-engine", "forms", "framework-agnostic", "json-schema", "typescript", "server-driven-forms"]
stars: 10
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-16T18:12:12Z"
lastCommitAt: "2026-08-28T15:35:08Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["lorenzomusche"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1303104196/d06a6ca4-d928-457e-a6ac-3f1e4d40d25c"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="brand/05-social/readme-banner-dark.png">
</picture>

# Modyra

**One form contract. Every framework. Any backend.**

Modyra keeps form state, validation and operations in a framework-independent core, and describes a
form as portable data. Write that form in TypeScript, produce it from a Rust or Java service, or
build it visually in Studio — then render it with Angular, React, Vue, Lit, Solid, Preact, Svelte,
or with no framework at all.

three themes and dark mode, then a field added in Studio and exported as a
contract](site/public/demo/modyra-demo-poster.png)](https://modyra.github.io/modyra/#demo-heading)

## The problem

The same business form gets rebuilt in every application that shows it. The Angular portal has one
version, the React admin has another, the Java service validates it a third way, and the internal
builder holds a fourth. Four copies of one process, drifting apart, each with its own bugs.

Modyra's answer is to separate what a form *is* from how it is *drawn*:

- `@modyra/core` owns typed state, validation, drafts, history and submission — no framework
  runtime, no dependencies;
- the **Dynamic…
