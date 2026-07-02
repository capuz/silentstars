---
repo: "adamw7/tools"
name: "tools"
description: "code generation, Claude Code enforcer, context engineering and data oriented tools"
url: "https://github.com/adamw7/tools"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 4
closedIssues: 80
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-12-20T15:39:57Z"
lastCommitAt: "2026-07-02T06:33:24Z"
lastReleaseAt: "2024-12-18T09:28:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 74
maintainers: ["adamw7"]
openGraphImageUrl: "https://opengraph.githubassets.com/056e0110fa10fecc9e192bad6026945bf48d0c9f2e0dbc471907f5a6eeb1609e/adamw7/tools"
---

# tools

Library of tooling for various purposes.

## Table of Contents

- [Claude Code files Maven enforcer](#claude-code-files-maven-enforcer)
- [Code generation](#code-generation)
- [gRPC example](#grpc-example)
- [Context engineering](#context-engineering)
  - [Java code context build up](#java-code-context-build-up)
  - [Kotlin code context build up](#kotlin-code-context-build-up)
  - [Scala code context build up](#scala-code-context-build-up)
  - [Project tree](#project-tree)
  - [Output formats](#output-formats)
  - [Token-budget-aware context](#token-budget-aware-context)
- [Data](#data)
  - [Open-addressing map](#open-addressing-map)
  - [Open-addressing set](#open-addressing-set)
  - [Primitive int-keyed map](#primitive-int-keyed-map)
  - [Network kill-switch](#network-kill-switch)
- [Building](#building)
- [Releasing](#releasing)
- [License](#license)

## Claude Code files Maven enforcer

The `claude-code-enforcer` module is a set of custom
[`maven-enforcer-plugin`](https://maven.apache.org/enforcer/maven-enforcer-plugin/)
rules that **fail the build** when the repository's Claude Code files are
missing or malformed, keeping `CLAUDE.md`, `AGENTS.md`,…
