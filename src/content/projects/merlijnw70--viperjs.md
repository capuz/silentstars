---
repo: "MerlijnW70/viperjs"
name: "viperjs"
description: "An embeddable JavaScript engine in safe Rust, with zero runtime dependencies."
readmeQualityOk: true
url: "https://github.com/MerlijnW70/viperjs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ecmascript", "embeddable", "interpreter", "javascript", "javascript-engine", "lexer", "no-unsafe", "parser", "rust", "zero-dependencies"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-07-27T22:42:56Z"
lastCommitAt: "2026-10-15T08:31:41Z"
lastReleaseAt: "2026-08-09T19:38:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["MerlijnW70"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c9ca04ef119b385f37ba9b0733d6c4035a3cadab79dc112920543579e68aa09/MerlijnW70/viperjs"
discussionCount: 1
---

# ViperJS

**An embeddable JavaScript engine in safe Rust, with zero runtime dependencies.**

It runs **86% of test262** — classes, generators, `async`/`await`, ES modules, `Proxy`, `BigInt`,
TypedArrays, and its own regular-expression engine. No `unsafe`, no crates, and no input makes it
panic.

**Why it exists.** Embedding a scripting language should not mean embedding a C++ codebase, a
build system and someone else's `unsafe`. The constraint — no dependencies, no `unsafe`, no panics
— is the product; everything else follows from it, including writing the regular-expression engine
by hand. [GOAL.md](https://github.com/MerlijnW70/viperjs/blob/HEAD/GOAL.md) is the binding version of that argument.

## Run some JavaScript right now

A Rust toolchain and nothing else. No build script, no C compiler, no submodules.

```sh
git clone https://github.com/MerlijnW70/viperjs && cd viperjs
cargo build --release
./target/release/viper -e "[1,2,3].map(n => n * n).join(',')"
```

```
1,4,9
```

> Two names, so that neither surprises you: the **crate** is `viperjs` and the **command** it
> installs is `viper`.

Run a file, pipe one in, or type at a prompt:

```sh
viper script.js          # run…
