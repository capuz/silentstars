---
repo: "oriori1703/sigmatcher"
name: "sigmatcher"
description: "Write signatures to automatically match java classes and methods between versions"
readmeQualityOk: true
url: "https://github.com/oriori1703/sigmatcher"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["android", "apk", "java", "reverse-engineering"]
stars: 13
forks: 5
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-05-25T20:52:17Z"
lastCommitAt: "2026-11-03T12:47:38Z"
lastReleaseAt: "2025-09-24T11:52:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 61
maintainers: ["oriori1703", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc70eff994e4c72ab3ea8b529a2468b25133122ee3b19be043e1b2a9e8dbc1ed/oriori1703/sigmatcher"
---

# sigmatcher

-----

Sigmatcher is a powerful tool designed to automate the process of matching Java classes and methods across different
versions of an application.
It leverages signature on the smali (disassembled java code) to identify and correlate code elements, making it an
invaluable resource for long-running reverse engineering projects.

## Table of Contents

- [Installation](#installation)
- [Quick Usage](#quick-usage)
- [Creating Signature Files](#creating-signature-files)
  - [Signature File JSON Schema](#signature-file-json-schema)
  - [Structure of a Signature File](#structure-of-a-signature-file)
  - [Using Macros in Signatures](#using-macros-in-signatures)
- [License](#license)

## Installation

Before installing `sigmatcher`, ensure you have the following prerequisites installed:

- `ripgrep`: A command-line search tool that recursively searches your current directory for a regex pattern.
  Install `ripgrep` by following the instructions on its [GitHub page](https://github.com/BurntSushi/ripgrep).
- `apktool`: A tool for reverse engineering and disassembling Android apk files.
  Install `apktool` by following the instructions on its [official…
