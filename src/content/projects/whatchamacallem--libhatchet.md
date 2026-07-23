---
repo: "whatchamacallem/libhatchet"
name: "libhatchet"
description: "libhatchet is a fast-compiling, lightweight, bespoke C17/C++23 alternative to the C++ standard library designed for cross-compilation to resource-constrained targets like DSPs, FPGAs, ASICs or WebAssembly. It also falls back to requiring only C99 libraries and a C++11 compiler."
readmeQualityOk: true
url: "https://github.com/whatchamacallem/libhatchet"
homepage: "https://whatchamacallem.github.io/libhatchet/"
language: "C++"
languages: ["C++"]
languagePcts: [85]
topics: ["embedded", "embedded-systems", "cross-compile", "google-test", "asic", "dsp", "fpga", "wasm", "webassemby"]
stars: 32
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2019-06-26T01:14:40Z"
lastCommitAt: "2026-07-23T06:15:30Z"
lastReleaseAt: "2026-05-20T19:34:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 89
undervaluedScore: 62
maintainers: ["whatchamacallem"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/193806101/63afffa8-e230-4252-bcad-98b463a52b5e"
discussionCount: 1
---

# libhatchet

Use the most recent [tagged release](https://github.com/whatchamacallem/libhatchet).
The `include` and `src` directories report 100% line and branch coverage, with a
few exemptions made.

## Overview

> People say that you should not micro-optimize. But if what you love is
> micro-optimization... that's what you should do. - Linus Torvalds

libhatchet is a fast-compiling, lightweight, bespoke C17/C++23 alternative to
the C++ standard library, designed for cross-compilation to resource-constrained
targets such as DSPs, FPGAs, ASICs and WebAssembly. When a modern toolchain is
unavailable it falls back to a C++11 compiler and C99 libraries, and it never
depends on the C++ standard library. If you have a low-level mindset, the
developer experience is better than with the standard library. Template
instantiation errors are easier to read, `hxassertmsg` formats your assert
message before setting a breakpoint for you, and there is nothing unnecessary to
step through in the debugger.

hspace="20">

Expect very fast compile times with `ninja`, `ccache`, `clang` and a C++ module.

The implementation stays clean under every sensible warning flag and under the
GCC and Clang…
