---
repo: "trozen/tpy-lang"
name: "tpy-lang"
description: "A Python-to-C++ compiler for TurboPython, a high-performance dialect of Python: native binaries with no interpreter, no garbage collector and no GIL."
readmeQualityOk: true
url: "https://github.com/trozen/tpy-lang"
homepage: "https://tpy-lang.org"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [56, 44]
topics: ["aot-compiler", "compilers", "cpp23", "native", "ownership-and-borrowing", "programming-language", "python-compiler", "python-to-cpp", "python3", "static-typing"]
stars: 26
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-03T15:50:38Z"
lastCommitAt: "2026-11-05T08:03:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 52
maintainers: ["trozen"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3d53e216d0c46579fd07c3c8aee8fbe6a0dd37d550a809dd17c1ce931308560/trozen/tpy-lang"
---

# TurboPython: a high-performance dialect of Python, compiled to C++

**TurboPython** (TPy, package `tpy-lang`) is a high-performance dialect of
Python: statically typed Python source compiles through C++ to a native
binary. The result has no interpreter, no garbage collector, no automatic
reference counting and no GIL; an ownership model provides deterministic,
compile-checked memory management. Source files stay valid Python, so
existing editors and linters read them, but TurboPython does not run
arbitrary Python: parameters and fields are annotated, it imports no
CPython packages, and dynamic features such as `eval`/`exec` or adding
undeclared attributes are not supported.

[Website](https://tpy-lang.org) |
[Documentation](https://tpy-lang.org/docs/) |
[Examples](https://github.com/trozen/tpy-examples) |
[Release notes](https://github.com/trozen/tpy-lang/blob/master/RELEASE_NOTES.md)

> **Status: early development.** The core language compiles and runs real
> programs, but some ordinary Python constructs are still rejected, the
> standard library is a subset, and known bugs can produce wrong results
> silently. See [what works](https://tpy-lang.org/docs/compatibility/)
> before…
