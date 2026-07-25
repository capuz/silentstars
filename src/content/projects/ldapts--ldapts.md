---
repo: "ldapts/ldapts"
name: "ldapts"
description: "LDAP client written in typescript"
readmeQualityOk: true
url: "https://github.com/ldapts/ldapts"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["hacktoberfest", "ldap", "nodejs", "hacktoberfest2022", "hacktoberfest2023"]
stars: 313
forks: 45
openIssues: 3
closedIssues: 130
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2018-10-30T14:37:32Z"
lastCommitAt: "2026-07-25T06:01:07Z"
lastReleaseAt: "2019-12-20T18:35:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 39
maintainers: ["renovate[bot]", "jgeurts", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/789c26471e9f31b2235496a33da24db1daf172f8de7cec80b12ac11450dcbf66/ldapts/ldapts"
fundingLinks: ["GITHUB:https://github.com/jgeurts"]
---

# LDAPts

Providing an API to access LDAP directory servers from Node.js programs.

## Table of Contents

- [API Details](#api-details)
  - [Create a client](#create-a-client)
  - [Specifying Controls](#specifying-controls)
  - [bind](#bind)
  - [startTLS](#starttls)
  - [add](#add)
  - [compare](#compare)
  - [del](#del)
  - [exop](#exop)
  - [modify](#modify)
    - [Change](#change)
  - [modifyDN](#modifydn)
  - [search](#search)
    - [Filter Strings](#filter-strings)
    - [Return buffer for specific attribute](#return-buffer-for-specific-attribute)
  - [searchPaginated](#searchpaginated)
  - [unbind](#unbind)
- [Usage Examples](#usage-examples)
  - [Authenticate example](#authenticate-example)
  - [Search example](#search-example)
  - [Delete Active Directory entry example](#delete-active-directory-entry-example)
- [Configuring Secure Connections](#configuring-secure-connections)
- [Common Errors](#common-errors)
- [Development](#development)
  - [Start test OpenLDAP server](#start-test-openldap-server)
  - [Close test OpenLDAP server](#close-test-openldap-server)

## API details

### Create a client

The code to create a new client looks like:

```ts
import { Client } from…
