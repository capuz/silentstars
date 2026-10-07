---
repo: "KDE/craft-blueprints-kde"
name: "craft-blueprints-kde"
description: "Project build blueprints for Craft - the meta build system and package manager"
readmeQualityOk: true
url: "https://github.com/KDE/craft-blueprints-kde"
homepage: "https://invent.kde.org/packaging/craft-blueprints-kde"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 23
forks: 30
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 119
recentReleases: 0
createdAt: "2017-08-30T12:59:28Z"
lastCommitAt: "2026-10-07T10:30:48Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 71
maintainers: ["miraks31", "asemke", "gerlachs"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c9a007a57d605092a79296215357287f4e5efabfe3fd377e19dbfcc3c2b5974/KDE/craft-blueprints-kde"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Branches

- `master`: update to existing stuff goes here (only supports Qt6)
- `dev`: ... unless it has chance of breaking everything and the kitchen sink then it goes here. Also, new caches go here. Only supports Qt6.
- `qt5-lts`: branch to continue support for Qt5, no major updates are expected here

# Test the build of a package / blueprint

All MR pipelines have several `build-package-*` jobs which you can use to test the build of a package for the different platforms supported by Craft.
The jobs need to know which package to build. There are several ways to achieve this.

## Automatic package selection

If the title of your MR (or the title of the latest commit in the MR) starts with `PACKAGE_NAME: ` or with `[PACKAGE_NAME] ` then the `build-package-*` jobs
will run the jobs for package `PACKAGE_NAME`, i.e. you can simply click the ▶️ button of the build job you want to run. (The prefix `Draft:` of draft MRs will be ignored.)

## Manual specification of package for all jobs of a pipeline

1. Open the Pipelines tab of your MR.
2. Click the arrow next to *Run pipeline* and select *Run pipeline with modified values*.
3. Enter the name of the package you want to build as value…
