---
repo: "arenadata/adcm"
name: "adcm"
description: "Arenadata Cluster Manager that is software that manage clusters and created by Arenadata"
readmeQualityOk: true
url: "https://github.com/arenadata/adcm"
homepage: "https://docs.arenadata.io/adcm/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [61, 33]
stars: 33
forks: 21
openIssues: 9
closedIssues: 7
watchers: 17
contributors: 48
recentReleases: 0
createdAt: "2019-11-26T12:47:45Z"
lastCommitAt: "2026-09-08T08:16:02Z"
lastReleaseAt: "2021-05-27T13:58:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 57
maintainers: ["a-alferov", "Sealwing", "remizov-arena"]
openGraphImageUrl: "https://opengraph.githubassets.com/56ab1cfa11bcf47162d3808bd23ba11e917a28d85339b0844ea8671edaff35ff/arenadata/adcm"
---

# Arenadata Cluster Manager

This repository holds `ADCM`'s source code and build tooling.

Installation and usage docs can be found in [documentation](https://docs.arenadata.io/adcm/).

## Quickstart

1. Clone the repository:
   ```shell
   git clone https://github.com/arenadata/adcm
   cd adcm
   ```
2. Build the image for your architecture:
   ```shell
   make build
   ```
   You'll get an image tagged `hub.adsw.io/adcm/adcm:<BRANCH_NAME>`.
3. Run ADCM as a docker container (you will need running `PostgreSQL` 14+ instance):
   ```shell
   docker run -d -p 8000:8000 -v /opt/adcm:/adcm/data --name adcm \
   -e DB_HOST="<DATABASE_HOSTNAME_OR_IP_ADDRESS>" \
   -e DB_USER="<DATABASE_USERNAME>" -e DB_NAME="<DATABASE_NAME>" \
   -e DB_PASS="<DATABASE_USER_PASSWORD>" \
   hub.arenadata.io/adcm/adcm:<TAG>
   ```

A few things to know before you run it:
* Replace `<TAG>` and the `<DATABASE_*>` placeholders with values matching your own setup.
* You can use the newly built image (from step 2) instead of `hub.arenadata.io/adcm/adcm:<TAG>`.
* Your `PostgreSQL` instance needs to be version 14 or newer — `ADCM` relies on the `JSONB` field type.
* `DB_NAME` should already exist, and the user…
