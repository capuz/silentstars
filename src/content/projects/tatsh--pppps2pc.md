---
repo: "Tatsh/pppps2pc"
name: "pppps2pc"
description: "Extremely simple tool to enable the ParaParaParadise PS2 controller on a PC."
readmeQualityOk: true
url: "https://github.com/Tatsh/pppps2pc"
homepage: "https://tatsh.github.io/pppps2pc/"
language: "C"
languages: ["C", "Python"]
languagePcts: [69, 26]
topics: ["ps2", "controller", "peripherals", "udev", "usb", "utilities", "para-para-paradise"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-21T10:29:04Z"
lastCommitAt: "2026-10-26T18:07:01Z"
lastReleaseAt: "2026-05-03T00:43:37Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 83
maintainers: ["dependabot[bot]", "pre-commit-ci[bot]", "Tatsh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/630865597/059db398-7365-4635-a8d2-4917a8a7547f"
fundingLinks: ["GITHUB:https://github.com/Tatsh", "KO_FI:https://ko-fi.com/tatsh2", "LIBERAPAY:https://liberapay.com/tatsh2", "PATREON:https://patreon.com/tatsh2"]
---

# pppps2pc

Extremely simple tool to enable the ParaParaParadise PS2 controller on a PC.

Check out the [Linux kernel module](https://github.com/Tatsh/pppps2pc/tree/master/kernel) and the
[PS2 driver (IRX) decompile](https://github.com/Tatsh/pppps2pc/tree/master/ps2-decompile).

## Installation

### Poetry

```shell
poetry add pppps2pc
```

### Pip

```shell
pip install pppps2pc
```

## Usage

```shell
Usage: ps2para [OPTIONS] COMMAND [ARGS]...

  PS2 ParaParaParadise controller tool.

Options:
  -h, --help  Show this message and exit.

Commands:
  enable              Enable a PS2 ParaParaParadise controller.
  install-udev-rules  Install udev rules for the device.
```
