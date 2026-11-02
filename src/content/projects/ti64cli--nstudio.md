---
repo: "Ti64CLi/nStudio"
name: "nStudio"
description: "ARM Assembly IDE for TI-Nspire"
readmeQualityOk: true
url: "https://github.com/Ti64CLi/nStudio"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-02T21:35:00Z"
lastCommitAt: "2026-11-02T13:38:56Z"
lastReleaseAt: "2026-03-12T21:52:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 21
maintainers: ["Ti64CLi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4227a65a95f92ee855dc07d2481574cf996e85db64e429dadb91db71566c9c6/Ti64CLi/nStudio"
---

# nStudio

## About

nStudio is an ARM assembly editor for the TI-Nspire CX and CX II calculators running Ndless. It lets you write, edit, and navigate ARM assembly source directly on the calculator.

## Features

* **Gap-buffer text editor**: Insert and delete without rewriting the whole buffer on each keystroke.
* **Syntax highlighting**: ARM mnemonics, registers, immediates, labels, comments, directives, and string literals. Classification uses the same keyword tables as the companion `nasm` assembler, so what highlights is what assembles (both pre-UAL `LDMEQFD` and UAL `LDMFDEQ`/`SUBSEQ` suffix orders are recognised). Following nasm/nAssembler syntax, a **label is any identifier in column 0 with no trailing colon**, and instructions must be indented.
* **Editing**: Undo/redo (coalesced by word), cut/copy/paste, select all, block indent/outdent, and search / replace (with case toggle and Replace All).
* **Line Endings**: Detects and preserves **LF** or **CRLF**; the current mode is shown in the status bar and can be toggled from the File menu.
* **Programs, not just files**: The file you open is a program: nStudio reads it and every file it `INCLUDE`s, directly or not, and…
