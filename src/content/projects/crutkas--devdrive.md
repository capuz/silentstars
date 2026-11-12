---
repo: "crutkas/devdrive"
name: "devdrive"
description: "Safety-first WinUI 3 app to detect, create, benchmark, and optimize Windows Dev Drives: reversible per-ecosystem package-cache moves + real-world build benchmarks (git/npm/dotnet/cargo)."
readmeQualityOk: true
url: "https://github.com/crutkas/devdrive"
language: "C#"
languages: ["C#"]
languagePcts: [97]
stars: 8
forks: 0
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-17T00:16:12Z"
lastCommitAt: "2026-11-12T05:42:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 41
maintainers: ["crutkas", "niels9001"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aa4b9122303e31c6ab7ed3dd9f997cd0e330d3a0d6391da639cc8b96987d5ed/crutkas/devdrive"
---

# Dev Drive Manager

A Windows desktop app (WinUI 3 / Windows App SDK) that helps developers discover, benchmark, and
plan a move to a [Dev Drive](https://learn.microsoft.com/windows/dev-drive/) — a ReFS volume tuned
for developer workloads (package caches, source trees, build output).

> **Safety-first design.** Changes require an explicit confirmation. For destructive resize, that one
> confirmation starts an elevated helper that verifies and binds live disk state before mutation, then
> revalidates it immediately before shrinking. Package-cache moves stay per-user and reversible.

---

## Documentation

In-depth docs live in [`docs/`](https://github.com/crutkas/devdrive/blob/HEAD/docs/README.md):

| Doc | What it covers |
|---|---|
| [docs/README.md](https://github.com/crutkas/devdrive/blob/HEAD/docs/README.md) | Index, architecture, and the safety model. |
| [docs/Configuration.md](https://github.com/crutkas/devdrive/blob/HEAD/docs/Configuration.md) | Every setting/option and **why** (Defender performance mode, benchmark tunables, the safe-mutation seam, reversible-state storage, the cache catalogue). |
|…
