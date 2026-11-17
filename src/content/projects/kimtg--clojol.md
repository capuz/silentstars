---
repo: "kimtg/Clojol"
name: "Clojol"
description: "A high-performance, fast-startup implementation of Clojure (unofficial)"
readmeQualityOk: true
url: "https://github.com/kimtg/Clojol"
language: "Java"
languages: ["Java"]
languagePcts: [94]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-14T07:09:25Z"
lastCommitAt: "2026-11-17T12:19:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 34
maintainers: ["kimtg"]
openGraphImageUrl: "https://opengraph.githubassets.com/780542c677b0dada47c1c302cac89a26cfb6b4a92142402934afb1475b0ac8e1/kimtg/Clojol"
---

# Clojol (`cljl`)

A high-performance, fast-startup implementation of Clojure in pure Java (Java 21+), with zero external dependencies and broad [Clojure Cheatsheet](https://clojure.org/api/cheatsheet) compatibility.

Clojol is an independent, clean-room implementation of the Clojure language and is not affiliated with or endorsed by Rich Hickey or Nubank.

## Why Clojol?

Standard Clojure on the JVM parses and compiles thousands of lines of `clojure/core.clj` on every cold start. **Clojol** eliminates that bootstrap penalty while preserving idiomatic Clojure semantics:

- **Direct Java-compiled `clojure.core`**: Core functions and macros (`Core.java`, `CoreExtras.java`) are implemented directly in Java and registered without parsing bootstrap `.clj` files at startup.
- **Lazy Standard Library Loading**: Standard and contrib namespaces (`StdLib.java`, `StdLibMore.java`) initialize only when required or referenced so unused namespaces add zero startup cost.
- **AppCDS Support**: The launchers (`cljl.bat` / `cljl.sh`) automatically generate a JVM AppCDS shared class archive (`build/cljl.jsa`) on first build (~159 ms cold JVM startup + evaluation).
- **Tier-0 AST Interpreter +…
