---
repo: "babashka/cli"
name: "cli"
description: "Turn Clojure functions into CLIs!"
readmeQualityOk: true
url: "https://github.com/babashka/cli"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [93]
topics: ["babashka", "clojure", "command-line"]
stars: 295
forks: 22
openIssues: 1
closedIssues: 90
watchers: 2
contributors: 21
recentReleases: 0
createdAt: "2022-06-02T11:24:04Z"
lastCommitAt: "2026-10-26T18:05:46Z"
lastReleaseAt: "2024-04-30T14:32:56Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 39
maintainers: ["borkdude", "lread", "jeroenvandijk"]
openGraphImageUrl: "https://opengraph.githubassets.com/509c15be28ce495c28f77368b6bd5ca572ea1e0f286510baa5c7a237fa1116c3/babashka/cli"
fundingLinks: ["GITHUB:https://github.com/borkdude", "OPEN_COLLECTIVE:https://opencollective.com/babashka", "KO_FI:https://ko-fi.com/borkdude"]
discussionCount: 7
---

# babashka.cli

Turn Clojure functions into Command Line Interfaces! This library can be used from:
- [Babashka](https://book.babashka.org/) - included as a built-in library
- [Clojure on the JVM](https://www.clojure.org/guides/install_clojure) - we support Clojure 1.10.3 and above on Java 11 and above
- [ClojureScript](https://clojurescript.org) - we test against the current release
- [Squint](https://github.com/squint-cljs/squint) - we test againt the current release
- [ClojureDart](https://github.com/Tensegritics/ClojureDart) - we test against the current release

## [API](https://github.com/babashka/cli/blob/HEAD/API.md)

## Installation

For Clojure, ClojureScript, and ClojureDart include a `:deps` entry in your  `deps.edn` file:

``` clojure
org.babashka/cli {:mvn/version "<latest-version>"}
```

For babashka, no changes are needed; `org.babashka/cli` is a babashka built-in library.

For JavaScript, install from NPM:

```
npm install @babashka/cli
```

See [JavaScript](#javascript) for how to use this library in JS.

## Intro

Turn a Clojure function into a CLI that takes Unix-style command line arguments. E.g.:

```shell
$ program command --verbose --long-opt1 v1 -o v2 arg…
