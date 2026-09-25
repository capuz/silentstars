---
repo: "sini/gen-algebra"
name: "gen-algebra"
description: "gen-algebra: pure Nix primitives — search monad, intensional functions, record algebra, validators"
readmeQualityOk: true
url: "https://github.com/sini/gen-algebra"
language: "Nix"
languages: ["Nix"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-20T17:46:47Z"
lastCommitAt: "2026-09-25T09:01:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 45
maintainers: ["sini"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a222944f66f9f73e33ec68deeed4de84bbfcb1546b9cd07b08139c4d26f6148/sini/gen-algebra"
fundingLinks: ["GITHUB:https://github.com/sini"]
---

# gen-algebra — pure algebraic primitives for Nix

Foundational primitives for the gen family: a Palmer §3 search monad, intensional functions, standalone identity hashing, record algebra with scoped labels, and Either combinators.

**Class A (pure, zero-input).** gen-algebra declares no flake inputs and depends on nothing — not even nixpkgs `lib`; it is `builtins`-only and sits at the pure-algebra root of the ecosystem. A CI purity invariant (`ci/tests/purity.nix`) enforces this: any stray `lib.types` / `mkOption` / `evalModules` in the library source fails the suite.

## Table of Contents

- [Overview](#overview)
- [Gen Ecosystem](#gen-ecosystem)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [Demo](#demo)
- [Architecture](#architecture)
- [Testing](#testing)
- [Theoretical Foundations](#theoretical-foundations)

## Overview

gen-algebra is a fully pure Nix library — zero dependencies, `builtins` only. Search monad for indexed state threading with convergence. Intensional function constructors for conservative equality (Palmer §2.2-2.3). Record algebra with scoped labels (Leijen §2) and mixin composition (Bracha §2-4). Either combinators. Standalone identity…
