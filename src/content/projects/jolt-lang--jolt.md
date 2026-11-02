---
repo: "jolt-lang/jolt"
name: "jolt"
description: "A Clojure compiler implemented on top of Chez Scheme"
readmeQualityOk: true
url: "https://github.com/jolt-lang/jolt"
homepage: "https://jolt-lang.net/"
language: "Scheme"
languages: ["Scheme"]
languagePcts: [76]
topics: ["clojure", "functional-programming", "language", "lisp", "native", "programming-language", "chez", "chez-scheme"]
stars: 345
forks: 28
openIssues: 20
closedIssues: 240
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2026-06-01T20:52:20Z"
lastCommitAt: "2026-11-02T17:56:49Z"
lastReleaseAt: "2026-07-09T16:15:27Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 98
undervaluedScore: 27
maintainers: ["yogthos", "burinc", "jasalt"]
openGraphImageUrl: "https://opengraph.githubassets.com/a177da43a344bedd98c9ef9c9265b04d8ad97ac2502a5886ba338ce99ebf6524/jolt-lang/jolt"
---

# Jolt

A Clojure implementation on Scheme. Jolt reads Clojure source, analyzes it to a
host-neutral IR, emits Scheme, and runs it — on [Chez](https://cisco.github.io/ChezScheme/)
by default, or on [Gambit](https://gambitscheme.org/) compiled to JavaScript for
the browser. The compiler is self-hosted: it is written in Clojure (`jolt-core/`)
and compiles itself. It ships a Clojure-compatible standard library.

## This is not the JVM

Most portable Clojure runs unchanged, but there is no JVM underneath and JVM
reasoning does not carry over. The four that bite first:

- **No Java interop.** No reflection, no `gen-class`/`proxy`. Interop syntax
  (`Class.`, `Class/static`, `.method`) resolves against a shimmed subset of
  `java.*` written in Scheme; a class token is a name, not a loaded class. The
  shims reimplement their JVM counterparts' *API* — they are not the JVM, so
  classloaders, JVM GC behaviour, and JVM thread lifetime rules do not apply.
  To call C libraries, use the `jolt.ffi` foreign-function interface.
- **Codepoint strings.** `(count "😀")` is 1, not 2. No UTF-16 surrogate pairs.
- **A different regex engine.** Patterns compile through…
