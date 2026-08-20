---
repo: "rubys/roundhouse"
name: "roundhouse"
description: "Rails as a specification; the deployment target is a build flag"
readmeQualityOk: true
url: "https://github.com/rubys/roundhouse"
homepage: "https://rubys.github.io/roundhouse/"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["compiler", "rails", "ruby", "rust", "transpiler", "type-inference"]
stars: 86
forks: 2
openIssues: 49
closedIssues: 16
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-04-17T14:59:50Z"
lastCommitAt: "2026-08-20T04:09:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 28
maintainers: ["rubys"]
openGraphImageUrl: "https://opengraph.githubassets.com/89719c16418e7d6c18695611c446356340baf437fbea0bab3a4f985a7d1c85db/rubys/roundhouse"
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-on-dark.svg">
  </picture>
</p>

# Roundhouse

*Rails as a specification; deployment is a build flag.*

Roundhouse reads Ruby source — specifically, Rails applications — and
produces standalone projects in other target languages. The deployment
target (Rust or Swift binary, TypeScript bundle, Crystal or Go service,
Elixir OTP app, Kotlin/JVM or C#/.NET service, Python project, browser
bundle, or Spinel-compiled Ruby) becomes a compiler flag rather than a
runtime choice.

A roundhouse is the circular hub in a rail yard where engines rotate and
route onto different tracks. That's the pipeline shape: one Ruby source
at the center, analyzed and dispatched to one of N target tracks.

*For the case for doing this at all — the constraints that push
successful Rails apps off CRuby, and the option value of preserving
the choice — see [WHY.md](https://github.com/rubys/roundhouse/blob/HEAD/WHY.md).*

## Overview

The emitted projects compile clean and pass their tests. The way we
know they're correct is a conformance oracle: the same URL fetched from
Rails and from each target must produce the same response,…
