---
repo: "creationix/encantis"
name: "encantis"
description: "A fun language aimed to match wasm semantics, but with infix syntax and an more advanced type system."
readmeQualityOk: true
url: "https://github.com/creationix/encantis"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2021-10-03T16:40:20Z"
lastCommitAt: "2026-11-16T04:24:00Z"
lastReleaseAt: "2026-11-16T04:06:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 44
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/310ef046004a563095d37124d0cbaef1d30f249a00cec2f78f8120ac6bdb7dbe/creationix/encantis"
---

# Encantis

Encantis is a systems programming language that compiles to WebAssembly. It gives you direct control of memory and explicit types, and it compiles to small wasm modules with no runtime.

```ents
// Greatest common divisor, exported for the host to call.
export func gcd(a: u32, b: u32) -> u32 {
  while b != 0 {
    let t = b
    b = a % b
    a = t
  }
  return a
}

test "gcd" {
  assert gcd(12, 18) == 6
  assert gcd(7, 0) == 7
}
```

```sh
encantis test gcd.ents              # run the inline tests
encantis wasm gcd.ents -o gcd.wasm  # compile to a wasm binary (-O to optimize)
```

## Install

Download the archive for your platform from the [latest release](https://github.com/creationix/encantis/releases/latest), unpack it, and put `encantis` (`encantis.exe` on Windows) somewhere on your `PATH`. The binary is self-contained.

| Platform              | Archive                                |
| --------------------- | -------------------------------------- |
| Linux x64             | `encantis-<version>-linux-x64.tar.gz`    |
| Linux arm64           | `encantis-<version>-linux-arm64.tar.gz`  |
| macOS (Apple silicon) | `encantis-<version>-darwin-arm64.tar.gz` |
| macOS…
