---
repo: "newrelic/nri-flex"
name: "nri-flex"
description: "An application-agnostic, all-in-one New Relic integration integration"
readmeQualityOk: true
url: "https://github.com/newrelic/nri-flex"
homepage: "https://docs.newrelic.com/docs/introduction-new-relics-flex-integration"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["flex", "integration", "infrastructure", "insights", "ingest", "api", "jmx", "nrlabs"]
stars: 123
forks: 125
openIssues: 22
closedIssues: 85
watchers: 31
contributors: 119
recentReleases: 0
createdAt: "2019-03-04T19:14:01Z"
lastCommitAt: "2026-11-26T07:48:58Z"
lastReleaseAt: "2019-03-24T10:26:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 52
maintainers: ["renovate[bot]", "sairaj18", "rajrohanyadav"]
openGraphImageUrl: "https://opengraph.githubassets.com/0661a67ee2f2b41a309c5b83ec8c2700ea3db76e8f023dc45577cac07ab6db24/newrelic/nri-flex"
discussionCount: 1
---

# New Relic Flex

Flex is an application-agnostic, all-in-one [New Relic integration](https://docs.newrelic.com/docs/integrations) with which you can instrument any app that exposes metrics over a standard protocol (HTTP, file, shell) in a standard format (for example, JSON or plain text): you create a [config file](https://github.com/newrelic/nri-flex/blob/HEAD/docs/basics/configure.md), start the Infrastructure agent, and data starts pouring into New Relic.

Flex can take any input using [data source APIs](https://github.com/newrelic/nri-flex/blob/HEAD/docs/apis/README.md), process it through [functions](https://github.com/newrelic/nri-flex/blob/HEAD/docs/basics/functions.md), and send metric samples to New Relic as if they came from an integration.

For a quick introduction on Flex, [read our blog post](https://blog.newrelic.com/product-news/how-to-use-new-relic-flex/). You can also have a look at the [200+ example integrations](#example-integrations)!

## What you need

Flex requires a [New Relic account](https://docs.newrelic.com/docs/accounts/accounts-billing/account-setup/create-your-new-relic-account) and is compatible with the following operating systems/platforms:
