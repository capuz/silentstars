---
repo: "GreenDelta/olca-app"
name: "olca-app"
description: "Source code of openLCA"
url: "https://github.com/GreenDelta/olca-app"
homepage: "https://openlca.org"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["openlca", "eclipse-rcp", "java"]
stars: 259
forks: 64
openIssues: 39
closedIssues: 186
watchers: 15
contributors: 21
recentReleases: 0
createdAt: "2013-08-29T14:14:54Z"
lastCommitAt: "2026-07-03T12:22:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 41
maintainers: ["msrocka", "dependabot[bot]", "francoislerall"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bb0b4a72ec66e8628fe2a4ffe8735b0d3e946d254d710061a39aaff45949ea1/GreenDelta/olca-app"
---

# openLCA
This repository contains the source code of [openLCA](http://openlca.org).
openLCA is a Java application that runs on the Eclipse Rich Client Platform
([Eclipse RCP](http://wiki.eclipse.org/index.php/Rich_Client_Platform)). This
project depends on the [olca-modules](https://github.com/GreenDelta/olca-modules)
project which is a plain [Maven](http://maven.apache.org/) project that contains
the core functionalities of openLCA (e.g. the model, database access,
calculations, data exchange, and database updates).

This repository has the following sub-projects:

* [olca-app](./olca-app): contains the source code of the openLCA RCP
  application.
* [olca-app-build](./olca-app-build): contains the build scripts for compiling
  openLCA and creating the installers for Windows, Linux, and macOS.
* [olca-app-html](./olca-app-html): contains the source code for the HTML views
  in openLCA (like the start page or the report views).
* [olca-refdata](./olca-refdata): contains the current reference data (units,
  quantities, and flows) that are packaged with openLCA.

See also the README files that are contained in these sub-projects.

## Building from source
openLCA is an Eclipse RCP…
