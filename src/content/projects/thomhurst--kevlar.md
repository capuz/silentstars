---
repo: "thomhurst/Kevlar"
name: "Kevlar"
description: "Fast, readable resilience for .NET."
readmeQualityOk: true
url: "https://github.com/thomhurst/Kevlar"
homepage: "https://thomhurst.github.io/Kevlar/"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["circuit-breaker", "dotnet", "error-handling", "resilience", "retry"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 216
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-20T15:19:58Z"
lastCommitAt: "2026-08-29T17:28:30Z"
lastReleaseAt: "2026-08-23T19:57:03Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["thomhurst", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e1f834cd943776aa27662504becc0253df2f8b9636c1def870574f647dad8f6/thomhurst/Kevlar"
fundingLinks: ["GITHUB:https://github.com/thomhurst"]
discussionCount: 0
---

# Kevlar

**Fast, allocation-conscious resilience for .NET.** Kevlar brings retries, circuit breakers,
timeouts, rate limiting, concurrency limiting, hedging and fallbacks together in a fluent API.

Resilience code should explain how a call is protected, not make you decode a framework. With
Kevlar, you build an immutable `Shield`, reuse it, and use it with ordinary delegates.

[Documentation](https://thomhurst.github.io/Kevlar/docs/getting-started) ·
[Strategies](https://thomhurst.github.io/Kevlar/docs/category/strategies) ·
[API Reference](https://thomhurst.github.io/Kevlar/api/index.html) ·
[Benchmarks](https://thomhurst.github.io/Kevlar/docs/benchmarks)

## Get started

```bash
dotnet add package Kevlar
```

Install all coupled `Kevlar.*` packages at the same version. NuGet reports partial upgrades with
`NU1605` or `NU1608`; see the [package lockstep policy](https://thomhurst.github.io/Kevlar/docs/support-policy#kevlar-package-lockstep).

```csharp
using Kevlar;

var shield = Shield.Retry(3);

using var client = new HttpClient();
using var response = await shield.ExecuteAsync(
    ct => client.GetAsync("https://example.com", ct));
```

`Retry(3)` means three retries after the…
