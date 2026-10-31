---
repo: "KDE/oxygen-icons"
name: "oxygen-icons"
description: "Oxygen icon theme"
readmeQualityOk: true
url: "https://github.com/KDE/oxygen-icons"
homepage: "https://invent.kde.org/frameworks/oxygen-icons"
language: "Shell"
languages: ["Shell", "C++"]
languagePcts: [36, 30]
stars: 84
forks: 15
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 37
recentReleases: 0
createdAt: "2015-09-18T13:08:02Z"
lastCommitAt: "2026-10-31T15:58:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3826af1ff86a57ec38844dde517aad4c680d523f2364de36d0e78ffd063b71e8/KDE/oxygen-icons"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Oxygen Icons

Oxygen Icons is a freedesktop.org compatible icon theme originally developed for the KDE Plasma desktop environment in combination with the Oxygen Style. It features smooth gradients, soft shadows, and a slightly glossy look.

## Declarative icon configuration (prototype)

The experimental Plasma settings implementation and build instructions are
maintained in [pinheiro/oxygen2, `plasma-icon-configuration`](https://invent.kde.org/pinheiro/oxygen2/-/tree/master/plasma-icon-configuration).
That directory contains a patch against Plasma Workspace **v6.7.4**, including
the generic renderer and regression tests, plus an opt-in CMake build/installer.
Enable `INSTALL_PATCHED_ICON_SETTINGS=ON` there to build the patched settings;
installation backs up replaced files and provides a rollback command. See its
README for dependencies, distribution-specific paths and installation commands.
This feature requires that patched
Plasma implementation; Oxygen itself needs no compiled configuration component.
Unpatched desktops continue to use Oxygen normally and ignore the extra
configuration metadata.

Oxygen supplies only data: `index.theme` declares…
