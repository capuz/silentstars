---
repo: "speg03/nestargs"
name: "nestargs"
description: "Nested arguments parser"
url: "https://github.com/speg03/nestargs"
homepage: "https://pypi.org/project/nestargs/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["argparse", "arguments-parser", "python"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2019-06-13T12:48:45Z"
lastCommitAt: "2026-06-23T06:42:53Z"
lastReleaseAt: "2023-11-12T05:26:20Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 73
undervaluedScore: 48
maintainers: ["speg03", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f73021284373151ceffa4989ad6d0b530c48ad9e065ee43d1024db5cc7240c40/speg03/nestargs"
---

# nestargs

*nestargs* is a Python library that treats command line arguments as a hierarchical structure. The functionality for interpreting command line arguments is the same as argparse.

## Installation

```
pip install nestargs
```

## Basic usage

When defining command line arguments, use "." as the delimiter. to represent a variable hierarchy. The following code example defines an `n` and `price` variable in the `apple` hierarchy and another separate `n` and `price` variable in the `banana` hierarchy.

```python
import nestargs

parser = nestargs.NestedArgumentParser()

parser.add_argument("--apple.n", type=int)
parser.add_argument("--apple.price", type=float)

parser.add_argument("--banana.n", type=int)
parser.add_argument("--banana.price", type=float)

args = parser.parse_args(
    ["--apple.n=2", "--apple.price=1.5", "--banana.n=3", "--banana.price=3.5"]
)
# => _NestedNamespace(apple=_NestedNamespace(n=2, price=1.5), banana=_NestedNamespace(n=3, price=3.5))
```

Variables obtained by parsing command line arguments can be referenced by hierarchy.

```python
args.apple
# => _NestedNamespace(n=2, price=1.5)
```

Of course, you can also refer directly to variables lower down…
