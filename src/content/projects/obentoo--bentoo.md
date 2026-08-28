---
repo: "obentoo/bentoo"
name: "bentoo"
description: "A user-friendly Stage5 of Gentoo Linux."
readmeQualityOk: true
url: "https://github.com/obentoo/bentoo"
homepage: "https://obentoo.org/"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
stars: 60
forks: 4
openIssues: 0
closedIssues: 27
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2018-10-30T20:11:31Z"
lastCommitAt: "2026-08-28T14:24:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 54
maintainers: ["lucascouts"]
openGraphImageUrl: "https://opengraph.githubassets.com/bedd1bb9138afb0768484c2d74fa6134bc38db737272011e2a2c2f77e22dc221/obentoo/bentoo"
discussionCount: 0
---

# Bentoo

Bentōō is an initiative to distribute an user-friendly version of Gentoo linux Stage[5] to new users, with more updated packages, focusing on agility, security, privacy and games.

## Overlays

### eselect repository
```
eselect repository add bentoo git https://github.com/obentoo.git
```

### local Overlay

[Local overlays](https://wiki.gentoo.org/wiki/Creating_an_ebuild_repository) should be managed via `/etc/portage/repos.conf/`.
create a `/etc/portage/repos.conf/bentoo.conf` file containing precisely:

```
[bentoo]
location = /var/db/repos/bentoo
sync-type = git
sync-uri = https://github.com/obentoo.git
priority= 99
```

Afterwards, simply run `emerge --sync bentoo`, and Portage should seamlessly make all our ebuilds available.

### Bentoo Configurations

Here you can see the portage files configurations : https://github.com/obentoo/bentoo-files

### Bentoolkit 

Bentoolkit is a set of tools to manage Gentoo overlays : https://github.com/obentoo/bentoolkit

### Bentoo Dev

Bentoo Dev is a Claude Code plugin to help developers with Gentoo ebuilds : https://github.com/obentoo/bentoo-dev
