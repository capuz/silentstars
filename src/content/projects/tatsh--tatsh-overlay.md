---
repo: "Tatsh/tatsh-overlay"
name: "tatsh-overlay"
description: "Personal Gentoo Portage overlay."
readmeQualityOk: true
url: "https://github.com/Tatsh/tatsh-overlay"
homepage: "https://tatsh.github.io/tatsh-overlay/"
language: "Shell"
languages: ["Shell"]
languagePcts: [91]
topics: ["gentoo", "ebuilds", "overlay"]
stars: 40
forks: 19
openIssues: 1
closedIssues: 275
watchers: 2
contributors: 22
recentReleases: 0
createdAt: "2011-10-09T14:06:07Z"
lastCommitAt: "2026-10-20T08:48:59Z"
lastReleaseAt: "2025-12-07T15:32:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 64
maintainers: ["Tatsh", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/2542760/bbb0abf3-3672-4299-9452-f74680c80e8b"
---

# tatsh-overlay

This is stuff I make randomly. Usually updated every Sunday after 9 AM EST.

If you find a bug, please [file an issue](https://github.com/Tatsh/tatsh-overlay/issues/new).

## Installation

This overlay builds on the [GURU](https://wiki.gentoo.org/wiki/Project:GURU) and
[Pentoo](https://www.pentoo.org/) overlays, and some packages here depend on packages only they
provide, so enable all three:

```shell
emerge app-eselect/eselect-repository
eselect repository enable guru pentoo tatsh-overlay
emaint sync -a
```

## Only unmask packages you use from this repository

Based on [Masking installed but unsafe ebuild repositories](https://wiki.gentoo.org/wiki/Ebuild_repository#Masking_installed_but_unsafe_ebuild_repositories).

In `/etc/portage/package.mask/tatsh-overlay`, block all packages from this repository (and its
parents) by default:

```plain
*/*::guru
*/*::pentoo
*/*::tatsh-overlay
```

In `/etc/portage/package.unmask/tatsh-overlay`, allow packages from this repository:

```plain
games-arcade/stepmania::tatsh-overlay
```

## Contributing

See [CONTRIBUTING.md](https://github.com/Tatsh/tatsh-overlay/blob/HEAD/CONTRIBUTING.md).
