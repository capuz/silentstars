---
repo: "KDE/karchive"
name: "karchive"
description: "Qt addon providing access to numerous types of archives"
url: "https://github.com/KDE/karchive"
homepage: "https://invent.kde.org/frameworks/karchive"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 61
forks: 24
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 62
recentReleases: 0
createdAt: "2015-09-18T15:01:06Z"
lastCommitAt: "2026-06-28T01:44:35Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 77
undervaluedScore: 47
maintainers: ["tsdgeos", "nicolasfella", "igormironchik"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c4a76990d2bd45605fa71562b755794664a19205a5b8efce8a497b000ce8e24/KDE/karchive"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KArchive

Reading, creating, and manipulating file archives

## Introduction

KArchive provides classes for easy reading, creation and manipulation of
"archive" formats like ZIP and TAR.

It also provides transparent compression and decompression of data, like the
GZip format, via a subclass of QIODevice.

## Usage

If you want to read and write compressed data, just create an instance of
KCompressionDevice and write to or read from that.

If you want to read and write archive formats, create an instance of the
appropriate subclass of KArchive (eg: K7Zip for 7-Zip files).  You may need to
combine this with usage of KCompressionDevice (see the API documentation for the
relevant KArchive subclass for details).
