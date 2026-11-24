---
repo: "tmyt/dotkt"
name: "dotkt"
description: "Kotlin/CLR compiler. This compiler vibing with Claude and Codex. Not recommended for production usage."
readmeQualityOk: true
url: "https://github.com/tmyt/dotkt"
language: "C#"
languages: ["C#", "Kotlin"]
languagePcts: [62, 34]
stars: 7
forks: 0
openIssues: 43
closedIssues: 890
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-13T15:18:18Z"
lastCommitAt: "2026-11-24T01:18:07Z"
lastReleaseAt: "2026-10-12T06:46:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 99
undervaluedScore: 60
maintainers: ["tmyt"]
openGraphImageUrl: "https://opengraph.githubassets.com/85776d8c96cd1b348950fa6d928a92c0f66486e1254794374d6342368ce03186/tmyt/dotkt"
---

# DotKt — Kotlin → .NET (CLR) compiler

A compiler that runs **Kotlin on .NET**. It reuses the official Kotlin frontend
(`kotlin-compiler-embeddable` 2.4.21 — Configuration / FIR / Fir2Ir, so resolution and type
checking are the real thing) and replaces only the backend, lowering **Kotlin IR → CIL** that
runs on `dotnet`.

DotKt ships the Kotlin standard library compiled for the CLR (`DotKt.Stdlib`); you reference real
.NET assemblies and call their types directly from Kotlin.
