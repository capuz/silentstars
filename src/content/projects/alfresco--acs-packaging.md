---
repo: "Alfresco/acs-packaging"
name: "acs-packaging"
description: "Packaging of Docker containers, war file and zip for Alfresco Content Services (Enterprise)"
readmeQualityOk: true
url: "https://github.com/Alfresco/acs-packaging"
homepage: "https://www.alfresco.com/platform/content-services-ecm/trial/download"
language: "Java"
languages: ["Java"]
languagePcts: [76]
stars: 29
forks: 35
openIssues: 3
closedIssues: 3
watchers: 75
contributors: 135
recentReleases: 0
createdAt: "2018-04-05T09:10:30Z"
lastCommitAt: "2026-10-06T10:41:38Z"
lastReleaseAt: "2020-04-12T08:54:23Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 53
maintainers: ["alfresco-engineering-contributor[bot]", "joyjit-hyland", "bsayan2"]
openGraphImageUrl: "https://opengraph.githubassets.com/61d6afc742abf47abd03dd777a4c857a4426657385c8ab301fe94c1b53d676db/Alfresco/acs-packaging"
---

# Alfresco Content Services Enterprise Packaging
This project is producing packaging for Alfresco Content Services Enterprise.

License rights for this program may be obtained from Alfresco Software, Ltd.
pursuant to a written agreement and any use of this program without such an
agreement is prohibited.

https://www.alfresco.com/legal/agreements and https://www.alfresco.com/terms-use

The SNAPSHOT version of artifacts are **never** published.

### Contributing guide
Please use [this guide](https://github.com/Alfresco/acs-packaging/blob/HEAD/CONTRIBUTING.md) to make a contribution to the project.

# General

This project is the Enterprise equivalent of the [Community Packaging Project](https://github.com/Alfresco/acs-community-packaging).
Please ensure that you have the correct agreements in place and access to the Enterprise Maven artifacts.

This project creates the `alfresco/alfresco-content-repository` and `alfresco/alfresco-share` docker images. It also
creates and the distribution zips for the Alfresco Content Services product.

The `alfresco/alfresco-content-repository` image extends the `alfresco-enterprise-repo-base` created by the
`alfresco-enterprise-repo` project to…
