---
repo: "NetBSD/pkgsrc"
name: "pkgsrc"
description: "Automatic conversion of the NetBSD pkgsrc CVS module, use with care"
url: "https://github.com/NetBSD/pkgsrc"
homepage: "https://www.pkgsrc.org"
language: "Makefile"
languages: ["Makefile", "C"]
languagePcts: [45, 32]
stars: 393
forks: 180
openIssues: 18
closedIssues: 54
watchers: 24
contributors: 55
recentReleases: 0
createdAt: "2017-04-16T20:04:15Z"
lastCommitAt: "2026-06-24T22:39:48Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 75
undervaluedScore: 40
maintainers: ["0-wiz-0", "0323pin", "ryoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/4458491cfb29a401063f2b05ae60fbcc7d6f56aa5cefb1cd6e06cf248eed2d5d/NetBSD/pkgsrc"
---

pkgsrc
======

[pkgsrc](https://pkgsrc.org/) is a framework for building software for a
variety of UNIX-like systems.

It produces binary packages, which can be managed with tools such as
[pkgin](http://pkgin.net/). pkgsrc is highly configurable, supporting
building packages for an arbitrary installation prefix (the default is
`/usr/pkg`), allowing multiple branches to coexist on one machine, a
build options framework, and a compiler transformation framework, among
other advanced features. Unprivileged use and installation is also supported.

pkgsrc is the default package manager for [NetBSD](https://www.NetBSD.org/)
and [SmartOS](https://www.tritondatacenter.com/smartos).
It's also supported as a first-class option in [OmniOS CE](https://omniosce.org/)
and [Oasis Linux](https://github.com/oasislinux/oasis).

Bootstrapping
-------------

To use pkgsrc on operating systems other than NetBSD, you first need to
bootstrap:

	cd pkgsrc/bootstrap
	./bootstrap

Note that this is only for the most simple case, using pkgsrc's defaults.

Please consult `bootstrap/README` and `bootstrap/README.OS` for detailed
information about bootstrapping.

Building packages
-----------------

	cd…
