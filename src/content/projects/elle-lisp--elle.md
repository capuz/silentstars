---
repo: "elle-lisp/elle"
name: "elle"
description: "Modern rust-native lisp with fibers, signals, capabilities, jit, and more..."
readmeQualityOk: true
url: "https://github.com/elle-lisp/elle"
language: "Rust"
languages: ["Rust"]
languagePcts: [69]
topics: ["erlang", "janet", "lisp", "rust", "effects", "ffi", "fibers", "jit", "signals", "wasm"]
stars: 26
forks: 5
openIssues: 148
closedIssues: 444
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-04T23:51:24Z"
lastCommitAt: "2026-10-26T20:15:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["disruptek", "nohzafk"]
openGraphImageUrl: "https://opengraph.githubassets.com/14c59e1c03be7ffa170aafe5185453d86770751426b2c4e8c96649424b3d85ce/elle-lisp/elle"
discussionCount: 3
---

# Elle

A Lisp whose compiler infers what each function does and where each value dies,
and runs on those facts.

Before any code runs, Elle's compiler resolves every binding, finds what every
closure captures, infers the signals every function can raise, and infers the
point where every value dies. Most Lisps discover these facts at run time or
never. Elle uses them for four things: typed control flow, capability
sandboxing, cooperative concurrency, and memory management with no garbage
collector.

None of it asks the programmer for annotations. Languages with this much
control, speed or soundness ask for lifetimes, types and `async` markers, and
an Elle program writes none of them. The few declarations Elle has, such as
`(silent!)` and `(immutable!)`, state a fact the compiler then checks. They
guard a program; they never enable one.

This file explains those ideas, what works today, and what we are building
toward. Elle is under active development, and its syntax changes between
[epochs](https://github.com/elle-lisp/elle/blob/HEAD/docs/epochs.md). The
[open issues](https://github.com/elle-lisp/elle/issues) list what is broken.

## Contents

- [The compiler's facts are…
