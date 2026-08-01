---
repo: "adamw7/tools"
name: "tools"
description: "Claude Code enforcer and adopter, context engineering, data oriented tools, compile time safe protobuf Java code generation "
readmeQualityOk: true
url: "https://github.com/adamw7/tools"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["claude-code", "data", "enforcer", "generation", "grpc", "java", "claude-ai", "context-engineering"]
stars: 9
forks: 0
openIssues: 4
closedIssues: 81
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-12-20T15:39:57Z"
lastCommitAt: "2026-08-01T06:14:11Z"
lastReleaseAt: "2024-12-18T09:28:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 72
maintainers: ["adamw7"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d691ce89f4a62dfc69755da567ecb6f6d91823ea02c05f0893751d9b1525dbf/adamw7/tools"
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
- [Claude Code adoption](#claude-code-adoption)
- [Architecture tests (ArchUnit)](#architecture-tests-archunit)
- [Building](#building)
- [Releasing](#releasing)
- [License](#license)

## Claude Code files Maven enforcer

The `claude-code-enforcer` module is a set of custom
[`maven-enforcer-plugin`](https://maven.apache.org/enforcer/maven-enforcer-plugin/)
rules that **fail the build** when…
