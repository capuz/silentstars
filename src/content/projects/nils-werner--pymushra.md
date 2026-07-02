---
repo: "nils-werner/pymushra"
name: "pymushra"
description: "pyMUSHRA is a python web application which hosts webMUSHRA experiments and collects the data with python."
url: "https://github.com/nils-werner/pymushra"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [75, 22]
topics: ["python", "audio", "research", "server"]
stars: 47
forks: 11
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2019-01-31T16:38:32Z"
lastCommitAt: "2026-07-02T06:32:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 31
maintainers: ["nils-werner", "csevast"]
openGraphImageUrl: "https://opengraph.githubassets.com/68559bf3606320f2acf3d9d7f9dfe2cf871e55602629b8db621112bc2e549c58/nils-werner/pymushra"
---

pyMUSHRA
========

Description
-----------

pyMUSHRA is a python web application which hosts [webMUSHRA](https://github.com/audiolabs/webMUSHRA) experiments
and collects the data with python.

Quick Start
-----------

You can quickly spin up a pyMUSHRA server [using `uv`](https://docs.astral.sh/uv/guides/tools/) or [`pipx`](https://github.com/pypa/pipx):

    uvx pymushra -w <path/to/webmushra-sourcedir> server
    pipx run pymushra -w <path/to/webmushra-sourcedir> server

Installation
------------

You can install pyMUSHRA in a project using

    uv add pymushra
    uv run pymushra server

or

    pip install pymushra
    pymushra server

Then open <http://localhost:5000/admin/>

Debugging
---------

You may use the additional tools

    uvx pymushra db

to load and inspect the TinyDB connection and

    uvx pymushra df [collection]

to inspect the Pandas DataFrame export the TinyDB collection.

Server Installation
-------------------

For a long-running pyMUSHRA installation, please do not use the builtin server but instead use a proper
HTTP server, like Apache or Nginx. See [DEPLOYMENT.md](DEPLOYMENT.md) for installation instructions.
