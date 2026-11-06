---
repo: "doubtfire-lms/doubtfire-api"
name: "doubtfire-api"
description: "Rails RESTful API for the OnTrack back-end."
readmeQualityOk: true
url: "https://github.com/doubtfire-lms/doubtfire-api"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [97]
topics: ["hacktoberfest", "ontrack"]
stars: 33
forks: 455
openIssues: 9
closedIssues: 21
watchers: 2
contributors: 49
recentReleases: 0
createdAt: "2016-02-27T05:54:55Z"
lastCommitAt: "2026-11-06T02:43:06Z"
lastReleaseAt: "2019-04-09T05:27:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 66
maintainers: ["b0ink", "AjayPAnand"]
openGraphImageUrl: "https://opengraph.githubassets.com/70072c04e3d346f2cb87c7b15b1859e9348bcbc87baadc25cacd71ff46e4054c/doubtfire-lms/doubtfire-api"
---

# OnTrack API

OnTrack (formerly Doubtfire) is a feedback-driven learning support system. This repository contains
the Rails and Grape API used by OnTrack.

## Development and deployment

Use the
[doubtfire-deploy](https://github.com/doubtfire-lms/doubtfire-deploy)
repository for the supported development environment and the deployment guide.
It checks out this API as a submodule and provides the database, Redis, PDF
services, web app, and required configuration in one place.

When the development environment is running, the API documentation is available
at <http://localhost:3000/api/docs/>.

## Environment variables

The API supports the environment variables below. The production deployment
template is maintained in
[`doubtfire-deploy`](https://github.com/doubtfire-lms/doubtfire-deploy/blob/main/production/api/.env.production).
An unset variable uses its application default where one exists; an empty value
may override that default with an empty string.

### Application and database

| Variable                    | Purpose                                   | Default                    |
| --------------------------- | ----------------------------------------- |…
