---
repo: "mensfeld/lostconf"
name: "lostconf"
description: "A meta-linter that detects stale references in configuration files and linters configuration files"
readmeQualityOk: true
url: "https://github.com/mensfeld/lostconf"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["cli", "code-maintenance", "code-quality", "config-validation", "configuration", "developer-tools", "eslint", "gitignore", "linter", "meta-linter"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-01-26T10:35:14Z"
lastCommitAt: "2026-11-23T12:25:38Z"
lastReleaseAt: "2026-11-10T09:16:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 59
maintainers: ["coipond-coder[bot]", "mensfeld", "coipond-renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b47d25862af190e6a51191101244e2704eee8b72c25012c21f27fce814184037/mensfeld/lostconf"
---

# lostconf

A meta-linter that validates and detects stale references in configuration files across languages and tools.

## The Problem

Linter configs accumulate exclusions over time. Files get deleted, patterns become stale, but configs are never cleaned up. This leads to:

- **Confusing config files** full of dead references that nobody understands
- **Security risks** when exclusions outlive the code they were meant to exclude
- **Maintenance burden** when trying to understand what's actually being ignored
- **False confidence** in your linting when patterns no longer match anything

## The Solution

lostconf scans your config files, extracts path/glob/regex patterns, validates them against your codebase, and reports dead references.

```
$ npx lostconf
.eslintignore:3    src/legacy/*.js       no matches
.rubocop.yml:47    spec/old_helper.rb    file not found
pyproject.toml:12  test_.*_old\.py       no matches

Found 3 stale patterns in 3 files
```

## Installation

Run directly with npx (no install required):

```bash
npx lostconf
```

Or install globally:

```bash
npm install -g lostconf
```

Or add to your project:

```bash
npm install --save-dev lostconf
```
