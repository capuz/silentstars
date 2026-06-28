---
repo: "jolt-lang/jolt"
name: "jolt"
description: "A Clojure compiler implemented on top of Chez Scheme"
url: "https://github.com/jolt-lang/jolt"
homepage: "https://jolt-lang.github.io/"
language: "Scheme"
languages: ["Scheme", "Clojure"]
languagePcts: [78, 21]
topics: ["clojure", "functional-programming", "language", "lisp", "native", "programming-language", "chez", "chez-scheme"]
stars: 54
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-01T20:52:20Z"
lastCommitAt: "2026-06-28T02:01:27Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 33
maintainers: ["yogthos"]
openGraphImageUrl: "https://opengraph.githubassets.com/c68466a34ef9f8710af22cfb165a421a38894de1a19e3adbb6287d7b619cf924/jolt-lang/jolt"
---

# Jolt

A Clojure implementation on [Chez Scheme](https://cisco.github.io/ChezScheme/).
Jolt reads Clojure source, analyzes it to a host-neutral IR, emits Scheme, and
runs it on Chez. The compiler is self-hosted: it is written in Clojure
(`jolt-core/`) and compiles itself. It ships a Clojure-compatible standard library.

## Requirements

Only [Chez Scheme](https://cisco.github.io/ChezScheme/) (the gate invokes it as
`chez`). The conformance gate additionally uses Clojure on the JVM as an oracle,
but running jolt does not.

## Build

There is no build step. The bootstrap seed (`host/chez/seed/{prelude,image}.ss`)
is checked in, so a fresh clone runs immediately:

```bash
git clone --recurse-submodules https://github.com/jolt-lang/jolt.git
cd jolt
bin/joltc -e '(+ 1 2)'        # => 3
```

After changing a compiler source — the reader (`host/chez/reader.ss`), the
analyzer/IR/backend (`jolt-core/jolt/*.clj`), or the `clojure.core` overlay
(`jolt-core/clojure/core/*.clj`) — re-mint the seed:

```bash
make remint                   # iterates host/chez/bootstrap.ss to a byte-fixpoint
```

## Run

```bash
bin/joltc -e EXPR             # evaluate a Clojure expression and print the result…
