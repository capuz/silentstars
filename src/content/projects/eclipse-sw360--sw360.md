---
repo: "eclipse-sw360/sw360"
name: "sw360"
description: "SW360 project"
readmeQualityOk: true
url: "https://github.com/eclipse-sw360/sw360"
homepage: "https://www.eclipse.org/sw360/"
language: "Java"
languages: ["Java"]
languagePcts: [94]
stars: 265
forks: 377
openIssues: 431
closedIssues: 1231
watchers: 25
contributors: 113
recentReleases: 0
createdAt: "2018-04-16T15:54:19Z"
lastCommitAt: "2026-11-03T10:51:52Z"
lastReleaseAt: "2020-02-28T22:14:13Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 94
undervaluedScore: 46
maintainers: ["dependabot[bot]", "GMishx", "Farooq-Fateh-Aftab"]
openGraphImageUrl: "https://opengraph.githubassets.com/42a21df6d913693fe5a65dc437845c726c081fa42eeaeea9967f3b3509fd21a0/eclipse-sw360/sw360"
discussionCount: 45
---

# SW360

SW360 is a software component catalogue application designed to provide a central hub for managing software components and their metadata.

Visit the [official project homepage](https://eclipse.dev/sw360/) for more information.

### SW360 Portal

A software component catalogue application.

SW360 is a Backend server with a REST API to maintain your projects / products and the software components within.

It can manage SPDX files for maintaining the license conditions and maintain license information.

### Introduction

It is comprised of one frontend (portal) part, backend (services) part and additionally a REST API:

* Backend: Tomcat-based thrift services for being called by different applications.
* Database: we store software components and metadata about them in CouchDB.
* Rest: this REST API provides access to project resources for external integration.

The reference platform is the Ubuntu server 22.04 (which is an LTS version).

### Project structure

This is a multi module maven file. please consider that we have the following modules:

* backend: For the thrift based services.
* libraries: For general stuff that is reused among the above, for example, couchdb…
