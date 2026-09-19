---
repo: "Xyraniz/Kryndel"
name: "Kryndel"
description: "Kryndel, a statically checked language and runtime for developer tools, structured applications, and runtime polymorphism"
readmeQualityOk: true
url: "https://github.com/Xyraniz/Kryndel"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["compiler", "developer-tools", "go", "interpreter", "programming-language", "runtime"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-25T06:58:29Z"
lastCommitAt: "2026-09-19T08:14:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 47
maintainers: ["Xyraniz", "CoinBaseSupp"]
openGraphImageUrl: "https://opengraph.githubassets.com/693a492259bd852e29eeb8e826c7296268979c46dd12126621ae1f182e22d54e/Xyraniz/Kryndel"
---

# Kryndel

Kryndel is a small, statically checked language for developer tools and structured applications. The repository contains the compiler, checker, runtime, standard library wrappers, package tooling, and a self-contained command-line executable.

The implementation is written in Go and uses the Go standard library. Source goes through lexing, parsing, module resolution, static checking, validated IR, and runtime execution. Released binaries do not need Go or another host-language runtime.

## Quick start

A Go 1.22 or newer toolchain is needed when building from a checkout.

```bash
git clone https://github.com/Xyraniz/Kryndel.git
cd Kryndel
make

./tools/kry run examples/hello.kry
./tools/kry examples/hello.kry
./tools/kry check examples/control_flow.kry
./tools/kry build examples/hello.kry -o /tmp/hello.kexe
./tools/kry /tmp/hello.kexe
```

The direct file form is useful for desktop integrations. On Windows, the release installer associates `.kry` and `.kexe` with Kryndel for the current user. On Linux, `make install-association` installs a per-user desktop association.

## Commands

| Command | What it does |
| --- | --- |
| `kry check FILE` | Parses, resolves, and…
