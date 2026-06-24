---
repo: "cpp-linter/clang-tools-static-binaries"
name: "clang-tools-static-binaries"
description: "static-linked versions of clang tools for Linux, Mac OS X and Windows"
url: "https://github.com/cpp-linter/clang-tools-static-binaries"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["clang-format", "clang-tidy", "clang-query", "clang-tools-extra", "clang-apply-replacements", "clang-include-cleaner"]
stars: 17
forks: 4
openIssues: 0
closedIssues: 29
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2022-08-10T00:32:41Z"
lastCommitAt: "2026-06-24T06:39:48Z"
lastReleaseAt: "2025-05-27T11:53:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 65
maintainers: ["shenxianpeng", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/75e4751e8c9c32f3064802fbc4d2812905d7522cd708558f0e3f8871022ac36e/cpp-linter/clang-tools-static-binaries"
---

# clang-tools static binaries

![Supported platforms](https://img.shields.io/badge/platform-linux--64%20%7C%20linux--arm64%20%7C%20macos--64%20%7C%20macos--arm64%20%7C%20windows--64%20%7C%20windows--arm64-blue)

Includes **[clang-format](https://clang.llvm.org/docs/ClangFormat.html), [clang-tidy](https://clang.llvm.org/extra/clang-tidy/), [clang-query](https://github.com/llvm/llvm-project/tree/main/clang-tools-extra/clang-query), [clang-apply-replacements](https://github.com/llvm/llvm-project/tree/main/clang-tools-extra/clang-apply-replacements) and [clang-include-cleaner](https://clang.llvm.org/extra/clang-tidy/checks/misc/include-cleaner.html)** (LLVM 18+).

## Table of Contents

- [Installation](#installation)
- [Clang Tools Version Support Matrix](#clang-tools-version-support-matrix)
- [Download](#download)
- [How can I trust this repository?](#how-can-i-trust-this-repository)
- [Motivation](#motivation)
- [Building locally](#building-locally)

## Installation

Install clang-tools via your preferred package manager, take clang-format as an example:

```bash
# pip (all platforms)
pip install clang-tools
clang-tools install clang-format

# asdf (all platforms)
asdf plugin add…
