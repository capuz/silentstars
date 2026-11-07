---
repo: "sigilco/pyscriptc"
name: "pyscriptc"
description: "Compile annotated Python to native binaries. Typed subset, opt-in CPython fallback."
readmeQualityOk: true
url: "https://github.com/sigilco/pyscriptc"
homepage: "https://pyscriptc.pages.dev"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["aot", "compiler", "cpython", "llvm", "native-binary", "python", "python314", "zig"]
stars: 7
forks: 0
openIssues: 151
closedIssues: 262
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-14T16:57:06Z"
lastCommitAt: "2026-11-07T09:30:03Z"
lastReleaseAt: "2026-10-24T10:17:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 91
undervaluedScore: 59
maintainers: ["espetro"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f7fc02bf51cd6616b899e2321a670f6b8c210ad197e3b1985ac0ed698632c21/sigilco/pyscriptc"
fundingLinks: ["CUSTOM:https://buy.polar.sh/polar_cl_Mv1gdlG7bw3I70EC9IHtfeSHJj4PEKvA7JAUz23CFhj"]
discussionCount: 0
---

pyscriptc compiles typed Python to native executables. It uses Python's inferred types and type hints to generate machine code from supported code.

### Quick start

```python
# hello.py
def main() -> None:
    print("hello from a native binary")

if __name__ == "__main__":
    main()
```

```bash
pyscriptc run hello.py
```

Live per-module and per-library support status: the [compat site](https://pyscriptc.pages.dev/compat/).

pyscriptc is experimental, aims for CPython compatibility, and supports a subset of Python, its builtins and standard library, and selected PyPI packages. Code outside the subset stops the build with a diagnostic code (`PSxxxx`) that names the exact line, or runs through embedded CPython (fallback mode) when you opt in with `--island` or `--fallback=cpython`. Fallback mode links against the host CPython: it is not bundled, and a Python installation is expected on the machine.

## Installation

macOS and Linux:

```bash
curl -LsSf https://raw.githubusercontent.com/sigilco/pyscriptc/master/docs/install.sh | sh
```

Windows:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/sigilco/pyscriptc/master/docs/install.ps1 |…
