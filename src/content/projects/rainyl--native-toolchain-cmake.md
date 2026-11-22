---
repo: "rainyl/native_toolchain_cmake"
name: "native_toolchain_cmake"
description: "A library to invoke CMake for Dart Native Assets."
readmeQualityOk: true
url: "https://github.com/rainyl/native_toolchain_cmake"
homepage: "https://pub.dev/packages/native_toolchain_cmake"
language: "Dart"
languages: ["Dart"]
languagePcts: [73]
topics: ["cmake", "dart", "flutter"]
stars: 21
forks: 14
openIssues: 2
closedIssues: 11
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2025-02-13T14:55:13Z"
lastCommitAt: "2026-11-22T11:45:45Z"
lastReleaseAt: "2026-07-21T03:27:04Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 78
undervaluedScore: 46
maintainers: ["rainyl", "Henry-Hiles", "jakobkordez"]
openGraphImageUrl: "https://opengraph.githubassets.com/a99817d63287a7204bb93b7343c3450d4895f36ae46d1ce96af81957a08ad75d/rainyl/native_toolchain_cmake"
fundingLinks: ["LIBERAPAY:https://liberapay.com/rainyl", "CUSTOM:https://afdian.com/a/rainyl", "CUSTOM:https://paypal.me/rainyliu"]
---

# native_toolchain_cmake

A library to invoke CMake for Dart Native Assets.

## Status: Experimental

This library is experimental and may change without warning, use with caution!

## Example

Refer to [example](https://github.com/rainyl/native_toolchain_cmake/tree/main/example)

## Linux cross-compilation

Linux builds always go through a toolchain file selected by the target
architecture (`cmake/*-linux-gnu.toolchain.cmake`). When the host already
targets the requested architecture the toolchain file leaves
`CMAKE_C_COMPILER`/`CMAKE_CXX_COMPILER` unset, so CMake uses the default host
compiler (and honors `CC`/`CXX`). Otherwise the matching cross compiler must
be available on `PATH`:

| Target | Debian/Ubuntu package | Compiler |
| --- | --- | --- |
| `ia32` (x86) | `gcc-i686-linux-gnu` | `i686-linux-gnu-gcc` |
| `x64` (x86_64) | `gcc-x86-64-linux-gnu` | `x86_64-linux-gnu-gcc` |
| `arm64` | `gcc-aarch64-linux-gnu` | `aarch64-linux-gnu-gcc` |
| `riscv64` | `gcc-riscv64-linux-gnu` | `riscv64-linux-gnu-gcc` |
