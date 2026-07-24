---
repo: "muthuishere/cljgo"
name: "cljgo"
description: "Clojure hosted on Go — AOT-emits Go source (the ClojureScript model), tree-walk REPL, universal Go interop"
readmeQualityOk: true
url: "https://github.com/muthuishere/cljgo"
homepage: "https://muthuishere.github.io/cljgo/"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["clojure", "clojurescript", "compiler", "go", "golang", "interop", "lisp", "programming-language", "repl", "transpiler"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-07-11T16:28:19Z"
lastCommitAt: "2026-07-24T06:07:24Z"
lastReleaseAt: "2026-07-24T05:08:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["muthuishere"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6f47b2620486f4c5e3a372533a69682212f548a9231bcf1ce9ddc4451a84efb/muthuishere/cljgo"
discussionCount: 0
---

# cljgo

**[muthuishere.github.io/cljgo](https://muthuishere.github.io/cljgo/)** — docs, examples, and the live status board.

Clojure hosted on Go: a compiler (written in Go) that AOT-emits plain Go
source — the ClojureScript model with Go as the JavaScript — plus a
tree-walk evaluator that is the REPL and the macro engine. The same source
runs interpreted at the prompt and compiles to a single static native
binary, with byte-identical output on both paths.

## Why

1. **Universal interop** — any Go module importable and callable with zero
   bindings; the Go ecosystem is the standard library. C via cgo modules and
   purego FFI.
2. **Full REPL-driven development** — live re-`def`, `defmacro` at the
   prompt, nREPL for CIDER/Calva.
3. **Faithful Clojure principles** — persistent data structures, macros,
   seqs, vars. Clojure is first-class: nothing cljgo adds may shadow or
   change clojure.core semantics.
4. **High performance in both modes** — a feature, gated in CI like tests,
   not asserted.
5. **Single-file deployment** — `cljgo build` produces one static binary
   (5.3 MB for hello, ~5 ms startup), no JVM, no runtime install.

## Install

```bash
go install…
