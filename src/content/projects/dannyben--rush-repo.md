---
repo: "DannyBen/rush-repo"
name: "rush-repo"
description: "My package repository for the Rush package manager"
readmeQualityOk: true
url: "https://github.com/DannyBen/rush-repo"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-08-16T17:36:39Z"
lastCommitAt: "2026-11-10T14:49:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 55
maintainers: ["DannyBen"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb6bbcd4e2b6c014ce58e9e85eeecfbab06abf08fb7051177c8c158211bf464c/DannyBen/rush-repo"
---

Rush Repo - DannyBen's Rush Repository
==================================================

```
_______                       ______  
____  /  ___________  ___________  /_ 
___  /   __  ___/  / / /_  ___/_  __ \
__  /    _  /   / /_/ /_(__  )_  / / /
_  /     /_/    \__,_/ /____/ /_/ /_/ 
/_/      Personal Package Manager
```

This is my rush repo for use with the [rush package manager][rush-cli].

- All packages are suitable for public consumption.
- Most packages can be used on **Arch Linux**, **Debian**, **Ubuntu**,  and **Fedora**.
- Packages under the [my](https://github.com/DannyBen/rush-repo/blob/HEAD/my) folder are personal packages, most likely not
  suitable for anybody else.

Add this repository
--------------------------------------------------

```shell
$ rush clone dannyben        # download the repository
$ rush get dannyben:hello    # test that it is working
$ rush list dannyben         # see package list
```

Development
--------------------------------------------------

Use the provided docker compose configuration to develop and test on different
operating systems. The containers come with some basic packages (like wget and
curl) and with the local rush repo…
