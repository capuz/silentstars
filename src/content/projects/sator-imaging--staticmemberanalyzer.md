---
repo: "sator-imaging/StaticMemberAnalyzer"
name: "StaticMemberAnalyzer"
description: "Roslyn-based analyzer to diagnose static fields and properties initialization."
readmeQualityOk: true
url: "https://github.com/sator-imaging/StaticMemberAnalyzer"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["roslyn-analyzer", "code-analyzer", "code-quality", "code-quality-analyzer", "code-quality-checker", "csharp", "dotnet"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2024-06-01T00:40:09Z"
lastCommitAt: "2026-07-05T06:33:43Z"
lastReleaseAt: "2025-12-13T02:25:41Z"
status: "thriving"
tags: ["funded"]
healthScore: 86
undervaluedScore: 68
maintainers: ["sator-imaging", "kiro-agent[bot]", "google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/689f139bed858d873e23b19cf77d9112985b65cb5fb612c0b3dc2b3af258b43c/sator-imaging/StaticMemberAnalyzer"
fundingLinks: ["GITHUB:https://github.com/sator-imaging"]
---

&nbsp;

Roslyn-based analyzer to provide diagnostics of static fields and properties initialization and more.

- [Flaky Initialization Analysis](#flaky-initialization-analysis) detects flaky initialization
    - [Cross-Referencing Problem](#cross-referencing-problem) of static field across type
- [`Enum` Type Analysis](#enum-type-analysis) and [Code Fix Provider](#enum-analyzer-and-code-fix-provider) to prevent user-level value conversion & [more](#kotlin-like-enum-pattern)
- [`Disposable` Analysis](#disposable-analyzer) to detect missing using statement and more
- [Async Context Analysis](#async-context-analysis) to detect missing await on `Task` or `ValueTask`
- [Struct Analysis](#struct-analysis) to detect parameterless constructor misuse and more
- [`TSelf` Type Argument Analysis](#tself-type-argument-analysis) for Curiously Recurring Template Pattern
- [Analysis for Code Review](#analysis-for-code-review) for named arguments, explicit number types and more
- [Project Structure Analysis](#project-structure-analysis) enforces namespace boundaries for `internal` symbols within the same assembly
- [Immutable Variable Analysis](#read-only-variable-analysis) detects assignment to…
