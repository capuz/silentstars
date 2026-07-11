---
repo: "alganet/PHL"
name: "PHL"
description: "PHL is a refactor of the PH7 engine"
readmeQualityOk: true
url: "https://github.com/alganet/PHL"
language: "C"
languages: ["C", "PHP"]
languagePcts: [64, 36]
stars: 14
forks: 2
openIssues: 1
closedIssues: 11
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2025-11-06T10:38:18Z"
lastCommitAt: "2026-07-11T05:57:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 53
maintainers: ["alganet", "orbisai0security", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/34be30e74d86606f627aa5488f59a3ce828016724b21756df684c13339e4c934/alganet/PHL"
fundingLinks: ["GITHUB:https://github.com/alganet", "PATREON:https://patreon.com/alganet"]
discussionCount: 0
---

# PHL - Embeddable PHP Engine

A lightweight, portable, embeddable implementation of PHP written in C.

## About

PH7 is an in-process software library that implements a highly-efficient embeddable bytecode compiler and virtual machine for the PHP programming language. It allows host applications to compile and execute PHP scripts in-process, making PH7 to PHP what SQLite is to SQL.

This is a refactored version of the original PH7 repository, revived after years of dormancy with modern development practices and a focus on reliability.

## Project Goals

- **Lightweight**: Keep the engine suitable for embedded systems and resource-constrained environments
- **Portable**: Maintain compatibility across platforms with minimal dependencies
- **Reliable**: Introduce extensive testing and state-of-the-art continuous integration
- **Compatible**: Refactor PH7's original idiosyncrasies to be more compatible with official PHP.

## PH7 (Original) Features

- **PHP 5.3 Constructs**: Support for heredoc, nowdoc, goto, classes, anonymous functions, closures, and more
- **Extended Language Features**:
  - Function & Method Overloading
  - Full Type Hinting
  - Comma expressions
  - String…
