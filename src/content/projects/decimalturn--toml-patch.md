---
repo: "DecimalTurn/toml-patch"
name: "toml-patch"
description: "Patch, parse, and stringify TOML while preserving comments, whitespace and formatting."
readmeQualityOk: true
url: "https://github.com/DecimalTurn/toml-patch"
homepage: "https://www.npmjs.com/package/@decimalturn/toml-patch"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["comment-preserving", "toml", "toml-config", "toml-parser", "toml-parsing", "toml-edit", "toml-patch", "comments", "toml-format", "toml-formatter"]
stars: 8
forks: 0
openIssues: 2
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-24T20:46:33Z"
lastCommitAt: "2026-08-12T04:22:31Z"
lastReleaseAt: "2026-01-18T04:55:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 76
maintainers: ["DecimalTurn", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/806ef7001259cf7bc34dabe571f97822402e4d250c4433fa21680e09a158a95f/DecimalTurn/toml-patch"
fundingLinks: ["GITHUB:https://github.com/DecimalTurn"]
postedAt: "2026-08-07T05:19:39.636Z"
---

# toml-patch

Patch, parse, and stringify [TOML](https://toml.io/en/) (v1.1.0) while preserving comments and formatting.

This project started as a fork of the [original toml-patch](https://github.com/timhall/toml-patch) but has since evolved into a standalone project with significant improvements in reliability and features. We've added TOML v1.1 support, introduced new APIs like `TomlDocument` and `TomlFormat` classes, fixed numerous bugs through increase in testing namely with [toml-test](https://github.com/toml-lang/toml-test).

We hope that these improvements can be incorporated upstream one day if the original author returns, but until then, this project is the actively maintained version.

## Table of Contents

- [Installation](#installation)
- [API](#api)
  - [Functional API](#functional-api)
    - [patch](#patch)
      - [Example 1](#example-1)
      - [Example 2](#example-2)
    - [parse](#parse)
      - [Example](#example)
    - [stringify](#stringify)
      - [Example](#example-1)
  - [TomlDocument Class ](#tomldocument-class)
    - [Constructor](#constructor)
      - [Basic Usage Example](#basic-usage-example)
    - [Properties](#properties)
    - [Methods](#methods)…
