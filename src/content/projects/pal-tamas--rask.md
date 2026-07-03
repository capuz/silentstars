---
repo: "pal-tamas/rask"
name: "rask"
description: "Live web apps in C# — server-rendered over WebSocket or client-side via WebAssembly, one codebase. No .razor, no JS."
url: "https://github.com/pal-tamas/rask"
language: "C#"
languages: ["C#"]
languagePcts: [90]
topics: ["components", "csharp", "dotnet", "dotnet10", "scoped-css", "server-side-rendering", "source-generator", "wasm", "web-framework", "webassembly"]
stars: 25
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-11T08:56:07Z"
lastCommitAt: "2026-07-03T06:24:49Z"
lastReleaseAt: "2026-06-23T11:45:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 49
maintainers: ["pal-tamas"]
openGraphImageUrl: "https://opengraph.githubassets.com/962de645ed1758fdcd1b76377e895be3f36005a6f979690bdc4247e025e8dd01/pal-tamas/rask"
discussionCount: 0
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/rask-logo-dark.svg">
</picture>

### Live web apps in C#. One codebase — server-rendered over WebSockets, or client-side in the browser via WebAssembly.

# ▶ **[Try the live demo ↗](https://pal-tamas.github.io/rask/)** &nbsp;·&nbsp; 📖 **[Read the docs ↗](docs/)** &nbsp;·&nbsp; 🧪 **[Browse the examples ↗](samples/)**

</div>

---

Write components as plain C# classes. Return a tree of HTML from `Render()`. **No `.razor`, no JSX, no JavaScript to
write** — and the *same* component code runs server-rendered with live WebSocket updates or fully client-side on
WebAssembly.

```csharp
[Route("/counter")]
public sealed class Counter : Component
{
    private int _count;

    protected override Component? Render() =>
    [
        H1()["Counter"],
        P()[$"Current count: {_count}"],
        Button(OnClick: () => _count++)["Click me"]
    ];
}
```

<sub>☝️ A complete, live, interactive component — routing, state, and event handling in a single C# class.
**[See it running, and dozens more, in the live demo ↗](https://pal-tamas.github.io/rask/)**</sub>

---

## 📱 Build mobile apps in C# — no Swift, Kotlin, React…
