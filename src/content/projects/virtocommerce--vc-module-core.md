---
repo: "VirtoCommerce/vc-module-core"
name: "vc-module-core"
description: "Core module containing common eCommerce domain model and base abstractions"
readmeQualityOk: true
url: "https://github.com/VirtoCommerce/vc-module-core"
language: "C#"
languages: ["C#"]
languagePcts: [61]
stars: 15
forks: 20
openIssues: 0
closedIssues: 45
watchers: 19
contributors: 57
recentReleases: 0
createdAt: "2016-05-11T18:11:52Z"
lastCommitAt: "2026-11-07T13:54:23Z"
lastReleaseAt: "2016-09-26T17:52:38Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 91
undervaluedScore: 62
maintainers: ["vc-ci", "OlegoO", "Woland2k"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f57abdd784c52d66be0bcaede738128ba21c197ea1f2120fedc12b55f1372ba/VirtoCommerce/vc-module-core"
---

# VirtoCommerce Core Module

## Overview
Virto Commerce Core module provides **shared commerce domain models**, **cross-cutting abstractions**, and **core operational services** used by other Virto Commerce modules.

It is the foundation for common functionality such as currencies, package types, SEO abstractions, conditions infrastructure, money rounding policies, and unique number generation.

## Key Features
- **Common commerce domain models**: shared types for money/currency, tax, addresses, outlines, SEO.
- **Currency management API**: list/create/update/delete currencies.
- **Package types management API**: list/create/update/delete package types.
- **Money rounding**: default rounding policy with an extension point to override it via DI.
- **Unique number generator**: sequence-based generator with configurable retry policy and counter reset rules.
- **Conditions engine foundation**: condition tree types, JSON converter, and a set of built-in conditions (geo, language, URL, etc.).
- **Multi-database support**: EF Core database provider selection (SQL Server / PostgreSQL / MySQL).
- **Export/Import support**: integrates with platform export/import pipeline for module data.
-…
