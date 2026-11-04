---
repo: "eea/odfpy"
name: "odfpy"
description: "API for OpenDocument in Python"
readmeQualityOk: true
url: "https://github.com/eea/odfpy"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 368
forks: 78
openIssues: 81
closedIssues: 30
watchers: 63
contributors: 56
recentReleases: 0
createdAt: "2014-05-20T07:25:50Z"
lastCommitAt: "2026-11-04T08:03:21Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 24
maintainers: ["sorenroug", "kmanoochehri1978-dev", "Andrej730"]
openGraphImageUrl: "https://opengraph.githubassets.com/e418301ab95713a186640fc16d464663c0e8054ce64e03503d043b8e33a4d11d/eea/odfpy"
---

# ODFPY

This is a collection of utility programs written in Python to manipulate
OpenDocument 1.2 files.

How to proceed: Each application has its own directory. In there, look
at the manual pages. The Python-based tools need the odf library. Just
make a symbolic link like this: ln -s ../odf odf
... or type: make

For your own use of the odf library, see api-for-odfpy.odt

## INSTALLATION

First you get the package.

    $ git clone https://github.com/eea/odfpy.git

Then you can build and install the library for Python2 and Python3:

```
$ python setup.py build
$ python3 setup.py build
$ su
# python setup.py install
# python3 setup.py install
```
The library is incompatible with PyXML.

## RUNNING TESTS

Install `tox` via `pip` when running the tests for the first time:

```
$ pip install tox
```

Run the tests for all supported python versions:

```
$ tox
```

## REDISTRIBUTION LICENSE

This project, with the exception of the OpenDocument schemas, are
Copyright (C) 2006-2014, Daniel Carrera, Alex Hudson, Søren Roug,
Thomas Zander, Roman Fordinal, Michael Howitz and Georges Khaznadar.

It is distributed under both GNU General Public License v.2 or (at
your option) any later…
