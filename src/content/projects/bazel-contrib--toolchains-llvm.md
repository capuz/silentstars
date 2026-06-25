---
repo: "bazel-contrib/toolchains_llvm"
name: "toolchains_llvm"
description: "LLVM toolchain for bazel"
url: "https://github.com/bazel-contrib/toolchains_llvm"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [77]
topics: ["bazel", "llvm-toolchain", "clang", "toolchain"]
stars: 368
forks: 276
openIssues: 54
closedIssues: 132
watchers: 12
contributors: 139
recentReleases: 0
createdAt: "2018-05-12T00:44:44Z"
lastCommitAt: "2026-06-25T02:07:57Z"
lastReleaseAt: "2023-09-14T08:07:02Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 91
undervaluedScore: 40
maintainers: ["renovate[bot]", "helly25", "AustinSchuh"]
openGraphImageUrl: "https://opengraph.githubassets.com/f50ab5b824cd196fcf5f04cae173ace5b6c53ec51a71678c681875a519127ecf/bazel-contrib/toolchains_llvm"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/bazel-rules-authors-sig"]
discussionCount: 5
---

# LLVM toolchain for Bazel [![Tests](https://github.com/bazel-contrib/toolchains_llvm/actions/workflows/tests.yml/badge.svg)](https://github.com/bazel-contrib/toolchains_llvm/actions/workflows/tests.yml)

## Quickstart

See notes on the [release](https://github.com/bazel-contrib/toolchains_llvm/releases)
for how to get started.

NOTE: For releases prior to 0.10.1, please also see [these notes](REPO_RENAME.md).

## Basic Usage

The toolchain can automatically detect your OS and arch type, and use the right
pre-built binary LLVM distribution. See the section on "Bring Your Own LLVM"
below for more options.

See in-code documentation in [rules.bzl](toolchain/rules.bzl) for available
attributes to `llvm_toolchain`.

## Advanced Usage

### Per host architecture LLVM version

LLVM does not come with distributions for all host architectures in each
version. In particular patch versions often come with few prebuilt packages.
This means that a single version probably is not enough to address all hosts
one wants to support.

This can be solved by providing a target/version map with a default version.
The example below selects `15.0.6` as the default version for all targets not
specified…
