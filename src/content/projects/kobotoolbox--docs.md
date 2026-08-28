---
repo: "kobotoolbox/docs"
name: "docs"
description: "The official KoboToolbox userguide website."
readmeQualityOk: true
url: "https://github.com/kobotoolbox/docs"
homepage: "https://support.kobotoolbox.org/"
language: "HTML"
languages: ["HTML", "SCSS", "Python"]
languagePcts: [43, 21, 20]
stars: 27
forks: 25
openIssues: 0
closedIssues: 203
watchers: 15
contributors: 43
recentReleases: 0
createdAt: "2020-04-17T20:02:22Z"
lastCommitAt: "2026-08-28T12:24:10Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 69
maintainers: ["salomegarnier", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/035bacc6ec62067a9b22c43cebae77ae36dd1d894fcbdcc3b76e59459778b08d/kobotoolbox/docs"
---

# KoboToolbox user documentation

This repository contains all the user content of KoboToolbox's official documentation, available at https://support.kobotoolbox.org/.

## Before you open an issue…

Please note that the purpose of the issue tracker on this repository is to track work on the *technical infrastructure* of the documentation site. For requests related to the content of the documentation, please:
* Post in Zulip [#Kobo support docs](https://chat.kobotoolbox.org/#narrow/stream/64-Kobo-support-docs) if you are a member of the Kobo team
* Otherwise, please share your feedback through our [Community Feedback Form](https://ee-eu.kobotoolbox.org/x/OPizwor2)
* For support requests or bug reports, please post in the [Community Forum](https://community.kobotoolbox.org/c/support-article/29)

## Local installation

To build and test this documentation locally follow these steps:

Prerequisites:
* Python 3.10 or later (Python 3.13+ supported)
* git
* npm

1. Open terminal
2. Clone repository: `git clone https://github.com/kobotoolbox/docs.git`
3. Change into the cloned directory: `cd docs`
4. Build the theme if you made any changes to it: `npm install && npm start`
5. Create a…
