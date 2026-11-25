---
repo: "FlashForge-C5-Modding-Group/OpenCreator"
name: "OpenCreator"
description: "Landing page for OpenCreator, the FlashForge Creator 5 & 5 Pro Custom Firmware"
readmeQualityOk: true
url: "https://github.com/FlashForge-C5-Modding-Group/OpenCreator"
homepage: "https://opencreatorcfw.github.io/"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["3d-printing", "custom-firmware", "klipper"]
stars: 40
forks: 4
openIssues: 5
closedIssues: 10
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-09-23T17:03:05Z"
lastCommitAt: "2026-11-25T03:13:10Z"
lastReleaseAt: "2026-11-02T12:01:54Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 44
maintainers: ["Cartrigger", "JayKuswahey", "ni4223"]
openGraphImageUrl: "https://opengraph.githubassets.com/1442358cad0a209b21a4addcfdd2e1f1fd81fbc3bc1da98e389fc000c854ea09/FlashForge-C5-Modding-Group/OpenCreator"
---

# OpenCreator

If you're looking for downloads, check them out in the releases [here!](https://github.com/FlashForge-C5-Modding-Group/OpenCreator/releases)

OpenCreator (the repository) is the documentation home for the Creator 5 full custom firmware
project. The website source is in [`docs/`](https://github.com/FlashForge-C5-Modding-Group/OpenCreator/blob/HEAD/docs/index.md) and is built with
[Zensical](https://zensical.org/) on Read the Docs and https://opencreatorcfw.github.io/

## Preview locally

```sh
python -m venv .venv
.venv/bin/python -m pip install -r docs/requirements.txt
.venv/bin/python -m zensical serve
```

On Windows, use `.venv\Scripts\python.exe` in place of `.venv/bin/python`.
Run `.venv/bin/python -m zensical build --strict` (or its Windows equivalent)
before submitting documentation changes.
