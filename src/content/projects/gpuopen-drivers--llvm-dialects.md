---
repo: "GPUOpen-Drivers/llvm-dialects"
name: "llvm-dialects"
description: "LLVM Dialects Library"
readmeQualityOk: true
url: "https://github.com/GPUOpen-Drivers/llvm-dialects"
language: "C++"
languages: ["C++"]
languagePcts: [88]
stars: 24
forks: 30
openIssues: 4
closedIssues: 6
watchers: 17
contributors: 22
recentReleases: 0
createdAt: "2022-08-15T07:13:50Z"
lastCommitAt: "2026-10-26T09:18:16Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 73
undervaluedScore: 40
maintainers: ["mariusz-sikora-at-amd", "trenouf", "jasilvanus"]
openGraphImageUrl: "https://opengraph.githubassets.com/b50c9ee3cb7b9e243b51eb618a5b0d9b482d75c7246507cae95daa6f38c46338/GPUOpen-Drivers/llvm-dialects"
---

llvm-dialects
=============

Overview
========
The LLVM Dialects library allows defining "dialects" on top of the LLVM IR
"substrate" in a TableGen-based DSL that looks, on purpose, very much like the
DSL used to define MLIR dialects.

Its main user is [LLPC](https://github.com/GPUOpen-Drivers/llpc). We welcome
other interested parties. Development of llvm-dialects happens on GitHub,
using Issues and Pull Requests.

LLVM Compatibility
==================
The `dev` branch is generally expected to work with (a recent version of) the
`main` branch of the llvm-project repository. No promises are made about
compatibility with any specific LLVM version.

Components
==========

- lib/Dialect: a helper library that allows the creation of basic dialects (in
  the MLIR sense) for LLVM IR
- lib/TableGen: common code for interpreting TableGen records that define a
  dialect
- utils/llvm-dialects-tblgen: a standalone CLI tool which reads a .td dialect
  definition and outputs C++ header and source files

Building
========

The are multiple ways to combine `llvm` and `llvm-dialects` into a build process.
Common options are:

- Build `llvm-dialects` stand-alone against an installed `llvm`.
-…
