---
repo: "dzb/freeway"
name: "freeway"
description: "A modern, lightweight and full-featured Java application framework built for Java 25+，streamline the Java development ."
readmeQualityOk: true
url: "https://github.com/dzb/freeway"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["modern", "zero-dependency", "small-footprint", "consistency", "full-featured", "non-disruptive", "clean-architecture", "compose-first", "clean", "agentic-friendly"]
stars: 14
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-05-25T09:28:20Z"
lastCommitAt: "2026-11-13T11:21:40Z"
lastReleaseAt: "2026-08-27T10:19:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 38
maintainers: ["dzb"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1249031565/0eb31f57-f9c2-4ed5-a26a-cee0ad0fe321"
---

# Freeway Framework

**A modern, concise, compose-first Java application framework for JDK 25+.**
IoC, HTTP, DB, Flow and Cloud are one coherent stack: no classpath scanning, no
bytecode weaving, and no runtime dependencies beyond the SLF4J API.

Freeway is an exercise in engineering taste: every API states its intent, every
concept pulls its weight, and **every shared fact has one owner**. The result is
a framework that is complete without being bloated — and predictable enough for
both humans and coding agents.

> **Latest release: 1.5.7** · **Development line: 2.0.0-SNAPSHOT**
> See the [1.5.7 release notes](https://github.com/dzb/freeway/blob/HEAD/docs/RELEASE-NOTES-1.5.7.md) and
> [CHANGELOG.md](https://github.com/dzb/freeway/blob/HEAD/CHANGELOG.md) for what changed.

## Why Freeway

The words in the banner are design constraints, not marketing copy. Each one has
a concrete refusal behind it.

| Standard | Why it is non-negotiable | Evidence in the codebase |
|---|---|---|
| **Modern** | JDK 25 is the baseline, not a compatibility tax. Freeway uses records, sealed types, pattern switches and `ScopedValue` directly instead of emulating older Java. |…
