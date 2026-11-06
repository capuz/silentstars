---
repo: "jsnjack/invenv"
name: "invenv"
description: "A tool to automatically create and run your Python scripts in a virtual environment with installed dependencies"
readmeQualityOk: true
url: "https://github.com/jsnjack/invenv"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["python", "python-venv", "python-virtual-environment", "python-virtualenv"]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-30T23:22:01Z"
lastCommitAt: "2026-11-06T13:08:39Z"
lastReleaseAt: "2023-11-12T12:45:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 63
undervaluedScore: 30
maintainers: ["jsnjack"]
openGraphImageUrl: "https://opengraph.githubassets.com/17270e2305d4059b653a40b3932f09337eed74d5a29f2fbb0d8d9abf91669ce1/jsnjack/invenv"
---

invenv
==============

`invenv` is a tool to run your Python scripts in an automatically created virtual
environment with installed dependencies.

It tries to simplify running Python scripts (or even applications!) by taking
from you the burden of creating and maintaining virtual environments.

### Description
```
Usage:
  invenv [invenv-flags] -- [VAR=val] python-script.py [flags]
  invenv [command]

Examples:
invenv -- somepath/myscript.py
invenv -n -- somepath/myscript.py --version
invenv -r req.txt -- DEBUG=1 somepath/myscript.py

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  help        Help about any command
  init        initialize a virtual environment in the current directory

Flags:
  -d, --debug                      Debug-level logging on stderr.
  -h, --help                       help for invenv
  -n, --new-environment            create a new virtual environment even if it already exists
  -p, --python string              use specified Python interpreter
  -r, --requirements-file string   use specified requirements file. If not provided, it
                                   will try to guess the requirements file name:…
