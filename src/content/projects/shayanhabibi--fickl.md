---
repo: "shayanhabibi/fickl"
name: "fickl"
description: "Performance-focused fork of the Fable F# compiler (WIP)"
readmeQualityOk: true
url: "https://github.com/shayanhabibi/fickl"
homepage: "https://shayanhabibi.github.io/fickl/"
language: "F#"
languages: ["F#"]
languagePcts: [91]
stars: 10
forks: 1
openIssues: 5
closedIssues: 189
watchers: 0
contributors: 167
recentReleases: 10
createdAt: "2026-10-20T13:27:10Z"
lastCommitAt: "2026-11-13T11:18:10Z"
lastReleaseAt: "2026-10-29T12:13:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["shayanhabibi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e207e6fbc97324adc63ed398f461cb426292b0a678b03dc7a6c5e2e39b611c3/shayanhabibi/fickl"
---

# Fickl - A Fable JS/TS focused Lab

**Documentation: [shayanhabibi.github.io/fickl](https://shayanhabibi.github.io/fickl/)**

A fork of [Fable](https://github.com/fable-compiler/fable); focus less on x-lang support,
and more on: the transpiler/compiler experience; the core JS/TS experience.

Our priorities, in order:

1. Performance and ergonomics of the compiler
2. Explicit control of expression
3. Performance and ergonomics of JS interop
4. Ergonomics of TS interop
5. Decision tree transparency and diagnostics

> ## Why this fork/lab
>
> Because we have large projects that are developing fast, and we can't wait for fable
> publish timelines. We also prefer *Explicit control of expression* rather than *Implicit*.
>
> We do upstream our changes.

We have 100% coverage of the upstream [Fable](https://github.com/fable-compiler/fable) tests.

The difficulty ceiling for making these improvements is remarkably low using
AI; the importance remains in ensuring there is a solid foundation of *behavioural* tests
that cover edge cases and expected behaviour.

Asking AI to find code that doesn't compile, or doesn't have correct runtime behaviour
is more valuable than anything.

## Are Fable…
