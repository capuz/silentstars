---
repo: "objectionary/eo-lsp-server"
name: "eo-lsp-server"
description: "LSP server for the EOLANG programming language: works with VS Code, Sublime Text, IntelliJ IDEA and other IDEs"
readmeQualityOk: true
url: "https://github.com/objectionary/eo-lsp-server"
homepage: "https://www.npmjs.com/package/eo-lsp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["eolang", "lsp", "lsp-server", "oop"]
stars: 6
forks: 13
openIssues: 51
closedIssues: 46
watchers: 0
contributors: 28
recentReleases: 0
createdAt: "2025-04-22T19:53:10Z"
lastCommitAt: "2026-10-31T09:53:29Z"
lastReleaseAt: "2025-07-14T05:10:51Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 86
undervaluedScore: 91
maintainers: ["renovate[bot]", "yegor256", "rultor"]
openGraphImageUrl: "https://opengraph.githubassets.com/02271d8f87a858e498ec435865860aeaffb2d860f5254f33a26c3e95c1d4479a/objectionary/eo-lsp-server"
---

# LSP Server for EOLANG

This is the [LSP] server for [EO](https://github.com/objectionary/eo).
It provides semantic highlighting and parsing error checking for `.eo` files
(written in [EOLANG]).
In order to use it, you need to have [Node] and [npm] installed.
Building it from source additionally requires a [Java] runtime
(JRE 11 or newer), since the parser is generated with [ANTLR4].

## Using with IntelliJ (with LSP4IJ)

[LSP4IJ](https://github.com/redhat-developer/lsp4ij), a free LSP support plugin
for [IntelliJ], provides an [EO LSP server template][lsp4ij-doc]
to automatically install and run the `LSP Server for EOLANG`:

* Install [LSP4IJ](https://plugins.jetbrains.com/plugin/23257-lsp4ij)
into [IntelliJ]
* Open any `*.eo` file, a notification will appear with
`Install LSP Server for EOLANG`
* Click the link, confirm the server creation, then click `OK`
* The server will be installed (via [npm])

Once done, semantic tokens and diagnostics will be available.

## Using with Sublime Text

To use this [LSP] server with [Sublime Text], you'll need to install
the [LSP package] and configure it
in `Settings → Package Settings → LSP → Settings`:

```json
{
  "clients": {…
