---
repo: "let-def/lrgrep"
name: "lrgrep"
description: "Menhir polishing toolbox, for experienced druids"
readmeQualityOk: true
url: "https://github.com/let-def/lrgrep"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [100]
stars: 44
forks: 4
openIssues: 7
closedIssues: 6
watchers: 8
contributors: 4
recentReleases: 1
createdAt: "2022-04-11T09:44:42Z"
lastCommitAt: "2026-08-04T06:11:48Z"
lastReleaseAt: "2026-05-20T11:12:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 48
maintainers: ["let-def", "voodoos"]
openGraphImageUrl: "https://opengraph.githubassets.com/47a9cb7db8a202d0e887fada007c8c9dc935dd2bd273c4e07ba4177751dc67ea/let-def/lrgrep"
---

# Syntax error analyser 

This repository provides different tools to work on the error messages of a menhir-generated parser.

The main tool is `lrgrep`. It takes:

- a compiled Menhir grammar (a .cmly file, produced by passing `--cmly` flag to Menhir) 
- a list of rules (usually a .lrgrep file).

If the list of rule is well-formed, it produces an OCaml module that can match
the rules against the state of a parser at runtime.

By carefully crafting the rules, one can provide fine-grained message to explain syntax errors.

The repository is is structured as follow:

- the main tool, lrgrep, can be found in [src/main.ml]()
- [support]() implements the compact table representation shared by the
  generator and the generated analysers via the `lrgrep.runtime` library
- [lib]() implements various algorithms used by other tools

# Getting started with LRGrep codebase

I am trying to document the code. Each of the [src](https://github.com/let-def/lrgrep/blob/HEAD/src), [lib](https://github.com/let-def/lrgrep/blob/HEAD/lib), and [support](https://github.com/let-def/lrgrep/blob/HEAD/support) directories contain a README.md that briefly explains the purpose of this directory.

External…
