---
repo: "perfact/zodbsync"
name: "zodbsync"
description: "Dump and restore objects between a ZODB and a serialized file system structure"
readmeQualityOk: true
url: "https://github.com/perfact/zodbsync"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["zope", "zodb"]
stars: 10
forks: 7
openIssues: 2
closedIssues: 26
watchers: 5
contributors: 14
recentReleases: 0
createdAt: "2018-09-30T14:14:34Z"
lastCommitAt: "2026-08-05T06:06:09Z"
lastReleaseAt: "2021-07-22T09:53:27Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 81
undervaluedScore: 47
maintainers: ["viktordick", "Wiseqube"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc57f66cafdcfa7c4727ee4885ebb15692ee673ada04d37810a4c007310466dc/perfact/zodbsync"
---

# PerFact ZODBSync

This package provides tools to serialize Zope objects and store them in a file
system structure as well as to restore Zope objects from this structure.

Some features require that the file system structure is governed by `git` as
version control system.

## Maintainers:
Ján Jockusch <jan.jockusch@perfact.de>

Viktor Dick <viktor.dick@perfact.de>

## Repository:

    git clone https://github.com/perfact/zodbsync.git

## Building and publishing
In general, the PyPi access token is personalized, so publishing can only be
done by one person (currently Viktor). Scratch tokens are stored in the PerFact
vault so this can be changed in the case of an emergency.

See https://packaging.python.org/en/latest/tutorials/packaging-projects/.

The username `__token__` and the password from pypi needs to be stored to
`~/.pypirc`. Then:

    virtualenv venv
    venv/bin/pip install build twine
    venv/bin/python -m build
    venv/bin/twine upload dist/*

## Installation

The package should be installed using `pip` in the same virt-env as `zope`, p.e.

    zope/bin/pip install perfact-zodbsync

On PerFact systems, it should automatically be pulled by the `requirements.txt`
of…
