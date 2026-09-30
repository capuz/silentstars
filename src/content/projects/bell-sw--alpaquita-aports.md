---
repo: "bell-sw/alpaquita-aports"
name: "alpaquita-aports"
description: "Alpaquita Linux aports"
readmeQualityOk: true
url: "https://github.com/bell-sw/alpaquita-aports"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
stars: 11
forks: 5
openIssues: 3
closedIssues: 5
watchers: 8
contributors: 244
recentReleases: 0
createdAt: "2022-10-10T15:54:58Z"
lastCommitAt: "2026-09-30T09:25:29Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 66
maintainers: ["Gelbpunkt", "mps-x", "akodanev"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb852ead891a5ed389205e4840fc6bc318303b20c58598663d08902d907c9a19/bell-sw/alpaquita-aports"
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
