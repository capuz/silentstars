---
repo: "AwesomeAssertions/AwesomeAssertions.analyzers"
name: "AwesomeAssertions.analyzers"
description: "Analyzers based on the AwesomeAssertions best practices docs"
readmeQualityOk: true
url: "https://github.com/AwesomeAssertions/AwesomeAssertions.analyzers"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 7
forks: 3
openIssues: 10
closedIssues: 18
watchers: 2
contributors: 21
recentReleases: 0
createdAt: "2025-01-21T10:32:10Z"
lastCommitAt: "2026-08-01T06:15:26Z"
lastReleaseAt: "2025-09-24T06:04:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 50
maintainers: ["renovate[bot]", "cbersch"]
openGraphImageUrl: "https://opengraph.githubassets.com/c46352e86b720d74658362c9e86a7fc8967f5ed0fe90d01d1553d2236dbf1b34/AwesomeAssertions/AwesomeAssertions.analyzers"
discussionCount: 2
---

# Extension methods to fluently assert the outcome of .NET tests

A collection of Analyzers based on the best practices [tips](https://awesomeassertions.org/tips/).

## Analysis and Code Fix in Action

## Install

using the latest stable version:

```powershell
dotnet add package AwesomeAssertions.Analyzers
```

## Docs

- [AwesomeAssertions Analyzer Docs](https://github.com/AwesomeAssertions/AwesomeAssertions.analyzers/blob/HEAD/docs/AwesomeAssertionsAnalyzer.md)
- [MsTest Analyzer Docs](https://github.com/AwesomeAssertions/AwesomeAssertions.analyzers/blob/HEAD/docs/MsTestAnalyzer.md)
- [NUnit4 Analyzer Docs](https://github.com/AwesomeAssertions/AwesomeAssertions.analyzers/blob/HEAD/docs/Nunit4Analyzer.md)
- [NUnit3 Analyzer Docs](https://github.com/AwesomeAssertions/AwesomeAssertions.analyzers/blob/HEAD/docs/Nunit3Analyzer.md)
- [Xunit Analyzer Docs](https://github.com/AwesomeAssertions/AwesomeAssertions.analyzers/blob/HEAD/docs/XunitAnalyzer.md)

## Configuration

© Thanks to https://github.com/meziantou/Meziantou.FluentAssertionsAnalyzers

You can exclude assertion methods using the `.editorconfig` file:

````
[*.cs]…
