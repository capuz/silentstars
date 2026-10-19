---
repo: "tong/tree-sitter-haxe"
name: "tree-sitter-haxe"
description: "Haxe tree-sitter grammar"
readmeQualityOk: true
url: "https://github.com/tong/tree-sitter-haxe"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [69]
topics: ["haxe", "tree-sitter"]
stars: 10
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-10-03T12:29:51Z"
lastCommitAt: "2026-10-19T09:14:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 78
undervaluedScore: 69
maintainers: ["tong", "mallyskies", "ninjamuffin99"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa89054ece83b68db725b74edc778fcec4ca9e78074e05bddab153afe4c33d4a/tong/tree-sitter-haxe"
---

# tree-sitter-haxe

A [tree-sitter](https://tree-sitter.github.io/) grammar for the [Haxe](https://haxe.org/) programming language.

The grammar covers Haxe's core syntax: package/import declarations, classes, interfaces, abstracts, enums, typedefs, generics, functions, expressions (including binary/unary/ternary operators, `switch`, `for`/`while`, comprehensions, casts), metadata, conditional compilation (`#if`/`#else`/`#end`), and macros/reification.

Related: the [Hxml](https://github.com/tong/tree-sitter-hxml/) grammar for Haxe's `.hxml` build files.

### C / pkg-config

```sh
make
sudo make install
```

This builds and installs `libtree-sitter-haxe` along with a `tree-sitter-haxe.pc` pkg-config file and the query files under `$(PREFIX)/share/tree-sitter/queries/haxe`.

## Queries

Query files live in [`queries/`](https://github.com/tong/tree-sitter-haxe/blob/HEAD/queries) and follow the conventions used by editors and tools built on tree-sitter (Neovim, Zed, Helix, etc.):

- `highlights.scm` — syntax highlighting captures
- `injections.scm` — language injections (e.g. embedded markup/regex-like content)
- `locals.scm` — scope/local-variable analysis
- `folds.scm` — code…
