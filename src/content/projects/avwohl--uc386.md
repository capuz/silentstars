---
repo: "avwohl/uc386"
name: "uc386"
description: "A C23 compiler for the i386 processor and MS-DOS. It writes self-contained DOS .exe files, compiles DOOM and MicroPython, and shares the uc_core frontend with uc80."
readmeQualityOk: true
url: "https://github.com/avwohl/uc386"
language: "Python"
languages: ["Python"]
languagePcts: [79]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-04-23T15:20:40Z"
lastCommitAt: "2026-08-07T05:14:24Z"
lastReleaseAt: "2026-08-07T00:05:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 52
maintainers: ["avwohl"]
openGraphImageUrl: "https://opengraph.githubassets.com/e100cf06f86daa7eb88bfffe5e2bc3aa8d94b602934a97042ed2715af2eabb01/avwohl/uc386"
---

# uc386

C23 compiler targeting the Intel 386 (i386 / x86-32) processor under a
DOS extender — specifically the **flat 32-bit Watcom / DOS/4GW-era** C
that early-to-mid-1990s PC games were written in.

**Status: working — in testing ahead of a general release.** Measured
against two reference suites under our DOS emulator (compile →
assemble → run → diff): **215 / 220**
[c-testsuite](https://github.com/c-testsuite/c-testsuite) and, with
the `--kr` pre-pass (see below), **1397 / 1514**
[gcc-c-torture](https://github.com/llvm/llvm-test-suite) executable
tests passing. The frontend defaults to **strict C23**; the
gcc-c-torture corpus is pre-ANSI and GNU-heavy, so it is run with
`--kr` enabled. The remaining ~117 are GCC extensions that need a
static-chain ABI / closure conversion (nested functions, `__label__`),
a fragmented backlog of unimplemented codegen features (C99 VLA /
variably-modified types, vectors, designated initializers, `_Complex`,
offsetof designators, …), and a few large-frame / file-I/O edges —
tracked, not claimed as passing. The standard-C codegen-corner
miscompiles have been driven out (see `STANDARD_C_BACKLOG.md`).

**K&R / implicit-int compatibility (`--kr`).**…
