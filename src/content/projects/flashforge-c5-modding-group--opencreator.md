---
repo: "FlashForge-C5-Modding-Group/OpenCreator"
name: "OpenCreator"
description: "Landing page for OpenCreator, the FlashForge Creator 5 & 5 Pro Custom Firmware"
readmeQualityOk: true
url: "https://github.com/FlashForge-C5-Modding-Group/OpenCreator"
homepage: "https://opencreator.readthedocs.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["3d-printing", "custom-firmware", "klipper"]
stars: 25
forks: 1
openIssues: 3
closedIssues: 6
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-09-23T17:03:05Z"
lastCommitAt: "2026-11-09T11:59:35Z"
lastReleaseAt: "2026-11-02T12:01:54Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 83
undervaluedScore: 47
maintainers: ["Cartrigger"]
openGraphImageUrl: "https://opengraph.githubassets.com/84989c177f614598c2a0903f59842acdfcc35867473fc5bd7e5f706cd3ffa0a7/FlashForge-C5-Modding-Group/OpenCreator"
---

# OpenCreator

OpenCreator is the documentation home for the Creator 5 full custom firmware
project. The website source is in [`docs/`](https://github.com/FlashForge-C5-Modding-Group/OpenCreator/blob/HEAD/docs/index.md) and is built with
[Zensical](https://zensical.org/) on Read the Docs. It covers architecture, current print workflow,
verification status, installation boundaries, and the stock-based Legacy path.

## Preview locally

```sh
python -m venv .venv
.venv/bin/python -m pip install -r docs/requirements.txt
.venv/bin/python -m zensical serve
```

On Windows, use `.venv\Scripts\python.exe` in place of `.venv/bin/python`.
Run `.venv/bin/python -m zensical build --strict` (or its Windows equivalent)
before submitting documentation changes.

## Publishing

The site is served at https://opencreatorcfw.github.io/. Every push to `main`
runs `.github/workflows/docs.yml`, which builds with Zensical and pushes the
output to `OpenCreatorCFW/opencreatorcfw.github.io` (branch `main`, which
GitHub Pages serves). The workflow authenticates with the `PAGES_DEPLOY_KEY`
secret, the private half of a write deploy key on that repository.
