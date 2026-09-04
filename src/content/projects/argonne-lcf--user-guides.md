---
repo: "argonne-lcf/user-guides"
name: "user-guides"
description: "ALCF Systems User Documentation"
readmeQualityOk: true
url: "https://github.com/argonne-lcf/user-guides"
homepage: "https://docs.alcf.anl.gov/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [60, 32]
stars: 31
forks: 52
openIssues: 9
closedIssues: 136
watchers: 38
contributors: 88
recentReleases: 0
createdAt: "2021-05-11T19:36:58Z"
lastCommitAt: "2026-09-04T08:10:43Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 98
undervaluedScore: 63
maintainers: ["github-actions[bot]", "felker", "alcf-haritha"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5e8e5ef184a920e032f1fae723ad8206871c3085ba3cdb4747c068caedc114b/argonne-lcf/user-guides"
---

# ALCF User Guide
Source for the documentation located at https://docs.alcf.anl.gov/

## Contributing to documentation

### Python environment

To build documentation locally, you need a Python environment with `mkdocs` installed.  Check that Python 3.6+ is installed:
```bash
python --version
```
e.g. `Python 3.8.3`. Then create a new virtual env to isolate the `mkdocs` installation:
```bash
python -m venv env
source env/bin/activate
```

### Git

Using Git's SSH protocol. Make sure you add your SSH public key to your GitHub account:
```bash
git clone git@github.com:argonne-lcf/user-guides.git
cd user-guides
git submodule init; git submodule update
```

### Installing MkDocs

To install `mkdocs` in the current environment: 
```bash
cd user-guides
make install-dev
```

### Preview the docs locally and test for errors

Run `mkdocs serve` or `make serve` to auto-build and serve the docs for preview in your web browser:
```bash
make serve
```

GitHub Actions are used to automatically validate all changes in pull requests before they are merged, by executing `mkdocs build --strict`. The [`--strict`](https://www.mkdocs.org/user-guide/configuration/#validation) flag will print out…
