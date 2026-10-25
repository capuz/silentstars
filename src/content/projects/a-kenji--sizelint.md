---
repo: "a-kenji/sizelint"
name: "sizelint"
description: "  Lint your file tree based on file sizes "
readmeQualityOk: true
url: "https://github.com/a-kenji/sizelint"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ci-cd", "cli", "code-quality", "developer-tools", "file-size", "formatter", "linter", "pre-commit"]
stars: 16
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-16T21:39:17Z"
lastCommitAt: "2026-10-25T22:11:02Z"
lastReleaseAt: "2026-02-27T13:07:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 35
maintainers: ["a-kenji", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cc514eabf63b462c35bd76349a7492adb8b7b3008c8ab12ced922eca44465b1/a-kenji/sizelint"
---

# `$ sizelint` - lint your working tree based on file sizes

`sizelint` is a fast, configurable file size linter that helps prevent large files from entering your Git repository.
It can be used as a standalone tool, pre-commit hook, or as part of your CI/CD pipeline.

## Overview

- [`$ sizelint` - lint your working tree based on file sizes](#sizelint-lint-your-working-tree-based-on-file-sizes)
  - [`$ sizelint` - usage](#-sizelint---usage)
    - [`$ sizelint check`](#-sizelint-check)
    - [`$ sizelint rules`](#-sizelint-rules)
    - [`$ sizelint init`](#-sizelint-init)
  - [Configuration](#configuration)
  - [Documentation](#documentation)
  - [Development](#development)
  - [License](#license)

## `$ sizelint` - usage

```
Lint your working tree based on file size

Usage: sizelint [OPTIONS] <COMMAND>

Commands:
  check        Check files for size violations
  init         Initialize sizelint configuration
  rules        Rule management
  completions  Generate shell completions
  help         Print this message or the help of the given subcommand(s)

Options:
  -c, --config <FILE>  Configuration file path
      --debug          Enable debug output (or set SIZELINT_LOG for…
