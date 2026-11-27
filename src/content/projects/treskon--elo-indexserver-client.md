---
repo: "treskon/elo-indexserver-client"
name: "elo-indexserver-client"
description: "A client library for accessing Indexserver component of ELO Digital Office GmbH via REST API."
readmeQualityOk: true
url: "https://github.com/treskon/elo-indexserver-client"
homepage: "https://treskon.github.io/elo-indexserver-client/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-03-07T10:10:07Z"
lastCommitAt: "2026-11-27T12:55:50Z"
lastReleaseAt: "2024-10-15T11:28:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["xkrblr"]
openGraphImageUrl: "https://opengraph.githubassets.com/2eb7c3de9597ede054692dc9e34504f56e4c53e06220f386720c9fbafebe5706/treskon/elo-indexserver-client"
discussionCount: 0
---

# ELO Indexserver Client

Developed by [Treskon GmbH](https://treskon.at/) 
* published on PyPI: https://pypi.org/project/elo-indexserver-client/ 
* [Documentation](https://treskon.github.io/elo-indexserver-client/)
* Sourcecode [GitHub repository](https://github.com/treskon/elo-indexserver-client)

A client library for accessing Indexserver component of [ELO Digital Office GmbH](https://www.elo.com/de-at.html) via
REST API.

## Motivation

The motivation for this project was to provide a simple and easy to use client library for accessing the Indexserver
REST API.
While ELO provides an OpenAPI specification for the Indexserver REST API, it appears to be a port of the Java SDK.
Which allows to use all the features of the Java SDK, similar to what we could do in the ELO Java Client itself.
This comes in favor for people who already have experience in working with the ELO Java SDK.
However, for people who are not familiar with the ELO ecosystem the naming conventions, structure, method names, BSET
Flags, etc. are far from intuitive and easy to understand.
