---
repo: "usethesource/clair"
name: "clair"
description: "C Language Analysis in Rascal "
readmeQualityOk: true
url: "https://github.com/usethesource/clair"
language: "Java"
languages: ["Java"]
languagePcts: [89]
stars: 27
forks: 14
openIssues: 27
closedIssues: 41
watchers: 6
contributors: 18
recentReleases: 0
createdAt: "2016-09-02T08:36:02Z"
lastCommitAt: "2026-10-09T10:50:50Z"
lastReleaseAt: "2025-12-17T12:11:14Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 65
undervaluedScore: 35
maintainers: ["jurgenvinju"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b3e77c9e4ee8bd08d9e4c0168b699f973d1445213dc73a6b9604bd1734e4363/usethesource/clair"
---

# ClaiR - C Language Analysis in Rascal

ClaiR provides a mapping from the Eclipse CDT open C and C++ front-end to a Rascal M3 model for further processing.
It can work with and without working from inside the Eclipse IDE.

## Required software

You need Rascal, and either Eclipse or VScode or the standalone Rascal jar:
* Eclipse 2019-06 or higher with or without the CDT tools (see [here](https://www.eclipse.org/downloads/packages/release/2019-06/r/eclipse-ide-cc-developers)). With the CDT tools you have some more tools to access information from CPP projects (like include paths), but otherwise Clair functions the same.
  * In Eclipse, install the Rascal plugin from the update site: <https://update.rascal-mpl.org/stable/>
* Or: VScode with the Rascal extension 
   * Use the extension view in VScode to install Rascal
* Or: the Rascal commandline (see [here](https://www.rascal-mpl.org/start/))

## How to use ClaiR once you have Rascal installed:

* Create an empty project "myproject" in a folder named "myproject" using the `newRascalProject` function from `util::Reflective`.
* In `pom.xml` add:
```
<dependency>
    <groupId>org.rascalmpl</groupId>
    <artifactId>clair</artifactId>…
