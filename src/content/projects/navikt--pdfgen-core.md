---
repo: "navikt/pdfgen-core"
name: "pdfgen-core"
description: "An application written in Kotlin used to create PDFs and HTMLs"
readmeQualityOk: true
url: "https://github.com/navikt/pdfgen-core"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [81]
topics: ["kotlin", "mustache-templates"]
stars: 5
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 49
recentReleases: 0
createdAt: "2023-11-14T07:17:29Z"
lastCommitAt: "2026-11-08T14:14:05Z"
lastReleaseAt: "2024-01-01T14:42:44Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 98
maintainers: ["roar-skinderviken", "dependabot[bot]", "MikAoJk"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecac9a2363d7c10fa463ed57ccf31c668b2c1bab1f00e7bb35940f4006829cc4/navikt/pdfgen-core"
---

## Maintenance mode

This project is in maintenance mode. No new features are planned. Future changes will focus on bug fixes and security updates.

=============
# pdfgen-core
Repository for `pdfgen-core`, an application written in Kotlin used to create PDFs and HTMLs

## Technologies & Tools
* Kotlin
* Gradle
* Junit
* Handlebars
* VeraPDF-validation
* JDK 25

## Getting started

pdfgen-core is used with templates, fonts, additional resources, and potential test data to verify that valid PDFs get produced by the templates.

Check GitHub releases to find the latest `release` version 
Check [GitHub releases](https://github.com/navikt/pdfgen-core/releases) to find the latest `release` version

In your own repository create folders `templates`, `resources` and `data` on root of you repository
* `templates`
    Create subfolder inside `templates` folder
    ```bash
    mkdir {templates}/directory_name # directory_name can be anything, but it'll be a necessary part of the API later
    ````
  * `templates/directory_name/` should then be populated with your .hbs-templates. the names of these templates will also decide parts of the API paths
    
* `resources` should contain additional…
