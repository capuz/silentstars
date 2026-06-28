---
repo: "phonopy/phonopy"
name: "phonopy"
description: "Phonon code"
url: "https://github.com/phonopy/phonopy"
homepage: "http://phonopy.github.io/phonopy/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 482
forks: 258
openIssues: 11
closedIssues: 176
watchers: 23
contributors: 52
recentReleases: 0
createdAt: "2012-12-11T08:08:20Z"
lastCommitAt: "2026-06-28T01:46:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 40
maintainers: ["atztogo", "pre-commit-ci[bot]", "Andrew-S-Rosen"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f4c65f44da40a60f0f6cc0d3e6d5b183b25712de5c557fb4a035bbd3eb9ada2/phonopy/phonopy"
---

# Phonopy

Phonon code mainly written in Python, with the compute-intensive parts handled
by the Rust backend (phonors). Phonopy user documentation is found at
http://phonopy.github.io/phonopy/

## Installation

See https://phonopy.github.io/phonopy/install.html.

## Mailing list for questions

Usual phonopy questions should be sent to phonopy mailing list
(https://sourceforge.net/p/phonopy/mailman/).

## Development

The development of phonopy is managed on the `main` branch of the github phonopy
repository.

- Github issues is the place to discuss about phonopy issues.
- Github pull request is the place to request merging source code.
- Architecture principles and the migration plan toward v5/v6 are
  documented at https://phonopy.github.io/phonopy/development.html.

### Formatting

Formatting rules are found in `pyproject.toml`.

### pre-commit

Pre-commit (https://pre-commit.com/) is mainly used for applying the formatting
rules automatically. Therefore, it is strongly encouraged to use it at or before
git-commit. Pre-commit is set-up and used in the following way:

- Installed by `pip install pre-commit`, `conda install pre-commit` or see
  https://pre-commit.com/#install.
-…
