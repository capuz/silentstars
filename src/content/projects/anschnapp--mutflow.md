---
repo: "anschnapp/mutflow"
name: "mutflow"
description: "Mutation testing inside your Kotlin tests. Compile once, catch gaps."
readmeQualityOk: true
url: "https://github.com/anschnapp/mutflow"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["kotlin", "kotlin-compiler-plugin", "mutation-testing", "compiler-plugin", "testing", "testing-library"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-17T20:33:54Z"
lastCommitAt: "2026-07-04T22:21:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 20
maintainers: ["anschnapp"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1136514018/a62f1d1a-f8a1-4a08-9924-1f0239139504"
---

</p>

  Mutation testing inside your Kotlin tests. Compile once, catch gaps.
</p>

</p>

> mutflow uses a dual-compilation approach to keep production builds clean - mutations only exist in test compilation. The project is actively maintained and evolving. Bug reports and feedback are welcome!

## Contents

- [What is this?](#what-is-this)
- [Why?](#why)
- [What mutflow tests (and what it doesn't)](#what-mutflow-tests-and-what-it-doesnt)
- [Setup](#setup)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Mutation Operators](#mutation-operators)
- [Features](#features)
- [How Mutations Work](#how-mutations-work)
- [Design Decisions](#design-decisions)
- [Troubleshooting](#troubleshooting)

## What is this?

mutflow brings mutation testing to Kotlin with minimal overhead. Instead of the traditional approach (compile and run each mutant separately), mutflow:

1. **Compiles once** - All mutation variants are injected at compile time as conditional branches
2. **Discovers dynamically** - Mutation points are found during baseline test execution
3. **Runs all mutations** - Every discovered mutation is tested by default, no configuration needed

## Why?

Traditional…
