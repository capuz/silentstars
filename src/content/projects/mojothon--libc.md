---
repo: "mojothon/libc"
name: "libc"
description: "a standard C library for Mojo programming language."
readmeQualityOk: true
url: "https://github.com/mojothon/libc"
homepage: "https://mojothon.github.io/libc/"
language: "Mojo"
languages: ["Mojo"]
languagePcts: [88]
topics: ["libc", "llvm", "mojo"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2024-09-27T09:28:24Z"
lastCommitAt: "2026-11-05T11:25:33Z"
lastReleaseAt: "2026-10-13T03:32:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 89
maintainers: ["llango"]
openGraphImageUrl: "https://opengraph.githubassets.com/813dc19f902a0b0884dcdaa3db8a6c4691b28312299af1ddd6917b271c5eef1e/mojothon/libc"
---

# libc

A standard C library binding for the [Mojo](https://mojolang.org) programming
language.

Every C header is exposed as a Mojo sub-package — `libc.math`, `libc.string`,
`libc.unistd`, `libc.sys.socket`, ... — so `external_call` boilerplate lives in
one place and your code reads like the C it replaces.

- **Mojo:** `>=1.1.0,<2`
- **Platforms:** `linux-64`, `osx-arm64`
- **License:** MIT

## Install

```bash
pixi add --from https://conda.modular.com/max --channel mojo-force libc
```

```mojo
from libc.math import sqrt
from libc.unistd import getpid

def main():
    print(sqrt(2.0), getpid())
```

## Development

The project uses [pixi](https://pixi.sh); `magic`/`mojoproject.toml` are gone.

```bash
pixi install              # default environment (Mojo toolchain)
pixi run test             # run the test suite
pixi run package          # build dist/libc.mojoc
pixi run format           # apply mojo format
pixi run format-check     # fail if the tree is not formatted
pixi run check-prototypes # fail if a call does not match the C prototype
pixi run check-release    # fail if the version is not the same everywhere it is said
pixi run check-channels   # fail if the docs name a conda…
