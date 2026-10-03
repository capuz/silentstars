---
repo: "qownnotes/qownnotes-android"
name: "qownnotes-android"
description: "QOwnNotes note taking for Android via Nextcloud"
readmeQualityOk: true
url: "https://github.com/qownnotes/qownnotes-android"
homepage: "https://www.qownnotes.org/getting-started/qownnotes-android.html"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["android", "nextcloud", "qownnotes"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-31T09:29:51Z"
lastCommitAt: "2026-10-03T09:21:30Z"
lastReleaseAt: "2026-09-17T19:03:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 68
maintainers: ["pbek", "dependabot[bot]", "MySkeletonHurts"]
openGraphImageUrl: "https://opengraph.githubassets.com/016dea8ebeb74623c558b5c9b170bd008486790685c4818bb09436a1b84507e2/qownnotes/qownnotes-android"
fundingLinks: ["GITHUB:https://github.com/pbek", "LIBERAPAY:https://liberapay.com/pbek", "CUSTOM:https://paypal.me/pbek"]
---

# QOwnNotes Mobile

QOwnNotes Mobile is an Android-first, offline-capable Markdown notes application. It preserves key
QOwnNotes behavior while synchronizing through the Nextcloud Notes API.

QOwnNotes Mobile is free software licensed under the
[GNU General Public License version 3 only](https://github.com/qownnotes/qownnotes-android/blob/HEAD/LICENSE). See the [privacy policy](https://github.com/qownnotes/qownnotes-android/blob/HEAD/PRIVACY.md) for how
local, Nextcloud, and remote-image data are handled.

### Obtainium

### F-Droid

The initial F-Droid submission merge request is [fdroiddata!48269](https://gitlab.com/fdroid/fdroiddata/-/merge_requests/48269).

## Features

- Import one or more accounts from the Nextcloud Files Android app through Single Sign-On.
- Read, search, create, rename, edit, and delete notes while keeping Room as the offline source of
  truth.
- Synchronize with Nextcloud Notes API 1.2 or newer using incremental pulls, ETags, conflict-safe
  updates, and durable pending changes.
- Long-press notes to select several and move them to the Nextcloud trash bin together.
- Browse and restore server note versions and remotely trashed notes when the Nextcloud…
