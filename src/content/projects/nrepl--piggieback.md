---
repo: "nrepl/piggieback"
name: "piggieback"
description: "nREPL support for ClojureScript REPLs"
url: "https://github.com/nrepl/piggieback"
language: "Clojure"
languages: ["Clojure", "HTML"]
languagePcts: [64, 33]
topics: ["clojurescript", "repl", "clojure", "nrepl", "nrepl-middleware"]
stars: 485
forks: 47
openIssues: 9
closedIssues: 82
watchers: 22
contributors: 23
recentReleases: 0
createdAt: "2012-08-09T20:51:49Z"
lastCommitAt: "2026-06-27T06:23:13Z"
lastReleaseAt: "2019-02-05T21:20:35Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 98
undervaluedScore: 20
maintainers: ["bbatsov"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9ef25acb413e93dccf8510fd2a1547bca5789aeddc3b65c20841ffe2c416125/nrepl/piggieback"
---

# Piggieback

[nREPL](http://github.com/nrepl/nrepl) middleware that enables the
use of a ClojureScript REPL on top of an nREPL session.

## Why?

Two reasons:

* The default ClojureScript REPL (as described in the
["quick start"](https://clojurescript.org/guides/quick-start)
tutorial) assumes that it is running in a teletype environment. This works fine
with nREPL tools in that environment (e.g. `lein repl` in `Terminal.app` or
`gnome-terminal`, etc), but isn't suitable for development environments that
have richer interaction models (including editors like vim ([vim-fireplace][]) and Emacs
([CIDER][]), and IDEs like Intellij ([Cursive][]) and Eclipse ([Counterclockwise][CCW])).

* Most of the more advanced tool support for Clojure and ClojureScript (code
  completion, introspection and inspector utilities, refactoring tools, etc) is
  packaged and delivered as nREPL extensions (e.g. [cider-nrepl][] and [refactor-nrepl][]).

Piggieback provides an alternative ClojureScript REPL entry point
(`cider.piggieback/cljs-repl`) that changes an nREPL session into a
ClojureScript REPL for `eval` and `load-file` operations, while accepting all
the same options as `cljs.repl/repl`. When the…
