---
repo: "kimtg/Clojol"
name: "Clojol"
description: "A high-performance, fast-startup implementation of Clojure (unofficial)"
readmeQualityOk: true
url: "https://github.com/kimtg/Clojol"
language: "Java"
languages: ["Java"]
languagePcts: [92]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-14T07:09:25Z"
lastCommitAt: "2026-11-27T12:56:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 43
maintainers: ["kimtg"]
openGraphImageUrl: "https://opengraph.githubassets.com/277003a738bdf7a95cfd8a0f4ce712c137378bd4d76db836a402a16aa6f0237f/kimtg/Clojol"
---

# Clojol (`cljl`)

A high-performance, fast-startup implementation of Clojure 1.12 in pure Java (Java 21+), with zero external dependencies, real `clojure.lang.*` JVM binary ABI compatibility, AOT compilation (`compile` & `gen-class`), full `clojure.core` public API parity, and **98.1%** pass rate across runnable official Clojure 1.12.0 conformance tests.

Clojol is an independent, clean-room implementation of the Clojure language and is not affiliated with or endorsed by Rich Hickey or Nubank.

## Why Clojol?

- Faster Startup
- Faster Numeric Computation
- Easier Build

## Performance (`fib(40)` vs. Official Clojure)

Recursive `fib(40)` benchmark ([`test/fib_bench.clj`](https://github.com/kimtg/Clojol/blob/HEAD/test/fib_bench.clj)) measured on OpenJDK 25.0.4.1 LTS (Temurin, Windows) comparing **Clojol** (`-XX:AOTCache=build/cljl.aot -jar build/cljl.jar test/fib_bench.clj`) against **Clojure 1.12.6** (`clojure.main test/fib_bench.clj`):
