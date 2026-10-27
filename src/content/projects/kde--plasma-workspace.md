---
repo: "KDE/plasma-workspace"
name: "plasma-workspace"
description: "Various components needed to run a Plasma-based environment"
readmeQualityOk: true
url: "https://github.com/KDE/plasma-workspace"
homepage: "https://invent.kde.org/plasma/plasma-workspace"
language: "C++"
languages: ["C++"]
languagePcts: [72]
stars: 291
forks: 128
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 431
recentReleases: 0
createdAt: "2015-09-18T17:13:10Z"
lastCommitAt: "2026-10-27T11:27:57Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 40
maintainers: ["felagund", "veggero", "kbroulik"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf96207959a8493be2b39dc1c068739dcaa0c716b781e1d20343967b51b6cf3c/KDE/plasma-workspace"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

## Plasma Workspace

Plasma Workspace is used as the base for Plasma Desktop, Mobile, and Bigscreen.
It contains shared KCMs, applets as well as multiple libraries.

### TaskManager Library

The Task Manager provides various QAbstractListModel-based model for listing
Windows (TaskManager::AbstractWindowTasksModel), Startup tasks (TaskManager::StartupTasksModel) and Launcher
Job (TaskManager::LauncherTasksModel).

### Workspace Library

libkworkspace provides functions to allow you to interact with the
%KDE session manager (SessionManagement).

### Notification Manager Library

libnotificationmanager is responsible for listing notifications, closing them
and interacting with them in Plasma. This class provides a %Qt model for jobs:
NotificationManager::JobsModel. As well as a %Qt model for notifications and
jobs: NotificationManager::Notifications.
