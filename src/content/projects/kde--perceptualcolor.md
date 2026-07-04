---
repo: "KDE/perceptualcolor"
name: "perceptualcolor"
description: "Qt GUI components for choosing colors, with focus on an intuitive and perceptually uniform presentatio"
readmeQualityOk: true
url: "https://github.com/KDE/perceptualcolor"
homepage: "https://invent.kde.org/libraries/perceptualcolor"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-02-20T02:18:32Z"
lastCommitAt: "2026-07-04T21:15:03Z"
status: "thriving"
tags: ["funded"]
healthScore: 79
undervaluedScore: 80
maintainers: ["sommerluk", "bcooksley"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a49cc69ee59bd896d5264114461927a44c2e9d4974ab32d2f50ab93f85ac041/KDE/perceptualcolor"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# PerceptualColor

This library provides Qt GUI components for choosing sRGB colors, with a
focus on an intuitive and perceptually uniform presentation.

## Introduction

The GUI widgets in PerceptualColor are based on the LCH color model, which
is known to reflect human perception better than RGB or its variants like
HSV.  This leads to a highly intuitive user interface that is more
user-friendly and easier to navigate. Moreover, the widgets can be used
effectively without any prerequisite knowledge of the LCH color model
by the users.

## Features

This library:

- Provides complete documentation for the public API (as well as for the
  internal API and source code itself).
- Is cross-platform. It does not use platform-specific code nor rely on a
  specific byte order. CI-tested on Linux, Windows, FreeBSD.
- Provides internationalization and localization, including right-to-left
  layouts.
- Provides high-DPI support.
- Uses QStyle wherever possible.
- Provides support for Qt style sheets where it makes sense.
- Has support for both pointer devices (mouse, touchpad, etc.) *and*
  keyboard navigation in the widgets.
- Has a permissive license.
- Can be built as either a static or…
