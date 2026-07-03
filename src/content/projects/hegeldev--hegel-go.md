---
repo: "hegeldev/hegel-go"
name: "hegel-go"
description: "Property-based testing for Go"
url: "https://github.com/hegeldev/hegel-go"
homepage: "https://hegel.dev"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["go", "pbt", "testing"]
stars: 67
forks: 4
openIssues: 2
closedIssues: 12
watchers: 4
contributors: 7
recentReleases: 9
createdAt: "2026-01-14T22:09:49Z"
lastCommitAt: "2026-07-03T12:40:48Z"
lastReleaseAt: "2026-05-01T18:18:54Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 41
maintainers: ["Liam-DeVoe", "lmb", "hegel-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2909eb5d2474dfef8f01d21b2615295e633de9b633a64fadc13da3dee68c174f/hegeldev/hegel-go"
---

> [!IMPORTANT]
> We're excited you're checking out Hegel! Hegel is in beta, and we'd love for you to try it and [report any feedback](https://github.com/hegeldev/hegel-go/issues/new).
>
> As part of our beta, we may make breaking changes if it makes Hegel a better property-based testing library. If that instability bothers you, please check back in a few months for a stable release!
>
> See https://hegel.dev/compatibility for more details.

# Hegel for Go

* [Documentation](https://pkg.go.dev/hegel.dev/go/hegel)
* [Hegel website](https://hegel.dev)

Hegel is a property-based testing library for Go. Hegel is based on [Hypothesis](https://github.com/hypothesisworks/hypothesis), using the [Hegel protocol](https://hegel.dev/).

## Installation

To install: `go get hegel.dev/go/hegel@latest`.

Hegel for Go drives [libhegel](https://github.com/hegeldev/hegel-rust) — the native Rust engine. At runtime hegel-go looks for `libhegel.so` (Linux), `libhegel.dylib` (macOS), or `libhegel.dll` (Windows) at `$HEGEL_LIBHEGEL_PATH` first, then in a sibling `../hegel-rust/target/release/` (and `../hegel-rust/target/debug/`) checkout relative to your project root, and finally falls back to…
