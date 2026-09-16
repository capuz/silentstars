---
repo: "Altinn/altinn-broker"
name: "altinn-broker"
description: "Managed file transfer with support for large files"
readmeQualityOk: true
url: "https://github.com/Altinn/altinn-broker"
homepage: "https://docs.altinn.studio/en/broker/"
language: "C#"
languages: ["C#"]
languagePcts: [83]
stars: 8
forks: 0
openIssues: 21
closedIssues: 469
watchers: 15
contributors: 16
recentReleases: 0
createdAt: "2023-01-10T11:15:01Z"
lastCommitAt: "2026-09-16T08:46:54Z"
lastReleaseAt: "2024-05-29T07:13:37Z"
status: "thriving"
tags: ["community_watch"]
healthScore: 96
undervaluedScore: 65
maintainers: ["Ceredron", "mSunberg", "axely123"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4c8dddbcf71a753b86dbf4432c5776bbb1bdd27eac743075f1f2108098e3176/Altinn/altinn-broker"
---

# Altinn Broker ("Formidlingstjenesten")

Altinn Broker is a Managed File Transfer (MFT) service for secure file transfer between organizations in Norway. 

## Getting started

Altinn Broker is currently available in Altinn's staging environment at https://platform.tt02.altinn.no. In order to get started integrating to the API, follow our [guide on getting started](https://docs.altinn.studio/broker/getting-started/) and implement according to our [Swagger specification](https://docs.altinn.studio/api/broker/spec/).

## Postman

Example requests using postman can be found in [altinn-broker-postman-collection.json](https://github.com/Altinn/altinn-broker/blob/HEAD/altinn-broker-postman-collection.json). In order to use it, you need to [register a Maskinporten integration](https://sjolvbetjening.test.samarbeid.digdir.no/auth/login) with the scope "altinn:testtools/tokengenerator/enterprise" and use it to fill out the Postman variables "client_id", "client_kid" and "client_jwk". Also set the variable "serviceowner_orgnumber". After that, run all the requests in the folder Authenticator in order. This will authenticate you to to run all the other requests in the collection.

The first…
