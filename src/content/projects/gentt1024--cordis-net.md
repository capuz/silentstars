---
repo: "gentt1024/Cordis.NET"
name: "Cordis.NET"
description: "A community-maintained .NET port of Cordis, baselined against the implementation maintained by DeepSeek Harness."
readmeQualityOk: true
url: "https://github.com/gentt1024/Cordis.NET"
language: "C#"
languages: ["C#"]
languagePcts: [79]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-09-21T03:44:08Z"
lastCommitAt: "2026-10-24T08:20:32Z"
lastReleaseAt: "2026-10-18T20:04:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 52
maintainers: ["gentt1024"]
openGraphImageUrl: "https://opengraph.githubassets.com/b63f67e59a16640377225b30f0ca73eac2984b843106556c58695298262f1d49/gentt1024/Cordis.NET"
discussionCount: 0
---

# Cordis.NET

[中文](https://github.com/gentt1024/Cordis.NET/blob/HEAD/README.zh.md)

Cordis.NET is a faithful, idiomatic .NET port of the fixed DSH-maintained Cordis runtime and generic application infrastructure. Build ordinary C# plugins and services, compose applications, or expose selected services to .NET and Web clients. Remote is optional; ordinary plugin development does not require Node.

Cordis.NET is independently maintained and is not an official project of DeepSeek, Cordiverse, or Microsoft. The behavior baseline is deepseek-ai/deepseek-harness at 639ed015397290b3745d163aafe02ffee4aa3f84, whose vendored Cordis reports 4.0.4; arbitrary TypeScript plugins are not a supported deployment format.

## Start with your task

| Task | Packages and entry |
|---|---|
| Run ordinary .NET plugins and services | Core; add Composition for Loader, profiles and configuration. [First package-only application](https://github.com/gentt1024/Cordis.NET/blob/HEAD/docs/getting-started.md). |
| Expose a Host to .NET or Web consumers | Composition supplies declaration extraction, generated bindings, independent clients and shared Remote contracts; AspNetCore supplies the authorized…
