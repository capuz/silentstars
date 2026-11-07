---
repo: "KDE/kuserfeedback"
name: "kuserfeedback"
description: "Framework for collecting user feedback for apps via telemetry and surveys"
readmeQualityOk: true
url: "https://github.com/KDE/kuserfeedback"
homepage: "https://invent.kde.org/frameworks/kuserfeedback"
language: "C++"
languages: ["C++"]
languagePcts: [79]
stars: 15
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 39
recentReleases: 0
createdAt: "2017-03-19T10:11:23Z"
lastCommitAt: "2026-11-07T16:12:25Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 76
undervaluedScore: 72
maintainers: ["nicolasfella", "kossebau", "tsdgeos"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d5a216f93893620d359163578bbe44c0fecc7fb7260b86d71b7e42f9cbbac28/KDE/kuserfeedback"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KUserFeedback

Framework for collecting feedback from application users via telemetry and targeted surveys.

## Telemetry

* Extensible set of data sources for telemetry.
* Full control for the user on what data to contribute.

## Surveys

* Distribute surveys and offer users to participate in them.
* Survey targeting based on telemetry data.
* Allow the user to configure how often they want to participate in surveys.

## Components

This framework consists of the following components:
* Libraries for use in applications.
* QML bindings for the above.
* A server application.
* A management and analytics application.

## Integration
To use this framework in your application, on a high level you have to do
the following steps inside your program:
* Create an instance of KUserFeedback::Provider for the entire lifetime of your
  application, and configure it as described in its documentation.
* Add one or more data sources to the provider, choosing from the standard
  built-in ones, or by adding custom ones deriving from KUserFeedback::AbstractDataSource.
* Add a way to notify your users about surveys, and to encourage them to contriubute
  in the first place, by hooking a suitable…
