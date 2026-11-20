---
repo: "erayarslan/go-bladerf-examples"
name: "go-bladerf-examples"
description: "examples of github.com/erayarslan/go-bladerf"
readmeQualityOk: true
url: "https://github.com/erayarslan/go-bladerf-examples"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-08-22T16:18:30Z"
lastCommitAt: "2026-11-20T11:51:19Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 33
maintainers: ["erayarslan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4176dc0820e4ffff1a155ca10fc84df59ffe1418b6d36a2c29b14b078375d0bd/erayarslan/go-bladerf-examples"
---

# go-bladerf-examples

Wideband FM receiver example for `go-bladerf`, supporting both local USB bladeRF boards and remote `bladerf-remote` servers over RDMA (`librdmacm`/`rsocket`) with automatic TCP fallback, as well as headless WAV recording.

## prerequisites

Build the patched `libbladeRF` and `bladerf-remote` in the parent `go-bladerf` repository first:

```sh
cd ..
make
```

Install PortAudio development headers (or use the `PKG_CONFIG_PATH=../build/deps/pkgconfig` populated by `make` on Debian/Ubuntu):

### macOS

```sh
brew install pkg-config portaudio
export PKG_CONFIG_PATH="$PKG_CONFIG_PATH:/usr/local/Cellar/portaudio/19.6.0/lib/pkgconfig"
```

### Ubuntu / Debian

```sh
sudo apt-get install pkg-config portaudio19-dev
```

## usage

### local USB bladeRF

```sh
go run . -freq 96600000
```

### remote Raspberry Pi over RDMA / TCP

Start `bladerf-remote` on the Raspberry Pi (uses RDMA on `port + 1` when available, otherwise falls back to TCP on `port`):

```sh
./build/dist/bin/bladerf-remote -l 0.0.0.0:5555
```

Connect from the example:
