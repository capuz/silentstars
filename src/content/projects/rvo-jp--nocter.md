---
repo: "rvo-jp/nocter"
name: "nocter"
description: "A self-contained systems language built around simplicity, encapsulation, and foolproof design."
readmeQualityOk: true
url: "https://github.com/rvo-jp/nocter"
homepage: "http://nocter.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["arm64", "compiler", "developer-tools", "lsp", "mach-o", "native-code", "ownership", "programming-languages", "standard-library", "static-typing"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2023-08-15T00:55:23Z"
lastCommitAt: "2026-09-06T08:03:38Z"
lastReleaseAt: "2026-08-09T12:42:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 78
maintainers: ["rvo-jp"]
openGraphImageUrl: "https://opengraph.githubassets.com/2585f963ac7bc90209bf521f76addf5fb77360553297385d19891e895672c7f7/rvo-jp/nocter"
---

<p>A self-contained systems language built around simplicity, encapsulation, and foolproof design.</p>
</div>

# Nocter

Nocter is a statically typed, value-centered systems language for building
native executables directly from `.nct` source files.

It favors explicit contracts, private-by-default modules, deterministic
resource cleanup, and one canonical form for each language concept. Nocter uses
`struct`, `enum`, `interface`, `func`, and `method` without class inheritance,
implicit conformance, garbage collection, or hidden runtime machinery.

Recoverable failure and absence are represented by `T!` and `T?`, while
borrowing and mutation capabilities remain visible through `&T` and `&+T`.

See the [language specification](https://github.com/rvo-jp/nocter/blob/HEAD/spec/README.md) and
[design principles](https://github.com/rvo-jp/nocter/blob/HEAD/spec/principles.md).

## One Directory Install

[Download nocter-v0.37.0-arm64-darwin.tar.gz](https://github.com/rvo-jp/nocter/releases/download/v0.37.0/nocter-v0.37.0-arm64-darwin.tar.gz)

Nocter compiles source directly to native executables without requiring LLVM,
`clang`, `as`, `ld`, Xcode Command Line Tools, or an external runtime…
