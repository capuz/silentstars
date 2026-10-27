---
repo: "lazylinuxos/lazy-repo"
name: "lazy-repo"
description: "The LazyLinux source packages collection, based on void-packages"
readmeQualityOk: true
url: "https://github.com/lazylinuxos/lazy-repo"
homepage: "https://lazylinuxos.github.io"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
topics: ["linux", "void-linux", "void-packages", "xbps-src", "lazylinux", "linux-packages", "void-templates", "lazy-packages", "packages", "void"]
stars: 17
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-22T21:33:07Z"
lastCommitAt: "2026-10-27T12:39:48Z"
lastReleaseAt: "2024-12-22T21:49:49Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 55
maintainers: ["nerdyslacker"]
openGraphImageUrl: "https://opengraph.githubassets.com/803505a087a26948d2079caef478c1fd99318dd75309b0752ebd210d43f32c83/lazylinuxos/lazy-repo"
---

## The LazyLinux XBPS source packages collection
 
This repository contains the XBPS source packages collection to build binary packages
for the LazyLinux distribution.

> [!NOTE]
>>  _To use it type in the terminal_

```
sudo mkdir -p /etc/xbps.d
```

```
printf "repository=https://github.com/lazylinuxos/lazy-repo/releases/latest/download/\n" | sudo tee /etc/xbps.d/99-repository-lazy.conf
```

The included `xbps-src` script will fetch and compile the sources, and install its
files into a `fake destdir` to generate XBPS binary packages that can be installed
or queried through the `xbps-install(1)` and `xbps-query(1)` utilities, respectively.

See [Contributing](https://github.com/lazylinuxos/lazy-repo/blob/HEAD/CONTRIBUTING.md) for a general overview of how to contribute and the
[Manual](https://github.com/lazylinuxos/lazy-repo/blob/HEAD/Manual.md) for details of how to create source packages.

### Table of Contents

- [Requirements](#requirements)
- [Quick start](#quick-start)
- [chroot methods](#chroot-methods)
- [Install the bootstrap packages](#install-bootstrap)
- [Configuration](#configuration)
- [Directory hierarchy](#directory-hierarchy)
- [Building…
