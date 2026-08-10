---
repo: "linuxdeepin/dtkwidget"
name: "dtkwidget"
description: "Deepin Toolkit, widget module for DDE look and feel"
readmeQualityOk: true
url: "https://github.com/linuxdeepin/dtkwidget"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["deepin", "dtk", "lib"]
stars: 218
forks: 162
openIssues: 0
closedIssues: 65
watchers: 18
contributors: 109
recentReleases: 0
createdAt: "2017-07-26T04:41:00Z"
lastCommitAt: "2026-08-10T05:06:25Z"
lastReleaseAt: "2024-04-23T01:25:55Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 46
maintainers: ["github-actions[bot]", "transifex-integration[bot]", "18202781743"]
openGraphImageUrl: "https://opengraph.githubassets.com/0812fb8dca6a09bea0631f045087eb20c753c07a5be6e2f8b44ebf0c1962615b/linuxdeepin/dtkwidget"
---

# Deepin Tool Kit Widget

Deepin Tool Kit Widget(DtkWidget) provides the base widgets on Deepin.

中文说明：[README_zh_CN.md](https://github.com/linuxdeepin/dtkwidget/blob/HEAD/README.zh_CN.md)

## Documentation

中文文档：[dtkwidget文档](https://linuxdeepin.github.io/dtkwidget/index.html)

## Dependencies

### Build dependencies

* Qt >= 5.6

## Installation

### Build from source code

1. Make sure you have installed all dependencies.

```bash
sudo apt build-dep ./
```

If you need to use the designer plugin, you can:

```bash
$ sudo apt install qttools5-dev

# build
$ cmake ./plugin/dtkuiplugin -B build -DINSTALL_PLUGIN=ON -DCMAKE_INSTALL_PREFIX=/usr
$ cmake --build build -j$(nproc)

# install
$ cd build
$ sudo make install
```

2. Build:

```bash
cmake -B build
cmake --build build -j$(nproc)
```

3. Install:

```bash
cd build
sudo make install
```

## Getting help

Any usage issues can ask for help via

* [Gitter](https://gitter.im/orgs/linuxdeepin/rooms)
* [IRC channel](https://webchat.freenode.net/?channels=deepin)
* [Forum](https://bbs.deepin.org)
* [WiKi](https://wiki.deepin.org/)

## Getting involved

We encourage you to report issues and contribute changes

* [Contribution guide for…
