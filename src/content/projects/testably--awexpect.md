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
openIssues: 0
closedIssues: 129
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-11-20T00:44:20Z"
lastCommitAt: "2026-10-25T08:40:04Z"
lastReleaseAt: "2024-12-16T15:45:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 84
maintainers: ["vbreuss"]
openGraphImageUrl: "https://opengraph.githubassets.com/130ec22456c7a9763d114c5bdfe021153e90379c4d415cf88ab03f811297449e/Testably/aweXpect"
fundingLinks: ["GITHUB:https://github.com/vbreuss"]
---

# aweXpect

Assert unit tests in natural language using awesome expectations.

## Getting started

1. Install the [`aweXpect`](https://www.nuget.org/packages/aweXpect) nuget package
   ```ps
   dotnet add package aweXpect
   ```

2. Add the following `using` statement:
   ```csharp
   using aweXpect;
   ```
   This brings the static `Expect` class and lots of extension methods into scope.

3. See the [documentation](https://docs.testably.org/aweXpect/getting-started#write-your-first-expectation) or
   the [migration guide](https://docs.testably.org/aweXpect/migration) for more information.

## Features

### Async everything

By using async assertions per default, we have a consistent API and other perks:

- Complete async support, e.g. `IAsyncEnumerable`, `HttpResponseMessage` (via
  [aweXpect.Web](https://docs.testably.org/aweXpect/extensions/aweXpect.Web)) or similar async types
- No need to distinguish between `action.Throws()` and `await asyncAction.ThrowsAsync()`
- The evaluation is only triggered after the complete fluent chain is loaded, which has some nice benefits:
	- `Because` can be registered once as a general method that can be applied at the end of the expectation…
