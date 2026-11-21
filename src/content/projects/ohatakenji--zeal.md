---
repo: "OhataKenji/zeal"
name: "zeal"
description: "A local-first Bazel GUI client. Explore targets and dependencies, run builds and tests, and analyze build history."
readmeQualityOk: true
url: "https://github.com/OhataKenji/zeal"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [45, 37]
topics: ["bazel"]
stars: 12
forks: 1
openIssues: 5
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-10-15T03:06:17Z"
lastCommitAt: "2026-11-21T11:35:07Z"
lastReleaseAt: "2026-11-11T01:44:22Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 48
maintainers: ["OhataKenji", "renovate[bot]", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fb3b8c58d8b1a6c1d727f214676cf194402f1e3c26b66de9c81b9055f85f366/OhataKenji/zeal"
---

## Getting Started

> **Warning**
>
> Zeal is in development. Expect breaking changes. Local data may not carry over to new versions.

### Step1: Install

#### Option 1: Download a release

Prebuilt releases currently support **macOS (Apple Silicon) only**.

Download the app from [GitHub Releases](https://github.com/OhataKenji/zeal/releases).

#### Option 2: Build from source

Follow the [Development guide](https://github.com/OhataKenji/zeal/blob/HEAD/docs/development.md#getting-started).

### Step2: Open a repository

**Requires:** Bazelisk or Bazel on your `PATH`.

On macOS and Linux, Zeal loads your login shell's `PATH`.

Open only trusted repositories.

1. Enter your Bazel workspace root path or select it with **Choose folder…**.
2. Keep **target patterns** as `//...` for all packages in the main repository. To narrow the scope, use a pattern such as `//app/...`.
3. Select **open**.
4. Select a target and run `build`, `test`, or `run`.

## Features

### Find and Run Targets

Find targets with fuzzy search. Run `build`, `test`, or `run`.
