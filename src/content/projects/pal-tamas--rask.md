---
repo: "pal-tamas/rask"
name: "rask"
description: "The .NET One Person Framework — build, run, and ship a whole product solo, in C#, on one server. Server/WASM/native UI, SQLite-first."
readmeQualityOk: true
url: "https://github.com/pal-tamas/rask"
homepage: "https://pal-tamas.github.io/rask/"
language: "C#"
languages: ["C#"]
languagePcts: [88]
topics: ["components", "csharp", "dotnet", "server-side-rendering", "source-generator", "wasm", "web-framework", "webassembly", "websockets", "blazor-alternative"]
stars: 25
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-11T08:56:07Z"
lastCommitAt: "2026-07-15T05:53:47Z"
lastReleaseAt: "2026-06-23T11:45:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["pal-tamas"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf087508894f3a9e963c7a3229758f19ff7c8bafff4ad348c2b0c6f0c72519df/pal-tamas/rask"
discussionCount: 0
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/rask-logo-dark.svg">
</picture>

### The .NET One Person Framework — build, run, and ship a whole product solo, in C#, on one server.

# ▶ **[Try the live demo ↗](https://pal-tamas.github.io/rask/demo/)** &nbsp;·&nbsp; 🛝 **[Playground ↗](https://pal-tamas.github.io/rask/playground/)** &nbsp;·&nbsp; 📖 **[Read the docs ↗](https://github.com/pal-tamas/rask/blob/HEAD/docs/)** &nbsp;·&nbsp; 🧪 **[Browse the examples ↗](https://github.com/pal-tamas/rask/blob/HEAD/samples/)**

</div>

---

**Rask is the .NET One Person Framework: one developer builds, runs, and ships a complete product — UI, data,
auth, background work, deployment — from a single C# codebase on one server, with SQLite as the production
database.** No PaaS, no assembled stack of services, no second language.

It starts with the UI — write components as plain C# classes that return a tree of HTML from `Render()`, **no
`.razor`, no JSX, no JavaScript to write** — and the *same* component runs server-rendered over a WebSocket,
client-side on WebAssembly, or as a native iOS/Android app. Then come the batteries: a `rask` CLI that scaffolds a
full CRUD…
