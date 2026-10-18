---
repo: "front-matter/commonmeta-py"
name: "commonmeta-py"
description: "Documentation"
readmeQualityOk: true
url: "https://github.com/front-matter/commonmeta-py"
homepage: "https://python.commonmeta.org"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bibtex", "citeproc", "doi", "metadata", "python"]
stars: 19
forks: 9
openIssues: 9
closedIssues: 16
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-11-25T12:01:31Z"
lastCommitAt: "2026-10-18T08:13:50Z"
lastReleaseAt: "2025-05-27T07:39:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 69
maintainers: ["mfenner"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5946ee7c7dde344229a0781722d84cd43eeea6c7ad1678de9b1edbb44c26a5d/front-matter/commonmeta-py"
fundingLinks: ["GITHUB:https://github.com/front-matter"]
discussionCount: 4
---

# commonmeta-py

commonmeta-py is a Python library to implement Commonmeta, the common Metadata Model for Scholarly Metadata. Use commonmeta-py to convert scholarly metadata, in a variety of formats, listed below. The first release on PyPi (version 0.5.0) was on February 16, 2023. Up until version 0.5.1, the library was called talbot. Commonmeta is also available as a Rust library [commonmeta-rs](https://codeberg.org/front-matter/commonmeta-rs).

commonmeta-py uses semantic versioning. Currently, its major version number is still at 0, meaning the API is not yet stable, and breaking changes are expected in the internal API. The commonmeta JSON Schema is at [version 1.0.0](https://pypi.org/project/commonmeta-schema/1.0.0/) since September 9, 2026.

## Installation

Add commonmeta-py as a library dependency to your project:

    uv add commonmeta-py

To use the `commonmeta` command-line tool, install it globally with
[uv](https://docs.astral.sh/uv/) instead:

    uv tool install commonmeta-py

This makes `commonmeta` available on your `PATH`. Upgrade it later with
`uv tool upgrade commonmeta-py`, or remove it with `uv tool uninstall
commonmeta-py`.

Writing a pdf rendition of a post…
