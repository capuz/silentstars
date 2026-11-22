---
repo: "mvrahden/go-test"
name: "go-test"
description: "Go test suite framework – BDD vocabulary, lifecycle hooks, fixtures, fuzzing, benchmarking, snapshots. Zero reflection, zero runtime deps –  powered by code generation."
readmeQualityOk: true
url: "https://github.com/mvrahden/go-test"
homepage: "https://mvrahden.github.io/go-test/"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["golang", "bdd", "code-generation", "tdd", "testing-framework", "assertions", "bdd-framework", "codegen", "go-testing", "golang-testing"]
stars: 129
forks: 1
openIssues: 1
closedIssues: 3
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2024-01-02T10:44:47Z"
lastCommitAt: "2026-11-22T11:51:02Z"
lastReleaseAt: "2026-05-06T20:58:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 44
maintainers: ["mvrahden"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd82306e8da66fd6b87d2cffcc72e45efd7386b26d4f6ddd4ddb90443c8f4bfd/mvrahden/go-test"
---

# gotest

Specification-driven test suites for Go with isolation and parallelism as first-class citizens.

Write test suites as Go structs.
`gotest` generates the test functions that hand them to its runtime, and runs each suite in a process of its own.
The compiler, the `testing` package and the output are `go test`'s; the runner is `gotest`.
What you read back is a behavioral specification.

The code your tests link imports only the standard library. Suites are found and registered by code generation, never by reflection.

## Contents

- [Why gotest?](#why-gotest)
- [How It Works](#how-it-works)
- [What It Costs](#what-it-costs)
- [Install](#install)
- [Getting Started](#getting-started)
- [Specification](#specification)
- [Isolation](#isolation)
- [Parallelism](#parallelism)
- [Testing Toolkit](#testing-toolkit)
- [Benchmarking](#benchmarking)
- [Fuzzing](#fuzzing)
- [Configuration](#configuration)
- [Test Selection](#test-selection)
- [Tooling](#tooling)
- [GitHub Actions](#github-actions)
- [Commands](#commands)
- [Naming Conventions](#naming-conventions)
- [Coding Agents](#coding-agents)
- [VS Code Extension](#vs-code-extension)
- [License](#license)
