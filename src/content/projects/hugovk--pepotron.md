---
repo: "hugovk/pepotron"
name: "pepotron"
description: "CLI to open PEPs in your browser"
url: "https://github.com/hugovk/pepotron"
homepage: "https://pypi.org/project/pepotron/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "command-line", "pep", "peps", "python", "python3", "hacktoberfest"]
stars: 37
forks: 1
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2022-03-11T19:00:49Z"
lastCommitAt: "2026-07-03T06:22:59Z"
lastReleaseAt: "2023-06-27T16:10:29Z"
status: "thriving"
tags: ["funded"]
healthScore: 86
undervaluedScore: 48
maintainers: ["hugovk", "renovate[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/657ac5ea712040c4e7a8c67a7a969bf0c4c99bf832351f4be28fd9da4388dba6/hugovk/pepotron"
fundingLinks: ["GITHUB:https://github.com/hugovk"]
---

# pepotron

CLI to open PEPs in your browser.

## Installation

### From PyPI

```bash
python3 -m pip install --upgrade pepotron
```

### With [pipx][pipx]

```bash
pipx install pepotron
```

[pipx]: https://github.com/pypa/pipx

### From source

```bash
git clone https://github.com/hugovk/pepotron
cd pepotron
python3 -m pip install .
```

## Usage

### Open a PEP

Run `pep` or `pepotron`, they do the same thing.

```console
$ pep 8
https://peps.python.org/pep-0008/
```

```console
$ # Or:
$ pepotron 8
https://peps.python.org/pep-0008/
$ # Or:
$ uvx pepotron 8
https://peps.python.org/pep-0008/
```

### Open release schedule PEP for a Python version

```console
$ pep 3.11
https://peps.python.org/pep-0664/
```

### Open a PEP by searching for words in the title

```console
$ pep dead batteries
Score   Result
90      PEP 594: Removing dead batteries from the standard library
61      PEP 767: Annotating Read-Only Attributes
58      PEP 415: Implement context suppression with exception attributes
55      PEP 476: Enabling certificate verification by default for stdlib http clients
55      PEP 500: A protocol for delegating datetime methods to their tzinfo implementations…
