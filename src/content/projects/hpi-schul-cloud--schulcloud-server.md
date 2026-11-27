---
repo: "hpi-schul-cloud/schulcloud-server"
name: "schulcloud-server"
description: "Schulcloud-Verbund-Software-Server"
readmeQualityOk: true
url: "https://github.com/hpi-schul-cloud/schulcloud-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["feathers-backend-services", "education", "schools", "nestjs-backend", "svs-app"]
stars: 81
forks: 22
openIssues: 7
closedIssues: 71
watchers: 15
contributors: 137
recentReleases: 0
createdAt: "2016-10-19T16:04:27Z"
lastCommitAt: "2026-11-27T11:56:42Z"
lastReleaseAt: "2017-10-12T11:11:38Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 49
maintainers: ["hoeppner-dataport", "elKei24", "Loki-Afro"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4962150d264a4b5ac954c53c4bc9b9bedf6038a77127c80af76fa56c15342ba/hpi-schul-cloud/schulcloud-server"
---

# Schul-Cloud Server

## NestJS application

Based on [NestJS](https://docs.nestjs.com/)

> Find the [documentation](https://documentation.dbildungscloud.dev/docs/intro) of this repository at GitHub pages. It contains information about

- api design
- code guidelines
- development
- migrations
- architecture

There is also some old documentation in the server code /apps/server/doc/*.md.

Note that not all the .md file here are up to date.

## NestJS Console Applications

### Sync console
> Find the [Documentation](https://github.com/hpi-schul-cloud/schulcloud-server/blob/HEAD/apps/server/src/infra/sync/console/README.md) here.

## Room invitation credentials

New room invitations have an internal ObjectId (`id`) and a separate secret
`invitationToken` (21 URL-safe NanoID characters). Authorized create-, update-, 
and list-responses include the token. Metadata updates preserve it; clients cannot 
supply or change it.
