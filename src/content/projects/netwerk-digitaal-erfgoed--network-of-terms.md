---
repo: "netwerk-digitaal-erfgoed/network-of-terms"
name: "network-of-terms"
description: "Search engine for finding terms in terminology sources (such as thesauri, classification systems and reference lists)"
readmeQualityOk: true
url: "https://github.com/netwerk-digitaal-erfgoed/network-of-terms"
homepage: "https://termennetwerk-api.netwerkdigitaalerfgoed.nl"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["graphql", "linked-data", "search", "reconciliation"]
stars: 22
forks: 7
openIssues: 48
closedIssues: 182
watchers: 6
contributors: 11
recentReleases: 0
createdAt: "2020-04-16T19:29:33Z"
lastCommitAt: "2026-10-13T10:57:58Z"
lastReleaseAt: "2020-10-05T19:10:47Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 65
maintainers: ["dependabot[bot]", "ddeboer", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d5eb508778487a232d0d5c2dd5e9d1c50f5005907fb687feabe585057539751/netwerk-digitaal-erfgoed/network-of-terms"
---

# Network of Terms

The Network of Terms is a **search engine for finding terms** in terminology sources (such as thesauri, classification
systems and reference lists).

Given a textual search query, the Network of Terms searches one or more terminology sources in
**real-time** and returns matching terms, including their labels and URIs. The Network of Terms offers a **simple search
interface**, **handles errors** gracefully in case a source does not respond well and **harmonizes the results** to the
SKOS data model.

The Network of Terms is intended for **managers of heritage information** that want to improve the findability of their
information by assigning terms from terminology sources that are used by the institutions in
the [Dutch Digital Heritage Network](https://netwerkdigitaalerfgoed.nl). Information managers use the Network of Terms
in their **collection registration system**.

Schematically, the registration system sends out a single query to the Network of Terms, which gets translated to a set
of queries that is appropriate for each terminology source. The terms matching the query are harmonized to SKOS and
returned to the collection registration system where…
