---
repo: "knave-lang/knave"
name: "knave"
description: "A Lisp for humans and agents that infers types and ownership and compiles to readable Rust"
readmeQualityOk: true
url: "https://github.com/knave-lang/knave"
homepage: "https://knave-lang.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["compiler", "lisp", "programming-language", "rust", "type-inference", "knave", "ownership-inference"]
stars: 8
forks: 0
openIssues: 63
closedIssues: 50
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-21T05:08:16Z"
lastCommitAt: "2026-11-25T03:16:09Z"
lastReleaseAt: "2026-10-30T02:58:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 89
undervaluedScore: 54
maintainers: ["KarlHarnois"]
openGraphImageUrl: "https://opengraph.githubassets.com/649237658d198840d6e26992cd23c8d08f9aaa0baca17154f283858fbbd8f618/knave-lang/knave"
---

# Knave

> **Warning**
>
> **Knave is experimental.** Expect breaking changes to the syntax, the prelude and the command line in any commit.

```clojure
(def knave
  "A small Lisp for humans and agents
  that infers types and ownership
  and compiles to readable Rust.")

(def values
  (vec "Few rules, no exceptions."
       "Small compiler, big prelude."
       "No clones or allocations you did not write."
       "Interpret while you iterate, compile when you ship."
       "Errors worth reading."))
```

[knave-lang.org](https://knave-lang.org) is the Knave website.

[docs/language.md](https://github.com/knave-lang/knave/blob/HEAD/docs/language.md) describes the language.

## Install

Install the compiler with [Cargo](https://www.rust-lang.org/tools/install):

```sh
cargo install --locked knave
```

The compiler runs the `rustc` and `rustfmt` on your `PATH`, and needs Rust 1.88 or later.

If you use [Nix](https://nixos.org/download/), install the compiler with the `rustc` and `rustfmt` that CI tests against:

```sh
nix profile install github:knave-lang/knave
```
