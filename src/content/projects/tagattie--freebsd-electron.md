---
repo: "tagattie/FreeBSD-Electron"
name: "FreeBSD-Electron"
description: "Electron and Electron-based applications ports for FreeBSD"
url: "https://github.com/tagattie/FreeBSD-Electron"
language: "C++"
languages: ["C++"]
languagePcts: [77]
topics: ["electron", "freebsd"]
stars: 91
forks: 6
openIssues: 6
closedIssues: 40
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2019-03-19T13:41:20Z"
lastCommitAt: "2026-06-24T06:38:30Z"
lastReleaseAt: "2019-05-17T10:59:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 46
maintainers: ["tagattie"]
openGraphImageUrl: "https://opengraph.githubassets.com/8520ad4a2d295885e6901698c08283d8761dca3073efd65e468b16447470a60d/tagattie/FreeBSD-Electron"
---

# Electron and Electron-based applications ports for FreeBSD

## For general users

Electron is available in the FreeBSD ports tree. For available Electron versions, please see the following URL:

- https://www.freshports.org/search.php?stype=name&method=prefix&query=electron

NOTE: Due to resource constraints in the package builders, binary packages may not be available in the official package repository. In that case, you will have to build/install Electron from ports for yourself.

## For curious users

This repository is a playground of the Electron ports maintainer and contains work-in-progress ports of Electron and Electron-based applications which are not yet included in the ports tree.

### Get

#### Electron:

For versions prior to being incorporated into the ports tree, binary packages for amd64 architecture are available on the Releases page. To install, download the file (with .pkg extension) and run the command:

``` shell
pkg install /path/to/the/downloaded/pkgfile.pkg
```

#### Electron-based applications:

There are no binary packages available.

### Run

Electron alone is not very interesting since it is a framework on which applications are built. Nevertheless,…
