---
repo: "mattytrentini/mpbuild"
name: "mpbuild"
description: "MicroPython build tool"
url: "https://github.com/mattytrentini/mpbuild"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 35
forks: 7
openIssues: 16
closedIssues: 22
watchers: 3
contributors: 8
recentReleases: 1
createdAt: "2024-08-03T14:09:30Z"
lastCommitAt: "2026-06-29T07:23:38Z"
lastReleaseAt: "2026-06-02T15:26:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 54
maintainers: ["mattytrentini", "pi-mst", "Josverl"]
openGraphImageUrl: "https://opengraph.githubassets.com/1132bdbab7a0923f487fdc4557a2116f84055818f166e97782749bedf0754234/mattytrentini/mpbuild"
---

# mpbuild

Build MicroPython firmware with ease!

**mpbuild** builds MicroPython firmware in containers so you don't need to install any compiler toolchains or development tools. It knows which containers to use for each board so the appropriate build tools are used.

</div>

## Table of Contents

- [Usage](#usage)
  - [Interactive mode](#interactive-mode)
  - [Advanced Usage](#advanced-usage)
  - [Use as a Module](#use-as-a-module)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
- [Examples](#examples)
- [Testing](#testing)
- [Related links](#related-links)

## Usage

**mpbuild** is intended to be executed in the root of a MicroPython repository. Help text (accessed with adding `--help`) is extensive and documents advanced options.

> [!NOTE]
> Note that there are some _special_ builds. `unix`, `webassembly` and `windows` can all be specified as `BOARD`s but their target isn't a microcontroller. See the [MicroPython documentation](https://github.com/micropython/micropython/) for details.

> [!WARNING]
> Currently **mpbuild** is tested on Linux (specifically Ubuntu 24.04 on WSL on Windows 11) but it's intended to work on any platform that supports Docker.…
