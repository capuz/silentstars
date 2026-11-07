---
repo: "noaione/nao-manga-rls"
name: "nao-manga-rls"
description: "A script that wraps multiple tools that helps for Manga rip packaging and also my personal library management tools."
readmeQualityOk: true
url: "https://github.com/noaione/nao-manga-rls"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-03-21T12:57:18Z"
lastCommitAt: "2026-11-07T13:54:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["noaione"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bb893f1223fc7f3ecdc3c516f50787085eba5f70a15aae2f0f5c4448900c1b0/noaione/nao-manga-rls"
---

# [nao] Manga Release Scripts

This repo contains stuff that I use to release and collect manga from a certain cat website.

All my release use one of the following tag:
- `[nao]`, default release tag for any of my stuff
- `(TooManyIsekai)` any release that has Isekai element in it. (Normal Fantasy does not count)
- `(oan)`, new tag for lower effort stuff that I use.
- `(naoX)`, tag for upscaled stuff that I did.

## Requirements
- Python 3.13+
- imagemagick (for `spreads join` command)
- exiftool (for `releases` and `tag`, optional)
- pingo (for `releases` and `optimize`, optional)

## Scripts
This repo also have a module or script to release and split stuff up.

To install, you need git since I'm not publishing this to PyPi.
After that you can run this:

```sh
pip install -U git+https://github.com/noaione/nao-manga-rls.git
```

This will install this project which then you can use the command `nmanga` to execute everything.

## Installation extras

The base install only has what the image and archive commands need. Everything else is optional:

| Extra | What it adds |
| --- | --- |
| `gui` | PySide6, for the `nmanga-gui` manual split GUI |
| `vapoursynth` | `vapoursynth` with…
