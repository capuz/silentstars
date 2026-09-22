---
repo: "ministryofjustice/calculate-release-dates-api"
name: "calculate-release-dates-api"
description: "Calculating release dates API"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/calculate-release-dates-api"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["hmpps", "api"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 41
contributors: 32
recentReleases: 0
createdAt: "2021-07-20T15:47:44Z"
lastCommitAt: "2026-09-22T08:44:55Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 99
undervaluedScore: 57
maintainers: ["james-baker-moj", "renovate[bot]", "mg-moj"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c63654e9aa87577b59162d4813c5e6f062af577a45da9ae55c054cba1d00f8b/ministryofjustice/calculate-release-dates-api"
---

# Calculate Release Dates

This service provides a calculation engine by which release dates of sentences are calculated.
It also allows for an existing calculation result to be retrieved.

* The main client is the [Calculate Release Dates UI](https://github.com/ministryofjustice/calculate-release-dates) service.
* It is built as  docker image and deployed to the MOJ Cloud Platform.

# Dependencies
This service requires a postgresql database.

# Building the project
Tools required:
* JDK v18+
* Kotlin
* docker
* docker-compose

## Install gradle
`$ ./gradlew`
`$ ./gradlew clean build`

# Running the service
Start up the docker dependencies using the docker-compose file in the `calculate-release-dates-api` service
There is a script to help, which sets local profiles, port and DB connection properties to the
values required.

# Instructions

If this is a HMPPS project then the project will be created as part of bootstrapping -
see https://github.com/ministryofjustice/hmpps-project-bootstrap.

`$ ./run-full.sh`
+Or, to run with default properties set in the docker-compose file

`$ docker-compose pull && docker-compose up`

Or, to use default port and properties

`$…
