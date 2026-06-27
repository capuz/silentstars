---
repo: "huridocs/uwazi"
name: "uwazi"
description: "Uwazi is a web-based, open-source solution for building and sharing document collections"
url: "https://github.com/huridocs/uwazi"
homepage: "http://www.uwazi.io"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [74, 24]
topics: ["documents", "ai", "data-science", "database", "non-profit", "open-source", "pdf"]
stars: 309
forks: 100
openIssues: 414
closedIssues: 3745
watchers: 21
contributors: 45
recentReleases: 0
createdAt: "2015-11-01T21:12:42Z"
lastCommitAt: "2026-06-27T00:46:40Z"
lastReleaseAt: "2017-05-19T12:47:51Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 41
maintainers: ["RafaPolit", "Joao-vi", "mfacar"]
openGraphImageUrl: "https://opengraph.githubassets.com/20fed811f0866c161513beeae4dc6568bbdf170de1085b3b1f3cb3b59fb02588/huridocs/uwazi"
discussionCount: 10
---

Uwazi Logo

Uwazi CI
[Maintainability](https://codeclimate.com/github/huridocs/uwazi/maintainability)
[Test Coverage](https://codeclimate.com/github/huridocs/uwazi/test_coverage)

Uwazi is a flexible database application to capture and organise collections of information with a particular focus on document management. HURIDOCS started Uwazi and is supporting dozens of human rights organisations globally to use the tool.

[Uwazi](https://www.uwazi.io/) | [HURIDOCS](https://huridocs.org/)

Read the [user guide](https://uwazi.io/page/9852italrtk/support)

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
