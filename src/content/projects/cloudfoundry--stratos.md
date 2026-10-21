---
repo: "cloudfoundry/stratos"
name: "stratos"
description: "Stratos: Web-based Management UI for Cloud Foundry and Kubernetes"
readmeQualityOk: true
url: "https://github.com/cloudfoundry/stratos"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["cloud-foundry", "stratos-ui", "paas", "angular", "console", "go", "kubernetes", "stratos", "golang", "javascript"]
stars: 267
forks: 137
openIssues: 369
closedIssues: 1451
watchers: 22
contributors: 72
recentReleases: 0
createdAt: "2016-01-05T19:12:58Z"
lastCommitAt: "2026-10-21T17:31:16Z"
lastReleaseAt: "2018-03-06T10:52:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 41
maintainers: ["nabramovitz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/96477dfb121ba372a211d0fe40b6219589053e7fd7a20ccf187a585eb579f4f3/cloudfoundry/stratos"
---

# Stratos

## Roadmap

Angular 22 upgrade of frontend code is completed, working on supporting elements.

1. Convert GoLang backend (Jetstream) to use Cloud Foundry V3 API and remove V2 API calls
1. Convert Frontend to call either Jetstream API or V3 API directly. V3 API calls can require more roundtrips than the V2 APIs they replace.

(Please note:  The official repository is at cloudfoundry/stratos and the cloudfoundry-community/stratos will track this but may be used for some testing purposes)

## About

Stratos is an Open Source Web-based UI (Console) for managing Cloud Foundry. It allows users and administrators to both manage applications running in the Cloud Foundry cluster and perform cluster management tasks.

Please visit our new [documentation site](https://stratos.app/). There you can discover (* This is currently being updated from the 4.4.0 docs)

1. Our [introduction](https://stratos.app/docs/), including quick start, contributing and troubleshooting guides.
1. How to [deploy](https://stratos.app/docs/deploy/overview) Stratos in a number of environments.
    1. [Cloud Foundry](https://stratos.app/docs/deploy/cloud-foundry/cloud-foundry), as an application.…
