---
repo: "gold-silver-copper/grift"
name: "grift"
description: "grift is a no_std no_alloc no_unsafe lisp for bare-metal devices"
readmeQualityOk: true
url: "https://github.com/gold-silver-copper/grift"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["arduino", "embedded", "esp32", "lisp", "rust", "scheme", "no-alloc", "no-std"]
stars: 18
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-26T06:07:33Z"
lastCommitAt: "2026-11-07T22:50:45Z"
lastReleaseAt: "2026-11-06T09:30:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 60
maintainers: ["gold-silver-copper"]
openGraphImageUrl: "https://opengraph.githubassets.com/84df0a6091e457f8f8b302663a68e3817b09cdf1b29c090bb7eebea6c31ad6e5/gold-silver-copper/grift"
---

# grift

grift is a Lisp built entirely on fexprs: `vau!` is its one primitive operative, and there are no
macros and no other special forms. Everything else, `if!` included, is a grift definition you can
read and redefine, in [`library.grift`](https://github.com/gold-silver-copper/grift/blob/HEAD/crates/grift/src/library.grift). It is both an extension
language for Rust programs, reshaped by their users while they run, and a general scripting
language with a Unix runner.

- [`docs/VISION.md`](https://github.com/gold-silver-copper/grift/blob/HEAD/docs/VISION.md), the guide: what grift is and the decisions behind it.
- [`docs/LANGUAGE.md`](https://github.com/gold-silver-copper/grift/blob/HEAD/docs/LANGUAGE.md), the reference: every value, primitive, library form and
  error kind, and where grift differs from Kernel.
- [`DECISIONS.md`](https://github.com/gold-silver-copper/grift/blob/HEAD/DECISIONS.md): each decision, append-only.

The core crate has no dependencies and no `unsafe` code; it does no I/O, starts no threads and
keeps no global state: the host owns all of that. It uses the memory the allocator gives it and
sets no limits of its own; when the allocator refuses,…
