---
repo: "vaelii/vaelii"
name: "vaelii"
description: "a contextualized first-order logic knowledge base with a justified-inference reasoning engine"
readmeQualityOk: true
url: "https://github.com/vaelii/vaelii"
homepage: "https://vaelii.com"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [97]
topics: ["clojure", "first-order-logic", "knowledge-base", "reasoning", "truth-maintenance"]
stars: 14
forks: 4
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-30T23:34:52Z"
lastCommitAt: "2026-08-24T04:21:02Z"
lastReleaseAt: "2026-08-18T04:47:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 40
maintainers: ["vaelii-admin"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fa8218fd63dac366c15b2881682784882d46603e4c58fcbaa7c37ab41416a20/vaelii/vaelii"
---

# <img src="resources/public/logo.svg" alt="" width="26" height="26">&nbsp;Vaelii

A contextualized common-sense knowledge base: an in-memory or on-disk store of
**sentexes** (sentence + context), indexed by a **count-aware trie**,
with forward/backward inference and JTMS truth maintenance.

## Requirements

- JDK 21+, Leiningen 2.10+ — no external services
- macOS and Linux; Windows is not supported ([why](https://github.com/vaelii/vaelii/blob/HEAD/docs/storage.md#the-image-vaeliiindexsnapshot-off-by-default))

## Quick start

As a dependency — Leiningen `[com.vaelii/vaelii "0.12.0"]`, or deps.edn
`com.vaelii/vaelii {:mvn/version "0.12.0"}` — from [Clojars](https://clojars.org/com.vaelii/vaelii).
To work on it instead:

```sh
lein deps
lein test          # integration tests
lein repl          # loads namespace vaelii.core
```

Conventions: predicates are `camelCase`, individuals `CapitalCamelCase`, types
`snake_case` (unary predicates, e.g. `(dog Muffet)`), contexts are `Cx` followed by
CapitalCamelCase.

```clojure
(require '[vaelii.core :as v] '[vaelii.starter :as starter])

(def kb (v/open-kb {}))                            ; in-memory records + index…
