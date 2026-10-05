---
repo: "scriptex/typed-usa-states"
name: "typed-usa-states"
description: "An array of geographical data for all USA states with full TypeScript support"
readmeQualityOk: true
url: "https://github.com/scriptex/typed-usa-states"
homepage: "https://atanas.info/portfolio/open-source/typed-usa-states"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["usa-states-data", "geographic-data", "typescript-definitions", "geographical-data", "usa-states"]
stars: 20
forks: 5
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-01-21T13:18:26Z"
lastCommitAt: "2026-10-05T04:53:15Z"
lastReleaseAt: "2022-02-14T07:56:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 48
maintainers: ["renovate[bot]", "scriptex"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/166817376/723d1c00-dbc1-11ea-8ba2-b0d9a331b3af"
fundingLinks: ["GITHUB:https://github.com/scriptex", "PATREON:https://patreon.com/atanas", "KO_FI:https://ko-fi.com/scriptex", "TIDELIFT:https://tidelift.com/funding/github/npm/typed-usa-states", "LIBERAPAY:https://liberapay.com/scriptex", "ISSUEHUNT:https://issuehunt.io/r/scriptex", "CUSTOM:paypal.me/scriptex", "CUSTOM:revolut.me/scriptex"]
---

# Typed USA States

> An array of geographical data for all USA states with full TypeScript support

## Visitor stats

## Code stats

## Content

This package contains geographical data for all USA states including:

-   `name` of the state
-   `abbreviation` of the state
-   `territory`: whether the state is under the sovereign jurisdiction of the federal government of the United States
-   the `capital` city of the state
-   `contiguous`: whether the state shares common borders with other states
-   `zipCodes`: an array containing string arrays. Each array contains two elements (string) - the start and the end of the zip code range. (The `string` type is used because TypeScript does not like numbers with leading zero. Pull request are welcome if you find a workaround for this issue.)
-   `area`: the area of the state in square miles in the following format:
    -   `year`: when was the value last updated
    -   `value`: the actual area
-   `population`: the population of the state in the following format:
    -   `year`: when was the value last updated
    -   `count`: the actual population
-   `counties` of the state

**NB**
There is no counties information for the following…
