---
repo: "IIJ-NetBSD/netbsd-src"
name: "netbsd-src"
description: "this repository is unofficial mirror. automatically converted from anoncvs.NetBSD.org every two hours on weekdays (HEAD). On weekend, sync branches."
readmeQualityOk: true
url: "https://github.com/IIJ-NetBSD/netbsd-src"
language: "C"
languages: ["C"]
languagePcts: [86]
stars: 175
forks: 80
openIssues: 0
closedIssues: 0
watchers: 21
contributors: 94
recentReleases: 0
createdAt: "2014-04-08T09:36:20Z"
lastCommitAt: "2026-08-28T14:03:32Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 41
maintainers: ["vezhlys", "rillig", "msaitoh"]
openGraphImageUrl: "https://opengraph.githubassets.com/281899316ed6d57558a1b108bcbcda9281280c5b1a62f80c13a01ec132574c6a/IIJ-NetBSD/netbsd-src"
---

NetBSD
======

NetBSD is a free, fast, secure, and highly portable Unix-like Open
Source operating system.  It is available for a [wide range of
platforms](https://wiki.NetBSD.org/ports/), from large-scale servers
and powerful desktop systems to handheld and embedded devices.

Building
--------

You can cross-build NetBSD from most UNIX-like operating systems.
To build for amd64 (x86_64), in the src directory:

    ./build.sh -U -u -j4 -m amd64 -O ~/obj release

Additional build information available in the [BUILDING](https://github.com/IIJ-NetBSD/netbsd-src/blob/HEAD/BUILDING) file.

Binaries
--------

- [Daily builds](https://nycdn.NetBSD.org/pub/NetBSD-daily/HEAD/latest/)
- [Releases](https://cdn.NetBSD.org/pub/NetBSD/)

Testing
-------

On a running NetBSD system:

    cd /usr/tests; atf-run | atf-report

Troubleshooting
---------------

- Send bugs and patches [via web form](https://www.NetBSD.org/cgi-bin/sendpr.cgi?gndb=netbsd).
- Subscribe to the [mailing lists](https://www.NetBSD.org/mailinglists/).
  The [netbsd-users](https://www.NetBSD.org/mailinglists/#netbsd-users) list is a good choice for many problems; watch…
