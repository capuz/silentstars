---
repo: "bbatsov/neocaml"
name: "neocaml"
description: "A modern, TreeSitter-powered, Emacs package for programming in OCaml"
readmeQualityOk: true
url: "https://github.com/bbatsov/neocaml"
homepage: "https://neocaml.org/"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [98]
topics: ["emacs", "emacs-lisp", "major-mode", "ocaml"]
stars: 123
forks: 7
openIssues: 5
closedIssues: 27
watchers: 3
contributors: 4
recentReleases: 1
createdAt: "2025-03-04T10:28:34Z"
lastCommitAt: "2026-07-08T05:41:36Z"
lastReleaseAt: "2026-04-10T10:00:29Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 45
maintainers: ["bbatsov", "tmcgilchrist"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b73de4f70944a8198296987d7f214ca77085c7614bae11ead06d59b2dd93bfe/bbatsov/neocaml"
fundingLinks: ["GITHUB:https://github.com/bbatsov", "PATREON:https://patreon.com/bbatsov", "CUSTOM:https://www.paypal.me/bbatsov"]
discussionCount: 0
---

# neocaml

`neocaml` is a **n**ew **E**macs package for programming in
[OCaml](https://ocaml.org).  Built on
[Tree-sitter](https://tree-sitter.github.io/tree-sitter/), it provides major
modes for editing OCaml (`.ml`) and OCaml Interface (`.mli`) files with
font-locking, indentation, navigation, and toplevel (REPL) integration.

Beyond OCaml source code, neocaml also supports key parts of the OCaml
ecosystem: [dune](https://dune.build) build files,
[opam](https://opam.ocaml.org) package definitions,
[OCamllex](https://v2.ocaml.org/manual/lexyacc.html) lexer definitions (`.mll`),
[Menhir](http://gallium.inria.fr/~fpottier/menhir/) parser definitions (`.mly`),
and [cram](https://dune.readthedocs.io/en/stable/tests.html#cram-tests) test
files (`.t`), each with a dedicated major mode.

You can also view compiled OCaml artifacts (`.cmi`, `.cmo`, `.cmx`, etc.)
directly in Emacs via `ocamlobjinfo`.

It's also as cool as Neo from "The Matrix". ;-)

> [!TIP]
> For detailed configuration, usage guides, and migration help, see the
> [full documentation](https://bbatsov.github.io/neocaml).

## Features

- Tree-sitter based font-locking (4 levels) for `.ml` and `.mli` files
- Tree-sitter based…
