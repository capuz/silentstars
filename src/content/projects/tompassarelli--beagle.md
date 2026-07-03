---
repo: "tompassarelli/beagle"
name: "beagle"
description: "a typed programming language that emits to multiple backends"
url: "https://github.com/tompassarelli/beagle"
language: "Racket"
languages: ["Racket"]
languagePcts: [69]
topics: ["beagle", "clojure", "language", "metaprogramming", "racket", "ai-agents", "clojurescript", "code-generation", "compiler", "dsl"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-15T10:17:09Z"
lastCommitAt: "2026-07-03T12:07:31Z"
lastReleaseAt: "2026-05-18T16:24:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["tompassarelli"]
openGraphImageUrl: "https://opengraph.githubassets.com/12713a93175ef8945a159ac7a78a85db52fee3ebdea305619ba218f146fa78ba/tompassarelli/beagle"
---

# Beagle

**Typed Clojure that compiles to idiomatic Clojure, ClojureScript, JavaScript, Nix, and Odin.**
One AST, many back-ends — never a lowest-common-denominator transpile.

</div>

Beagle's types exist for a specific job: making authoring, diagnostics, and AI
repair reliable. They check at compile time and erase before emit. The point
isn't to reject bad code — it's to tell repair tools *what* kind of mistake
happened, *where* in the source, after *which* canonicalization, against
*which* target.

## The compiler compiles itself

The `clj`-target compiler is written in Beagle (`self-host/`). The checked-in
seed is that compiler's own emitted output, and CI holds the pair to a
byte-level bootstrap fixpoint (`bin/beagle-remint`) plus byte-agreement with
the original Racket compiler, which now serves as the conformance oracle
(`bin/beagle-certify`). Details: [`self-host/README.md`](self-host/README.md).

## Real codebases author against Beagle

- **[firn](https://github.com/tompassarelli/firn)** — a complete NixOS
  system, authored in `.bnix` and schema-typed end to end; it builds from
  `flake.bnix` directly (Nix target).
- **[gjoa](https://github.com/tompassarelli/gjoa)** — a…
