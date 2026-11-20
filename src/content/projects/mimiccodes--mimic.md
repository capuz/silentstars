---
repo: "mimiccodes/mimic"
name: "mimic"
description: "Everything that can run in parallel will run in parallel."
readmeQualityOk: true
url: "https://github.com/mimiccodes/mimic"
homepage: "https://mimic.codes"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [65, 28]
topics: ["agentic", "array-programming", "automatic-memory-management", "compiled-languages", "concurrent", "cross-platform", "interaction-nets", "llvm", "massively-parallel", "memory-safe"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-18T03:36:30Z"
lastCommitAt: "2026-11-20T10:58:09Z"
lastReleaseAt: "2026-11-17T22:38:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 60
maintainers: ["theharshon"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1423957823/bf8a007c-0150-4a57-8bb5-41659354a57c"
---

Mimic is an array-based, memory-safe, compiled language. Write what you want computed, over whole arrays; Mimic turns it into one fast pass over your data and runs it on every core, with SIMD and the GPU where it helps. No annotations.

## Why Mimic

* **Arrays first.** Whole-array operations replace loops: `prices × 1.2` updates every price at once. Every glyph has a word (`⍳` is `iota`, `¨` is `each`), and you can mix them.
* **Parallel by default.** No threads to manage and nothing to mark. Your steps become one fast pass over the data, spread over every core, with SIMD and the GPU where it helps.
* **Memory safe.** Values are immutable unless marked `mut`. Reference counts and updates in place: no garbage collector, no use after free.
* **Compiled, everywhere.** LLVM to native code. One `mimic` binary holds the compiler, Clang and a linker, and builds for macOS, Linux and Windows from any of them.

## A quick look

The same program, written with words and with glyphs. Both are Mimic, and they print the same thing:
