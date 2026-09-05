---
repo: "palantir/distgo"
name: "distgo"
description: "Go tool for building, distributing and publishing Go projects"
readmeQualityOk: true
url: "https://github.com/palantir/distgo"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["octo-correct-managed"]
stars: 31
forks: 17
openIssues: 5
closedIssues: 10
watchers: 250
contributors: 49
recentReleases: 0
createdAt: "2018-03-05T04:07:34Z"
lastCommitAt: "2026-09-05T07:50:00Z"
lastReleaseAt: "2018-04-01T15:09:58Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 93
undervaluedScore: 40
maintainers: ["svc-excavator-bot", "svc-autorelease", "tabboud"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ad3a2245e99617d1c4a4f39fcf53d12255d73010a4c4249abda529c926d7ecb/palantir/distgo"
---

</p>

distgo
======
distgo is a gödel plugin that runs, builds, distributes and publishes products in a Go project based on declarative
project configuration.

Plugin Tasks
------------
distgo provides the following tasks:

* `artifacts`: prints the artifacts (build, dist or Docker) for the specified products.
* `build`: builds the executables for the specified products.
* `clean`: removes the outputs (build, dist and Docker) generated for the specified products.
* `dist`: creates the distribution outputs for the specified products.
* `docker`: creates the Docker images for the specified products.
* `products`: prints all of the products for the project.
* `project-version`: prints the version of the project.
* `publish`: publishes the distribution artifacts for the specified products.
* `run`: runs the build output for the specified product.

Assets
------
distgo assets are executables that provide specific functionality for distgo. Assets can provide distribution actions
for the "dist" task, Docker build actions for the "docker" task and publish actions for the "publish" task. Refer to
the `assetapi`, `dister`, `dockerbuilder` and `publisher` packages for more information.…
