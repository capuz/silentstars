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
forks: 4
openIssues: 6
closedIssues: 144
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-05-25T08:15:43Z"
lastCommitAt: "2026-10-29T05:50:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 68
maintainers: ["StefanMaron"]
openGraphImageUrl: "https://opengraph.githubassets.com/63edc4b6478af1d967dd98df953f8821e97036b0168453555e42644158625f3e/aldevtools/BusinessCentral.AL.Language.Tests"
---

# BusinessCentral.AL.Language.Tests

> An executable specification of the AL language — how it works, what it returns, and what it throws — verified against a real BC Cloud tenant on every commit.

## Why This Exists

AL documentation explains _what_ a method does. This repo shows _exactly_ how it behaves in practice.

Consider `Record.Copy` — the documentation describes the parameters, but many developers aren't sure whether it copies field values, filters, or both, whether a `TEMP` source record copies data or just structure, or how it interacts with `SetRange`. A single test answers that definitively, and the answer is machine-verified against a real BC Cloud tenant on every commit.

This repo is useful in two ways:

**As a language reference** — search by type name or method and find a test that documents the exact behavior, including edge cases and error conditions. Every test is a behavioral contract backed by a CI run, not a prose description that may be out of date.

**As a cross-version compatibility map** — the CI matrix runs against BC 27.5, 28.5 and 29.0. Version-gated tests (`#if BC28PLUS`, `#if BC29PLUS`) document which features changed between versions and exactly…
