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
stars: 220
forks: 165
openIssues: 0
closedIssues: 65
watchers: 18
contributors: 88
recentReleases: 0
createdAt: "2017-07-26T04:41:00Z"
lastCommitAt: "2026-10-20T08:49:31Z"
lastReleaseAt: "2024-04-23T01:25:55Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 44
maintainers: ["18202781743", "github-actions[bot]", "transifex-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/26af940dd96711652adb4dda3c8e88524dce179c0c04276a9b299700ad615ef0/linuxdeepin/dtkwidget"
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
