---
repo: "MidnightBSD/src"
name: "src"
description: "MidnightBSD OS source code"
readmeQualityOk: true
url: "https://github.com/MidnightBSD/src"
homepage: "https://www.midnightbsd.org/"
language: "C"
languages: ["C", "C++"]
languagePcts: [62, 26]
topics: ["os", "bsd", "unix-like", "midnightbsd"]
stars: 111
forks: 13
openIssues: 70
closedIssues: 359
watchers: 1
contributors: 133
recentReleases: 0
createdAt: "2020-03-16T15:15:41Z"
lastCommitAt: "2026-08-26T04:15:54Z"
lastReleaseAt: "2020-09-16T03:59:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 47
maintainers: ["laffer1"]
openGraphImageUrl: "https://opengraph.githubassets.com/45fef8a6571b6d9d51740d0e3e994e8d0bf5c0630bf3c7c4079f854df4151bf9/MidnightBSD/src"
fundingLinks: ["GITHUB:https://github.com/laffer1", "PATREON:https://patreon.com/midnightbsd"]
discussionCount: 13
---

# MidnightBSD Source Tree

This is the top level of the MidnightBSD source directory.

Source code is now hosted on GitHub at:
<https://github.com/MidnightBSD/src/>

## Getting the Source

Most users want to check out a stable branch rather than use the current
development branch called `master`. Look at the stable branches. For example:

```sh
cd /usr
git clone https://github.com/midnightbsd/src.git -b stable/4.0
```

You can change branches:

```sh
git switch master
```

## Copyright

For copyright information, please see the file [COPYRIGHT](https://github.com/MidnightBSD/src/blob/HEAD/COPYRIGHT) in this
directory. Additional copyright information also exists for some sources in this
tree — please see the specific source directories for more information.

## Building

The `Makefile` in this directory supports a number of targets for building
components (or all) of the MidnightBSD source tree, the most commonly used one
being `world`, which rebuilds and installs everything in the MidnightBSD system
from the source tree except the kernel, the kernel modules, and the contents of
`/etc`. The `buildkernel` and `installkernel` targets build and install the
kernel and the modules (see…
