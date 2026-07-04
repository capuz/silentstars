---
repo: "scipy/scipy-stubs"
name: "scipy-stubs"
description: "Official type stubs for SciPy"
readmeQualityOk: true
url: "https://github.com/scipy/scipy-stubs"
homepage: "https://scipy.org"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "scipy", "stubs-only", "python-typing"]
stars: 92
forks: 37
openIssues: 127
closedIssues: 224
watchers: 11
contributors: 66
recentReleases: 0
createdAt: "2024-08-22T01:00:45Z"
lastCommitAt: "2026-07-04T22:24:42Z"
lastReleaseAt: "2024-12-15T23:07:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 49
maintainers: ["jorenham", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1c6c06e0a47352162e8aa0abc8551fda97b63e2eb768a67cb94623ecc56c846/scipy/scipy-stubs"
fundingLinks: ["GITHUB:https://github.com/numfocus", "TIDELIFT:https://tidelift.com/funding/github/pypi/scipy", "CUSTOM:https://opencollective.com/scipy"]
discussionCount: 2
---

# scipy-stubs

**The official type stubs for [SciPy](https://github.com/scipy/scipy).**

> Used by [Pandas](https://github.com/pandas-dev/pandas), [JAX](https://github.com/jax-ml/jax), [Apache Spark](https://github.com/apache/spark), [Astropy](https://github.com/astropy/astropy), [Ultralytics](https://github.com/ultralytics/ultralytics), [Altair](https://github.com/vega/altair), and [many other projects](#whos-using-scipy-stubs).

## Features

- **Complete coverage**: the entire public SciPy API is annotated.
- **Shape- and dtype-aware**: array shapes and dtypes are tracked where applicable.
- **Generics**: subscriptable types for sparse arrays, distributions, splines, and linear operators.
- **No configuration**: works on install, affects type checking only, with no runtime impact.
- **Broad checker support**: tested against mypy, pyright, basedpyright, pyrefly, ty, and zuban.
- **Thoroughly tested**: `stubtest` against the runtime, [`assert_type` tests][TYPETESTS] for inference, and [mypy_primer][PRIMER] for regressions.

[TYPETESTS]: https://github.com/scipy/scipy-stubs/tree/master/tests
[PRIMER]: https://github.com/hauntsaninja/mypy_primer

## Examples

### Accurate type hints…
