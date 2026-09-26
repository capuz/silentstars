---
repo: "BBx-Kitchen/bbj-language-server"
name: "bbj-language-server"
description: "BBj Language Server"
readmeQualityOk: true
url: "https://github.com/BBx-Kitchen/bbj-language-server"
language: "TypeScript"
languages: ["TypeScript", "Java"]
languagePcts: [62, 36]
stars: 13
forks: 17
openIssues: 96
closedIssues: 331
watchers: 2
contributors: 21
recentReleases: 6
createdAt: "2023-02-27T14:39:59Z"
lastCommitAt: "2026-09-26T08:47:18Z"
lastReleaseAt: "2026-09-20T17:09:25Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 95
undervaluedScore: 86
maintainers: ["stephan-wald", "actions-user", "StephanWald"]
openGraphImageUrl: "https://opengraph.githubassets.com/10db42c955806ac361e15b6aa627cec29f09ab1a6038f85433cad3ea3d89b949/BBx-Kitchen/bbj-language-server"
---

# BBj Language Server

This project provides a language server and VS Code extension for the BBj language.

## Documentation

**Full documentation is available at: [BBx-Kitchen.github.io/bbj-language-server](https://BBx-Kitchen.github.io/bbj-language-server/)**

- [VS Code Guide](https://bbx-kitchen.github.io/bbj-language-server/docs/vscode)
- [IntelliJ Guide](https://bbx-kitchen.github.io/bbj-language-server/docs/intellij)

## Project Overview

The project consists of two main parts:

 * `bbj-vscode` – VS Code extension with BBj language server based on [Langium](https://langium.org/)
 * `java-interop` – Java executable that provides information about the Java classpath (classes, fields, methods) via a [JSON-RPC](https://www.jsonrpc.org/) connection

## How to Test

The easiest way is to open the project in [Gitpod](https://gitpod.io/).

This opens a VS Code instance in your browser that automatically builds the project code. Once the terminal processes are done, go to the "Run and Debug" view and start two launch configurations:

 1. _Run Interop Service_ (requires the "Debugger for Java" extension) – this starts a Java application that listens for connections from the language…
