---
repo: "DecimalTurn/toml-patch"
name: "toml-patch"
description: "Patch, parse, and stringify TOML while preserving comments, whitespace and formatting."
readmeQualityOk: true
url: "https://github.com/DecimalTurn/toml-patch"
homepage: "https://www.npmjs.com/package/@decimalturn/toml-patch"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["comment-preserving", "toml", "toml-config", "toml-parser", "toml-parsing", "toml-edit", "toml-patch", "comments", "toml-format", "toml-formatter"]
stars: 9
forks: 0
openIssues: 2
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-24T20:46:33Z"
lastCommitAt: "2026-09-01T22:05:53Z"
lastReleaseAt: "2026-01-18T04:55:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 74
maintainers: ["DecimalTurn"]
openGraphImageUrl: "https://opengraph.githubassets.com/d438309f5cef2045c1c69cdc69f8093feb00ceaa20ba138bfaf508fab596a8c5/DecimalTurn/toml-patch"
fundingLinks: ["GITHUB:https://github.com/DecimalTurn"]
postedAt: "2026-08-07T05:19:39.636Z"
---

# toml-patch

Patch, parse, and stringify [TOML](https://toml.io/en/) (v1.1.0) while preserving comments and formatting.

This project started as a fork of the [original toml-patch](https://github.com/timhall/toml-patch) but has since evolved into a standalone project with significant improvements in reliability and features. We've added TOML v1.1 support, introduced new APIs like `TomlDocument` and `TomlFormat` classes, fixed numerous bugs through increase in testing namely with [toml-test](https://github.com/toml-lang/toml-test).

We hope that these improvements can be incorporated upstream one day if the original author returns, but until then, this project is the actively maintained version.

## Documentation

- [Installation](#installation)
- [API](#api)
- [Comment ownership](#comment-ownership)
- [Date/time handling and Temporal](#datetime-handling--temporal)
- [Formatting](#formatting)
- [Changelog](https://github.com/DecimalTurn/toml-patch/blob/v3.0.5/CHANGELOG.md)
- [Contributing](https://github.com/DecimalTurn/toml-patch/blob/v3.0.5/CONTRIBUTING.md)

## Installation

toml-patch is dependency-free and can be installed via your favorite package manager.

*Example with NPM*…
