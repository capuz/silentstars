---
repo: "qownnotes/gentoo-overlay"
name: "gentoo-overlay"
description: "Gentoo overlay for QOwnNotes, the open source (GPL) plain-text file notepad with markdown support and todo list manager"
readmeQualityOk: true
url: "https://github.com/qownnotes/gentoo-overlay"
homepage: "http://www.qownnotes.org"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 7
forks: 5
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2016-02-29T14:52:32Z"
lastCommitAt: "2026-10-24T08:21:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 71
maintainers: ["pbek"]
openGraphImageUrl: "https://opengraph.githubassets.com/6582d724dd7c44b0b7d55257f62502970b595077859f4855e9c52f62a4c14f52/qownnotes/gentoo-overlay"
---

# QOwnNotes Gentoo Overlay

This is a Gentoo overlay for [QOwnNotes](http://www.qownnotes.org), the open source (GPL) plain-text file notepad with markdown support and todo list manager for GNU/Linux, Mac OS X and Windows, that (optionally) works together with the notes application of Nextcloud/ownCloud.

## Usage

Add the QOwnNotes repository with the following command (see [eselect-repository](https://wiki.gentoo.org/wiki/Eselect/Repository)).

```bash
sudo eselect repository enable qownnotes-overlay
```

Then you can install QOwnNotes the usual way.

```bash
sudo emerge --sync qownnotes-overlay && sudo emerge -av qownnotes
```

If you run into troubles with libpcre you might have to do a `env USE=pcre16 emerge -1 libpcre`.
