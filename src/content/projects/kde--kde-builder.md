---
repo: "KDE/kde-builder"
name: "kde-builder"
description: "A tool to streamline the process of setting up and maintaining a development environment for KDE software."
readmeQualityOk: true
url: "https://github.com/KDE/kde-builder"
homepage: "https://invent.kde.org/sdk/kde-builder"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 12
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 29
recentReleases: 0
createdAt: "2024-02-25T17:39:53Z"
lastCommitAt: "2026-08-29T17:11:14Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 75
undervaluedScore: 69
maintainers: ["Ashark"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8118e302c6ee6e4b97d533c78ebbb076606686269f4f1e8676809ee8c39457d/KDE/kde-builder"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KDE Builder

This tool streamlines the process of setting up and maintaining a development environment for KDE software.

It does this by automating the process of downloading source code from the
KDE source code repositories, building that source code, and installing it
to your local system.

**kde-builder** downloads and used data from special repository [**repo-metadata**](https://invent.kde.org/sysadmin/repo-metadata).  
It contains KDE Projects database, names of branches to checkout for each project, build configs (default cmake options)
for projects, and some other data.  

**kde-builder** is a successor of a previously used tool called [**kdesrc-build**](https://invent.kde.org/sdk/kdesrc-build).  
The predecessor project was written in Perl, and this was a significant barrier for new contributions.  
The successor project is written in Python - a much more acknowledged language. This means that newly wanted features can be implemented with ease.  

## Basic Usage

Before installing, configure your PATH environment variable to include the `~/.local/bin` path - the location where kde-builder will be installed.
See [documentation…
