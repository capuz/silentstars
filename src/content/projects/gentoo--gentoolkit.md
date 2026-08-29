---
repo: "gentoo/gentoolkit"
name: "gentoolkit"
description: "[MIRROR] Collection of administration scripts for Gentoo"
readmeQualityOk: true
url: "https://github.com/gentoo/gentoolkit"
homepage: "https://gitweb.gentoo.org/proj/gentoolkit.git"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["hacktoberfest"]
stars: 22
forks: 36
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 59
recentReleases: 0
createdAt: "2018-08-14T13:46:52Z"
lastCommitAt: "2026-08-29T04:30:27Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 66
maintainers: ["mattst88", "thesamesam", "laumann"]
openGraphImageUrl: "https://opengraph.githubassets.com/a25a112061348dd105801380c27c690f7b97318c8a3b78905426831bbf0d02d4/gentoo/gentoolkit"
---

MOTIVATION
==========

The gentoolkit package contains a collection of useful administration scripts
particular to the Gentoo Linux distribution. It contains rough drafts and
implementations of features that may in time make it into Portage, or into
full-fledged tools in their own right.

CONTENTS
========

gentoolkit
----------
- ebump          - Ebuild revision bumper
- eclean         - tool to clean up outdated distfiles and packages
- ekeyword       - modify package KEYWORDS
- enalyze        - Analyze all installed pkgs or rebuild package.* files
- epkginfo       - wrapper to equery: Display metadata about a given package.
- equery         - replacement for etcat and qpkg
- eread          - script to read portage log items from einfo, ewarn etc.
- eshowkw        - Display keywords for specified package(s)
- euse           - tool to manage USE flags
- imlate         - Displays candidates for keywords for an architecture...
- qpkg           - convient package query tool (deprecated)
- revdep-rebuild - scans/fixes broken shared libs and binaries

IMPROVEMENTS
============

Any suggestions for improvements should be sent to tools-portage@gentoo.org, or
added as a bug assigned to…
