---
repo: "PlasmaFAIR/fortitude"
name: "fortitude"
description: "A Fortran linter, written in Rust and installable with Python."
readmeQualityOk: true
url: "https://github.com/PlasmaFAIR/fortitude"
homepage: "https://fortitude.readthedocs.io/en/stable/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["fortran", "linter", "python", "rust"]
stars: 221
forks: 39
openIssues: 135
closedIssues: 229
watchers: 5
contributors: 32
recentReleases: 0
createdAt: "2024-01-02T14:41:26Z"
lastCommitAt: "2026-10-26T09:17:26Z"
lastReleaseAt: "2025-03-04T12:15:59Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 90
undervaluedScore: 41
maintainers: ["ZedThree", "eduardz1", "jackdfranklin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3a7bc933425cd700d34609953a71050546a5c64dcfdb3fb3da77c2052bf7548/PlasmaFAIR/fortitude"
---

# Fortitude

A Fortran linter, inspired by (and built upon) [Ruff](https://github.com/astral-sh/ruff).
Written in Rust :crab: and installable with Python :snake:.

- :zap: Blazingly fast, up to hundreds of times faster than other open-source Fortran
  linters.
- :wrench: Automatically fixes linter warnings.
- :chart_with_upwards_trend: Over 100 rules, with many more planned.
- :page_with_curl: Multiple output formats, including SARIF and GitHub/GitLab CI.
- :handshake: Follows [community best
  practices](https://fortran-lang.org/learn/best_practices/).
- :muscle: Built on a robust [tree-sitter](https://tree-sitter.github.io/tree-sitter/)
  parser.

Fortitude is developed by
[PlasmaFAIR](https://plasmafair.readthedocs.io), improving the
sustainability of plasma science research software.

## Table of Contents

For more detail, please see our [documentation](https://fortitude.readthedocs.io).

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Fortitude is available as
[`fortitude-lint`](https://pypi.org/project/fortitude-lint) on PyPI:

```bash
# With uv:
uv tool install fortitude-lint@latest

# With pip:
pip…
