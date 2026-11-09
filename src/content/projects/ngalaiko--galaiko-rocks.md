---
repo: "ngalaiko/galaiko.rocks"
name: "galaiko.rocks"
description: "my website "
readmeQualityOk: true
url: "https://github.com/ngalaiko/galaiko.rocks"
homepage: "https://nikita.galaiko.rocks"
language: "Cooklang"
languages: ["Cooklang"]
languagePcts: [36]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2019-02-08T09:25:31Z"
lastCommitAt: "2026-11-09T04:36:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 86
maintainers: ["ngalaiko", "assistant-ngalaiko[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4d4febfe5c25623e5d4f5ca3b1ae8232c78cf9b552ef48538e2aca1ac577682/ngalaiko/galaiko.rocks"
---

# galaiko.rocks

my website. builds with make, runs on [fly][].

## requirements

- [uv](https://docs.astral.sh/uv)
- [bash](https://www.gnu.org/software/bash/)
- [make](https://www.gnu.org/software/make/)
- [sed](https://www.gnu.org/software/sed/)
- [jq](https://github.com/jqlang/jq)
- [yq](https://github.com/mikefarah/yq)
- [cookcli](https://github.com/cooklang/cookcli)
- [imagemagick](https://imagemagick.org)
- [pandoc](https://pandoc.org)

## build

```bash
$ make
```

## update 3rd party data

### letterboxd

```bash
$ uv run ./scripts/update/letterboxd.py
```

### discogs

```bash
$ uv run ./scripts/update/discogs.py --token <personal access token>
```

### ledger

```bash
$ uv run ./scripts/update/ledger.py [--file <main ledger file>]
```

## run

```bash
$ make serve
```

## deploy

this requires [fly.io][] account.

```
$ fly deploy
```

[fly.io]: https://fly.io)
