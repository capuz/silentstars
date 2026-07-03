---
repo: "Embers-of-the-Fire/eve-fit-assistant"
name: "eve-fit-assistant"
description: "Mobile fitting utility for EVE Online®, built with Flutter"
url: "https://github.com/Embers-of-the-Fire/eve-fit-assistant"
homepage: "https://efa-tech.dev"
language: "Dart"
languages: ["Dart", "Python"]
languagePcts: [64, 29]
topics: ["android", "cross-platform", "eveonline", "flutter", "ios", "mobile", "rust"]
stars: 10
forks: 1
openIssues: 7
closedIssues: 43
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-11T10:12:37Z"
lastCommitAt: "2026-07-03T06:24:13Z"
lastReleaseAt: "2025-03-07T14:44:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 75
maintainers: ["Embers-of-the-Fire"]
openGraphImageUrl: "https://opengraph.githubassets.com/b687c5ce16148f44187aa6a39491749708c8d98b2f9b4225f5c1f11da5004ffe/Embers-of-the-Fire/eve-fit-assistant"
discussionCount: 0
---

# EVE Fit Assistant

## Overview

> This branch (`dev`) is under active development.
> The `main` branch is deprecated; all releases ship from `dev`.

EFA is a cross-platform EVE fitting tool for mobile devices (Android).
The current beta focuses on local fit editing with validation,
bundle-backed static data, item and ship hull inspection,
character skill profiles, damage profile switching, and a remote
content system for bundles, announcements, and version notes.

Market statistics and broader EVE reference tools remain planned scope.

> The target form factor is phones. Tablets are not officially
> targeted but may work on larger screens.

The app is datasource-insensitive: it does not bake in server-specific
logic. Unlike the sibling project
[EVE Multitools](https://github.com/Embers-of-the-Fire/EVE-Multitools),
EFA uses a single datasource per installed bundle.

### Platform Support

EFA guarantees support for Android and partial support
for Android-based systems and will release officially
built bundles for Android.

EFA supports building bundles targeting iOS but will not
test and offer pre-built binaries for that platform.
If you want to use EFA on iOS, you have to build…
