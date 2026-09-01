---
repo: "pal-tamas/rask"
name: "rask"
description: "The .NET One Person Framework — build, run, and ship a whole product solo, in C#, on one server. C# components render server-side over WebSockets or on WebAssembly, or host a typed TypeScript SPA (React, Vue, Angular, Svelte, Solid, Preact, Lit); SQLite-first data, auth, jobs, mail, cache, CQRS & one-command deploy."
readmeQualityOk: true
url: "https://github.com/pal-tamas/rask"
homepage: "https://pal-tamas.github.io/rask/"
language: "C#"
languages: ["C#"]
languagePcts: [93]
topics: ["csharp", "dotnet", "server-side-rendering", "source-generator", "web-framework", "webassembly", "websockets", "blazor-alternative", "cqrs", "one-person-framework"]
stars: 31
forks: 1
openIssues: 1
closedIssues: 166
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-05-11T08:56:07Z"
lastCommitAt: "2026-09-01T08:45:26Z"
lastReleaseAt: "2026-06-23T11:45:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["pal-tamas"]
openGraphImageUrl: "https://opengraph.githubassets.com/adfc1f6d50cae099d49f7ae93d6600b399a1cc1bb5e48d69ed07c4ab01943b6e/pal-tamas/rask"
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
