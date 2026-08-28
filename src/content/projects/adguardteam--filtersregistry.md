---
repo: "AdguardTeam/FiltersRegistry"
name: "FiltersRegistry"
description: "Known filters subscriptions transformed for better compatibility with AdGuard"
readmeQualityOk: true
url: "https://github.com/AdguardTeam/FiltersRegistry"
language: "Adblock Filter List"
languages: ["Adblock Filter List", "JavaScript"]
languagePcts: [64, 35]
topics: ["adguard", "filters", "filters-metadata", "filters-subscriptions"]
stars: 356
forks: 75
openIssues: 18
closedIssues: 269
watchers: 32
contributors: 160
recentReleases: 0
createdAt: "2018-02-02T11:26:03Z"
lastCommitAt: "2026-08-28T12:22:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 38
maintainers: ["github-actions[bot]", "piquark6046"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab383ca8aa87774e11d74a1dec10e437f98ac3d37f0790593c0d6b3bb33b067c/AdguardTeam/FiltersRegistry"
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
