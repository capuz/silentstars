---
repo: "ngalaiko/galaiko.rocks"
name: "galaiko.rocks"
description: "my website "
url: "https://github.com/ngalaiko/galaiko.rocks"
homepage: "https://nikita.galaiko.rocks"
language: "Cooklang"
languages: ["Cooklang", "Python"]
languagePcts: [36, 20]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-02-08T09:25:31Z"
lastCommitAt: "2026-06-27T00:48:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 86
maintainers: ["ngalaiko"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cc52016fa50f01b295c0c7ccb73d9d9a8401619d4596e3917f59547d85c6b26/ngalaiko/galaiko.rocks"
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
