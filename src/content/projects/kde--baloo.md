---
repo: "KDE/baloo"
name: "baloo"
description: "Baloo is a framework for searching and managing metadata."
url: "https://github.com/KDE/baloo"
homepage: "https://invent.kde.org/frameworks/baloo"
language: "C++"
languages: ["C++", "C"]
languagePcts: [65, 32]
stars: 84
forks: 24
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 106
recentReleases: 0
createdAt: "2015-09-18T12:22:06Z"
lastCommitAt: "2026-06-28T01:44:29Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 78
undervaluedScore: 48
maintainers: ["StefanBruens", "nicolasfella", "Montel"]
openGraphImageUrl: "https://opengraph.githubassets.com/780799ab6be91bfaa446ddcb9a90b8a1a434b4a952df7cbe4e16bc95fd16af8a/KDE/baloo"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Baloo

## Introduction

Baloo is the file indexing and file search framework for KDE Plasma. It focuses 
on speed and a very small memory footprint. It maintains an index of your files 
and optionally their contents which [you can search](./docs/user/searching.md).

## Contributing

Baloo is part of the KDE umbrella and relies on the KDE infrastructure.

**Mailing List:** kde-devel@kde.org ([info page](https://mail.kde.org/mailman/listinfo/kde-devel))
**Bug Tracker:** http://bugs.kde.org  ([new bug](https://bugs.kde.org/enter_bug.cgi?product=frameworks-baloo))
**IRC Channel:** #kde-baloo on Libera Chat

The recommended way of contributing patches is via KDE's [GitLab](https://invent.kde.org/frameworks/baloo) instance.

## Documentation

### Users
* [Searching](./docs/user/searching.md)
* [The Baloo pages on KDE Community Wiki](https://community.kde.org/Baloo) has information on Baloo's command-line tools and how to monitor its operation.

### File Indexing Plugins

Baloo relies on [KFileMetaData](https://api.kde.org/frameworks/kfilemetadata/html/index.html) to extract content and
metadata from files. KFileMetadata uses a number file type specific plugins. In case individual…
