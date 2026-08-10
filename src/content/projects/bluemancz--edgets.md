---
repo: "BlueManCZ/edgets"
name: "edgets"
description: "Gentoo overlay bringing you the latest versions of modern software."
readmeQualityOk: true
url: "https://github.com/BlueManCZ/edgets"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["gentoo", "ebuilds", "gentoo-overlay"]
stars: 15
forks: 12
openIssues: 1
closedIssues: 24
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2020-03-25T09:50:00Z"
lastCommitAt: "2026-08-10T05:06:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 77
maintainers: ["BlueManCZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a4db7a68427508657ee5a93680496cf3f1f15c424defcacd0d70e38cc583d25/BlueManCZ/edgets"
---

Gentoo overlay bringing you the latest versions of modern software.

## Installation

Edgets is available through [`eselect-repository`](https://wiki.gentoo.org/wiki/Eselect/Repository):

```bash
emerge --ask app-eselect/eselect-repository
eselect repository enable edgets
emerge --sync
```

## Usage

Most packages in this overlay are keyword-masked. To accept all of them at once for `amd64`, create `/etc/portage/package.accept_keywords/edgets`:

```
*/*::edgets ~amd64
```

Alternatively, unmask packages individually:

```bash
emerge --ask <package-name> --autounmask
dispatch-conf
```

Then install as usual:

```bash
emerge --ask <package-name>
```

> [!TIP]
> Use `>=category/package-version` in your accept_keywords to automatically cover future version bumps.

## Contributing

Found a bug, want a version bump, or have a new package to add? Open an [issue](https://github.com/BlueManCZ/edgets/issues) or submit a [pull request](https://github.com/BlueManCZ/edgets/pulls).
