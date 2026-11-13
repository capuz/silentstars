---
repo: "bell-sw/alpaquita-aports"
name: "alpaquita-aports"
description: "Alpaquita Linux aports"
readmeQualityOk: true
url: "https://github.com/bell-sw/alpaquita-aports"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
stars: 14
forks: 5
openIssues: 3
closedIssues: 5
watchers: 8
contributors: 251
recentReleases: 0
createdAt: "2022-10-10T15:54:58Z"
lastCommitAt: "2026-11-13T11:02:37Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 63
maintainers: ["akodanev", "ncopa", "jirutka"]
openGraphImageUrl: "https://opengraph.githubassets.com/736623f486d8a96646c6b6c74b2ebe9f506fe96048821573ff755380230635a9/bell-sw/alpaquita-aports"
---

# Alpaquita Linux aports repository

This repository contains APKBUILD files, patches and scripts for all Alpaquita Linux packages.

Each git branch contains files for the corresponding Alpaquita Linux release.

## Usage

Building of packages is supported only in the Alpaquita Linux environment.

In order to build a package navigate to the directory containing its APKBUILD file and start
the build process with the `abuild` tool:

```
cd core/glibc
abuild -r
```

## More information

For documentation and support information, refer to [the official page](https://bell-sw.com/alpaquita-linux/).
