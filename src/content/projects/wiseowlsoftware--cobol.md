---
repo: "WiseOwlSoftware/COBOL"
name: "COBOL"
description: "WiseOwl COBOL: a production-quality COBOL compiler for .NET, built to all four editions of standard COBOL (ISO/IEC 1989): 1985, 2002, 2014 and 2023"
readmeQualityOk: true
url: "https://github.com/WiseOwlSoftware/COBOL"
language: "COBOL"
languages: ["COBOL", "C#"]
languagePcts: [54, 36]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-13T19:54:53Z"
lastCommitAt: "2026-10-31T07:32:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["BrentRector"]
openGraphImageUrl: "https://opengraph.githubassets.com/49f13df098a8e2547447a79686c58494a5e267fc8c109dceb5664ff1edbb34fe/WiseOwlSoftware/COBOL"
---

# WiseOwl COBOL

WiseOwl COBOL compiles standard COBOL to .NET. It implements ISO/IEC 1989:2023 and supports the 1985, 2002 and 2014
editions, each with its own syntax and semantics. The compiler translates a program to typed-native C#, in which a
COBOL record is a .NET `record struct` and an elementary item is a native field, and Roslyn builds that C# into an
ordinary .NET assembly.

The standard is the specification. Every normative rule of ISO/IEC 1989:2023 is a row in a traceability inventory,
and a row closes only when a test derived from the standard proves the compiler conforms. Where the standard leaves a
choice to the implementor, [docs/CONFORMANCE.md](https://github.com/WiseOwlSoftware/COBOL/blob/HEAD/docs/CONFORMANCE.md) records the choice and its reasons.

## What you need

| Tool | Version | Why |
|---|---|---|
| .NET SDK | 10.0.100 or a later 10.0 release (`global.json`) | builds the solution; runs compiled programs |
| PowerShell | 7 or later (`pwsh`) | the build regenerates the ANTLR parser through a PowerShell step; the gate scripts |
| Java | 21 or later | runs the checked-in ANTLR 4.13.2 jar when a grammar changes |
| Python | 3.14 or later | the gate driver,…
