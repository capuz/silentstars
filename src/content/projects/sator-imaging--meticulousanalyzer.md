---
repo: "sator-imaging/MeticulousAnalyzer"
name: "MeticulousAnalyzer"
description: "A Roslyn-based C# analyzer for detecting runtime bugs, unsafe patterns, common pitfalls, and maintainability issues."
readmeQualityOk: true
url: "https://github.com/sator-imaging/MeticulousAnalyzer"
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
lastCommitAt: "2026-08-31T09:58:11Z"
lastReleaseAt: "2025-12-13T02:25:41Z"
status: "thriving"
tags: ["funded"]
healthScore: 86
undervaluedScore: 68
maintainers: ["google-labs-jules[bot]", "github-actions[bot]", "sator-imaging"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f8ad61858960fcd91bfe1b4bd8a86fe4618dcb48840cbe7df551f48c9f7674f/sator-imaging/MeticulousAnalyzer"
fundingLinks: ["GITHUB:https://github.com/sator-imaging"]
---

&nbsp;

Roslyn-based analyzer to provide diagnostics of static fields and properties initialization and more.

- [Flaky Initialization Analysis](#flaky-initialization-analysis) detects flaky initialization
    - [Cross-Referencing Problem](#cross-referencing-problem) of static field across type
- [`Enum` Type Analysis and Code Fix Provider](#enum-analyzer-and-code-fix-provider) to prevent user-level value conversion & [more](#kotlin-like-enum-pattern)
- [`Disposable` Analysis](#disposable-analyzer) to detect missing using statement, disposable type declaration mistakes and more
- [Async Context Analysis](#async-context-analysis) to detect missing await on `Task` or `ValueTask`
- [Struct Analysis](#struct-analysis) to detect parameterless constructor misuse and more
- [`TSelf` Type Argument Analysis](#tself-type-argument-analysis) for Curiously Recurring Template Pattern (CRTP)
- [`MoveOnly` / `NoCopy` Type Analysis](#moveonly--nocopy-type-analysis) to enforce move semantics and prevent copy/capture of move-only types
- [Analysis for Code Review](#analysis-for-code-review) for named arguments, explicit number types, literal branch conditions, and more
- [Project Structure…
