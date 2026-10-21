---
repo: "AdguardTeam/FiltersRegistry"
name: "FiltersRegistry"
description: "Known filters subscriptions transformed for better compatibility with AdGuard"
readmeQualityOk: true
url: "https://github.com/AdguardTeam/FiltersRegistry"
language: "Adblock Filter List"
languages: ["Adblock Filter List", "JavaScript"]
languagePcts: [65, 35]
topics: ["adguard", "filters", "filters-metadata", "filters-subscriptions"]
stars: 368
forks: 75
openIssues: 14
closedIssues: 286
watchers: 33
contributors: 58
recentReleases: 0
createdAt: "2018-02-02T11:26:03Z"
lastCommitAt: "2026-10-21T08:49:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 38
maintainers: ["github-actions[bot]", "slvvko", "zloyden"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8f146d79016bc671b9d2432de0f98f7caa238d895a32bfe9b8cabbd0a29e1f2/AdguardTeam/FiltersRegistry"
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
