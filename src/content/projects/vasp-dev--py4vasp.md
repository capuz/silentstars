---
repo: "vasp-dev/py4vasp"
name: "py4vasp"
description: "Python interface for VASP"
readmeQualityOk: true
url: "https://github.com/vasp-dev/py4vasp"
homepage: "https://vasp.at/py4vasp/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 100
forks: 24
openIssues: 0
closedIssues: 64
watchers: 5
contributors: 12
recentReleases: 0
createdAt: "2020-02-13T15:21:43Z"
lastCommitAt: "2026-09-14T09:13:19Z"
lastReleaseAt: "2023-02-17T15:54:11Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 51
maintainers: ["martin-schlipf", "dependabot[bot]", "MLovetroy"]
openGraphImageUrl: "https://opengraph.githubassets.com/aadc58e74c345583f27c07ad86a75e6a96b36f24b5efbc74bca6eb54e1fa6169/vasp-dev/py4vasp"
---

# py4vasp

> Please note that this document is intended mostly for developers that want to use
> the version of py4vasp provided on Github. If you just want to install py4vasp to
> use it, please follow the [official documentation](https://vasp.at/py4vasp/latest).

## Repository layout

The repository is a [uv workspace](https://docs.astral.sh/uv/concepts/projects/workspaces/)
that publishes three distributions from a single lockfile

| path | distribution | what it is |
|---|---|---|
| `.` | `py4vasp-core` | all the code (`src/py4vasp`), requiring only numpy and h5py |
| `packages/py4vasp` | `py4vasp` | a metadata-only wrapper pulling `py4vasp-core[all]` |
| `packages/backend` | `vasp-backend` | `vasp.backend`, the internal interface for our own tools |

pip extras can only *add* dependencies, never remove them. Since `pip install py4vasp`
has to give the largest dependency set and `pip install py4vasp-core` the smallest, the
code has to live in the distribution with the smallest set and `py4vasp` has to be a
superset of it. That is why the `py4vasp` distribution ships no modules of its own.

py4vasp reaches every dependency beyond numpy and h5py through the lazy proxies in…
