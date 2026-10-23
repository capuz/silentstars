---
repo: "kczulko/rules_elm"
name: "rules_elm"
description: "Bazel rules for building web applications written in Elm"
readmeQualityOk: true
url: "https://github.com/kczulko/rules_elm"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [81]
topics: ["bazel-rules", "elm", "bazel"]
stars: 29
forks: 9
openIssues: 1
closedIssues: 25
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2019-03-08T19:37:14Z"
lastCommitAt: "2026-10-23T08:47:17Z"
lastReleaseAt: "2026-07-13T18:22:16Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 47
maintainers: ["renovate[bot]", "kczulko"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8dcfb823fc67edc753eff7bc92582a0309fdb3cbc2786e4292c3a5f41578a3b/kczulko/rules_elm"
---

# Bazel build rules for Elm

[Elm](https://elm-lang.org/) is a functional programming language that
can be [transpiled](https://en.wikipedia.org/wiki/Source-to-source_compiler)
to Javascript. This repository contains rules for building Elm
applications using [the Bazel build system](https://bazel.build/). These
rules depend on their own copy of the Elm compiler, meaning that Elm and
any libraries used may be versioned as part of your Bazel project.

## Adding these rules to your project

Check the [releases](https://github.com/kczulko/rules_elm/releases) for detailed instructions.

## Examples on how to use these rules

- [examples directory](https://github.com/kczulko/rules_elm/blob/HEAD/examples) - contains several 'end to end' projects consuming
  the rules provided by this repository.
- [The Bazel Elm SPA Example repository](https://github.com/EdSchouten/bazel-elm-spa-example) -
  contains a concrete example of how these rules may be used to build a
  web application written in Elm. Might be a bit out of date, however this
  example brings a copy of a well-known demonstration application that
  has been adjusted to be buildable using Bazel.

## Public API docs

Please check…
