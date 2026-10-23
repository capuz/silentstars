---
repo: "huridocs/uwazi"
name: "uwazi"
description: "Uwazi is a web-based, open-source solution for building and sharing document collections"
readmeQualityOk: true
url: "https://github.com/huridocs/uwazi"
homepage: "http://www.uwazi.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["documents", "ai", "data-science", "database", "non-profit", "open-source", "pdf"]
stars: 328
forks: 104
openIssues: 423
closedIssues: 3979
watchers: 22
contributors: 49
recentReleases: 0
createdAt: "2015-11-01T21:12:42Z"
lastCommitAt: "2026-10-23T12:04:53Z"
lastReleaseAt: "2017-05-19T12:47:51Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 41
maintainers: ["Joao-vi", "mfacar", "daneryl"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7b2746da9c94806d414398bf114caf541928efad32df75cf329bddf7b91e5ed/huridocs/uwazi"
discussionCount: 10
---

Uwazi Logo

Uwazi CI
[Maintainability](https://codeclimate.com/github/huridocs/uwazi/maintainability)
[Test Coverage](https://codeclimate.com/github/huridocs/uwazi/test_coverage)

Uwazi is a flexible database application to capture and organise collections of information with a particular focus on document management. HURIDOCS started Uwazi and is supporting dozens of human rights organisations globally to use the tool.

[Uwazi](https://www.uwazi.io/) | [Uwazi Docs](https://docs.uwazi.io) | [HURIDOCS](https://huridocs.org/)

Read the [user guide](https://docs.uwazi.io)

# Installation guide

- [Dependencies](#dependencies)
- [Production](#production)
- [Development](#development)

# Dependencies

Before anything else you will need to install the application dependencies:

- **NodeJs 20.19.6** For ease of update, use [nvm](https://github.com/creationix/nvm).
- **[ElasticSearch 8.18.0](https://www.elastic.co/downloads/past-releases/elasticsearch-8-18-0)** Please note that ElasticSearch requires Java. Follow the instructions to install the package manually, you also probably need to disable ml module in the ElasticSearch config file:
`xpack.ml.enabled: false`
- **[ICU Analysis Plugin…
