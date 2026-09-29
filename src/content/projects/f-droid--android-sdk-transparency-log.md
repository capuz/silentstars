---
repo: "f-droid/android-sdk-transparency-log"
name: "android-sdk-transparency-log"
description: "A \"binary transparency\" log of the Android SDK binaries, as published on https://dl.google.com/android/repository"
readmeQualityOk: true
url: "https://github.com/f-droid/android-sdk-transparency-log"
language: "Python"
languages: ["Python"]
languagePcts: [73]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2021-09-17T06:38:07Z"
lastCommitAt: "2026-09-29T08:11:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 78
undervaluedScore: 62
maintainers: ["eighthave"]
openGraphImageUrl: "https://opengraph.githubassets.com/893fbfe2c5cab266c3f2722d120031e665a68d161fffea45c947a86ab6b47177/f-droid/android-sdk-transparency-log"
fundingLinks: ["GITHUB:https://github.com/f-droid", "LIBERAPAY:https://liberapay.com/F-Droid-Data", "OPEN_COLLECTIVE:https://opencollective.com/F-Droid", "CUSTOM:https://f-droid.org/donate/", "CUSTOM:https://www.hellotux.com/f-droid"]
---

# Android SDK Transparency Log

This is an automated log of the Android SDK binaries and their
checksums, as posted in the _sdkmanager_ repositories hosted on
https://dl.google.com/android/repository

This serves as a basic [binary
transparency](https://wiki.mozilla.org/Security/Binary_Transparency)
append-only log for anyone to use.  One of the key properties of any
good binary repository is that the binaries never change once they
have been published.  [Maven has been promising
this](https://blog.sonatype.com/2009/04/what-is-a-repository/) since
2009 at least.  F-Droid has for most of its history.  Occasionally,
Google forgets this, and changes packages that have already been
published:

* [Google Issue #70292819 platform-27_r01.zip was overwritten with a new update](https://issuetracker.google.com/issues/70292819) (Google login and Javascript required)

This works by reading the repository index files (e.g.
[_android/repository/_](https://github.com/f-droid/android-sdk-transparency-log/blob/HEAD/android/repository/)) to find all the packages currently
listed in the indexes.  If a package's SHA1 from that index is not in
_checksums.json_, then it downloads and parses it, and…
