---
repo: "JuliaPlasma/VlasovMethods.jl"
name: "VlasovMethods.jl"
description: "Numerical Methods for Vlasov-Poisson and Vlasov-Maxwell Systems"
readmeQualityOk: true
url: "https://github.com/JuliaPlasma/VlasovMethods.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["particle-methods", "reduced-order-models", "vlasov-equation", "vlasov-solver", "grid-methods"]
stars: 9
forks: 1
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 3
createdAt: "2022-06-24T19:12:21Z"
lastCommitAt: "2026-11-08T14:14:27Z"
lastReleaseAt: "2026-11-04T01:43:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 75
maintainers: ["michakraus", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2a91328417cabc92e95623dba26b6b1b68b9847ff6fc90c30d0259d306c7885/JuliaPlasma/VlasovMethods.jl"
---

# VlasovMethods

This package implements various numerical methods for the Vlasov-Equation, including particle methods, grid-based methods, and reduced basis methods.

## Development

### Git hooks

Two hooks live in `.githooks`. They are **not active in a fresh clone** — `core.hooksPath` is local
configuration and does not travel with a push — so enable them once per clone:

```sh
git config core.hooksPath .githooks
```

**`pre-commit`** acts on **staged `.jl` files only**, and exits immediately when a commit stages
none, so a documentation- or workflow-only commit is not slowed down by it:

- **JuliaFormatter `--check`**, honouring this repository's own `.JuliaFormatter.toml` — **blocks**
  the commit. Formatting is mechanical and always fixable.
- **`fatou lint`**, when `fatou` is installed — **advisory only**, and deliberately so: its
  `unused-import` rule does not follow `include`, so it flags the load-bearing imports of every
  module file.
- **`using <Package>`**, which catches a syntax error or a broken `include` — **blocks**. Note that
  this package does not currently load under Julia 1.13: `RungeKutta` 0.5 pulls in
  `GenericLinearAlgebra`, whose `eigencopy_oftype`…
