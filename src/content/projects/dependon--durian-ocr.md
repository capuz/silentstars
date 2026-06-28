---
repo: "dependon/durian-ocr"
name: "durian-ocr"
description: "no dtk deepin cor"
url: "https://github.com/dependon/durian-ocr"
language: "C++"
languages: ["C++"]
languagePcts: [93]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-06-28T06:57:39Z"
lastCommitAt: "2026-06-28T02:44:21Z"
lastReleaseAt: "2023-07-04T02:11:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 32
maintainers: ["dependon"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8163619299536f492fc38fd5f25a6858ee734e103ab6b296d169e47a3b7cb48/dependon/durian-ocr"
---

# deepin-ocr

Deepin  ocr is a .

### Dependencies

### Build dependencies

_The **master** branch is current development branch, build dependencies may changes without update README.md, refer to `./debian/control` for a working build depends list_

* pkg-config
* libdtkwidget-dev
* Qt5(>=5.6) with modules:
  * qt5-default
  * qt5-qmake
  * qtbase5-dev
  
    

## Installation

### Build from source code

1. Make sure you have installed all dependencies.

_Package name may be different between distros, if dde-file-manager is available from your distro, check the packaging script delivered from your distro is a better idea._

Assume you are using [Deepin](https://distrowatch.com/table.php?distribution=deepin) or other debian-based distro which got dde-file-manager delivered:

``` shell
$ apt build-dep deepin-ocr
```

2. Build:

```
$ cd deepin-album
$ mkdir Build
$ cd Build
$ cmake ..
$ make
```

3. Install:

```
$ sudo make install
```

The executable binary file could be found at `/usr/bin/deepin-ocr `

## Usage

Execute `deepin-ocr`

## Documentations

 - [User Documentation](https://wikidev.uniontech.com/index.php?title=%E7%9B%B8%E5%86%8C) |…
