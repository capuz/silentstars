---
repo: "vellvm/vellvm"
name: "vellvm"
description: "The Vellvm (Verified LLVM) coq development."
readmeQualityOk: true
url: "https://github.com/vellvm/vellvm"
language: "LLVM"
languages: ["LLVM"]
languagePcts: [89]
stars: 485
forks: 41
openIssues: 62
closedIssues: 213
watchers: 19
contributors: 41
recentReleases: 1
createdAt: "2017-04-06T11:21:21Z"
lastCommitAt: "2026-07-20T06:34:15Z"
lastReleaseAt: "2026-07-07T10:09:04Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 35
maintainers: ["YaZko", "Zdancewic"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1057b799fe4e9b73f9b33b181aca232c6ae773fbf44b738d3490e64b699a83a/vellvm/vellvm"
discussionCount: 2
---

# Vellvm - verified LLVM IR

Vellvm is an ongoing project aiming at the formal verification in the Rocq proof
assistant of a compilation infrastructure inspired by the LLVM compiler.  

Check out the [Vellvm home page](https://vellvm.github.io/vellvm/) for more information.

# Installing / Compiling Vellvm

## Assumes:
  - OCaml 4.14.1 (typically installed via `opam`, see below)
  - Rocq 9.1.1
  - opam  2.0.0+
  - Clang 14.0.1+ (available for Mac OSX in XCode 4.2+, or installed via, e.g. `sudo apt-get install clang`)
  - `gnu-sed`
     + `sed` defaults to `gnu-sed` on linux.
	 + for Mac OS X with [homebrew](https://brew.sh/), do `brew install gnu-sed` and then create a symlink from `sed` to the `gsed` executable in your path.)

## Compilation:

1. Clone the vellvm git repo with the `--recurse-submodule` option
   - If you forgot to clone recursively, run `git submodule update --init --recursive` to fetch the extra libraries in `lib/`
3. Install all external dependencies
   - Note: you should be able to install all of the opam libraries by running `make opam` in the `src/` directory.
4. Run `make vellvm` in the `src/` directory: it will produce the OCaml executable called `vellvm`…
