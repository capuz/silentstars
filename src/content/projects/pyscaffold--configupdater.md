---
repo: "pyscaffold/configupdater"
name: "configupdater"
description: "🌴 Parser like ConfigParser but for updating configuration files"
readmeQualityOk: true
url: "https://github.com/pyscaffold/configupdater"
homepage: "https://configupdater.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "configuration-files", "updating"]
stars: 73
forks: 14
openIssues: 1
closedIssues: 35
watchers: 3
contributors: 14
recentReleases: 1
createdAt: "2018-06-15T08:27:36Z"
lastCommitAt: "2026-10-24T08:07:30Z"
lastReleaseAt: "2026-10-18T17:41:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 55
maintainers: ["FlorianWilhelm", "pre-commit-ci[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/137461722/80157d80-cd4d-11eb-8628-8a10cc1a5796"
fundingLinks: ["GITHUB:https://github.com/FlorianWilhelm", "CUSTOM:https://www.paypal.me/FlorianWilhelm"]
---

|         |                                    |
|---------|------------------------------------|
| CI/CD   | [][Tests-link] [][Coverage-link] [][Publish-link] [][sponsor-link]  |
| Package | [][PyPI_ver-link] [][Conda-link] [][PyPI_down-link] [][PyPI_py-link] |
| Details | [][uv-link] [][ruff-link] [][pytest-link] [][precommit-link] [][mypy-link] [][MIT-link] [][rtd-link] |

The sole purpose of [ConfigUpdater] is to easily
update an INI config file with no changes to the original file except
the intended ones. This means comments, the ordering of sections and
key/value-pairs as wells as their cases are kept as in the original
file. Thus ConfigUpdater provides complementary functionality to
Python\'s [ConfigParser], which is primarily meant for reading config
files and writing *new* ones.

# Features

The key differences to [ConfigParser] are:

- minimal invasive changes in the update configuration file,
- proper handling of comments,
- only a single config file can be updated at a time,
- the original case of sections and keys are kept,
- control over the position of a new section/key

Following features are **deliberately not** implemented:

- interpolation of values,
-…
