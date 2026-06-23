---
repo: "inode64/inode64-overlay"
name: "inode64-overlay"
description: "Gentoo overlay"
url: "https://github.com/inode64/inode64-overlay"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 20
forks: 4
openIssues: 13
closedIssues: 36
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-07-01T13:56:26Z"
lastCommitAt: "2026-06-23T06:42:56Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "under_pressure"]
healthScore: 94
undervaluedScore: 62
maintainers: ["inode64"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe2a8145c1aa8405c7fd546dd21b518e3a316d514a09a2988786ee459a0e881c/inode64/inode64-overlay"
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
