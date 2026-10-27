---
repo: "zy445566/xbintsc"
name: "xbintsc"
description: "typescript binary compiler"
readmeQualityOk: true
url: "https://github.com/zy445566/xbintsc"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [45, 37]
topics: ["binary", "compiler", "llvm", "native", "typescript", "nodejs"]
stars: 25
forks: 2
openIssues: 1
closedIssues: 6
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-09-19T01:00:12Z"
lastCommitAt: "2026-10-27T09:17:27Z"
lastReleaseAt: "2026-10-10T02:22:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 47
maintainers: ["zy445566"]
openGraphImageUrl: "https://opengraph.githubassets.com/547d10ac1382eb7de91d1329d8f09012385017130a5157c97b176535f74ab819/zy445566/xbintsc"
---

# xbintsc

> Language: **English** | [简体中文](https://github.com/zy445566/xbintsc/blob/HEAD/README.zh-CN.md)

`xbintsc` compiles a practical subset of **TypeScript directly to native binaries**.
It parses TypeScript itself, binds names, lowers the program to **LLVM IR text**,
and hands the IR to **clang**, which produces a standalone executable linked
against a small C runtime.

The design goals are:

1. **Incremental compilation** — builds are content-addressed and skipped when nothing changed.
2. **Well-factored modules** — lexer, parser, binder, codegen, driver, extensions each live in their own directory with their own tests.
3. **Extensive tests** — per-module unit tests plus end-to-end tests that compile and run real binaries.
4. **Pluggable extensions** — Node `fs`, the `gui` HTML/CSS renderer , … are optional compile modules, not core code.
5. **Self-hosting** — the compiler compiles itself: `src/cli/main.ts` builds into a native `xbintsc` binary whose emitted LLVM IR is a fixpoint across generations. CI builds these binaries for every platform and a release attaches them.
6. **Multi-platform** — macOS, Linux and Windows on x64 and arm64 (Apple Silicon / AArch64), validated…
