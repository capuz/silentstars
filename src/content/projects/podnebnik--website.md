---
repo: "podnebnik/website"
name: "website"
description: "Podnebnik website"
readmeQualityOk: true
url: "https://github.com/podnebnik/website"
homepage: "https://podnebnik.org"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [59, 23]
stars: 7
forks: 5
openIssues: 24
closedIssues: 2
watchers: 6
contributors: 15
recentReleases: 0
createdAt: "2021-03-16T15:57:37Z"
lastCommitAt: "2026-08-15T04:03:24Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 81
undervaluedScore: 70
maintainers: ["ntadej", "kesma01", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccebaed755f300229233c6b5e91420278bfcb5cf02f1fad2b0ed0e086d69ec1c/podnebnik/website"
fundingLinks: ["CUSTOM:https://sledilnik.org/donate"]
---

# Podnebnik

This repository is the source code for the [podnebnik.org](https://podnebnik.org) website.

The project is structured as a multi page, statically generated web site that allows authors to create rich narratives by combining data, text and visualizations. By combining data, content and code in one repository it is possible to keep all three components in sync, have a single source of truth, and a complete history of changes.

The project resources are organized in following top level folders:

- `data` folder contains the data in the form of Frictionless Data packages
- `code` folder contains the code for the visualizations
- `pages` folder contains the text content of the website
- `styles` folder contains the CSS stylesheets
- `assets` folder contains the static assets, such as images and fonts
- `deployment` folder contains the deployment definitions such as Dockerfiles

The project is build on top of the following fantastic tools:

- [11ty](https://www.11ty.dev/) static site generator
- [Highcharts](https://www.highcharts.com/) charting library
- [Frictionless Data](https://frictionlessdata.io/) data packaging and validation
- [Datasette](https://datasette.io/)…
