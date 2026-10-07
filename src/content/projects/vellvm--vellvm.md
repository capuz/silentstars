---
repo: "vellvm/vellvm"
name: "vellvm"
description: "The Vellvm (Verified LLVM) coq development."
readmeQualityOk: true
url: "https://github.com/vellvm/vellvm"
language: "LLVM"
languages: ["LLVM"]
languagePcts: [85]
stars: 493
forks: 44
openIssues: 28
closedIssues: 222
watchers: 20
contributors: 32
recentReleases: 0
createdAt: "2017-04-06T11:21:21Z"
lastCommitAt: "2026-10-07T10:31:23Z"
lastReleaseAt: "2026-07-07T10:09:04Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 35
maintainers: ["Zdancewic", "YaZko", "Ptival"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a6831a04c9350825e20a1ace9d0b7b2688c86655556cb91f0a8f23b7e59fbd4/vellvm/vellvm"
discussionCount: 4
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

1. Clone the vellvm git repo
2. Install all external dependencies
   - Note: you should be able to install all of the opam libraries by running `make opam` in the `src/` directory.
3. Run `make vellvm` in the `src/` directory: it will produce the OCaml executable called `vellvm`
   - Note: running just `make` will _also_ build all of Vellvm's metatheory, which is necessary for proving things, but takes much longer
  
## opam, Rocq, and opam…
