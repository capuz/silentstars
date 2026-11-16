---
repo: "vanadiume/vcc"
name: "vcc"
description: "A C compiler in V."
readmeQualityOk: true
url: "https://github.com/vanadiume/vcc"
language: "V"
languages: ["V"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 35
closedIssues: 42
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-09-29T02:53:11Z"
lastCommitAt: "2026-11-16T04:25:09Z"
lastReleaseAt: "2026-11-12T02:31:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 91
undervaluedScore: 56
maintainers: ["HuntedByTheIRS", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/66da215fe7d1f227473ecf036298b319fad26d9890211415b646c3708ba47304/vanadiume/vcc"
---

vcc compiles C to native Linux x86-64 programs. The preprocessor, parser,
optimizer, code generator and linker are its own, so a build needs nothing from
the system but a C library: no assembler and no system linker.

It accepts the C that real projects are written in, C89 through C23 and their
GNU variants, with the gaps listed under Status. It writes ELF64 executables,
relocatable objects, shared objects and static binaries. The source is plain V
in separate modules with no dependency in `v.mod`.

## Quick start

You need V built from source on Linux x86-64, at a commit that accepts this
tree. The 0.5.2 release does not: its checker rejects a `for {}` whose every
path returns, which `parser/parser.v` uses. Everything since accepts it, and CI
pins the commit it tests with in `.github/workflows/ci.yml`.

```sh
git clone https://github.com/vlang/v && cd v && make   # once
git clone https://github.com/HuntedByTheIRS/vcc && cd vcc
v run tools/build.vsh build -o vcc   # the official build
v test .                             # run the suite
```

`v run tools/build.vsh build` is the official way to build the compiler. It
builds vcc with V and reports where the binary landed; `-o PATH`…
