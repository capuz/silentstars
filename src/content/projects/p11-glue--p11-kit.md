---
repo: "p11-glue/p11-kit"
name: "p11-kit"
description: "Provides a way to load and enumerate PKCS#11 modules."
readmeQualityOk: true
url: "https://github.com/p11-glue/p11-kit"
homepage: "https://p11-glue.github.io/p11-glue/p11-kit.html"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 203
forks: 119
openIssues: 60
closedIssues: 185
watchers: 11
contributors: 94
recentReleases: 0
createdAt: "2013-08-12T16:16:15Z"
lastCommitAt: "2026-11-10T11:37:59Z"
lastReleaseAt: "2018-05-30T14:24:22Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 45
maintainers: ["ZoltanFridrich", "mingulov", "ueno"]
openGraphImageUrl: "https://opengraph.githubassets.com/93beb20d73de9cbbdd3ba32f1d4e7964f53f283586a32ff9811eb357155a59a8/p11-glue/p11-kit"
discussionCount: 8
---

# p11-kit

p11-kit aims to solve problems with coordinating the use of [PKCS #11]
by different components or libraries living in the same process, by
providing a way to load and enumerate PKCS #11 modules, as well as a
standard configuration setup for installing PKCS #11 modules in such a
way that they're discoverable.

# Documentation

 * [Main site](https://p11-glue.github.io/p11-glue/p11-kit.html)
 * [Manual](https://p11-glue.github.io/p11-glue/p11-kit/manual/)

# Building

To build and install p11-kit, you can use the following commands:

```console
$ meson setup _build
$ meson compile -C _build
$ meson test -C _build
# meson install -C _build
```

If you install it locally for testing purposes, you may want to
specify `-Dsystemd=disabled -Dbash_completion=disabled` at the
invocation of `meson _build`, to avoid installing files to the
system locations.

# Releases

Releases are made available via the [primary github site](https://github.com/p11-glue/p11-kit/releases). They are signed with OpenPGP key of one of the maintainers: [Daiki Ueno](https://keys.openpgp.org/search?q=462225C3B46F34879FC8496CD605848ED7E69871), [Zoltan…
