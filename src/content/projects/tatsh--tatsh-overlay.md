---
repo: "Tatsh/tatsh-overlay"
name: "tatsh-overlay"
description: "Personal Gentoo Portage overlay."
readmeQualityOk: true
url: "https://github.com/Tatsh/tatsh-overlay"
homepage: "https://tatsh.github.io/tatsh-overlay/"
language: "Shell"
languages: ["Shell"]
languagePcts: [90]
topics: ["gentoo", "ebuilds", "overlay"]
stars: 40
forks: 19
openIssues: 2
closedIssues: 274
watchers: 2
contributors: 22
recentReleases: 0
createdAt: "2011-10-09T14:06:07Z"
lastCommitAt: "2026-10-10T10:05:09Z"
lastReleaseAt: "2025-12-07T15:32:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 64
maintainers: ["Tatsh", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/2542760/bbb0abf3-3672-4299-9452-f74680c80e8b"
---

# tatsh-overlay

This is stuff I make randomly. Usually updated every Sunday after 9 AM EST.

If you find a bug, please [file an issue](https://github.com/Tatsh/tatsh-overlay/issues/new).

## Installation

```shell
emerge app-eselect/eselect-repository
eselect repository enable tatsh-overlay
emerge --sync
```

## Only unmask packages you use from this repository

Based on [Masking installed but unsafe ebuild repositories](https://wiki.gentoo.org/wiki/Ebuild_repository#Masking_installed_but_unsafe_ebuild_repositories).

In `/etc/portage/package.mask/tatsh-overlay`, block all packages from this repository by default:

```plain
*/*::tatsh-overlay
```

In `/etc/portage/package.unmask/tatsh-overlay`, allow packages from this repository:

```plain
games-arcade/stepmania::tatsh-overlay
```

## Contributing

New packages are unlikely to be accepted unless they are related to emulators, reverse engineering,
etc. Wine-wrapper packages will not be accepted. Binary packages are only accepted if there is no
alternative.

For binary packages without source available, do not add the `-bin` suffix to the package name. If
providing a binary package that is unreasonable to build in the Portage…
