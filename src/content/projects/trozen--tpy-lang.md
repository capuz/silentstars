---
repo: "trozen/tpy-lang"
name: "tpy-lang"
description: "TurboPython: a Python-to-C++ compiler. Typed Python to native binaries with no Python runtime, no GC, no GIL."
readmeQualityOk: true
url: "https://github.com/trozen/tpy-lang"
homepage: "https://tpy-lang.org"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [54, 46]
topics: ["aot-compiler", "compilers", "cpp23", "native", "ownership-and-borrowing", "programming-language", "python-compiler", "python-to-cpp", "python3", "static-typing"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-03T15:50:38Z"
lastCommitAt: "2026-10-14T08:57:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 41
maintainers: ["trozen"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdbfc219e0a1594baad4baf01753c2c3252472566ee8554318a98066b1c01a48/trozen/tpy-lang"
---

# TurboPython: a Python-to-C++ compiler

**TurboPython** (TPy, package `tpy-lang`) compiles statically typed Python
through C++ to a native binary. The result has no interpreter, no garbage
collector, no automatic reference counting and no GIL; an ownership model
provides deterministic, compile-checked memory management. Source files
stay valid Python, so existing editors and linters read them, but
TurboPython is not a drop-in replacement for CPython.

[Website](https://tpy-lang.org) |
[Documentation](https://tpy-lang.org/docs/) |
[Examples](https://github.com/trozen/tpy-examples) |
[Release notes](https://github.com/trozen/tpy-lang/blob/master/RELEASE_NOTES.md)

> **Status: early development.** The core language compiles and runs real
> programs, but some ordinary Python constructs are still rejected, the
> standard library is a subset, and known bugs can produce wrong results
> silently. See [what works](https://tpy-lang.org/docs/compatibility/)
> before relying on it.

## Example

The source is Python with type annotations and two TurboPython types,
`int32` and `Own`:

```python
from dataclasses import dataclass
from tpy import Own, int32

@dataclass
class Stats:
    count:…
