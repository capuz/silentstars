---
repo: "linuxdeepin/dde-control-center"
name: "dde-control-center"
description: "Control panel of Deepin Desktop Environment."
readmeQualityOk: true
url: "https://github.com/linuxdeepin/dde-control-center"
homepage: "https://linuxdeepin.github.io/dde-control-center/"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [67, 30]
stars: 188
forks: 158
openIssues: 1
closedIssues: 155
watchers: 15
contributors: 59
recentReleases: 0
createdAt: "2013-11-06T07:23:41Z"
lastCommitAt: "2026-10-21T08:49:04Z"
lastReleaseAt: "2024-01-22T06:41:10Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 50
maintainers: ["52cyb", "mhduiy", "transifex-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6dbdf5e187644efe2e8a2c6aec8887e019a4eb467c41f42ede2954e155cc3bc8/linuxdeepin/dde-control-center"
---

## DDE Control Center

DDE Control Center is the control panel of Deepin Desktop Environment.

## Dependencies

Check `debian/control` for build-time and runtime dependencies, or use `cmake` to check the missing required dependencies.

## Installation

### Build from source code

1. Make sure you have installed all dependencies.

2. Build:
```
$ cd dde-control-center
$ mkdir Build
$ cd Build
$ cmake ..
$ make
```

3. Install:
```
$ sudo make install
```

The executable binary file could be found at `/usr/bin/dde-control-center` after the installation is finished, and plugins will be placed into `${CMAKE_INSTALL_FULL_LIBDIR}/dde-control-center/modules/`, usually is `/usr/lib/dde-control-center/modules/`.

A `debian` folder is provided to build the package under the *deepin* linux desktop distribution. To build the package, use the following command:

```shell
$ sudo apt build-dep . # install build dependencies
$ dpkg-buildpackage -uc -us -nc -b # build binary package(s)
```

## Usage

Execute `dde-control-center -h` to get more details.

Note: `--spec` can be used to debug plugins. The passed in value is the path where the so of plugin is in.

Note: `--list` prints all modules…
