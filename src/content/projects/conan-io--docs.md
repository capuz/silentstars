---
repo: "conan-io/docs"
name: "docs"
description: "conan.io reStructuredText documentation"
readmeQualityOk: true
url: "https://github.com/conan-io/docs"
homepage: "http://docs.conan.io"
language: "C++"
languages: ["C++"]
languagePcts: [44]
topics: ["conan", "conan-documentation", "restructuredtext", "documentation"]
stars: 125
forks: 383
openIssues: 336
closedIssues: 584
watchers: 14
contributors: 271
recentReleases: 0
createdAt: "2015-12-01T11:42:37Z"
lastCommitAt: "2026-10-07T10:31:24Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 52
maintainers: ["czoido", "memsharded", "AbrilRBS"]
openGraphImageUrl: "https://opengraph.githubassets.com/e780d3018ade9d365c558817d60c236996cf8f7c9c85f1ee79b37b73aaddbb54/conan-io/docs"
---

Documentation for Conan C/C++ package manager: https://conan.io

How to build
============

- Install prerequisites:
  - [graphviz](https://graphviz.org/download)
  - [enchant](https://pyenchant.github.io/pyenchant/install.html)

- Install python and [pip docs](https://pip.pypa.io/en/stable/installing/).
- Install the requirements (sphinx):

  `$ pip install -r requirements.txt`

- Point to the Conan source code folder (``git clone https://github.com/conan-io/conan && cd conan && git checkout develop2``)

  - Windows:
  `$ set PYTHONPATH=<your/path/to/conan>;%PYTHONPATH%`
  - Linux:
  `$ export PYTHONPATH=<your/path/to/conan>:$PYTHONPATH`

- Build the documentation:

  `$ make html`

How to read the built docs
==========================

Open a browser and select the *_build/html/index.html* file.

Example:

`$ firefox _build/html/index.html`

How to contribute
=================

To make any contribution to Conan documentation fork this repository and open a Pull Request.

Style Guidelines
----------------

This guidelines are just general good practices for the formatting and structure of the whole documentation and do not pretend to be a
stopper for any helpful contribution. Any…
