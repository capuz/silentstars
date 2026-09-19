---
repo: "graphcal-lang/graphcal"
name: "graphcal"
description: "A type-safe, unit-aware, Git-friendly reactive programming language for engineering calculations."
readmeQualityOk: true
url: "https://github.com/graphcal-lang/graphcal"
homepage: "https://graphcal.org/docs"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["programming-language", "statically-typed", "graphcal"]
stars: 6
forks: 2
openIssues: 107
closedIssues: 421
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-12T02:28:17Z"
lastCommitAt: "2026-09-19T01:19:45Z"
lastReleaseAt: "2026-06-01T14:55:49Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 63
maintainers: ["renovate[bot]", "shunichironomura", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf6fae0c60cfcb376b98fd4b711fd8a4019309f087a63be060716877d208a074/graphcal-lang/graphcal"
---

# Graphcal

> [!WARNING]
> Graphcal is under active development. Expect breaking changes and bugs.

**A type-safe, unit-aware, Git-friendly reactive programming language for engineering calculations.**

Graphcal is for engineers who want more confidence than spreadsheets and ad-hoc scripts provide. Write plain-text calculation graphs, let the compiler check types and physical dimensions, and see dependent values update when inputs change.

*The language server shows computed values inline, turning a text file into a live engineering worksheet.*

## See it in action

This example calculates rocket delta-v. `Velocity` and `Acceleration` are prelude dimensions.

```gcl
param dry_mass: Mass = 1200.0 kg;
param fuel_mass: Mass = 2800.0 kg;
param isp: Time = 320.0 s;
const node g0: Acceleration = 9.80665 m/s^2;

node v_exhaust: Velocity = @isp * @g0;
node mass_ratio: Dimensionless = (@dry_mass + @fuel_mass) / @dry_mass;
node delta_v: Velocity = @v_exhaust * ln(@mass_ratio);
```

```sh
graphcal eval rocket.gcl
# delta_v = 3778.221 m/s
```

[Try the example in the browser playground](https://graphcal.org/playground/?example=rocket) without installing anything.

## Why Graphcal?

- **Type-…
