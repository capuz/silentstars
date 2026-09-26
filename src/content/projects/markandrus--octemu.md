---
repo: "markandrus/octemu"
name: "octemu"
description: "Octatrack emulator and development environment for firmware customizations"
readmeQualityOk: true
url: "https://github.com/markandrus/octemu"
language: "C"
languages: ["C", "Python"]
languagePcts: [40, 23]
topics: ["dsp56300", "octatrack", "qemu"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-19T12:18:29Z"
lastCommitAt: "2026-09-26T08:47:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 16
maintainers: ["markandrus"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6f24f51a9f0518753df832d104ae746bdfb6463f6446d4ebed6c4bca75d8947/markandrus/octemu"
---

# octemu

**octemu** is an Octatrack emulator for macOS, built around [QEMU][QEMU]
(ColdFire MCF54455), [dsp56300][dsp56300], and [SDL2][SDL2] with the goal of
providing a development environment for firmware customizations, including MIDI
and audio over USB.

## `octemu` & `octdsp`

### Build

```sh
make doctor   # what your computer is missing, with the formula for each
make setup    # vendor toolchain: dsp56300, elektron-firmware-tool
make os       # fetch + unpack YOUR copy of the OS -> out/os/main.bin
make qemu     # the patched QEMU (~10-15 min)
make          # both programs, the panel raster, a blank CF card
```

`make setup` and `make qemu` clone their dependencies into `vendor/`, which
ends up around 1.2 GB.

### Run

```sh
./octemu                                                  # the Octatrack, windowed
./octdsp --in-a sin:440 --out-main out/x.wav --timeout 2  # its DSP cores, no QEMU
```

`octemu` boots from the CF card image `make` leaves in `out/state/`, and writes
its battery file alongside on the first run.

**Known issues**

The playback warbles. I think this can be fixed by buffering.

### Demo

This will create a CF card with a simple set and project, where…
