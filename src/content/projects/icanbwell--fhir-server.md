---
repo: "icanbwell/fhir-server"
name: "fhir-server"
description: "Open Source FHIR Server backed by MongoDB"
readmeQualityOk: true
url: "https://github.com/icanbwell/fhir-server"
homepage: "https://icanbwell.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 56
forks: 16
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 57
recentReleases: 0
createdAt: "2020-10-06T22:22:52Z"
lastCommitAt: "2026-11-02T13:38:29Z"
lastReleaseAt: "2020-11-02T00:14:58Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 52
maintainers: ["mintusah25", "shubhamgoel24", "Sahilchawla24"]
openGraphImageUrl: "https://opengraph.githubassets.com/23a8b60b439ff9b8aa69b0acbe7447e6119be07e5ea84cb8852120cd04d33411/icanbwell/fhir-server"
---

## Intro

This projects implements the Helix FHIR Server which is a highly scalable FHIR server implementation with real-time data streaming, change event tracking and modern APIs such as GraphQL.

For example:

1. Added support for every FHIR resource
2. Added support for merging data via $merge
3. Added support for $graph endpoint
4. Added support for authentication
5. Added support for checking user/x.x and access/x.x scopes
6. Provides a WebUI to explore the FHIR data using the web browser
7. Support GraphQL access to FHIR resources
8. Added support for all FHIR search parameters
9. Delayed processing for updating history table and creating audit logs to speed up the response to the client.
10. Change events are (optionally) sent to a Kafka queue to enable any client to respond to and also enables realtime streaming.

## Cheat sheet

[Cheatsheet](https://github.com/icanbwell/fhir-server/blob/HEAD/readme/cheatsheet.md)

## Security

[Security](https://github.com/icanbwell/fhir-server/blob/HEAD/readme/security.md)

## Optimizing Performance

[Performance](https://github.com/icanbwell/fhir-server/blob/HEAD/readme/performance.md)

## FHIR GraphDefinition Support (We recommend…
