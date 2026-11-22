---
repo: "KDE/kio-snapshot"
name: "kio-snapshot"
description: "Btrfs Filesystem snapshot integration for KDE applications"
readmeQualityOk: true
url: "https://github.com/KDE/kio-snapshot"
homepage: "https://invent.kde.org/system/kio-snapshot"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-06-29T12:33:01Z"
lastCommitAt: "2026-11-22T02:05:20Z"
status: "thriving"
tags: ["funded"]
healthScore: 78
undervaluedScore: 58
maintainers: ["bharadwaj-raju", "bhush9", "SED4906"]
openGraphImageUrl: "https://opengraph.githubassets.com/03118e85f8c442341f21b5698e7b285f0309a005ea6a092ababa170e8a1f2fbe/KDE/kio-snapshot"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KIO Snapshot

Integration of Btrfs filesystem snapshots for KDE apps.

Includes:

  - a [KIO worker](https://github.com/KDE/kio-snapshot/blob/HEAD/kioworker) for browsing snapshots of a subvolume, and for browsing previous versions of a file
  - a [KFileItemActions plugin (context menu)](https://github.com/KDE/kio-snapshot/blob/HEAD/contextmenu) for exposing these as menu items in Dolphin etc.

## A note for users of Snapper

If you use [Snapper](http://snapper.io/) as your tool for managing snapshots, you will need to add yourself to the `ALLOW_USERS` setting for your Snapper config, and also turn on `SYNC_ACL=yes`.
See http://snapper.io/manpages/snapper-configs.html and http://snapper.io/manpages/snapper.html#permissions for more info.

Distro integrators, if you want to ship KIO Snapshot and Snapper for snapshots of the user's home, please make sure that the above is already configured.
