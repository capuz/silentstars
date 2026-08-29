---
repo: "OpenConext/OpenConext-myconext"
name: "OpenConext-myconext"
description: "A (guest) IdP for OpenConext"
readmeQualityOk: true
url: "https://github.com/OpenConext/OpenConext-myconext"
homepage: "https://eduid.nl/"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [50, 26]
topics: ["idp", "identity", "saml-idp"]
stars: 5
forks: 12
openIssues: 48
closedIssues: 593
watchers: 13
contributors: 35
recentReleases: 0
createdAt: "2019-12-20T10:59:27Z"
lastCommitAt: "2026-08-29T10:20:54Z"
lastReleaseAt: "2022-11-01T14:23:54Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 98
undervaluedScore: 82
maintainers: ["oharsta", "phavekes", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7e60e9eb196decfc6e1db712bd73c2b75d1a3b47503d33a7e4ebb6a56d15f0f/OpenConext/OpenConext-myconext"
---

# MyConext

An IdP for OpenConext. A user can create and manage his own identity. Authentication uses a magic-link by default, and FIDO2 or a password can be added later.

## Content

- [Getting started](#getting-started)
	- [System Requirements](#system-requirements)
- [Building and running](#building-and-running)
	- [Database and Maipit](#database-and-maipit)
	- [MyConext-Server](#myconext-server)
	- [Account-GUI](#account-gui-idp)
	- [MyConext-GUI](#myconext-gui-sp)
	- [Servicedesk-GUI](#servicedesk-gui-sp)
	- [Public-GUI](#public-gui-content-website)
	- [Build](#build)
	- [Mail](#mail)
    - [Cron](#cron)
	- [Crypto](#crypto)
	- [Translations](#translations)
	- [Miscellaneous](#miscellaneous)
	- [Migration](#migration)
	- [Attribute Manipulation](#attribute-manipulation)
	- [Attribute Aggregation](#attribute-aggregation)
	- [OpenAPI Documentation](#openapi-documentation)
	- [IDIN & e-Herkenning](#idin--e-herkenning)
	- [Running the IdP and testing localhost](#running-the-idp-and-testing-localhost)
- [How to use](#how-to-use)
	- [IDP Flow](#idp-flow)

## Getting started

### System Requirements

- Java 21
- Maven 3
- MongoDB 7.x
- Yarn 1.x
- NodeJS (version 24.3.0)
- Mailpit…
