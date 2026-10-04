---
repo: "VirtoCommerce/vc-module-marketing"
name: "vc-module-marketing"
description: "Marketing module: promotions and dynamic content"
readmeQualityOk: true
url: "https://github.com/VirtoCommerce/vc-module-marketing"
language: "C#"
languages: ["C#"]
languagePcts: [71]
stars: 8
forks: 11
openIssues: 3
closedIssues: 46
watchers: 19
contributors: 39
recentReleases: 0
createdAt: "2016-05-26T15:13:35Z"
lastCommitAt: "2026-10-04T10:02:43Z"
lastReleaseAt: "2017-02-17T12:24:02Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 89
undervaluedScore: 52
maintainers: ["vc-ci", "OlegoO", "Lenajava1"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e96aa69ba1c5c6c8f3cbef7e186e0c067230726375755b5d661cd0cf80ec94b/VirtoCommerce/vc-module-marketing"
---

# Virto Commerce Marketing Module

## Overview

The Virto Commerce Marketing Module provides **promotions** and **dynamic content** capabilities for the Virto Commerce Platform.

### Architecture

The module implements a domain-driven structure where:
- **Promotions** define marketing rules (conditions + rewards) evaluated during cart/order processing.
- **Dynamic content** provides content items, placeholders, and publications for storefront personalization.
- **Admin UI** enables day-to-day operations (create/edit/search/filter).
- **Optional integrations** are enabled when dependent modules are installed (e.g., Orders module).

### Core principles

- **Rule-based promotions**: conditions and rewards are modeled as expression trees to support extensibility.
- **Store scope**: promotions can be targeted to specific store(s) (or globally when no stores are assigned).
- **Optional dependencies**: some features light up only when related modules are present (e.g., Orders).

## Key Features

### Promotions

* **Promotion lifecycle**: create, edit, clone, delete, enable/disable
* **Coupons support**: manage promotion coupons and coupon usages
* **Search and filtering**:
  - keyword…
