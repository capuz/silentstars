---
repo: "obentoo/bentoo"
name: "bentoo"
description: "A user-friendly Stage5 of Gentoo Linux."
url: "https://github.com/obentoo/bentoo"
homepage: "https://obentoo.org/"
language: "Shell"
languages: ["Shell"]
languagePcts: [90]
stars: 59
forks: 2
openIssues: 0
closedIssues: 15
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2018-10-30T20:11:31Z"
lastCommitAt: "2026-06-25T01:32:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 54
maintainers: ["lucascouts", "neirochap"]
openGraphImageUrl: "https://opengraph.githubassets.com/09aa73a85b7cf6e449968998d5c086bb7768d156f74d9b0266220b5309ca6d99/obentoo/bentoo"
discussionCount: 0
---

# Bentoo

Bentōō is an initiative to distribute an user-friendly version of Gentoo linux Stage[5] to new users, with more updated packages, focusing on agility, security, privacy and games.

## Overlays

### local Overlay

[Local overlays](https://wiki.gentoo.org/wiki/Creating_an_ebuild_repository) should be managed via `/etc/portage/repos.conf/`.
create a `/etc/portage/repos.conf/bentoo.conf` file containing precisely:

```
[bentoo]
location = /var/db/repos/bentoo
sync-type = git
sync-uri = https://github.com/lucascouts/bentoo.git
priority= 99
```
### eselect repository
```
eselect repository add bentoo git https://github.com/lucascouts/bentoo.git
```

Afterwards, simply run `emerge --sync bentoo`, and Portage should seamlessly make all our ebuilds available.

### Bentoo Portage

Here you can see the portage files configurations : https://github.com/lucascouts/bentoo-files
