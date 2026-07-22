---
repo: "KDE/kongress"
name: "kongress"
description: "Companion application for conferences"
readmeQualityOk: true
url: "https://github.com/KDE/kongress"
homepage: "https://invent.kde.org/utilities/kongress"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [65, 30]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 24
recentReleases: 0
createdAt: "2020-01-27T09:17:23Z"
lastCommitAt: "2026-07-22T05:55:40Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 76
undervaluedScore: 76
maintainers: ["Montel", "heirecka", "vkrause"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0f311af976058cef3e7678f376d8b5a835c31349f83ade16cca48ac6d9ff48b/KDE/kongress"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Kongress

Companion application for conference attendees

## Features

Kongress provides practical information about conferences. It supports conferences that offer their schedule in [iCalendar](https://tools.ietf.org/html/rfc5545) format. In Kongress, the data of the talks are shown in various ways, e.g. in daily views, by talk category, etc. The users can also create a list of favorite conference talks/events as well as they can navigate to the web page of each talk. A map of the conference venue, location information and link to OpenStreetMap can also be added.

A set of conferences have been preloaded and are available after installation. Users may add extra conferences, providing a link to their iCalendar schedule (under development).

## Adding Conferences

The preloaded events are configured in https://invent.kde.org/websites/autoconfig-kde-org/-/blob/master/kongress/conference-data.json,
adding new ones can be done by submitting a merge request againt the [autoconfig.kde.org repository](https://invent.kde.org/websites/autoconfig-kde-org/).

## Setup

### Build

```
git clone https://invent.kde.org/utilities/kongress
cd kongress
mkdir build
cd build
cmake ..
make…
