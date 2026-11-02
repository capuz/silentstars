---
repo: "MaddyGuthridge/Jestspectation"
name: "Jestspectation"
description: "Pattern matching tools to test complex data structures."
readmeQualityOk: true
url: "https://github.com/MaddyGuthridge/Jestspectation"
homepage: "https://maddyguthridge.github.io/Jestspectation/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["jest", "pattern-matching", "pytest", "pytest-plugin", "testing"]
stars: 10
forks: 0
openIssues: 7
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-11-10T11:18:17Z"
lastCommitAt: "2026-11-02T15:17:24Z"
lastReleaseAt: "2022-11-12T12:43:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 56
maintainers: ["MaddyGuthridge", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6583e8342540f2c6d302310a62f80ce85d8a21bcb8f08470623d607906db1910/MaddyGuthridge/Jestspectation"
---

# Jestspectation

Pattern matching tools to test complex data structures.

The design is inspired by the `expect` system from JavaScript's Jest testing
framework.

```py
>>> import jestspectation as expect
>>> assert {
...     "a": 1,
...     "b": 2,
...     "c": 3.0,
... } == {
...     "a": 1,
...     "b": expect.Any(int),
...     "c": expect.FloatApprox(2.5, magnitude=0.5)
... }

```

## Documentation

Documentation can be found [on GitHub Pages](https://maddyguthridge.github.io/Jestspectation/).

## Installation

```sh
pip install jestspectation
```

## Usage with Pytest

The library can be used as a pytest plugin, which can give access to much more
detailed error messages when assertions fail.

This should result in output similar to the following

```txt
    def test_goodbye():
>       assert 1 == expect.Any(float)
E       assert Type mismatch
E         Expected any object of type float
E         Received 1 (int)
```

These advanced completions can also be used for most standard Python objects
by wrapping the expected values in an `Equals`. For example:

```txt
    def test_lists():
>       assert expect.Equals([1, 2, 3, 4]) == [1, 2, 3, 5, 6]
E       assert [1, 2, 3, 4] ==…
