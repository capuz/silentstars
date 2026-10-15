---
repo: "ingef/conquery"
name: "conquery"
description: "Visual, interactive queries against big databases"
readmeQualityOk: true
url: "https://github.com/ingef/conquery"
language: "Java"
languages: ["Java", "TypeScript"]
languagePcts: [73, 23]
topics: ["big-data", "big-data-analytics", "java"]
stars: 42
forks: 14
openIssues: 0
closedIssues: 145
watchers: 5
contributors: 28
recentReleases: 0
createdAt: "2017-07-12T05:52:05Z"
lastCommitAt: "2026-10-15T08:23:33Z"
lastReleaseAt: "2018-04-26T14:41:58Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 58
maintainers: ["Kadrian", "awildturtok", "thoniTUB"]
openGraphImageUrl: "https://opengraph.githubassets.com/2533791116907beaddd80e164eece844bb8738bcf010e55d7e98284f0d11ec43/ingef/conquery"
---

# Conquery
*fast & efficient analysis*

Conquery is a powerful web-based tool to compose and execute queries against large event-like data sets.

Event data sets typically associate events with a certain subject (i.e. a person or a physical object). One common use case for the data is to identify groups of similar subjects based on the assumption that they share similar events in a given time frame.

Conquery supplies a powerful interface to group event types in a hierarchical *concept tree* structure. Elements of this tree represent a group of similar subjects. Those subjects can be composed into a powerful query that runs against the data set.

## Requirements
- Maven 3 (optional for building)
- Java JDK 21
- Node.js 24
- pnpm 11
- curl (to import the test data)

## Starting the demo

### Frontend only

This repository includes the Conquery frontend along with a non-functional backend. It provides a set of example concept trees to demonstrate the capabilities of the UI: The example's use case is to search for groups of actors who appeared in movies of the same genre or received the same award.

Check the README in `/frontend` for details.

### Frontend + Backend

#### Steps

To…
