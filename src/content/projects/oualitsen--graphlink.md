---
repo: "Oualitsen/graphlink"
name: "graphlink"
description: "Type-safe code generator for GraphQL schemas — produces clients and server interfaces for Dart,           Flutter, Java, and Spring Boot. Features built-in caching with TTL/tag-based invalidation, JSON             serialization, and auto-generated fragments."
readmeQualityOk: true
url: "https://github.com/Oualitsen/graphlink"
homepage: "https://graphlink.dev"
language: "Dart"
languages: ["Dart"]
languagePcts: [63]
topics: ["dart", "graphql", "code-generation", "flutter", "java", "spring-boot"]
stars: 18
forks: 1
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2022-07-19T20:14:51Z"
lastCommitAt: "2026-11-03T12:47:25Z"
lastReleaseAt: "2026-05-03T08:37:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 62
maintainers: ["Oualitsen"]
openGraphImageUrl: "https://opengraph.githubassets.com/9308f93866dcc615cb10fa9828aabc0b68e168ec6ffe4d775026972aa12782e0/Oualitsen/graphlink"
---

# GraphLink

> GraphQL code generator. Write your schema once and get fully typed clients and servers for Dart/Flutter, Java, TypeScript, Kotlin, Swift, Python, Go, Spring Boot and Express/Apollo — queries, mutations, subscriptions, caching — generated in milliseconds. No boilerplate. No drift.

---

## What you get

Define a GraphQL schema and GraphLink generates:

- Fully typed query, mutation, and subscription methods — no casting, no generics
- JSON serialization — ready to use, nothing to wire up
- Schema-driven cache control — declare TTL and invalidation in the schema, the generated client handles the rest
- Flutter UI input widgets — generated directly from your `input` types
- Zero runtime dependency — delete GraphLink tomorrow, everything still compiles

---

## Installation

### Recommended — `glink` CLI (fastest)

The CLI compiles to a native binary. No Dart VM overhead — regenerates in milliseconds even on large schemas.

```bash
# macOS (ARM)
curl -fsSL https://github.com/Oualitsen/graphlink/releases/latest/download/glink-macos-arm64 -o glink
chmod +x glink && sudo mv glink /usr/local/bin/glink

# macOS (x64)
curl -fsSL…
