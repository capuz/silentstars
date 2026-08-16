---
repo: "reactiveui/Primitives"
name: "Primitives"
description: "A compact, high-performance reactive library for .NET applications"
readmeQualityOk: true
url: "https://github.com/reactiveui/Primitives"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["reactive", "reactiveui", "async", "dotnet", "dotnet-core"]
stars: 11
forks: 2
openIssues: 3
closedIssues: 19
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-05-25T11:42:04Z"
lastCommitAt: "2026-08-16T04:07:21Z"
lastReleaseAt: "2026-06-14T02:22:27Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 57
maintainers: ["glennawatson", "renovate[bot]", "ChrisPulman"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a82d517bd42882f051a8ba4ca72672f2321398ea181ccc23537854fdcd306e5/reactiveui/Primitives"
fundingLinks: ["GITHUB:https://github.com/reactivemarbles", "GITHUB:https://github.com/glennawatson", "GITHUB:https://github.com/ChrisPulman"]
discussionCount: 2
---

<br>
</a>
</a>

# ReactiveUI.Primitives

ReactiveUI.Primitives is a small, fast library for reactive programming in .NET. Reactive programming means working
with values that arrive over time, such as button clicks, timer ticks, or network replies, rather than values you
already hold.

If you know LINQ, you already know the shape. LINQ queries a collection you already hold and pulls values out of an
`IEnumerable<T>`. Reactive programming queries values that arrive over time: an `IObservable<T>` pushes each value to
you as it happens. The operators carry over, so `Select`, `Where`, and `Aggregate` keep their meaning here. This library
also gives them the names `Map`, `Keep`, and `Fold`.

It gives you that model without a runtime dependency on System.Reactive, R3, or R3Async. Those are the established
reactive libraries for .NET, and this package stands in for them in the common cases.

It builds on two interfaces that .NET already ships. `IObservable<T>` is a source you subscribe to. `IObserver<T>` is
the subscriber that receives each value. The library renames a few common concepts for clarity. It also favours code
paths that allocate little memory and run under ahead-of-time (AOT)…
