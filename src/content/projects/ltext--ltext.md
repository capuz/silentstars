---
repo: "ltext/ltext"
name: "ltext"
description: "λtext - higher-order file applicator"
readmeQualityOk: true
url: "https://github.com/ltext/ltext"
homepage: "https://ltext.github.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["haskell", "lambda-calculus", "delimiter", "expression-evaluator", "file-concatenation", "text-substitution"]
stars: 36
forks: 5
openIssues: 6
closedIssues: 13
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2015-05-20T17:21:30Z"
lastCommitAt: "2026-11-12T05:35:53Z"
lastReleaseAt: "2026-11-12T05:41:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 55
maintainers: ["athanclark"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea4e183cb6067d3b3efb93038e5555ca38bc2d625cfb374197b04f7b5974d0f7/ltext/ltext"
---

λtext
=====

> General-Purpose Templating Utility

# Overview

λtext turns text files into higher-order functions, featuring a Hindley-Milner /
prenex polymorphic type system. See the [github.io page](http://ltext.github.io/).

## Installing

Each [release](https://github.com/ltext/ltext/releases/latest) has
ready-made builds. Every asset name includes the version, shown as `VERSION`
below.

| Platform | Download |
| --- | --- |
| Debian, Ubuntu | `ltext_VERSION-1_amd64.deb` / `_arm64.deb`: `sudo apt install ./ltext_*.deb` |
| Fedora, RHEL, openSUSE | `ltext-VERSION-1.x86_64.rpm` / `.aarch64.rpm`: `sudo dnf install ./ltext-*.rpm` |
| Any Linux (static binary) | `ltext-VERSION-x86_64-unknown-linux-musl.tar.gz` / `aarch64-…` |
| macOS (Apple silicon, Intel) | `ltext-VERSION-aarch64-apple-darwin.tar.gz` / `x86_64-…` |
| Windows (x64, ARM64) | `ltext-VERSION-x86_64-pc-windows-msvc.exe` or `.zip` / `aarch64-…` |

Unpack an archive and put `ltext` somewhere on your `PATH`. `SHA256SUMS`
lists the checksum of every asset. macOS may quarantine a downloaded binary;
`xattr -d com.apple.quarantine ltext` clears that.

With Homebrew (macOS, Linux): `brew install ltext/tap/ltext`.

With Cargo:…
