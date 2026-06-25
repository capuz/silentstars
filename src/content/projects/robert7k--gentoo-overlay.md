---
repo: "robert7k/gentoo-overlay"
name: "gentoo-overlay"
description: "Gentoo Overlay with some new or modified ebuilds"
url: "https://github.com/robert7k/gentoo-overlay"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["gentoo", "gentoo-overlay", "gentoo-portage-overlay", "gentoo-ebuilds", "ebuild-repository", "ebuilds", "ebuild"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 16
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2016-09-01T08:26:43Z"
lastCommitAt: "2026-06-25T06:42:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 83
maintainers: ["robert7k"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d83f63e883313ad11c81314e3e2dbd912e295236b326f3fa1ad9e516b90462f/robert7k/gentoo-overlay"
---

# robert7k Gentoo overlay

Build status: [![pkgcheck](https://github.com/robert7k/gentoo-overlay/actions/workflows/ci.yml/badge.svg)](https://github.com/robert7k/gentoo-overlay/actions/workflows/ci.yml)

Feel free to open issues or PRs.

## Usage

Add and enable this repository using `app-eselect/eselect-repository`:

```
eselect repository enable robert7k
```

**or**

Manually add this to `/etc/portage/repos.conf/robert7k.conf`:

```
[robert7k]
location = /var/db/repos/robert7k
sync-type = git
sync-uri = https://github.com/robert7k/gentoo-overlay.git
auto-sync = yes
```
