---
repo: "GSA/datagov-harvester"
name: "datagov-harvester"
description: "Main repo for Datagov Harvester 2.0. Contains the code for Flask API and Harvesting Logic"
readmeQualityOk: true
url: "https://github.com/GSA/datagov-harvester"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 36
forks: 25
openIssues: 3
closedIssues: 95
watchers: 7
contributors: 21
recentReleases: 0
createdAt: "2023-04-06T15:37:19Z"
lastCommitAt: "2026-11-11T19:15:53Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 63
maintainers: ["cody-seibert-gsa", "Aguiardavidm", "jaredb96"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cf08ba7ba9cfbd4293c061cf93bc16106997ccb15872480c5f72bd5c43cd19b/GSA/datagov-harvester"
---

# datagov-harvester

This repository holds the source code the Data.gov Harvester 2.0, which includes three applications applications:

- datagov-harvest-runner: This is a python application, chiefly composed of files in the `harvester` directory.

- datagov-harvest-admin: This is a Flask app which manages the configuration of harvest sources, organizations, and the creation of harvest jobs.

- datagov-harvest-proxy: This is an nginx app which owns the public route and proxies traffic to the internal Flask app route.

- datagov-harvest-validator: A minimal API (`validator_api/`) serving `/api/v1/validate`, which the admin app's `/validate/` page and external callers use. It shares the `dcatus_validation/` package with the harvest runner and needs no database or secrets.

There is further documentation in the [developer](https://github.com/GSA/datagov-harvester/blob/HEAD/docs/developer.md) quickstart.

## Documentation

 - [Developer setup](https://github.com/GSA/datagov-harvester/blob/HEAD/docs/developer.md)
 - [DCAT-US 3.0 schemas](https://github.com/GSA/datagov-harvester/blob/HEAD/docs/developer.md#dcat-us-30-schemas): the schemas come from the…
