---
repo: "aldevtools/BusinessCentral.AL.Language.Tests"
name: "BusinessCentral.AL.Language.Tests"
description: "Executable proof that AL language features work correctly in BC Cloud. Ground-up test suite covering the in-scope AL language surface — every test proves one documented behavior against a real BC instance."
readmeQualityOk: true
url: "https://github.com/aldevtools/BusinessCentral.AL.Language.Tests"
language: "AL"
languages: ["AL"]
languagePcts: [100]
stars: 5
forks: 6
openIssues: 18
closedIssues: 300
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-05-25T08:15:43Z"
lastCommitAt: "2026-11-14T21:59:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 71
maintainers: ["StefanMaron", "FBakkensen", "artkashin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f953a18c550d43233dc15742af1d7d817af77a74f77189e807b5ccddb1af6cc8/aldevtools/BusinessCentral.AL.Language.Tests"
---

# BusinessCentral.AL.Language.Tests

> An executable specification of the AL language — how it works, what it returns, and what it throws — verified against a real BC Cloud tenant on every commit.

## Why This Exists

AL documentation explains _what_ a method does. This repo shows _exactly_ how it behaves in practice.

Consider `Record.Copy` — the documentation describes the parameters, but many developers aren't sure whether it copies field values, filters, or both, whether a `TEMP` source record copies data or just structure, or how it interacts with `SetRange`. A single test answers that definitively, and the answer is machine-verified against a real BC Cloud tenant on every commit.

This repo is useful in two ways:

**As a language reference** — search by type name or method and find a test that documents the exact behavior, including edge cases and error conditions. Every test is a behavioral contract backed by a CI run, not a prose description that may be out of date.

**As a cross-version compatibility map** — the CI matrix runs against BC 27.5, 28.5 and 29.0. Version-gated tests (`#if BC28PLUS`, `#if BC29PLUS`) document which features changed between versions and exactly…
