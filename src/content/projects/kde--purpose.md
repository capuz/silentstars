---
repo: "KDE/purpose"
name: "purpose"
description: "Framework for providing abstractions to get the developer's purposes fulfilled."
url: "https://github.com/KDE/purpose"
homepage: "https://invent.kde.org/frameworks/purpose"
language: "C++"
languages: ["C++"]
languagePcts: [78]
stars: 15
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 47
recentReleases: 0
createdAt: "2015-09-18T11:50:07Z"
lastCommitAt: "2026-06-28T01:45:35Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 78
undervaluedScore: 68
maintainers: ["nicolasfella", "Montel", "tsdgeos"]
openGraphImageUrl: "https://opengraph.githubassets.com/93dab400cd3cdcba54de6f9e3876edaa635908227d1c2305ec10511535b3fc59/KDE/purpose"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Purpose

Offers available actions for a specific purpose

## Introduction

This framework offers the possibility to create integrate services and actions
on any application without having to implement them specifically. Purpose will
offer them mechanisms to list the different alternatives to execute given the
requested action type and will facilitate components so that all the plugins
can receive all the information they need.

## Usage

There's 2 main ways of using Purpose: from C++ and QML/QtQuick.

To import it from QML, import

    import org.kde.purpose

It offers different ways of integrating the actions in an application. For full
control on the procedure, we can use:
* *AlternativesModel* for listing the different possibilities
* *JobView* for displaying a job's status, including configuration

Furthermore, there's the *AlternativesView* component that will integrate all the
process defined below for convenience.

If you want to import in the C++ application, you can import it using CMake by
calling:

    find_package(KF6Purpose)

Or its QMake counterpart. Then you'll have available the Purpose library if it
needs to be done specifically and PurposeWidgets for…
