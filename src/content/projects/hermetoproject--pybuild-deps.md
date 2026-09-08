---
repo: "hermetoproject/pybuild-deps"
name: "pybuild-deps"
description: "A simple tool for detection of PEP-517 build dependencies."
readmeQualityOk: true
url: "https://github.com/hermetoproject/pybuild-deps"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 10
openIssues: 5
closedIssues: 18
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2023-01-25T18:44:51Z"
lastCommitAt: "2026-09-08T08:17:09Z"
lastReleaseAt: "2024-09-07T02:09:26Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 90
maintainers: ["derasdf", "dependabot[bot]", "eskultety"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f640dbf66c91814a8920a0814cfdc3affb10b0496cd40b831a7083216a08b18/hermetoproject/pybuild-deps"
discussionCount: 0
---

# pybuild-deps

[pypi status]: https://pypi.org/project/pybuild-deps/
[read the docs]: https://pybuild-deps.readthedocs.io/
[tests]: https://github.com/hermetoproject/pybuild-deps/actions?workflow=Tests
[codecov]: https://app.codecov.io/gh/hermetoproject/pybuild-deps
[pre-commit]: https://github.com/pre-commit/pre-commit
[ruff badge]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json
[ruff project]: https://github.com/charliermarsh/ruff

CLI tools to help dealing with python build dependencies. It aims to complement
tools that can pin dependencies like `pip-tools` and `poetry`.
For users relying exclusively on python wheels, those tools are more than enough.
However, for users building applications from source, finding and pinning build dependencies
is required for reproducible builds.

`pybuild-deps` might be useful for developers that need to explicitly declare
**all** dependencies for compliance reasons or supply chain concerns.

## Features

- find build dependencies for a given python package
- generate pinned build requirements from requirements.txt files.

## Installation

You can install _pybuild-deps_ via [pip]…
