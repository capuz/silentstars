---
repo: "Clinical-Genomics/cg"
name: "cg"
description: "Glue between Clinical Genomics apps"
readmeQualityOk: true
url: "https://github.com/Clinical-Genomics/cg"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 12
forks: 4
openIssues: 114
closedIssues: 1476
watchers: 6
contributors: 56
recentReleases: 0
createdAt: "2017-02-20T14:29:43Z"
lastCommitAt: "2026-11-04T13:04:45Z"
lastReleaseAt: "2021-08-19T07:16:25Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 69
maintainers: ["clingen-sthlm", "RasmusBurge-CG", "islean"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b465894275cbcf940a1fecbcbc9f7cd587f72d8435e029d4fe7253f07e5e74b/Clinical-Genomics/cg"
discussionCount: 4
---

# cg

`cg` stands for _Clinical Genomics_; a clinical sequencing platform under [SciLifeLab][scilife]

In this context, `cg` provides the interface between these tools to facilitate automation and other necessary cross-talk. It also exposes some APIs:

- HTTP REST for powering the web portal: [clinical.scilifelab.se][portal]
- CLI for interactions on the command line.

### Contributing

Please check out our [guide for contributing to cg](https://github.com/Clinical-Genomics/cg/blob/HEAD/CONTRIBUTING.md)

## Installation

Cg written in Python 3.9+ and is available on the [Python Package Index][pypi] (PyPI).

```bash
pip install cg
```

If you would like to install the latest development version, use [poetry](https://python-poetry.org/docs/).

```bash
git clone https://github.com/Clinical-Genomics/cg
cd cg
poetry install
```

For development, use `poetry install --all-extras` to install development dependencies.

[portal]: https://clinical.scilifelab.se/
[trailblazer]: https://github.com/Clinical-Genomics/trailblazer
[housekeeper]: https://github.com/Clinical-Genomics/housekeeper
[genotype]: https://github.com/Clinical-Genomics/genotype
[scilife]: https://www.scilifelab.se/
[pypi]:…
