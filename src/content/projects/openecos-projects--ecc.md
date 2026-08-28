---
repo: "openecos-projects/ecc"
name: "ecc"
description: "A Chip Design Automation Solution with Open Source EDA Tools."
readmeQualityOk: true
url: "https://github.com/openecos-projects/ecc"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["eda", "flow", "nix", "python3", "rtl"]
stars: 20
forks: 9
openIssues: 8
closedIssues: 9
watchers: 1
contributors: 20
recentReleases: 7
createdAt: "2026-01-22T09:06:42Z"
lastCommitAt: "2026-08-28T15:32:21Z"
lastReleaseAt: "2026-08-12T07:24:18Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["Emin017", "Yell-walkalone", "ZhishengZeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd2d69ced8282e6a7074ec7f500ef8623580b3154c8f050a2645b356e15992a8/openecos-projects/ecc"
---

# ECOS Chip Compiler (ECC)

**Open-Source Chip Design Automation Solution**

</div>

## Overview

ECOS Chip Compiler is an **open-source chip design automation solution** that integrates EDA tools (Yosys, [**ECC-DreamPlace**](https://github.com/openecos-projects/ecc-dreamplace), [**ECC-Tools**](https://github.com/openecos-projects/ecc-tools), KLayout) to achieve complete RTL-to-GDS design flow. Developed and maintained by the [**ECOS Team**](https://github.com/openecos-projects).

The GUI (ECOS Studio) has been moved to the [ecos-studio](https://github.com/0xharry/ecos-studio) repo.

**How to use:**
- **CLI (`ecc`)** - Project-oriented command-line flow execution
- **Python API** - Use `chipcompiler` as a library

## Installation

### Installer (recommended)

Install the `ecc` CLI (Linux x86_64, glibc 2.34+):

```sh
curl -fsSL http://release.openecos.com/installers/ecc/latest/ecc-installer.sh | sh
```

To also install Yosys (OSS CAD Suite) and the ICS55 PDK:

```sh
curl -fsSL http://release.openecos.com/installers/ecc/latest/ecc-installer.sh | sh -s -- --with-toolchain
```

The wrapper is installed to `~/.local/bin` by default. If that directory is not
on `PATH`, add it:

```sh…
