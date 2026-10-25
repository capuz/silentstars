---
repo: "manthey/pyexe"
name: "pyexe"
description: "Create a single Windows executable for python 3.11-3.15t"
readmeQualityOk: true
url: "https://github.com/manthey/pyexe"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 52
forks: 13
openIssues: 3
closedIssues: 12
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2018-04-08T00:12:16Z"
lastCommitAt: "2026-10-25T22:10:20Z"
lastReleaseAt: "2026-10-25T13:48:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 55
maintainers: ["manthey", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c37674fa22c3867a895e04dcd45fb59b4fb4e62176491284c28e56789de4623a/manthey/pyexe"
---

# pyexe.exe

Here is a stand-alone version of python that is a single Windows executable.

It consists of recent versions of Python (with 64-bit builds for 3.11 through
3.15, plus free-threaded builds for 3.14t and 3.15t), pywin32, psutil (not in
the free-threaded builds), pip, setuptools, and includes all packages that can
be included without additional dlls, excepting tkinter.

See the GitHub Actions workflow (.github/workflows/build.yml) for build
instructions.

## Installing other modules

Python is most useful with additional modules.  The stand-alone executable can use pip to install modules from pypi to the local directory.  For instance:

```bash
py314-64.exe -m pip install --no-cache-dir --target . --upgrade sympy
```

Use `-m pip` to run the pip module.  Use `--no-cache-dir` to avoid writing files to the user's data directory.  Use `--target .` to install to the current directory, allowing you to import the modules easily.  Use `--upgrade` to replace existing files, such as the common `bin` directory.  Note that using `--upgrade` will overwrite or discard existing files, which may not be what you want (the `bin` directory will end up with just files for the most recently…
