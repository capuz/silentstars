---
repo: "lukewilliamboswell/roc-platform-template-go"
name: "roc-platform-template-go"
description: "Go platform template"
readmeQualityOk: true
url: "https://github.com/lukewilliamboswell/roc-platform-template-go"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["roc-lang"]
stars: 13
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2024-05-18T10:14:52Z"
lastCommitAt: "2026-09-08T08:16:15Z"
lastReleaseAt: "2026-09-08T08:01:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 66
maintainers: ["lukewilliamboswell", "dependabot[bot]", "ostcar"]
openGraphImageUrl: "https://opengraph.githubassets.com/736ea6bab74e5e42208431408377a84166de075f68dc84ce18345957996349b9/lukewilliamboswell/roc-platform-template-go"
---

# Roc platform template for Go

A small Roc platform whose host is implemented in Go. It targets Roc's new
compiler ABI and provides command-line arguments, stdin, stdout, stderr,
process exit codes, and Roc runtime allocation/diagnostic hooks.

## Status

Linux musl, macOS, and Windows MinGW are supported on x86-64 and ARM64. The
repository includes 12 example applications, 27 behavioral cases, Go ABI/unit
tests, fresh-package integration tests, and cross-builder CI.

## Upstream dependency

The exact development compiler is declared in the `roc` field of
[`platform/main.roc`](https://github.com/lukewilliamboswell/roc-platform-template-go/blob/HEAD/platform/main.roc) and each example header. CI and the
nightly updater read these headers; there is no separate version file.

Go's cgo toolchain uses the MinGW ABI on Windows, so this platform deliberately
targets `x64mingw` and `arm64mingw`, including their baseline `v1` variants.
Roc's `x64win` and `arm64win` names remain MSVC targets and are not compatible
with these host archives.

## Requirements

- The Go version in [`.go-version`](https://github.com/lukewilliamboswell/roc-platform-template-go/blob/HEAD/.go-version)
- Zig 0.16.0…
