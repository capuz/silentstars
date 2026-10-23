---
repo: "Roche/foxops"
name: "foxops"
description: "Templating for Git Repositories"
readmeQualityOk: true
url: "https://github.com/Roche/foxops"
homepage: "https://foxops.readthedocs.io"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [64, 34]
stars: 48
forks: 9
openIssues: 15
closedIssues: 33
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2022-06-30T12:12:55Z"
lastCommitAt: "2026-10-23T12:03:59Z"
lastReleaseAt: "2022-07-19T09:47:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 37
maintainers: ["peterbraden", "dependabot[bot]", "evrardj-roche"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbe2d1303fd5309e6ae3726d63df49b3f196a37840749050e418ac1bc8f72b89/Roche/foxops"
discussionCount: 1
---

# foxops 🦊

Foxops is a tool that helps to create Git repositories from a template file structure. It serves as a central tool for maintaining an overview of all repositories created from a template, including their versions and the data used to fill placeholders.

Moreover, foxops can keep these repositories up-to-date with any changes made to the template, even if changes were made to the target repository ('incarnation') in the meantime.

Some example use cases for this tool include:
* Keeping multiple microservice repositories updated with a common CI/CD configuration or build tooling template
* Managing a number of infrastructure-as-code repositories based on a common template (e.g., dev/staging/prod environments)

## Documentation

The documentation and installation instructions are available here: https://foxops.readthedocs.io

## Alternatives

* [cookiecutter](https://github.com/cookiecutter/cookiecutter) - probably one of the most popular file-system templating tools
* [copier](https://github.com/copier-org/copier) - another CLI application for file-system templating
