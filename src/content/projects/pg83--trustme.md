---
repo: "pg83/trustme"
name: "trustme"
description: "A new rust compiler"
readmeQualityOk: true
url: "https://github.com/pg83/trustme"
language: "Rust"
languages: ["Rust", "C++"]
languagePcts: [77, 20]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 61
recentReleases: 0
createdAt: "2026-08-06T17:01:12Z"
lastCommitAt: "2026-11-06T13:20:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 42
maintainers: ["pg83"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5e744b17ca715d2a7ea43f5913351631639aa26c7bfc6d829877ca058f2e3bd/pg83/trustme"
---

# rustc

A hard fork of [mrustc](https://github.com/thepowersgang/mrustc) with a
different goal.

Upstream mrustc is a bootstrapping seed: a C++ program that compiles Rust just
well enough to build the real `rustc` once, so the official compiler can take
over. We are not bootstrapping. We are turning mrustc into **a real, standalone
Rust compiler** — one that stays and is used to build actual projects. (The
compiler binary is therefore called `rustc`, not `mrustc`.)

## how we get there

Not by chasing a spec, but by making real programs compile and pass their tests.

Every real-world crate we throw at the compiler exposes bugs — in type
inference, in const evaluation, in the C codegen, in an intrinsic. We fix each
one in the compiler and lock it in with a small regression test, then add the
whole project as a standing test. The suite grows in two directions at once:

- **breadth** — more real binaries that build from source and pass their own
  tests (`resvg` is the first; more follow);
- **depth** — a one-file regression under `tst/unit/` for every compiler bug
  we fix along the way.

The compiler gets more correct exactly as fast as the set of programs it can
build gets…
