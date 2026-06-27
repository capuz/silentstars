---
repo: "cucumber/cucumber-json-converter"
name: "cucumber-json-converter"
description: "Parse Cucumber JSON from most Cucumber implementations and versions"
url: "https://github.com/cucumber/cucumber-json-converter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["javascript", "polyglot-release", "tidelift"]
stars: 6
forks: 8
openIssues: 2
closedIssues: 3
watchers: 4
contributors: 46
recentReleases: 0
createdAt: "2017-09-12T16:10:49Z"
lastCommitAt: "2026-06-26T18:10:11Z"
lastReleaseAt: "2024-04-09T09:51:51Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 82
maintainers: ["renovate[bot]", "mpkorstanje", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad6a0bac8cdd953b04f65eac30cc1e988abea3c512d309cc924a0ef0e2243eff/cucumber/cucumber-json-converter"
fundingLinks: ["GITHUB:https://github.com/cucumber", "OPEN_COLLECTIVE:https://opencollective.com/cucumber"]
---

# Cucumber JSON Converter

This library converts Cucumber JSON from multiple implementations and versions into a JavaScript object with
a strict schema.

## Usage

```typescript
import { convert } from '@cucumber/cucumber-json-converter'

const ob = JSON.parse(jsonFromAnyCucumberImplementation)
const cucumberJsonObject = convert(ob)
```

The `convert` function will throw an error if it fails to recognize the object as a valid Cucumber JSON object.

## Motivation

The "Cucumber JSON" format was created several years before the [JSON Schema](https://json-schema.org/) standard started gaining traction. The lack of a formal schema led to inconsistencies between different Cucumber implementations and releases.

This library contains JSON Schemas for multiple implementations and versions of Cucumber.
These schemas have been retrofitted to match the actual output of these implementations.
