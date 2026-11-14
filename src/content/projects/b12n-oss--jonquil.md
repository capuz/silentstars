---
repo: "b12n-oss/jonquil"
name: "jonquil"
description: "A DrRacket-style Clojure IDE on Jolt (port of DrClojure)"
readmeQualityOk: true
url: "https://github.com/b12n-oss/jonquil"
homepage: "https://jonquil.b12n.app"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [100]
topics: ["chez-scheme", "clojure", "clojuredart", "clojurescript", "drracket", "editor", "gtk4", "ide", "jolt", "linux"]
stars: 5
forks: 1
openIssues: 6
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-11-13T07:18:51Z"
lastCommitAt: "2026-11-14T10:49:20Z"
lastReleaseAt: "2026-11-14T02:44:55Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 61
maintainers: ["burinc"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7161d7e53a6789ccc77d188ce471ebcd58a6d1eb1246d09820ae77dbfcfe30c/b12n-oss/jonquil"
---

Jonquil is a DrRacket-style Clojure IDE written in Jolt: a Definitions editor, an Interactions console, Run and a Stop that really stops. It ports the idea of [DrClojure](https://github.com/kimtg/DrClojure-Neo), lifting its pure code for the text-analysis core (tokenizer, brackets, navigation, smart indent, formatter, doc and completion lookup).

**Status: alpha.** The window and its menus, editing, structural editing, Parinfer (off by default), key bindings you can change in Preferences, themes (including one that follows macOS light and dark), help, plugins and an MCP server for agents all work. So do these dialects: Jolt in or out of process; JVM Clojure; ClojureDart (experimental); ClojureScript (experimental), attached to a shadow-cljs server you started or launched on node or in a browser tab; any other nREPL server you started, such as babashka or Basilisp; and jank (experimental), which Jonquil launches itself.

See the [guide](https://github.com/b12n-oss/jonquil/blob/HEAD/docs/guide/index.md), starting with [Using Jonquil](https://github.com/b12n-oss/jonquil/blob/HEAD/docs/guide/using-jonquil.md), for a full walkthrough: the window layout, Run versus the REPL prompt,…
