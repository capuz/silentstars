---
repo: "KDE/haruna"
name: "haruna"
description: "Open source video player built with Qt/QML and libmpv."
readmeQualityOk: true
url: "https://github.com/KDE/haruna"
homepage: "https://invent.kde.org/multimedia/haruna"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [49, 47]
stars: 303
forks: 20
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 43
recentReleases: 0
createdAt: "2021-07-15T00:16:34Z"
lastCommitAt: "2026-08-30T00:45:05Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 36
maintainers: ["g-fb", "ugursoy", "Justinzobel"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5d1e8ef730c2f389f93c6390672e209c3617f6501e7330c9d9e0cbcad7c2276/KDE/haruna"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

### [Read before reporting a bug or requesting a feature](https://github.com/KDE/haruna/blob/HEAD/bugs_and_feature_requests.md)

----

#### Donate: [GitHub Sponsors](https://github.com/sponsors/g-fb) | [Liberapay](https://liberapay.com/gfb/) | [PayPal](https://paypal.me/georgefloreabanus)

# Haruna

Haruna is an open source media player built with Qt/QML and libmpv.

For more screnshots go to [Haruna's website](https://haruna.kde.org)

# Install

```
flatpak install flathub org.kde.haruna
flatpak run org.kde.haruna
```

[Flatpak setup guide](https://flatpak.org/setup/)

# Features

these are just some features that set Haruna apart from others players

- video preview on seek/progress bar

- play online videos, through youtube-dl

- toggle playlist with mouse-over, playlist overlays the video

- auto skip chapter containing certain words

- configurable shortcuts and mouse buttons

- quick jump to next chapter by middle click on progress bar

- custom mpv commands, can be run at start up or on keyboard shortcut

# Dependencies
Dependencies will be printed by `cmake` when building.

# Build

```bash
git clone https://invent.kde.org/multimedia/haruna.git
cd haruna
cmake -B build -G…
