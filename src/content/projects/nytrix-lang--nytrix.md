---
repo: "nytrix-lang/nytrix"
name: "nytrix"
description: "Systems Programming Language."
readmeQualityOk: true
url: "https://github.com/nytrix-lang/nytrix"
homepage: "https://nytrix.x3ric.com"
language: "C"
languages: ["C", "Common Lisp"]
languagePcts: [49, 48]
topics: ["language", "compiler", "nytrix", "ny", "programming-language"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-12T00:08:12Z"
lastCommitAt: "2026-08-22T04:07:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 74
undervaluedScore: 47
maintainers: ["x3ric"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1132433112/ad3dc676-4932-4229-9605-718186166509"
fundingLinks: ["GITHUB:https://github.com/nytrix-lang"]
discussionCount: 0
---

# Nytrix

  <p>Native language, toolchain, and standard library.</p>

  [Website](https://nytrix.x3ric.com/) · [Changelog](https://nytrix.x3ric.com/#CHANGELOG)
</div>

Nytrix is for programs that benefit from expressive source code and direct
control of their machine boundaries. The same workflow covers ordinary files,
reusable modules, compile-time generation, C interfaces, and native binaries.

The [Nytrix Manual](https://github.com/nytrix-lang/nytrix/blob/HEAD/docs/README.md) covers the language overview, practical
guides, specification, and source-linked API reference.

## First program

```ny
use std.core
fn greet(str name) str {
    "Hello, " + name + "!"
}
print(greet("Nytrix"))
assert(greet("Nytrix") == "Hello, Nytrix!", "greet")
```

```bash
./make ny -run hello.ny
./make ny -o hello hello.ny
./hello
./make ny https://raw.githubusercontent.com/x3ric/xtool/refs/heads/main/xtool
```

## Install

```bash
chmod +x make
./make
./make install
ny --version
```

Use `python3 ./make` if your shell does not execute `./make` directly.

## Language

### Data

```ny
use std.core
enum Shape {
    Circle(int radius),
    Empty
}
fn area(shape) int {
    match shape {…
