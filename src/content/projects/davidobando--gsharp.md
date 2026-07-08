---
repo: "DavidObando/gsharp"
name: "gsharp"
description: "GSharp Programming Language"
readmeQualityOk: true
url: "https://github.com/DavidObando/gsharp"
homepage: "https://davidobando.github.io/gsharp/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["gsharp"]
stars: 17
forks: 1
openIssues: 18
closedIssues: 926
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2019-05-22T04:06:08Z"
lastCommitAt: "2026-07-08T05:42:07Z"
lastReleaseAt: "2026-06-06T23:50:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 77
maintainers: ["DavidObando"]
openGraphImageUrl: "https://opengraph.githubassets.com/0da4bc0f4a3b5c272df80562d83df158d193468fd9659cd573c0b327ad51ad60/DavidObando/gsharp"
fundingLinks: ["GITHUB:https://github.com/DavidObando"]
---

# G#

A modern, simple, and accessible programming language for .NET.

G# brings Go-, Kotlin-, and Swift-style ergonomics to the CLR. The
syntax stays small and predictable; the runtime is the same .NET you
already know, so every BCL type, NuGet package, and `dotnet` tool works
out of the box.

📖 **Documentation:** https://davidobando.github.io/gsharp/ — language
tour, tutorials, specification, and tooling reference. The site source
lives in [`website/`](https://github.com/DavidObando/gsharp/blob/HEAD/website/).

## A taste of G#

A short tour of v0.2 idioms — the same ones the documentation site uses.

### Data classes with `with`-copy and deconstruction

```gsharp
package GSharp.Tour.DataClass

import System

data class Person(Name string, Age int32)

let alice = Person("Alice", 30)
let older = alice with { Age = 31 }
let (n, a) = older

Console.WriteLine("$n is $a")           // Alice is 31
Console.WriteLine(alice == older)       // False — different Age
Console.WriteLine(alice == Person("Alice", 30))  // True — structural equality
```

`data struct` is the value-typed counterpart, with the same synthesized
equality, `with`-copy, and deconstruction.

### `if let` for nullable…
