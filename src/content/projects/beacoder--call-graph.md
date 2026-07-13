---
repo: "beacoder/call-graph"
name: "call-graph"
description: "Generate call graph for c/c++ functions"
readmeQualityOk: true
url: "https://github.com/beacoder/call-graph"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [100]
topics: ["call-graph", "programming-tool", "call-hierarchy", "git-grep", "gnu-global", "cpp"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-27T01:47:04Z"
lastCommitAt: "2026-07-13T06:38:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 42
maintainers: ["beacoder"]
openGraphImageUrl: "https://opengraph.githubassets.com/48270a093ff061215e68ab0e7083fad9bf67da213d0808ff457f19e4d6d4ed20/beacoder/call-graph"
---

# call-graph - Generate call graph for c/c++ functions

Generate call graph for c/c++ functions.

# Where does this library come from?

How many times do you have this feeling that
why can't we have this in emacs when you see
the fancy function call hierarchy in "modern" IDEs?
I hope one day, with this library, we won't have
to envy those "modern" IDEs for this again.

# Installation

Clone the repo, then in your Emacs init file:

```lisp
(add-to-list 'load-path "/path/to/repo")
(require 'call-graph)
(call-graph) ;; to launch it
```

Or install from [melpa](https://melpa.org/#/call-graph).

## External dependency
You could choose either Git (default) or Global as search backend for call-graph to use.
* `Git`

`call-graph` will recursively call `git grep` to find caller of
current function and eventually build up a `call-graph` tree.

* `GNU Global`

`call-graph` will recursively call `Global` to find caller of
current function and eventually build up a `call-graph` tree.

# Usage

Place your cursor in the c/c++ function which you want to generate
call-graph for and execute call-graph.
You could bind it to <kbd>C-c g</kbd>.

```lisp
    (global-set-key (kbd "C-c g") 'call-graph)…
