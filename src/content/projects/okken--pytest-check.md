---
repo: "okken/pytest-check"
name: "pytest-check"
description: "A pytest plugin that allows multiple failures per test."
readmeQualityOk: true
url: "https://github.com/okken/pytest-check"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["pytest", "pytest-plugin", "assertion-library"]
stars: 425
forks: 40
openIssues: 1
closedIssues: 108
watchers: 6
contributors: 28
recentReleases: 0
createdAt: "2017-10-30T02:22:27Z"
lastCommitAt: "2026-08-01T06:14:14Z"
lastReleaseAt: "2025-02-13T02:18:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 87
undervaluedScore: 22
maintainers: ["okken", "siferati", "taylermulligan"]
openGraphImageUrl: "https://opengraph.githubassets.com/41a91ab7ec06f1b041fd93143e90fe2ca32b895dbffcb2ab24e350a82fc08bc3/okken/pytest-check"
fundingLinks: ["GITHUB:https://github.com/okken"]
---

# pytest-check

A pytest plugin that allows multiple failures per test.

----

Normally, a test function will fail and stop running with the first failed `assert`.
That's totally fine for tons of kinds of software tests.
However, there are times where you'd like to check more than one thing, and you'd really like to know the results of each check, even if one of them fails.

`pytest-check` allows multiple failed "checks" per test function, so you can see the whole picture of what's going wrong.

## Installation

From PyPI:

```
$ pip install pytest-check
```

From conda (conda-forge):
```
$ conda install -c conda-forge pytest-check
```

## Example

Quick example of where you might want multiple checks:

```python
import httpx
from pytest_check import check

def test_httpx_get():
    r = httpx.get('https://www.example.org/')
    # bail if bad status code
    assert r.status_code == 200
    # but if we get to here
    # then check everything else without stopping
    with check:
        assert r.is_redirect is False
    with check:
        assert r.encoding == 'utf-8'
    with check:
        assert 'Example Domain' in r.text
```

## Import vs fixture

The example above used import:…
