---
repo: "dfed/SafeDI"
name: "SafeDI"
description: "Compile-time-safe dependency injection for Swift without the boilerplate"
readmeQualityOk: true
url: "https://github.com/dfed/SafeDI"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
topics: ["dependency-injection", "swift", "inversion-of-control", "ios", "xcode", "code-generation", "testing"]
stars: 203
forks: 8
openIssues: 3
closedIssues: 35
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2023-11-23T02:41:03Z"
lastCommitAt: "2026-11-20T11:24:04Z"
lastReleaseAt: "2024-01-20T20:06:20Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 40
maintainers: ["dfed", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/161e56a9755a5bed7507351972e6eecf261d323411f43f0ae981e105efe94eed/dfed/SafeDI"
fundingLinks: ["GITHUB:https://github.com/dfed", "BUY_ME_A_COFFEE:https://buymeacoffee.com/dfed", "CUSTOM:https://cash.app/$dan"]
---

# SafeDI

Compile-time-safe dependency injection without the boilerplate. No containers. No service locators. No hand-written DI types.

## Why teams choose SafeDI

- **Dependency injection that feels natural.** Get the simplicity of manual dependency injection without ceremony.
- **Compile-time graph validation.** If the code compiles, the dependency graph is valid.
- **Scoped runtime values.** Make your real logged-in `User` available non-optionally to any type in the subtree with just a single macro decoration.
- **Full-graph mocks.** Generated from your real dependency graph, mocks let you override any of the graph’s objects for easy previews and tests.
- **Architecture-independent.** SwiftUI or UIKit, coordinators or MVVM, one module or hundreds — SafeDI fits what you already have.
- **Clear failures.** SafeDI reports an unsolvable graph as a compiler diagnostic at your declaration, in Xcode and in build logs. It names the declarations involved and offers a fix-it where one exists.

## The core concept

SafeDI reads your code, validates your dependencies, and generates production and mock dependency trees—all during project compilation.
