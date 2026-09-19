---
repo: "orbistry/nash"
name: "nash"
description: "Plutus-based Smart Contracts"
readmeQualityOk: true
url: "https://github.com/orbistry/nash"
homepage: "https://nash-script.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["cardano", "cek", "functional-programming", "lambda-calculus", "plutus", "rust", "untyped-plutus-core", "defi", "smart-contracts"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 8
createdAt: "2025-02-27T17:50:54Z"
lastCommitAt: "2026-09-19T01:30:37Z"
lastReleaseAt: "2026-09-19T01:34:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 76
maintainers: ["MicroProofs", "rvcas"]
openGraphImageUrl: "https://opengraph.githubassets.com/312a8989ed4fc633ab774668eafd2980286fcb22314cca05e391fd0924b3cce1/orbistry/nash"
---

# nash

A purely functional language with Elm/Haskell syntax that compiles to
Untyped Plutus Core. Successor to Aiken: type classes, higher-kinded types,
explicit Big (`Data`) vs little (native UPLC) representation types, macros,
compile-time evaluation, property-based tests.

- Design: [`docs/overview.md`](https://github.com/orbistry/nash/blob/HEAD/docs/overview.md) and [`docs/`](https://github.com/orbistry/nash/blob/HEAD/docs/)
- Plans: [`plans/`](https://github.com/orbistry/nash/blob/HEAD/plans/)
- Status: [`SPEC.md`](https://github.com/orbistry/nash/blob/HEAD/SPEC.md)

## Taste

```elm
validator module Vesting exposing (main)

type Datum = Datum { owner : Bytes, deadline : Int }

@derive(Eq, Show, ToData, FromData)
type Redeemer = Claim | Cancel

main : Datum -> Redeemer -> Data -> unit
main datum redeemer ctx =
    case redeemer of
        Claim -> assert (lower datum.deadline < currentSlot ctx)
        Cancel -> assert (signedBy ctx datum.owner)

tests
    import Fuzz exposing (int)

    prop "deadline is never negative" =
        let d via int in
        do
            assert (lift d >= lift 0)
```

## Development

```sh
cargo fmt --all
cargo clippy --all-targets…
