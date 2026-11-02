---
repo: "astral-experiments/imre"
name: "imre"
description: "An experimental ahead-of-time compiler for typed Python, written in Rust."
readmeQualityOk: true
url: "https://github.com/astral-experiments/imre"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [54, 45]
stars: 10
forks: 0
openIssues: 111
closedIssues: 1003
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-10-17T14:45:43Z"
lastCommitAt: "2026-11-02T17:57:38Z"
lastReleaseAt: "2026-11-01T19:29:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 56
maintainers: ["charliermarsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/10c830f6bf3556d969cb2f0ad9c9af85a8898356b59ff375330a19c520591215/astral-experiments/imre"
---

# <img src="docs/assets/imre-mark.svg" width="24" height="24" alt=""> Imre

An experimental ahead-of-time compiler for typed Python, written in Rust.

> [!WARNING]
> This README includes human edits; all code changes, PR summaries, and additional
> documentation were authored entirely by GPT-6 Astra in [Codex](https://openai.com/codex/).
>
> Imre implements only a small part of Python and its standard library,
> with no guarantee of future development or maintenance. Use at your own risk.

## Benchmarks

Imre and CPython 3.14.5 run the same Python programs. The Rust versions use
the same inputs and produce the same outputs. Each bar shows the median time
for 12 fresh processes pinned to one AMD EPYC Milan CPU.

The frozen Flask app compiles its routes and Jinja template ahead of time.
Node.js, Bun and Rust/Hyper implement the same routes directly.

## Hello, world!

```python
# hello.py
def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("world"))
```

On Apple Silicon macOS or 64-bit Linux, build and run the executable.

```console
$ imre build hello.py
$ ./hello
Hello, world!
```

Or run directly, as native code:

```console
$ imre hello.py
Hello, world!
$…
