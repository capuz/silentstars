---
repo: "Opetushallitus/ataru"
name: "ataru"
description: "Generic form generation service"
readmeQualityOk: true
url: "https://github.com/Opetushallitus/ataru"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [86]
stars: 12
forks: 4
openIssues: 0
closedIssues: 0
watchers: 23
contributors: 49
recentReleases: 0
createdAt: "2016-03-22T13:07:32Z"
lastCommitAt: "2026-11-18T12:04:25Z"
status: "thriving"
tags: ["legacy_hero", "community_watch"]
healthScore: 89
undervaluedScore: 55
maintainers: ["pretseli", "tomikat", "cedric-neergaard"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf4891885e0ecf204150b02b072aac479c577e621c0c340375d5c5086319cf18/Opetushallitus/ataru"
---

# Ataru

A system for creating custom forms, applying to education and handling applications.

## How to start

Start all Ataru processes and docker containers using command

    make start

Stop all Ataru processes and docker containers using command

    make stop

See `make help` for details

## Running locally

When running locally, it is **highly** recommended to utilize the cloud instance in any of the test environments. In order to run locally against the test environments (qa, hahtuva, or untuva), you need to clone the [ataru-secrets](https://github.com/Opetushallitus/ataru-secrets) repository. It is recommended to clone it to a folder parallel to Ataru.

Before running Ataru locally, you need to setup ssh tunneling connection to the corresponding bastion server, and be connected with SSO to the bastion server. For setting this up, please refer to the README in the `dev-local-config`-directory in the [ataru-secrets](https://github.com/Opetushallitus/ataru-secrets/tree/master/dev_local_config) repo. It will guide you on how to set up the SSO tunneling using the `cloud-base` repository, and adding the necessary changes to work with Ataru.
