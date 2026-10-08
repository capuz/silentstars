---
repo: "alexyorke/SharpProof"
name: "SharpProof"
description: "Bounded symbolic C# analysis platform for purity, invariants, runtime hazards, ownership/resource facts, and Z3-backed proofs."
readmeQualityOk: true
url: "https://github.com/alexyorke/SharpProof"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["code-analysis", "csharp", "dotnet", "functional-programming", "pure", "purity", "roslyn", "roslyn-analyzer", "static-analysis", "analyzer"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-10-11T18:22:08Z"
lastCommitAt: "2026-10-08T10:51:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 79
maintainers: ["alexyorke"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad425a822ea0964b467fe9558ec5c248e97d46cdb0dfb12c9b18667dff46de9a/alexyorke/SharpProof"
---

# SharpProof

SharpProof checks C# contracts and effects. Its portable analyzer reports usage problems and conservative effect information; its optional build verifier proves selected claims with a bounded native Z3 worker.

This is a preview. `Proven` is conditional on the modeled language subset and recorded assumptions. `Refuted` requires a replayable violation. `Unknown` is an accountable result, not success. See [semantics](https://github.com/alexyorke/SharpProof/blob/HEAD/SEMANTICS.md) and [coverage and limits](https://github.com/alexyorke/SharpProof/blob/HEAD/docs/coverage-and-limits.md).

## Packages

| Package | Purpose |
| --- | --- |
| `SharpProof.Attributes` | Application contract API and IntelliSense XML; targets netstandard2.0 |
| `SharpProof` | Portable analyzer, companion validation hook, compiler collector, and build configuration |
| `SharpProof.Verifier` | MSBuild tasks, launcher, worker, and pinned Linux amd64 Z3 payload |

Reference Attributes from application code. Keep analyzer and verifier references private. Full verification requires the [canonical container](https://github.com/alexyorke/SharpProof/blob/HEAD/docs/container-development.md); the portable…
