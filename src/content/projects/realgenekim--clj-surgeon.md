---
repo: "realgenekim/clj-surgeon"
name: "clj-surgeon"
description: "Babashka CLI and Claude Code skill for structural Clojure refactoring — move forms, fix declares, rename namespaces, explore via AST."
readmeQualityOk: true
url: "https://github.com/realgenekim/clj-surgeon"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [91]
stars: 34
forks: 7
openIssues: 5
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-04-24T16:36:20Z"
lastCommitAt: "2026-08-05T06:07:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 36
maintainers: ["realgenekim"]
openGraphImageUrl: "https://opengraph.githubassets.com/909a48ecfbb768b4e1f521864cee04429ade245c9647aa68b9aef38bf9d559c6/realgenekim/clj-surgeon"
---

# clj-surgeon

clj-surgeon is a Babashka CLI for structural reads and refactors in Clojure,
ClojureScript, and CLJC files. It parses source with
[rewrite-clj](https://github.com/clj-commons/rewrite-clj) and returns EDN.
Claude Code and Codex skills teach coding agents the shortest safe commands.

Use clj-surgeon to:

- inspect a namespace without reading the complete file
- select one top-level form by name, line, or distinctive text
- search and compute over nested Clojure forms
- create a reviewed, hash-bound replacement plan and apply it separately
- move forms with explicit dependency handling
- reorder definitions to remove unnecessary `(declare ...)` forms
- rename namespaces or extract forms to new files
- inspect or transform reader-conditional code

The project began after a coding agent spent 45 minutes refactoring a
5,000-line `views.clj` file. The agent repeatedly read source to find, move, and
order forms. The initial four-hour prototype had 13 operations and about 1,500
lines. The current implementation is larger and requires Babashka and
clj-kondo. Those counts describe the prototype, not the current product.

## A structural editor for agents

Clojure source…
