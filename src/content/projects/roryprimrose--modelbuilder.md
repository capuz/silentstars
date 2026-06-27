---
repo: "roryprimrose/ModelBuilder"
name: "ModelBuilder"
description: "A library for easy creation and data population of model classes for testing"
url: "https://github.com/roryprimrose/ModelBuilder"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 19
forks: 2
openIssues: 2
closedIssues: 83
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2016-02-04T04:48:20Z"
lastCommitAt: "2026-06-27T00:36:54Z"
lastReleaseAt: "2020-04-05T03:37:25Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 36
maintainers: ["roryprimrose"]
openGraphImageUrl: "https://opengraph.githubassets.com/8697a2d443b28ae3a745fa7416ab1f4ac842db002e6a22a40e14ad54a764d5aa/roryprimrose/ModelBuilder"
---

# ModelBuilder
A library for easy generation of model classes

ModelBuilder fills your classes, structs and primitives with realistic pseudo-random data so your
tests can focus on behaviour instead of hand-built fixtures. A single call builds a whole object
graph — nested types, constructor arguments, collections, enums and nullable values included.

```csharp
var person = Model.Create<Person>();
```

The current version is a **source-generated, reflection-free rewrite**. Every type you build is
discovered at compile time and gets a dedicated builder, so ModelBuilder:

- runs under **Native AOT** and full trimming with **no IL warnings**,
- reports an **unbuildable type at build time** (a diagnostic) instead of throwing at runtime,
- is **dramatically faster with far fewer allocations** than the previous reflection engine
  (typically 2–14× faster and 6–50× fewer allocations — see
  [`ModelBuilder.BenchmarkTests/BASELINE.md`](ModelBuilder.BenchmarkTests/BASELINE.md)).

> [!IMPORTANT]
> This is a new major version with a deliberately smaller surface than the v8 reflection engine.
> If you are coming from v8, read the [migration guide](MIGRATION.md). Consumers that need runtime
>…
