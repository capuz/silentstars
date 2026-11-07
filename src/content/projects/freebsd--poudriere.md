---
repo: "freebsd/poudriere"
name: "poudriere"
description: "Port/Package build and test system"
readmeQualityOk: true
url: "https://github.com/freebsd/poudriere"
homepage: "https://github.com/freebsd/poudriere/wiki"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [47, 36]
topics: ["freebsd", "shell", "freebsd-ports", "build-automation"]
stars: 448
forks: 181
openIssues: 247
closedIssues: 655
watchers: 39
contributors: 220
recentReleases: 0
createdAt: "2014-09-18T15:36:37Z"
lastCommitAt: "2026-11-07T16:11:58Z"
lastReleaseAt: "2026-04-25T21:25:23Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub"]
healthScore: 84
undervaluedScore: 38
maintainers: ["michael-o", "bdrewery", "svmhdvn"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b065eed279fe475e0c2d137dc8648713a250d1f3e015de90df2c42b995d8184/freebsd/poudriere"
discussionCount: 30
---

Welcome to poudriere!
---------------------

poudriere is a tool primarily designed to test package production on
FreeBSD. However, most people will find it useful to bulk build ports
for FreeBSD.

Its goals are to use modern facilities present in FreeBSD (such as ZFS,
jails), to be easy to use and to depend only on base.

Where is the documentation?
---------------------------

The canonical documentation is located at:

https://github.com/freebsd/poudriere/wiki

A copy of this documentation could be found in the doc directory.

You can also open the poudriere's manpage, located in the 8th section.

Support
-------

IRC:          #poudriere on EFNet
Mailing list: [freebsd-pkg@FreeBSD.org (lists.freebsd.org)](https://lists.freebsd.org/subscription/freebsd-pkg)

Getting started with poudriere
------------------------------

1. Install it by typing `./configure`, `make` and `make install` at the top-level directory
2. Copy `/usr/local/etc/poudriere.conf.sample` to `/usr/local/etc/poudriere.conf`
3. Edit it to suit your needs
4. `man poudriere`, search for `EXAMPLES`, read the [wiki](https://github.com/freebsd/poudriere/wiki)
5. Follow "bulk build of binary packages" steps
6. Enjoy…
