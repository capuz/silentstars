---
repo: "rardino/fpga-design-implview"
name: "fpga-design-implview"
description: "Pictures and an interactive viewer of Vivado implemented designs"
readmeQualityOk: true
url: "https://github.com/rardino/fpga-design-implview"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["fpga", "rtl", "ultrascale", "ultrascale-plus", "versal", "vivado", "xilinx", "xilinx-vivado"]
stars: 34
forks: 0
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-11-03T23:10:38Z"
lastCommitAt: "2026-11-12T05:38:23Z"
lastReleaseAt: "2026-11-12T05:40:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 25
maintainers: ["rardino"]
openGraphImageUrl: "https://opengraph.githubassets.com/c772e28195897409d69cd6750e893bcb032b99154a5c8764a9921ca48d92e06c/rardino/fpga-design-implview"
---

# Vivado implemented design renderer and viewer

This project was made with the help of Claude Opus 5.5.

`fpga-design-implview` draws what a Vivado implementation uses of the device: every site
of the part (slices, BRAM, DSP, URAM, IO, GT, clocking, hard blocks), lit up when the
design uses it and colored by hierarchy, with the part, WNS/WHS and the legend. The
part comes from the checkpoint: any design, any device.

Compiled Quartus projects are read too, in a first version: see [Quartus](#quartus).

## Examples

PYNQ-Z2 (xc7z020), placement and routing usage:

Note: the text on the right is optional, `--no-panel` leaves only the device.

## Install

```sh
pipx install fpga-design-implview   # or pip; Python 3.11+
```

The command is `fpga-design-implview`, or `implview` for short. Vivado is needed to read
the checkpoint (with a license for its device); drawing works without it.

## Usage

```sh
fpga-design-implview render path/to/impl_1               # <top>.png, <top>.pdf
fpga-design-implview render top_routed.dcp -o top.html   # interactive viewer
fpga-design-implview render path/to/impl_1 -H highlight.toml --stats --theme dark
```

The input is a run directory, a project…
