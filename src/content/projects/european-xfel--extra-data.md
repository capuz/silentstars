---
repo: "European-XFEL/EXtra-data"
name: "EXtra-data"
description: "Access saved EuXFEL data"
readmeQualityOk: true
url: "https://github.com/European-XFEL/EXtra-data"
homepage: "https://extra-data.rtfd.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 16
openIssues: 31
closedIssues: 54
watchers: 5
contributors: 25
recentReleases: 0
createdAt: "2019-11-14T13:19:03Z"
lastCommitAt: "2026-10-20T08:49:49Z"
lastReleaseAt: "2024-01-23T10:16:38Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 73
maintainers: ["takluyver", "dependabot[bot]", "egorsobolev"]
openGraphImageUrl: "https://opengraph.githubassets.com/44746765dec36f7607ed0c6c1694c37f3ec91fcbbad0617ddef1c44170ce3b39/European-XFEL/EXtra-data"
---

Python 3 tools for reading European XFEL's HDF5 files.

[EXtra-data documentation](https://extra-data.readthedocs.io/en/latest/)

See also: [European XFEL data analysis documentation](https://rtd.xfel.eu/docs/data-analysis-user-documentation/en/latest/index.html)

Installing
==========

*EXtra-data* is available in our Python environment on the Maxwell cluster:

    module load exfel exfel-python

You can also install it [from PyPI](https://pypi.org/project/extra-data/)
to use in other environments with Python 3:

    pip install extra_data

Contributing
===========

Tests
-----

Tests can be run as follows:

    python3 -m pytest -v --pyargs extra_data

In the source directory, you can also omit `--pyargs extra_data`.
