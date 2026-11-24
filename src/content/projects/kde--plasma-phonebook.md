---
repo: "KDE/plasma-phonebook"
name: "plasma-phonebook"
description: "Phone book for Plasma Mobile"
readmeQualityOk: true
url: "https://github.com/KDE/plasma-phonebook"
homepage: "https://invent.kde.org/plasma-mobile/plasma-phonebook"
language: "QML"
languages: ["QML"]
languagePcts: [74]
stars: 11
forks: 6
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 26
recentReleases: 0
createdAt: "2019-09-11T08:00:04Z"
lastCommitAt: "2026-11-20T08:00:17Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 73
undervaluedScore: 65
maintainers: ["heirecka", "City-busz", "tsdgeos"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf1c6b861488d9a54d81e7d2a6c8d268c076ce4b6ec788caedf31be64aeea30c/KDE/plasma-phonebook"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Plasma Mobile phonebook

Contacts application which allows adding, modifying and removing contacts.

# Backend

The application uses kpeople models to find, add, remove and update contacts.
The actual vcard editing is done using KContacts, allowing to use the full range of fields vcards support.
Plasma Phonebook ships its own KPeople plugin for displaying actions.

# Building

plasma-phonebook depends on Qt6 and a few KDE Frameworks:
  - KCoreAddons
  - Kirigami
  - KPeople
  - KContacts
  - KI18n
  - Kirigami Addons

If your distribution does not provide a recent enough version you can use [kdesrc-build](https://community.kde.org/Get_Involved/development#Set_up_kdesrc-build) to build plasma-phonebook and with all dependencies.

To build plasma-phonebook do:
  - git clone git@invent.kde.org:kde/plasma-phonebook.git
  - cd plasma-phonebook
  - mkdir build
  - cd build
  - cmake -DCMAKE_INSTALL_PREFIX=~/kde ..
  - make
  - make install

To run the built version do:
  - source prefix.sh
  - plasma-phonebook

If you have questions please contact us in one of the [Plasma Mobile channels](https://www.plasma-mobile.org/join/).
