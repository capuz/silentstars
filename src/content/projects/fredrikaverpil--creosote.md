---
repo: "fredrikaverpil/creosote"
name: "creosote"
description: "Identify unused dependencies and avoid a bloated virtual environment."
readmeQualityOk: true
url: "https://github.com/fredrikaverpil/creosote"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["python", "dependencies", "requirements"]
stars: 384
forks: 10
openIssues: 1
closedIssues: 51
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2022-02-06T08:44:43Z"
lastCommitAt: "2026-11-21T13:18:40Z"
lastReleaseAt: "2023-03-09T22:42:04Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 21
maintainers: ["fredrikaverpil", "AnthonyClark"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e325c5a2e4fd379b39deecad3ec2e82481483d1f09e9d000dce48853085f2cf/fredrikaverpil/creosote"
---

# creosote

Identify unused dependencies and avoid a bloated virtual environment.

## ⚡️ Quickstart

Install creosote in separate virtual environment, using e.g.
[`uv tool`](https://docs.astral.sh/uv/concepts/tools/):

```bash
uv tool install creosote
```

Scan virtual environment for unused dependencies
([PEP-621](https://peps.python.org/pep-0621/) example below, but
[Poetry](https://python-poetry.org/), [Pipenv](https://github.com/pypa/pipenv),
[PDM](https://pdm.fming.dev/latest/) and `requirements.txt` files are also
supported,
[see this table](#which-dependency-specification-toolingstandards-are-supported)):

```
$ creosote
Found dependencies in pyproject.toml: dotty-dict, loguru, pip-requirements-parser, requests, toml
Oh no, bloated venv! 🤢 🪣
Unused dependencies found: requests
```

And after having removed/uninstalled `requests`:

```
$ creosote
Found dependencies in pyproject.toml: dotty-dict, loguru, pip-requirements-parser, toml
No unused dependencies found! ✨
```

✋ Note that you will likely not be able to run `creosote` as-is, but will have
to configure it so it understands your project structure.

Get help:

```bash
creosote --help
```
