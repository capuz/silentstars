---
repo: "KDE/kde-gtk-config"
name: "kde-gtk-config"
description: "Syncs KDE settings to GTK applications"
readmeQualityOk: true
url: "https://github.com/KDE/kde-gtk-config"
homepage: "https://invent.kde.org/plasma/kde-gtk-config"
language: "C++"
languages: ["C++"]
languagePcts: [85]
stars: 48
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 60
recentReleases: 0
createdAt: "2015-09-18T15:48:12Z"
lastCommitAt: "2026-11-08T14:01:30Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 70
undervaluedScore: 45
maintainers: ["bhush9", "LordTermor", "davidedmundson"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8af22706d83c506a96115adfcbe7f79f6c98c0d0c921b9a24e8e40133d20c57/KDE/kde-gtk-config"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KDE GTK Configurator

This project aims to provide a smooth experience for the users of GNOME/GTK applications on Plasma Desktop. 

## 👷 The Structure

KDE GTK Configurator has a number of facilities to ensure a good integration with GTK applications. The main ones are the following:

1. The daemon, that runs in background, which is a core of the whole ecosystem. It has a number of various liabilities.
2. Part of the System Settings Application Style KCM that allows the users to change and manage their GTK applications' themes. [^1]
3. GTK3 color reload module, which allows GTK3 applications, that use [Breeze GTK theme](https://invent.kde.org/plasma/breeze-gtk), to update their UI colors without restarting them.

## 😈 The daemon

The daemon itself does the following:

1. Watching for changes inside of various Plasma configuration files and on change also apply that setting for the GTK applications using their configuration methods and values.
2. Applying GTK theme on demand from the Application Style KCM
3. Applying colors for Breeze GTK Theme according to the color scheme set in the Colors KCM.

### ⚙ Settings the daemon syncs

- 🔤 UI Font
- 💾 Icon Theme
- 👆 Cursor theme…
