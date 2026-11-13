---
repo: "Masyaka/injecute"
name: "injecute"
description: "Lightweight, type-safe, decorator-free dependency injection container for TypeScript"
readmeQualityOk: true
url: "https://github.com/Masyaka/injecute"
homepage: "https://masyaka.github.io/injecute/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["bun", "deno", "dependency-injection", "di", "ioc", "nodejs", "type-safe", "typescript", "no-decorators"]
stars: 5
forks: 1
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2023-02-01T22:29:03Z"
lastCommitAt: "2026-11-13T11:22:10Z"
lastReleaseAt: "2026-11-11T11:06:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 78
maintainers: ["Masyaka", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf6b6edc9031135d89607edc438486720cfada3317148464030c8b7170e2cc94/Masyaka/injecute"
discussionCount: 0
---

# injecute

Type-safe dependency injection for TypeScript and JavaScript: explicit wiring, plain classes, no
decorators. Adopt it one module at a time in an existing app, or structure a new one without a
framework's opinions.

## Features

- **Typed from the registrations.** `get()` results and factory parameters are inferred; a missing
  service or a wrong dependency key fails the typecheck. See [TypeScript](https://masyaka.github.io/injecute/guide/typescript).
- **Explicit wiring, plain classes.** Dependencies are keys listed next to the factory. Your code has no
  decorators, no reflection and no container imports ([why](https://masyaka.github.io/injecute/concepts/principles#_1-explicit-wiring)).
- **Modules and private services.** Each module declares the services it needs, and the compiler checks
  that the app provides them. See [Modules](https://masyaka.github.io/injecute/guide/containers#modules).
- **Extension points.** Modules contribute routes, handlers or plugins through
  [tags](https://masyaka.github.io/injecute/guide/tags), without importing each other.
- **Scopes.** A fork per request, transaction or job, with its own services; the root can't depend on a
  scope,…
