---
repo: "AOSC-Dev/aosc-os-abbs"
name: "aosc-os-abbs"
description: "ABBS/ACBS tree for AOSC OS package metadata, build configuration, scripts, and patches"
readmeQualityOk: true
url: "https://github.com/AOSC-Dev/aosc-os-abbs"
homepage: "https://packages.aosc.io"
language: "Shell"
languages: ["Shell"]
languagePcts: [85]
topics: ["aosc-os", "autobuild", "acbs", "abbs"]
stars: 192
forks: 158
openIssues: 64
closedIssues: 2725
watchers: 17
contributors: 203
recentReleases: 0
createdAt: "2015-04-17T05:28:49Z"
lastCommitAt: "2026-10-16T08:27:46Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 50
maintainers: ["Xinmudotmoe", "stydxm", "aosc-buildit-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cb3315a00f60c7aa979e4c925cac0b2f9d9ee6c4691ced9f66f710755104d01/AOSC-Dev/aosc-os-abbs"
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
