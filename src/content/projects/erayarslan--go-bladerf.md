---
repo: "erayarslan/go-bladerf"
name: "go-bladerf"
description: "A golang binding for libbladeRF"
readmeQualityOk: true
url: "https://github.com/erayarslan/go-bladerf"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["bladerf", "sdr", "golang", "go", "binding"]
stars: 10
forks: 4
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-01-28T19:36:35Z"
lastCommitAt: "2026-11-20T12:13:31Z"
lastReleaseAt: "2021-06-13T07:41:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 39
maintainers: ["erayarslan"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ead8d6c2fb295223b7ade598c392d3085aedcc5df583bd37df14be733558bb9/erayarslan/go-bladerf"
---

# go-bladerf

## build

Build the patched `libbladeRF`, `bladerf-remote`, `bladerf-mock`, and `bladerf-fm-radio` into `build/dist`:

```sh
make
```

Package a relocatable multi-binary release tarball into `build/release/` (`linux/amd64` or `linux/arm64` via GitHub Actions [release workflow](https://github.com/erayarslan/go-bladerf/blob/HEAD/.github/workflows/release.yml)):

```sh
make release VERSION=v0.1.0
```

## mock server & testing

Start the standalone pure-Go mock `bladeRF 2.0 xA4` server (zero CGO/USB hardware needed):

```sh
./build/dist/bin/bladerf-mock -l 0.0.0.0:5555
```

`make test` automatically starts an embedded `mock.Server` when no physical bladeRF is connected so the entire test suite runs without hardware.

## remote hardware over RDMA / TCP

Run `bladerf-remote` on the machine with the bladeRF hardware attached (e.g., Raspberry Pi):

```sh
./build/dist/bin/bladerf-remote -l 0.0.0.0:5555
```
