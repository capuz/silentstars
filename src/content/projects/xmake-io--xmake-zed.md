---
repo: "xmake-io/xmake-zed"
name: "xmake-zed"
description: "A XMake integration in Zed Editor"
readmeQualityOk: true
url: "https://github.com/xmake-io/xmake-zed"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
stars: 18
forks: 2
openIssues: 4
closedIssues: 0
watchers: 2
contributors: 12
recentReleases: 2
createdAt: "2026-01-21T13:39:52Z"
lastCommitAt: "2026-10-29T10:21:13Z"
lastReleaseAt: "2026-10-29T10:21:19Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 20
maintainers: ["albifronsss"]
openGraphImageUrl: "https://opengraph.githubassets.com/65af7211e723b070950f53b9721e9924cb486f97831b8fa4a389e226b5650f76/xmake-io/xmake-zed"
fundingLinks: ["GITHUB:https://github.com/waruqi", "CUSTOM:https://xmake.io/about/sponsor.html"]
---

## Introduction

An XMake integration for Zed with automatic language-server installation, syntax highlighting, build tasks, and in-editor debugging.

Install [xmake](https://github.com/xmake-io/xmake) first and open a project that contains `xmake.lua`.

See the [xmake repository](https://github.com/xmake-io/xmake) and the [website](https://xmake.io) to learn the build system itself.

## Features

* Language Server (xmake_ls)
* Syntax highlighting for the xmake APIs
* Code Intelligence
* Symbol Navigation
* Build, run, and debug tasks
* DAP locator for CodeLLDB / GDB
* `compile_commands.json` generation into `.zed/`
* Project Templates

* **Language server**: [xmake_ls](https://github.com/CppCXY/xmake_ls), started when an `xmake.lua` file is open. It provides completion, diagnostics, hover, go to definition, and find references for xmake.lua
* **Outline**: tree-sitter symbols for targets, options, rules, and tasks

## Syntax highlighting

* **Target APIs**: target, set_kind, set_version, set_description, set_default
* **File APIs**: add_files, add_headerfiles, add_installfiles, remove_files
* **Include APIs**: add_includedirs, add_sysincludedirs, add_defines, add_undefines
*…
