---
repo: "vaadin/flow-components"
name: "flow-components"
description: "Java counterpart of Vaadin Web Components"
readmeQualityOk: true
url: "https://github.com/vaadin/flow-components"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["vaadin", "java", "hacktoberfest"]
stars: 129
forks: 80
openIssues: 889
closedIssues: 2055
watchers: 29
contributors: 144
recentReleases: 0
createdAt: "2020-06-17T07:58:15Z"
lastCommitAt: "2026-10-09T10:44:54Z"
lastReleaseAt: "2020-11-23T11:36:09Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 46
maintainers: ["sissbruecker", "web-padawan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8468c1cbd91edab6a94bb2e463eb9438ab2b5f882cf5c16f7eb9f0d87d589838/vaadin/flow-components"
---

# Vaadin Flow Components

This is a maven multi-module project including all vaadin flow components.

`main` branch is the latest version of all the components that will be released in the [Vaadin platform](https://github.com/vaadin/platform).

## Quick start

The repository contains an interactive script for common tasks like running unit tests, integration tests and serving integration test pages.

To run it, execute `./scripts/run.js` and select the appropriate menu options.

NOTE: The script requires a terminal and shell with TTY support, as well as a recent Node.js version.

## Compiling all modules but excluding ITs

- `mvn clean compile -Drelease -T 2C`

## Compiling all the components and their modules including ITs

- `mvn clean test-compile -DskipFrontend -T 2C`

## Installing all modules

- `mvn clean install -DskipTests -Drelease -T 2C`

## Serving the IT pages of a component

- `mvn -am -pl vaadin-checkbox-flow-parent/vaadin-checkbox-flow-integration-tests -DskipTests package jetty:run`

Then navigate to `http://localhost:8080/vaadin-checkbox/checkbox-test` to see the IT page.

## Running ITs of one component

- `mvn -am -pl…
