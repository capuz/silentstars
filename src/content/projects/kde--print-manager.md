---
repo: "KDE/print-manager"
name: "print-manager"
description: "A tool for managing print jobs and printers"
url: "https://github.com/KDE/print-manager"
homepage: "https://invent.kde.org/plasma/print-manager"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [66, 30]
stars: 27
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 61
recentReleases: 0
createdAt: "2015-09-18T16:26:03Z"
lastCommitAt: "2026-06-28T02:01:12Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 60
maintainers: ["noee", "nicolasfella", "bhush9"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cede7e8fe95e4e4c4900599cf6cb53c2d2291db7152f57092af8f086dc5dec6/KDE/print-manager"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Print Manager

Print Manager is a small, relatively self-contained set of components integrated with Plasma System Settings for managing CUPS printer configurations.

## Components

* Legacy stand-alone app:
  * `configure-printer` manages print job media options and other settings

* Print job manager
  * `plasma-print-queue` provides a single interface for managing jobs in
    configured print queues

* System tray plasmoid provides quick access to printers and print job status

* KDed module for new device and ink/toner level notifications

* KCM module for print queue setup and configuration

* KCups Library provides an interface to the CUPS api as well as a few models that are used by the legacy apps, the KCM and the plasmoid

## General

The print-manager KCM provides the primary means to add/configure printers and printer groups.  In addition, some of the basic CUPS print server options can be configured.  There are some limitations to the KCM that mirror the (pre-Plasma6) legacy apps:

* Limited support for Windows printers using samba
* Limited support for auto print queue identification for older connection schemes (LPD/SOCKET)

The KCM also depends on the following…
