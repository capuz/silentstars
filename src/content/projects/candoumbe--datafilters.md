---
repo: "candoumbe/DataFilters"
name: "DataFilters"
description: "A small library to filter data using an \"elastic-like\" syntax"
readmeQualityOk: true
url: "https://github.com/candoumbe/DataFilters"
language: "C#"
languages: ["C#"]
languagePcts: [94]
stars: 33
forks: 5
openIssues: 7
closedIssues: 57
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2021-02-05T17:30:41Z"
lastCommitAt: "2026-10-25T22:11:32Z"
lastReleaseAt: "2022-03-13T19:08:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 56
maintainers: ["renovate[bot]", "candoumbe"]
openGraphImageUrl: "https://opengraph.githubassets.com/972809984fd4273104ff45cbb57a417fd0b907e834133575f289f01aedbf725b/candoumbe/DataFilters"
discussionCount: 2
---

# Datafilters 

A small library that allow to convert a string to a generic [`IFilter`][class-ifilter] object.
Highly inspired by the elastic query syntax, it offers a powerful way to build and query data with a syntax that's not
bound to a peculiar datasource.

## **Disclaimer** 

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Major version zero (0.y.z) is for initial development. **Anything MAY change at any time**.

The public API SHOULD NOT be considered stable.

- [Parsing](#parsing)
- [Filters syntax](#filters-syntax)
  - [Equals](#equals)
  - [Starts with](#starts-with)
  - [Ends with](#ends-with)
  - [Contains](#contains)
  - [Is null](#is-null)
  - [Any of](#any-of)
  - [Is not null](#is-not-null)
  - [Interval expressions](#interval-expressions)
      - [Greater than or equal](#greater-than-or-equal)
      - [Less than or equal](#less-than-or-equal)
      - [Between](#between)
  - [Regular expression](#regular-expression)
  - [Logical operators](#logical-operators)
      - [And](#and)
      - [Or](#or)
      - [Not](#not)
  - [Special character handling](#special-character-handling)
  - [Sorting](#sorting)
  - [How to…
