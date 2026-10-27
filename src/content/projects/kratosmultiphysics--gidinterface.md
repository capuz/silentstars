---
repo: "KratosMultiphysics/GiDInterface"
name: "GiDInterface"
description: "The graphical user interface of Kratos for GiD. Featuring CFD, CSM, DEM, PFEM, etc"
readmeQualityOk: true
url: "https://github.com/KratosMultiphysics/GiDInterface"
language: "Python"
languages: ["Python", "Tcl"]
languagePcts: [62, 38]
topics: ["gid", "problemtype", "tcl"]
stars: 39
forks: 18
openIssues: 24
closedIssues: 373
watchers: 22
contributors: 80
recentReleases: 0
createdAt: "2017-02-14T10:51:38Z"
lastCommitAt: "2026-10-27T09:17:18Z"
lastReleaseAt: "2020-01-22T16:54:04Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 93
undervaluedScore: 46
maintainers: ["jginternational", "lauramoremar", "AlejandroCornejo"]
openGraphImageUrl: "https://opengraph.githubassets.com/48ab24afb5508f667899bcc7ec38ed76c749fffb1b82fff55e314fee24d04418/KratosMultiphysics/GiDInterface"
---

# KratosMultiphysics <-> GiD Interface

The user interface of Kratos with [GiD](http://www.gidsimulation.com).

If you need the latest stable release, launch your GiD, navigate to Data > Problemtype > Internet retrieve and download Kratos there.
Available for Linux. Windows, and macOS.

If you need the developer version, you are on the right place.

## First steps
* 1- Clone this repository, or install a stable [release](https://github.com/KratosMultiphysics/GiDInterface/releases)
* 2- Install the latest GiD developer version **(minimum 16.1.4d)** -> [Developer version](https://www.gidsimulation.com/gid-for-science/downloads/)
* 3- Navigate to GiD's problemtype folder and delete any previous kratos.gid
    * Create there a link to our [kratos.gid](https://github.com/KratosMultiphysics/GiDInterface/blob/HEAD/kratos.gid/) downloaded in step 1
        * Windows: Simple shortcut to kratos.gid folder
* 4- Choose your execution mode:
    * 4.1- **Default execution mode.** Use GiD's python:
        * You don't need to install python. The program will detect if you have any pending package to install.
        * If there's any missing package, use the GiD command line and execute:…
