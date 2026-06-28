---
repo: "KDE/powerdevil"
name: "powerdevil"
description: "Manages the power consumption settings of a Plasma shell"
url: "https://github.com/KDE/powerdevil"
homepage: "https://invent.kde.org/plasma/powerdevil"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [72, 24]
stars: 57
forks: 17
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 157
recentReleases: 0
createdAt: "2015-09-18T15:35:47Z"
lastCommitAt: "2026-06-28T02:01:05Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 52
maintainers: ["bhush9", "kbroulik", "Pointedstick"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cb3c9aed87ea1ffc4689c794d3d5a587bc0811b8ffeefef120dc6f488f62c13/KDE/powerdevil"
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
