---
repo: "soasme/small-python"
name: "small-python"
description: "A small, embeddable Python 3 Interpreter written in C11."
readmeQualityOk: true
url: "https://github.com/soasme/small-python"
language: "Python"
languages: ["Python", "C"]
languagePcts: [57, 30]
stars: 22
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-10-26T08:07:31Z"
lastCommitAt: "2026-11-07T09:30:21Z"
lastReleaseAt: "2026-11-05T10:30:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["soasme"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5442b9e11ac7888ddbba6aed5f1b63bda9c0d7bf229219e34c39fe127339313/soasme/small-python"
---

# Small Python

A small, embeddable Python engine written in C11.

Small Python runs Python 3.15 code with nothing but a C compiler and the C
standard library. It is a few C files, one header to embed, and a plain
Makefile. CPython is not needed to build or run it.

```sh
$ make
$ ./spy -c 'print(sum(range(10)))'
45
```

## Features

- **The Python 3.15 core language**: arbitrary-precision integers, Unicode,
  classes and metaclasses, generators, `async`/`await`, pattern matching,
  f-strings, and template strings.
- **Embeddable**: one header, `spy.h`, and one library, `libspy.a`. Each
  context is independent, with no global state.
- **Automatic memory management**: reference counting plus a cycle collector.
- **Standalone executables**: `spyc` turns a `.py` file into a C program.
- **Sandboxed files**: scripts can only `open` the directories the host mounts.
- **Packages** for [Python, JavaScript, Rust, and Go](#packages), each able to
  run untrusted code in a sandboxed worker.
- **Fast startup**: about 190 µs to create a context, run hello world, and
  tear it down (Apple M2, `-O2`).

## Conformance

Small Python implements the Core profile of…
