---
repo: "inode64/inode64-overlay"
name: "inode64-overlay"
description: "Gentoo overlay"
readmeQualityOk: true
url: "https://github.com/inode64/inode64-overlay"
language: "Shell"
languages: ["Shell"]
languagePcts: [99]
stars: 23
forks: 6
openIssues: 2
closedIssues: 52
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-07-01T13:56:26Z"
lastCommitAt: "2026-11-05T00:21:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 64
maintainers: ["inode64"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d68768cb179f4a134e625c91b248d16f2e5e387d667202e05ea237160bfb088/inode64/inode64-overlay"
---

# inode64-overlay

Gentoo overlay

### Let's get started:

First add the Overlay to `/etc/portage/repos.conf/inode64.conf`

```
[inode64]
location = /var/db/repos/inode64
sync-type = git
sync-uri = https://github.com/inode64/inode64-overlay.git
auto-sync = yes
sync-rsync-verify-metamanifest = no
```

Sync it:

```sh
$ emerge --sync
```

### or include in layman:

Copy layman/inode64.xml to /etc/layman/overlays/inode64.xml
