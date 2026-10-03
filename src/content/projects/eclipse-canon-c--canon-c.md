---
repo: "eclipse-canon-c/Canon-C"
name: "Canon-C"
description: "A standard library for formally-verified C — with explicit, composable primitives that can scale."
readmeQualityOk: true
url: "https://github.com/eclipse-canon-c/Canon-C"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["header-only", "result-type", "systems-programming", "c99", "defer-pattern", "error-handling", "explicit", "lifetime", "ownership", "c"]
stars: 20
forks: 1
openIssues: 5
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2025-12-27T13:23:11Z"
lastCommitAt: "2026-10-03T09:23:20Z"
lastReleaseAt: "2026-04-02T08:35:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 39
maintainers: ["Fikoko"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1123717907/58d03929-105d-4983-950b-08849ca143f7"
discussionCount: 3
---

</p> 

# Canon-C 

### Language

### Platforms

### License

### Development & Testing

### Static Analysis

### Formal Verification & Timing Analysis

### Production & Certification

---

## Table of Contents

1. [Motivation](#motivation)
2. [IMPORTANT](#important)
3. [Dependency Rule (Strict)](#dependency-rule-strict)
4. [Design Philosophy](#design-philosophy)
5. [Getting Started](#getting-started)
    - [1. core/primitives/ — Foundations](#1-coreprimitives--foundations)
    - [2. core/ — Core memory & ownership](#2-core--core-memory--ownership)
    - [3. semantics/ — Explicit semantic types](#3-semantics--explicit-semantic-types)
    - [4. data/ — Fixed-capacity collections](#4-data--fixed-capacity-collections)
    - [5. data/convenience/ — Ergonomic collections](#5-dataconvenience--ergonomic-collections)
    - [6. algo/ — Algorithms on collections](#6-algo--algorithms-on-collections)
    - [7. util/ — Utility modules](#7-util--utility-modules)
6. [Scope](#scope)
7. [Examples](#examples)
8. [Usage](#usage)

---

## Motivation

Over time, I found myself repeatedly re-implementing the same low-level
patterns in C: arenas, error handling, vectors, parsing, file I/O, and
more.…
