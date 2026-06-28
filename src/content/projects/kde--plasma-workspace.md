---
repo: "KDE/plasma-workspace"
name: "plasma-workspace"
description: "Various components needed to run a Plasma-based environment"
url: "https://github.com/KDE/plasma-workspace"
homepage: "https://invent.kde.org/plasma/plasma-workspace"
language: "C++"
languages: ["C++"]
languagePcts: [72]
stars: 274
forks: 117
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 406
recentReleases: 0
createdAt: "2015-09-18T17:13:10Z"
lastCommitAt: "2026-06-28T02:00:53Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 40
maintainers: ["easyteacher", "notmart", "davidedmundson"]
openGraphImageUrl: "https://opengraph.githubassets.com/10a9bd8e2850f99196e4ae4e0972c1a376741a0811c4809b72ea477e7dec6ddd/KDE/plasma-workspace"
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
