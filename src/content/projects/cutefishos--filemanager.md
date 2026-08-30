---
repo: "cutefishos/filemanager"
name: "filemanager"
description: "File manager."
readmeQualityOk: true
url: "https://github.com/cutefishos/filemanager"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [67, 31]
stars: 121
forks: 39
openIssues: 33
closedIssues: 5
watchers: 4
contributors: 49
recentReleases: 0
createdAt: "2021-03-16T03:18:52Z"
lastCommitAt: "2026-08-30T09:22:06Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 23
maintainers: ["reionwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/71c0d4d6768cf2e5266e22a1887195dae31c403edd805ab57d5ae39c652d2690/cutefishos/filemanager"
---

# File Manager

Cutefish File Manager, simple to use, beautiful, and retain the classic PC interactive design. 

## Dependencies

### Ubuntu

```
sudo apt install equivs curl git devscripts lintian build-essential automake autotools-dev --no-install-recommends

sudo mk-build-deps -i -t "apt-get --yes" -r
```

### Debian

```
sudo apt install build-essential cmake extra-cmake-modules libkf5kio-dev libkf5solid-dev libkf5windowsystem-dev libkf5config-dev qtbase5-dev qtbase5-private-dev qtdeclarative5-dev qtquickcontrols2-5-dev qttools5-dev qttools5-dev-tools
```

### ArchLinux

```shell
sudo pacman -S extra-cmake-modules qt5-base qt5-quickcontrols2 taglib kio
```

## Build

```shell
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr ..
make
```

## Install

```shell
sudo make install
```

## License

This project has been licensed by GPLv3.
