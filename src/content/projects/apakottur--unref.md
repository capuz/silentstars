---
repo: "Apakottur/unref"
name: "unref"
description: "An extremely fast Python dead code finder, written in Rust."
readmeQualityOk: true
url: "https://github.com/Apakottur/unref"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [62, 38]
topics: ["code-quality", "dead-code", "linter", "python", "ruff", "static-analysis", "unused-code"]
stars: 132
forks: 3
openIssues: 0
closedIssues: 48
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-11-11T15:27:47Z"
lastCommitAt: "2026-11-21T13:29:16Z"
lastReleaseAt: "2026-11-13T14:39:07Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 35
maintainers: ["Apakottur", "eddiethedean", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/67096d292e080325070e0fbc5d3bb2080883491f3344ddf6177bf51715b5efb9/Apakottur/unref"
---

# unref

An extremely fast Python dead code finder, written in Rust.

  measured with <a href="https://github.com/Apakottur/unref/blob/main/scripts/benchmark.py"><code>scripts/benchmark.py</code></a>.</i>

- **Fast**: 20x faster than [vulture](https://github.com/jendrikseipp/vulture), it checks all of CPython's Python code in
  under a second.
- **Just works**: built-in rules for pytest, Django, Flask, Pydantic, SQLAlchemy and
  [more](https://unref.readthedocs.io/en/latest/frameworks/), so most projects need little or no
  configuration.
- **Flexible**: works for applications and libraries alike, see
  [what counts as dead code](https://unref.readthedocs.io/en/latest/faq/#what-counts-as-dead-code).
- **Modern**: follows the conventions of [Ruff](https://docs.astral.sh/ruff/) and [ty](https://docs.astral.sh/ty/).
- **Fits your workflow**: runs with `uvx`, as a pre-commit or prek hook, and in GitHub Actions.

**Documentation**: [unref.readthedocs.io](https://unref.readthedocs.io/)

## Getting Started

Run it with [`uvx`](https://docs.astral.sh/uv/):

```shell
$ uvx unref
src/project/models.py:12:7: unused-class 'Account'
src/project/utils.py:40:5: unused-function 'parse_date'
```
