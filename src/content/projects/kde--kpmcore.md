---
repo: "KDE/kpmcore"
name: "kpmcore"
description: "KDE Partition Manager core library"
url: "https://github.com/KDE/kpmcore"
homepage: "https://invent.kde.org/system/kpmcore"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 22
forks: 20
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 48
recentReleases: 0
createdAt: "2015-09-18T11:25:14Z"
lastCommitAt: "2026-06-28T02:02:18Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 85
undervaluedScore: 65
maintainers: ["kossebau", "Ramil66", "Tech-Tac"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e05f786de31e3b78af507870aa879c1b1da11327404da21bdac071cfdcf0228/KDE/kpmcore"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KPMcore

> KPMcore, the KDE Partition Manager core, is a library for examining
> and modifying partitions, disk devices, and filesystems on a
> Linux system. It provides a unified programming interface over
> top of (external) system-manipulation tools.

KPMcore is a library for examining and manipulating all facets
of storage devices on a system:
* raw disk devices
* partition tables on a device
* filesystems within a partition

There are multiple backends so that KPMcore can support different
operating systems, although the only functional backend is the
one for Linux systems:
* sfdisk backend (Linux)
* null backend

## Using KPMcore

Most of the usage information on KPMcore is included in the API
documentation; this section contains only high-level usage information.

### Finding KPMcore with CMake

KPMcore supports CMake as (meta-)build system and installs suitable
CMake support files. Typical use of of KPMcore in a `CMakeLists.txt`
looks like this:

```cmake
    find_package( KPMcore 3.2 REQUIRED )
    target_link_libraries( target kpmcore )
```

There are no imported targets defined for KPMcore.

### Initialization

An application must initialize the library and load a…
