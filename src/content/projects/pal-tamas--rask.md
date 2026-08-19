---
repo: "pal-tamas/rask"
name: "rask"
description: "The .NET One Person Framework — build, run, and ship a whole product solo, in C#, on one server. One codebase across server, WASM & native UI; SQLite-first data, auth, jobs, mail, cache, CQRS & one-command deploy."
readmeQualityOk: true
url: "https://github.com/pal-tamas/rask"
homepage: "https://pal-tamas.github.io/rask/"
language: "C#"
languages: ["C#"]
languagePcts: [93]
topics: ["components", "csharp", "dotnet", "server-side-rendering", "source-generator", "wasm", "web-framework", "webassembly", "websockets", "blazor-alternative"]
stars: 30
forks: 1
openIssues: 2
closedIssues: 110
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-05-11T08:56:07Z"
lastCommitAt: "2026-08-19T04:08:01Z"
lastReleaseAt: "2026-06-23T11:45:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 50
maintainers: ["pal-tamas", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/62726788216b4c89d8c60a9fa7b00c59f5ae0b41f4d442d9b8d72cfd73fa77c1/pal-tamas/rask"
discussionCount: 0
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/rask-logo-dark.svg">
</picture>

### The .NET One Person Framework — build, run, and ship a whole product solo, in C#, on one server.

**[Site ↗](https://pal-tamas.github.io/rask/)** · **[Docs ↗](https://pal-tamas.github.io/rask/docs/)** · **[Playground ↗](https://pal-tamas.github.io/rask/playground/)**

</div>

You write components as plain C# classes that return a tree of HTML from `Render()`. State is a field, an
event handler is a delegate, and the component re-renders itself — no `.razor`, no JSX, no JavaScript,
nothing to write in another language:

```csharp
[Route("/counter")]
public sealed partial class Counter : Component
{
    private int _count;

    protected override Component? Render() =>
    [
        H1["Counter"],
        P[$"Current count: {_count}"],
        Button.OnClick(() => _count++)["Click me"]
    ];
}
```

**Rask is the .NET One Person Framework.** One developer builds, runs and ships a *complete* product —
the UI, the data, the auth, the background work and the deployment — from **one C# codebase on one
server**, with **SQLite as the production database**. No PaaS to rent, no stack…
