---
repo: "devhxj/Jazor"
name: "Jazor"
description: "C# to Javascript Compiler implemented via Roslyn"
readmeQualityOk: true
url: "https://github.com/devhxj/Jazor"
homepage: "https://devhxj.github.io/Jazor/"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["csharp", "ecmascript", "estree", "razor", "roslyn", "roslyn-analyzer", "source-generator", "webidl", "acornima", "esmodule"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-12-31T04:48:01Z"
lastCommitAt: "2026-09-11T08:15:11Z"
lastReleaseAt: "2026-05-26T13:03:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 80
maintainers: ["devhxj"]
openGraphImageUrl: "https://opengraph.githubassets.com/91fdf2d213cf078b30fbbddfd83c6a02c0f3c6077f77d250ed8c94d011843827/devhxj/Jazor"
---

<h1>Jazor</h1>

<p><strong>A typed .NET toolchain for compiling supported C# semantics into deterministic ECMAScript modules.</strong></p>

<p>
</p>

<p>
</p>

<p><a href="docs/03-guides/quick-start.md">Quick start</a> · <a href="docs/README.md">Documentation</a> · <a href="CHANGELOG.md">Changelog</a></p>

<p><strong>English</strong> · <a href="README_CN.md">简体中文</a></p>

</div>

> Jazor is experimental. Public APIs and generated artifact shapes may evolve.

Jazor is a typed .NET toolchain for compiling supported C# semantics into deterministic ECMAScript modules. It is framework-neutral at its core: Roslyn supplies the semantic model, `Jazor.Compiler` lowers it to ESTree, and `Jazor.Emit` materializes browser artifacts.

Razor-to-Vue is a separate application direction built on that core. `Jazor.RazorVue` binds the final output of the official Razor Source Generator, then delegates all C# expression and member semantics to the same Jazor compiler before it frames Vue render-function modules.

## Latest release

### Jazor 0.35.0 · 2026-09-10

- The compiler preserves authored labels on C# `break` and `continue`, including nested-loop targets.
- JazorAdmin login and Dashboard flows…
