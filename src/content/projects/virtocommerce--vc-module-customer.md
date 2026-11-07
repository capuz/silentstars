---
repo: "VirtoCommerce/vc-module-customer"
name: "vc-module-customer"
description: " Contacts management module"
readmeQualityOk: true
url: "https://github.com/VirtoCommerce/vc-module-customer"
language: "C#"
languages: ["C#"]
languagePcts: [58]
stars: 15
forks: 21
openIssues: 0
closedIssues: 29
watchers: 16
contributors: 57
recentReleases: 0
createdAt: "2016-05-13T14:06:52Z"
lastCommitAt: "2026-11-07T13:54:30Z"
lastReleaseAt: "2017-06-07T13:14:07Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 97
undervaluedScore: 71
maintainers: ["vc-ci", "OlegoO", "DmitryGrishinVirtoworks"]
openGraphImageUrl: "https://opengraph.githubassets.com/10aeb13d4da444bf79e341a0d786ad363ca135022a96f2e2317f1cff671cb778/VirtoCommerce/vc-module-customer"
---

# Virto Commerce Customer Module

## Overview

The Customer module is Virto Commerce's contacts management system. It stores and manages the people and companies that interact with a Virto Commerce solution — store customers, employees, partner organisations, and third-party vendors — in a single polymorphic hierarchy.

The module provides a complete back-office experience (the **Companies and contacts** blade with a `<va-filter-panel>`-powered filter for member type and created/modified date ranges), a REST API for polymorphic CRUD and search, pluggable search indexing, integration events for downstream modules, and fine-grained permissions.

## Key features

* **Polymorphic member hierarchy** — `Contact`, `Organization`, `Employee`, `Vendor` inherit from a shared `Member` base and live in a parent/child tree (companies can contain sub-companies, employees, and contacts).
* **Extensible member types** — additional types can be registered by downstream modules via `memberTypesResolverService.registerType(...)` on the UI side and the polymorphic JSON converter on the API side.
* **Extensible filter panel** — downstream modules can contribute custom rows to the Members blade's…
