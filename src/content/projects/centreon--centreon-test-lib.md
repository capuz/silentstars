---
repo: "centreon/centreon-test-lib"
name: "centreon-test-lib"
description: "Library for implement Behat acceptance test and PHPUnit unittest"
readmeQualityOk: true
url: "https://github.com/centreon/centreon-test-lib"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 29
contributors: 26
recentReleases: 0
createdAt: "2016-03-03T12:24:18Z"
lastCommitAt: "2026-09-29T10:05:18Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 74
undervaluedScore: 30
maintainers: ["centreon-opentofu[bot]", "opentofu-githook-pipeline[bot]", "selfakiri"]
openGraphImageUrl: "https://opengraph.githubassets.com/e51a627c26955dd1a817c159f3f6e8d11b0c7241956515b2e839e44427b4375e/centreon/centreon-test-lib"
---

# Centreon Test Lib #

## Rationale ##

Centreon Web uses acceptance tests to ensure its software quality.
Testing is done with the help of Behat and this project contains
Behat-compliant classes used in many Centreon projects.

With this classes, PHP developers can mimic the interaction between
end-users and the application. The layers are a follow and should
explain more clearly of classes of Centreon Test Lib heavily differs
from standard Centreon classes.

| Layer           | Language           | Description                                 |
|-----------------|--------------------|---------------------------------------------|
| Acceptance Test | PHP                | This is where acceptance tests are written and where classes from this project comes in handy. These acceptance tests are run by Behat. |
| Behat           | PHP                | Behat run acceptance tests and provides reports. |
| PhantomJS       | C++ but irrelevant | PhantomJS is a headless browser, optimal for testing purposes. |
| Centreon        | PHP (web UI)       | A classical Centreon interface, with which monitoring is just plain fun. |

## Class naming ##

There should be one class per Centreon page.…
