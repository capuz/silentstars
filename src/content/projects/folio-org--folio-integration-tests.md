---
repo: "folio-org/folio-integration-tests"
name: "folio-integration-tests"
description: "The set of integration tests, based on karate framework"
readmeQualityOk: true
url: "https://github.com/folio-org/folio-integration-tests"
language: "mIRC Script"
languages: ["mIRC Script"]
languagePcts: [84]
stars: 13
forks: 9
openIssues: 0
closedIssues: 0
watchers: 27
contributors: 142
recentReleases: 0
createdAt: "2020-04-30T07:41:08Z"
lastCommitAt: "2026-09-29T10:05:05Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 58
maintainers: ["julianladisch", "SerhiiNosko", "KaterynaSenchenko"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c2b134bd557517e7b3f8eea0af38ca3ba158bc1b05ba3fefabdccc6fee1e366/folio-org/folio-integration-tests"
---

# Folio-Integration-Tests

Copyright (C) 2020-2022 The Open Library Foundation

This software is distributed under the terms of the Apache License, Version 2.0. See the file "[LICENSE](https://github.com/folio-org/folio-integration-tests/blob/HEAD/LICENSE)" for
more information.

## Introduction

This project is the set of integration tests based on [karate framework](https://github.com/karatelabs/karate)

Results of the automated daily run are published on
[Jenkins FOLIO_Reference_Builds folio-api-tests-karate](https://jenkins-aws.indexdata.com/job/FOLIO_Reference_Builds/job/folio-api-tests-karate/lastCompletedBuild/cucumber-html-reports/overview-features.html).

## Running integration tests

To run all existing API tests on localhost

```
mvn test
```

To run all existing API tests on snapshot environment (Eureka-based https://folio-etesting-snapshot-kong.ci.folio.org, some tests that haven't migrated may still run on Okapi-based https://folio-snapshot-okapi.dev.folio.org)

```
mvn test -DargLine="-Dkarate.env=snapshot"
```

To run all existing API tests on snapshot-2 environment (Eureka-based https://folio-etesting-snapshot2-kong.ci.folio.org, some tests that haven't migrated…
