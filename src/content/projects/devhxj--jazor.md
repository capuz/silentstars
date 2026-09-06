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
lastCommitAt: "2026-09-06T08:02:30Z"
lastReleaseAt: "2026-05-26T13:03:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 80
maintainers: ["devhxj"]
openGraphImageUrl: "https://opengraph.githubassets.com/64c7affab10c84c7cf70891a4cc2906f8dca4049258956fbf5b5f6e7a0832704/devhxj/Jazor"
---

<h1>Jazor</h1>

<p><strong>A typed .NET toolchain for compiling supported C# semantics into deterministic ECMAScript modules.</strong></p>

<p>
</p>

<p>
</p>

<p><strong>English</strong> · <a href="README_CN.md">简体中文</a></p>

</div>

> Jazor is experimental. Public APIs and generated artifact shapes may evolve.

Jazor is a typed .NET toolchain for compiling supported C# semantics into deterministic ECMAScript modules. It is framework-neutral at its core: Roslyn supplies the semantic model, `Jazor.Compiler` lowers it to ESTree, and `Jazor.Emit` materializes browser artifacts.

Razor-to-Vue is a separate application direction built on that core. `Jazor.RazorVue` binds the final output of the official Razor Source Generator, then delegates all C# expression and member semantics to the same Jazor compiler before it frames Vue render-function modules.

## Latest Update

### RazorVue P0 authoring and verification - 2026-09-06

- 新增从 `RazorVue.Authoring` 开始的 Golden Path 指南，以及按稳定 ID、源码位置和替代写法组织的诊断矩阵。
- 新增统一 Vue binding contract 门禁和 RazorVue clean/incremental/HMR/Release 构建基线脚本，便于在上游升级或编译器优化前后复现证据。

See the [changelog](https://github.com/devhxj/Jazor/blob/HEAD/CHANGELOG.md) for the full…
