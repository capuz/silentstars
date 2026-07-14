---
repo: "notatallshaw/nab"
name: "nab"
description: "PubGrub-based dependency resolver for Python packages"
readmeQualityOk: true
url: "https://github.com/notatallshaw/nab"
homepage: "https://nab.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 22
forks: 1
openIssues: 11
closedIssues: 37
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-05-15T03:41:03Z"
lastCommitAt: "2026-07-14T05:55:53Z"
lastReleaseAt: "2026-07-11T22:31:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 95
undervaluedScore: 51
maintainers: ["notatallshaw"]
openGraphImageUrl: "https://opengraph.githubassets.com/68aafc1789c0e9a834d17469e4e49eff0252ab0cb11ec98cc969457e396237e4/notatallshaw/nab"
---

# nab

nab is an experimental Python packaging lock and package download tool,
aiming to have similar resolver performance to uv, while being written
in Python.

nab reads a `pyproject.toml`, resolves the dependency tree, and
writes a pinned set of versions or a PEP 751 lockfile. It does not
install. Hand the lockfile to whatever installer you trust.

## Documentation

<https://nab.readthedocs.io/>

## Install

For package hygiene, and security reasons, the preference is to install nab itself
as a tool, e.g.

Via pipx:

```bash
pipx install nab
```

Or via uv:

```bash
uv tool install nab
```

## Quick start

```toml
# pyproject.toml
[project]
name = "example"
version = "0.1.0"
dependencies = [
    "starlette<=0.36.0",
    "fastapi<=0.115.2",
]
```

```bash
nab lock pyproject.toml
```

Writes `pylock.toml` next to the project. For a sorted
`name==version` list instead, use
`nab lock --format requirements-without-hashes --output -`.

# Security

nab makes some opinionated choices to be secure first

## Build policy

By default nab tries to extract static metadata, even from sdists,
but sometimes that is not possible and you have to build a package
to extract the dependency…
