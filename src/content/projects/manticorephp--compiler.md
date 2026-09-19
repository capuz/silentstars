---
repo: "manticorephp/compiler"
name: "compiler"
description: "The PHP AOT Compiler written in pure PHP over the LLVM backend"
readmeQualityOk: true
url: "https://github.com/manticorephp/compiler"
language: "PHP"
languages: ["PHP"]
languagePcts: [97]
topics: ["compiler", "llvm", "php"]
stars: 37
forks: 3
openIssues: 2
closedIssues: 3
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2026-06-12T13:18:59Z"
lastCommitAt: "2026-09-19T08:13:58Z"
lastReleaseAt: "2026-07-21T12:25:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 37
maintainers: ["blacktrs"]
openGraphImageUrl: "https://opengraph.githubassets.com/301065d2eb5428c99ff555c7c55499adc356f2b52673e40621a911c353ce9243/manticorephp/compiler"
---

# Manticore

Self-hosted PHP-to-native AOT compiler. Compiles a large subset of PHP 8.5+ to
standalone native binaries (arm64 / x86_64) through LLVM IR — no PHP runtime, no
shared libraries beyond libc. **The compiler is written in PHP and compiles itself
to a byte-identical fixpoint.**

```bash
manticore compile app.php -o app && ./app      # one file → one static binary
```

The output has no interpreter to install, no `php.ini`, no extension list — you ship
the binary. What you write is ordinary PHP: the Zend interpreter is the reference,
and every plain-runnable test case is diffed against it. On top of that sits a
[superset](https://github.com/manticorephp/compiler/blob/HEAD/docs/superset.md) `php` cannot run at all — structured concurrency, FFI,
a module system, compile-time attributes.

---

## Requirements

**Emitted binaries need nothing but libc.** The *compiler* needs a real toolchain on
the host, because it ends in `clang` and `cc`:

| What | Version | Why |
|---|---|---|
| `clang` + `cc` on `PATH` | **LLVM ≥ 15** | Manticore emits opaque-pointer IR; clang 14 rejects it |
| `php` | **8.5** | cold bootstrap only — Zend runs the compiler source once to seed the first…
