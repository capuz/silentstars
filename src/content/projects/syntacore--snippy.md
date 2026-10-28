---
repo: "syntacore/snippy"
name: "snippy"
description: "llvm-snippy instruction sequence generator"
readmeQualityOk: true
url: "https://github.com/syntacore/snippy"
homepage: "https://syntacore.github.io/snippy/"
language: "LLVM"
languages: ["LLVM", "C++"]
languagePcts: [41, 32]
topics: ["fuzzing", "generator", "isg", "testing", "verification"]
stars: 94
forks: 17
openIssues: 9
closedIssues: 15
watchers: 8
contributors: 1175
recentReleases: 0
createdAt: "2023-12-22T11:45:38Z"
lastCommitAt: "2026-10-28T09:52:14Z"
lastReleaseAt: "2026-06-04T15:47:54Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 91
undervaluedScore: 47
maintainers: ["sizn-sc", "ArtemiyMentiy", "kseniadobrovolskaya"]
openGraphImageUrl: "https://opengraph.githubassets.com/23023c15e3c1bcaa43b5410f4d8c7821597938f8d3bcafb826aa1aacb3599a16/syntacore/snippy"
---

# LLVM-snippy

This is an LLVM project fork containing the LLVM-snippy generator. Documentation for this tool is available [here](https://github.com/syntacore/snippy/blob/HEAD/llvm/tools/llvm-snippy/README.md).

# LLVM Compiler Infrastructure

Welcome to the LLVM project!

This repository contains the source code for LLVM, a toolkit for the
construction of highly optimized compilers, optimizers, and run-time
environments.

The LLVM project has multiple components. The core of the project is
itself called "LLVM". This contains all of the tools, libraries, and header
files needed to process intermediate representations and convert them into
object files. Tools include an assembler, disassembler, bitcode analyzer, and
bitcode optimizer.

C-like languages use the [Clang](https://clang.llvm.org/) frontend. This
component compiles C, C++, Objective-C, and Objective-C++ code into LLVM bitcode
-- and from there into object files, using LLVM.

Other components include:
the [libc++ C++ standard library](https://libcxx.llvm.org),
the [LLD linker](https://lld.llvm.org), and more.

## Getting the Source Code and Building LLVM

Consult the
[Getting Started with…
