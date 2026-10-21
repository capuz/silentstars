---
repo: "Alfresco/acs-community-packaging"
name: "acs-community-packaging"
description: "Packaging of Docker containers, war file and zip for Alfresco Content Services (Community)"
readmeQualityOk: true
url: "https://github.com/Alfresco/acs-community-packaging"
homepage: "https://community.alfresco.com/community/ecm/pages/get-started"
language: "Java"
languages: ["Java"]
languagePcts: [90]
stars: 64
forks: 58
openIssues: 14
closedIssues: 5
watchers: 76
contributors: 96
recentReleases: 0
createdAt: "2017-07-26T14:44:51Z"
lastCommitAt: "2026-10-21T08:49:33Z"
lastReleaseAt: "2019-11-27T13:56:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 84
undervaluedScore: 48
maintainers: ["alfresco-build", "alfresco-engineering-contributor[bot]", "damianujma"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb39b0ed98ef10523fe01dbfcdb8eaf2d4f4f60c00790fad30d49582fa92c8f6/Alfresco/acs-community-packaging"
---

# Alfresco Content Services Community Packaging
This project is producing packaging for Alfresco Content Services Community.

The SNAPSHOT version of artifacts are **never** published.

### Contributing guide
Please use [this guide](https://github.com/Alfresco/acs-community-packaging/blob/HEAD/CONTRIBUTING.md) to make a contribution to the project.

# General

This project is the Community equivalent of the [Enterprise Packaging Project](https://github.com/Alfresco/acs-packaging).

This project creates the `alfresco/alfresco-content-repository-community` docker image and the distribution zip
for the Alfresco Content Services Community product.

The `alfresco/alfresco-content-repository-community` image extends the `alfresco-community-repo-base` created by the
`alfresco-community-repo` project to add additional ACS components.

# Build:
For more detailed build instructions, see the [Development Tomcat Environment](https://github.com/Alfresco/acs-community-packaging/tree/master/dev/README.md)
page.

To build the project, including the distribution zip, but not the Docker images, issue the following commands:
```
$ # The comP alias includes the following:
$ cd acs-community-packaging…
