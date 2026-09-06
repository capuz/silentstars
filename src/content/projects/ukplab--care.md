---
repo: "UKPLab/CARE"
name: "CARE"
description: "Project CARE"
readmeQualityOk: true
url: "https://github.com/UKPLab/CARE"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [51, 47]
stars: 40
forks: 1
openIssues: 97
closedIssues: 77
watchers: 6
contributors: 34
recentReleases: 0
createdAt: "2023-02-07T11:28:16Z"
lastCommitAt: "2026-09-06T08:02:15Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 48
maintainers: ["dennis-zyska", "NAO-200", "karimouf"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee22280d95025e6ac1ba62206b86b6145e3c2326e848d36deb5836db0ceb8fa2/UKPLab/CARE"
---

# CARE - Collaborative AI-Assisted Research Environment

CARE is a Collaborative AI-Assisted Research Environment that integrates reading, annotating, writing, and assessment workflows into a single platform for academic research teams.

A demo of the latest public version is available under https://demo.care.ukp.informatik.tu-darmstadt.de.

## Quickstart

Make sure you have [Git](https://git-scm.com/downloads), [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

```shell
git clone https://github.com/UKPLab/CARE.git && cd CARE
make ENV=main build 
```

The application is now available under http://localhost:9090.

__Note:__ On Windows, you need to install [GnuWin32 Make](http://gnuwin32.sourceforge.net/packages/make.htm) or just run `winget install GnuWin32.Make` and make it executable with `set PATH=%PATH%;C:/Program Files (x86)/GnuWin32/bin`.

### Documentation

You can find the documentation on GitHub Pages:
- Main branch: https://ukplab.github.io/CARE/main/
- Dev branch: https://ukplab.github.io/CARE/dev/

The documentation can also be built locally by running `make doc` and is then available under…
