---
repo: "AdguardTeam/FiltersRegistry"
name: "FiltersRegistry"
description: "Known filters subscriptions transformed for better compatibility with AdGuard"
readmeQualityOk: true
url: "https://github.com/AdguardTeam/FiltersRegistry"
language: "Adblock Filter List"
languages: ["Adblock Filter List", "JavaScript"]
languagePcts: [61, 39]
topics: ["adguard", "filters", "filters-metadata", "filters-subscriptions"]
stars: 354
forks: 73
openIssues: 14
closedIssues: 267
watchers: 31
contributors: 158
recentReleases: 0
createdAt: "2018-02-02T11:26:03Z"
lastCommitAt: "2026-08-10T05:06:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 38
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf205446b10bb229ac8efa072a34ab0b2f481369cb0397d9e0107166fcd083da/AdguardTeam/FiltersRegistry"
---

# AdGuard Filters Registry

AdGuard Filters Registry is the canonical repository of filter list subscriptions
available to AdGuard users. It stores AdGuard's own filters and re-hosted
third-party filter lists served via `filters.adtidy.org`. Filters can be slightly
modified in order to achieve better compatibility with AdGuard.

The build pipeline compiles filter templates into platform-specific outputs
for 8 AdGuard product platforms (Android, CLI, Extension, iOS, Mac, Mac v2,
Mac v3, Windows), generates incremental patches, and produces localized metadata.

## Table of Contents

- [Third-Party Filter Acceptance Policy](#third-party-filter-acceptance-policy)
- [Filters Reference](#filters-reference)
    - [Filter Directory Structure](#filter-directory-structure)
    - [Tags](#tags)
    - [Groups](#groups)
    - [Optimization](#optimization)
    - [Compiler Customization](#compiler-customization)
    - [Localization](#localization)
    - [Templates](#templates)
- [Wildcard Domain Expansion](#wildcard-domain-expansion)
- [Repository Compression](#repository-compression)
- [Documentation](#documentation)

## Third-Party Filter Acceptance Policy

We may add third-party filters to…
