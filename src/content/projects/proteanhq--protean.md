---
repo: "proteanhq/protean"
name: "protean"
description: "Pragmatic Framework for Ambitious Applications"
url: "https://github.com/proteanhq/protean"
homepage: "https://docs.proteanhq.com/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["python", "domain-driven-design", "ports-and-adapters", "cqrs", "framework"]
stars: 39
forks: 34
openIssues: 56
closedIssues: 251
watchers: 8
contributors: 9
recentReleases: 0
createdAt: "2018-07-15T12:51:10Z"
lastCommitAt: "2026-06-24T00:21:57Z"
lastReleaseAt: "2019-10-18T00:42:24Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 65
maintainers: ["subhashb", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/141027053/442cc1a2-e185-406d-a497-51e0dfda8e32"
discussionCount: 15
---

# Protean

**Protean** is an opinionated and pragmatic framework for building event-driven applications using the CQRS pattern.

## Installation

Protean is available on PyPI:

```console
$ pip install protean
```

Protean officially supports Python 3.11+.

## Quick Start

```python
from protean import Domain
from protean.fields import String, Text

domain = Domain(name="Publishing")

@domain.aggregate
class Post:
    title: String(required=True, max_length=1000)
    slug: String(required=True, max_length=1024)
    content: Text(required=True)

domain.init()
with domain.domain_context():
    post = Post(
        title="Hello World",
        slug="hello-world",
        content="Lorem Ipsum ..."
    )

    domain.repository_for(Post).add(post)
```

## Documentation

Online docs are available at [https://docs.proteanhq.com](https://docs.proteanhq.com).

## Quality

Protean is tested against 5 backing services across 4 Python versions on every commit.

| Metric | Value |
|---|---|
| Tests | 7,674 (3.0:1 test-to-code ratio) |
| Linting | Zero violations (Ruff) |
| Complexity | Avg 3.38 cyclomatic (A grade) |
| Maintainability | A rank (95% of files) |
| CI Matrix | Python 3.11-3.14 x…
