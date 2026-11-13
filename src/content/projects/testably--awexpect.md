---
repo: "Testably/aweXpect"
name: "aweXpect"
description: "Assert unit tests in natural language using awesome expectations."
readmeQualityOk: true
url: "https://github.com/Testably/aweXpect"
homepage: "https://docs.testably.org/aweXpect"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 15
closedIssues: 137
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-11-20T00:44:20Z"
lastCommitAt: "2026-11-13T17:54:20Z"
lastReleaseAt: "2024-12-16T15:45:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 98
undervaluedScore: 83
maintainers: ["vbreuss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c89941f5bbe01d0c0407ce9fa2d1d76c6c74edc309beb8020c66b97792089e4/Testably/aweXpect"
fundingLinks: ["GITHUB:https://github.com/vbreuss"]
---

# aweXpect

Assert unit tests in natural language using awesome expectations.

```csharp
await That(message).IsEqualTo("It's a compliment");
```

```text
Expected that message
is equal to "It's a compliment",
but it was "It's a complement", which differs at index 12:
           ↓ (actual)
  "…a complement"
  "…a compliment"
           ↑ (expected)
```

## Installation

```shell
dotnet add package aweXpect
```

Add the following `using` directives: the first brings the static `Expect` class and lots of extension methods into scope, the second lets you write `That(...)` instead of `Expect.That(...)`, as all examples do:

```csharp
using aweXpect;
using static aweXpect.Expect;
```

See [Getting started](https://docs.testably.org/aweXpect/getting-started#write-your-first-test) in the documentation for your first test, or the [migration guide](https://docs.testably.org/aweXpect/migration) to move from another assertion library.

## Features

### Async everything

By using async assertions per default, we have a consistent API and other perks:

- Complete async support, e.g. `IAsyncEnumerable`, `HttpResponseMessage` (via…
