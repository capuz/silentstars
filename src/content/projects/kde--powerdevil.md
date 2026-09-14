---
repo: "KDE/powerdevil"
name: "powerdevil"
description: "Manages the power consumption settings of a Plasma shell"
readmeQualityOk: true
url: "https://github.com/KDE/powerdevil"
homepage: "https://invent.kde.org/plasma/powerdevil"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [71, 25]
stars: 59
forks: 19
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 163
recentReleases: 0
createdAt: "2015-09-18T15:35:47Z"
lastCommitAt: "2026-09-10T11:45:36Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 77
undervaluedScore: 52
maintainers: ["bhush9", "mkurz", "Pointedstick"]
openGraphImageUrl: "https://opengraph.githubassets.com/cab1b8000162845f0cba06d6a622fc267965a37d26586dfa9caed65eeed1e0e5/KDE/powerdevil"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# PowerDevil

PowerDevil is the internal name of the KDE power management service for Plasma.
It is responsible for some (but not all) interactions with hardware functionality. The service will:

* Suspend or shut down sessions under certain conditions such as user inactivity, closing the laptop lid or pressing the power button.
* Adjust the brightness level of displays and keyboards, or turn display backlights off/on altogether.
* Change settings according to the current power state (plugged in, battery, low battery), which can be customized in System Settings.
* Monitor the current battery charge, and set charge thresholds for battery-powered devices that support it.
* Keep track of system state - e.g. suspend/idle/etc. inhibitors, activities, screen locking - to adjust power management behaviors accordingly.
* Communicate with underlying services such as [UPower](https://gitlab.freedesktop.org/upower/upower), [power-profiles-daemon](https://gitlab.freedesktop.org/upower/power-profiles-daemon), [ddcutil](https://github.com/rockowitz/ddcutil), and/or [systemd](https://systemd.io/) to implement some of the above.
* Provide a D-Bus interface for other Plasma components such as the…
