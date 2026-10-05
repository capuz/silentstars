---
repo: "maschwenk/tsrs"
name: "tsrs"
description: "Rust port of the TypeScript 7 type checker"
readmeQualityOk: true
url: "https://github.com/maschwenk/tsrs"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-01T15:14:18Z"
lastCommitAt: "2026-10-05T10:47:13Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["maschwenk", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/36cbc923a7cab6b362e1b9bf895a0b47dba7420972bb45385d002a8b66f873e8/maschwenk/tsrs"
---

## Benchmark: tsrs vs tsgo 7.0.2

tsrs is a Rust port of the TypeScript 7 type checker (the Go compiler, "tsgo"). Each row type-checks one project from [microsoft/typescript-benchmarking](https://github.com/microsoft/typescript-benchmarking), the suite the TypeScript team benchmarks tsgo on (vscode, xstate-main, webpack, mui-docs, Compiler, Compiler-Unions), with tsgo 7.0.2 (npm `typescript@7.0.2`) and with tsrs at commit `d81fae4da418` (the PGO-optimized `dist` build, built like the npm release binaries): `tsc -p <project> --noEmit`, median of 3 interleaved runs, on Depot CI `depot-ubuntu-24.04-8` (8 vCPU, 31 GB RAM, Linux x86_64, AMD EPYC 9R45 96-Core Processor).

**Default mode: 4 checker threads in both (tsrs also resolves members lazily, its default)**

| project | errors, tsgo / tsrs | tsgo wall (s) | tsrs wall (s) | speedup | tsgo peak memory | tsrs peak memory | memory, tsrs / tsgo |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| vscode | 359 / 371 (ref 371) | 11.94 | 2.84 | 4.20x | 7.45 GiB | 2.47 GiB | 0.33x |
| xstate-main | 0 / 0 | 0.88 | 0.20 | 4.33x | 780 MiB | 427 MiB | 0.55x |
| webpack | 848 / 840 (ref 840) | 1.53 | 0.37 | 4.09x | 1.21 GiB | 585 MiB |…
