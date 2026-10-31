---
repo: "tonis2/lsp"
name: "lsp"
description: "C3 language server, for code editors"
readmeQualityOk: true
url: "https://github.com/tonis2/lsp"
language: "C3"
languages: ["C3"]
languagePcts: [100]
stars: 38
forks: 7
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-18T16:33:56Z"
lastCommitAt: "2026-10-31T09:53:48Z"
lastReleaseAt: "2026-07-02T22:45:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 44
maintainers: ["tonis2", "zTBBz", "hapeeeeee"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3be215deae25d0d61025e2d89eb8c745df015aae58e6f2c9c2d760375268e70/tonis2/lsp"
---

# C3 LSP

A Language Server Protocol implementation for the [C3 programming language](https://c3-lang.org), written in C3.

## Features

- **Go to Definition / Declaration** — navigate to functions, macros, types, constants, enum members, and struct fields; resolves method calls, module-qualified paths (`std::io::printfn`), and individual segments of `import` statements; searches the current file, project sources, and the C3 standard library, preferring declarations in modules visible from the current file (its module tree and imports); platform variants declared with `@feat(...)` (`Process.join` for POSIX and WIN32) are all offered
- **Find References** — find all occurrences of a symbol across the project and stdlib, skipping files that cannot see the symbol's module
- **Rename Symbol** — rename identifiers, types, and constants across files.
- **Go to Implementation** — from an interface name to the types whose conformance clause lists it (`struct Foo (Printable)`), and from a method to the `@dynamic` bodies that provide it
- **Call Hierarchy** — incoming calls (which functions call this one, with every call site) and outgoing calls (what this function calls), for functions and…
