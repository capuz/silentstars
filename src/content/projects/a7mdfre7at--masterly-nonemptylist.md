---
repo: "a7mdfre7at/Masterly.NonEmptyList"
name: "Masterly.NonEmptyList"
description: "A non-empty list implementation for C# ensuring collections always have at least one element. Inspired by Scala's List with functional operations (Map, FlatMap, Reduce, Fold)."
readmeQualityOk: true
url: "https://github.com/a7mdfre7at/Masterly.NonEmptyList"
homepage: "https://github.com/a7mdfre7at/Masterly.NonEmptyList"
language: "C#"
languages: ["C#"]
languagePcts: [93]
topics: ["csharp", "dotnet", "functional-programming", "ef-core", "entity-framework-core", "immutable-collections", "linq", "nonemptylist", "null-safety", "scala-inspired"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-09-13T17:22:26Z"
lastCommitAt: "2026-11-01T21:38:43Z"
lastReleaseAt: "2026-01-01T13:23:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 55
maintainers: ["a7mdfre7at"]
openGraphImageUrl: "https://opengraph.githubassets.com/7052d21bb480ea9ba471ba567b324d061e2ee2b9963e1dfc830e61df3f7b6b25/a7mdfre7at/Masterly.NonEmptyList"
discussionCount: 0
---

# Masterly.NonEmptyList

Proof-carrying collections for .NET. `NonEmptyList<T>` is a list that the type system guarantees has at least one element, so `Head`, `Last`, `Max`, `Average` and `Reduce` can never fail for lack of data. Version 3 turns that guarantee into something the compiler and the whole platform understand: collection expressions, list patterns, type-preserving LINQ, generic math, a constraint algebra, a Roslyn analyzer and source generator, and integration packages for ASP.NET Core, configuration, EF Core, Newtonsoft.Json, MessagePack, Dapper and testing.

## Give a Star! :star:

If you like or are using this project please give it a star. Thanks!

## Installation

```bash
dotnet add package Masterly.NonEmptyList
```

Targets .NET 8, .NET 9 and .NET 10. The analyzer and source generator are bundled; nothing else to install.

| Package | Adds |
|---------|------|
| `Masterly.NonEmptyList.EntityFrameworkCore` | value converters, relationships, SaveChanges validation, query translation |
| `Masterly.NonEmptyList.AspNetCore` | OpenAPI `minItems`/`minLength`, `Validation` to problem details |
| `Masterly.NonEmptyList.Configuration` | options binding that fails at…
