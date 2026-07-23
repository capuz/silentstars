---
repo: "AOSC-Dev/aosc-os-abbs"
name: "aosc-os-abbs"
description: "ABBS/ACBS tree for AOSC OS package metadata, build configuration, scripts, and patches"
readmeQualityOk: true
url: "https://github.com/AOSC-Dev/aosc-os-abbs"
homepage: "https://packages.aosc.io"
language: "Roff"
languages: ["Roff", "Shell"]
languagePcts: [63, 21]
topics: ["aosc-os", "autobuild", "acbs", "abbs"]
stars: 183
forks: 142
openIssues: 59
closedIssues: 2711
watchers: 17
contributors: 186
recentReleases: 0
createdAt: "2015-04-17T05:28:49Z"
lastCommitAt: "2026-07-23T06:15:37Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 50
maintainers: ["stydxm", "MingcongBai", "aosc-buildit-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b42df30746063a61dbce35800546068810e0bbaaa4a9b174c66098c3dec2b5a1/AOSC-Dev/aosc-os-abbs"
discussionCount: 9
---

AOSC OS ABBS Tree
=================

The AOSC OS ABBS Tree contains build configurations and scripts
for all packages made available in the official AOSC OS
[repository](https://repo.aosc.io), organised in a tree-like fashion. The "Tree"
is split into three main classes and various sub-categories:

- `core-*` contains components of the [AOSC OS Core](https://github.com/AOSC-Dev/aosc-os-abbs/blob/HEAD/README.CORE.md).
- `app-*` contains applications.
- `desktop-*` contains desktop environments and their supporting libraries.
- `lang-*` contains programming language support stacks.
- `meta-*` contains meta packages (`*-base`).
- `runtime-*` contains runtime libraries and data.

Branches
--------

The ABBS Tree is maintained in a multi-branch fashion, for more information,
please refer to the [AOSC OS Maintenance Guidelines](https://wiki.aosc.io/developer/packaging/topic-based-maintenance-guideline).

Groups
------

When using [ACBS](https://github.com/AOSC-Dev/acbs) (Autobuild CI Build System),
it is possible to build a series of packages with a single command. This is
achieved by the "groups" defined in the `groups/` directory, with files defining
a list of packages to build.…
