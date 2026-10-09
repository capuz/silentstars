---
repo: "dalps/menhir-lsp"
name: "menhir-lsp"
description: "Language server and VS Code extension for Menhir and Ocamllex"
readmeQualityOk: true
url: "https://github.com/dalps/menhir-lsp"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [86]
stars: 15
forks: 1
openIssues: 6
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-12-06T15:56:08Z"
lastCommitAt: "2026-10-09T10:50:16Z"
lastReleaseAt: "2026-07-15T13:55:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 58
maintainers: ["dalps", "yarukha"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0cce74adf22de0b087ffe73e4c381bfd2924036740f1b4107526ada98812d32/dalps/menhir-lsp"
---

# Menhir LSP

`menhir-lsp` is a Language Server for the OCaml dialects [Menhir](https://fpottier.gitlabpages.inria.fr/menhir/) and [Ocamllex](https://ocaml.org/manual/5.4/lexyacc.html). Its goal is to provide first-class language support for their syntaxes in client editors. A [client](https://github.com/dalps/menhir-lsp/blob/HEAD/client/) for VS Code is available through the [Menhir VS Code extension](https://marketplace.visualstudio.com/items?itemName=dalps.menhir-lsp-client).

## Implemented Features

The server supports the following set of LSP feautres in `.mll` and `.mly` files:
* [Find References](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_references) 
* [Jump to Definition](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_definition)
* [Hover](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_hover)
* [Document Symbols](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_documentSymbol)
*…
