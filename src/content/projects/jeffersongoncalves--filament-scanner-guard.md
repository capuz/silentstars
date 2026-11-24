---
repo: "jeffersongoncalves/filament-scanner-guard"
name: "filament-scanner-guard"
description: "Filament UI for jeffersongoncalves/laravel-scanner-guard: list, filter and unban vulnerability-scanner bans from your admin panel"
readmeQualityOk: true
url: "https://github.com/jeffersongoncalves/filament-scanner-guard"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["ban", "filament", "filament-plugin", "firewall", "laravel", "php", "security", "waf"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-09-13T02:53:53Z"
lastCommitAt: "2026-11-24T01:53:57Z"
lastReleaseAt: "2026-09-27T21:17:51Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 61
maintainers: ["jeffersongoncalves", "dependabot[bot]", "Elvin-Qulizade"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1367941276/6ec93841-9d2e-4966-8e1e-e1885ba98cbe"
fundingLinks: ["GITHUB:https://github.com/jeffersongoncalves", "CUSTOM:https://buymeacoffee.com/jeffersongoncalves"]
---

# Filament Scanner Guard

Filament UI for [jeffersongoncalves/laravel-scanner-guard](https://github.com/jeffersongoncalves/laravel-scanner-guard): list, filter and unban vulnerability-scanner IPs directly from your admin panel. This plugin ships a read-only **Resource** over the `scanner_guard_bans` table, an **active/expired filter**, and **unban** / **bulk unban** actions.

## Version Compatibility

| Filament | Branch | Version |
|----------|--------|---------|
| v3       | `1.x`  | `^1.0`  |
| v4       | `2.x`  | `^2.0`  |
| v5       | `3.x`  | `^3.0`  |

> **Note:** every branch requires PHP 8.3+ and Laravel 12+ because the underlying `jeffersongoncalves/laravel-scanner-guard` (via `jeffersongoncalves/laravel-visitor-fingerprint`) only supports Laravel 12/13. Branch `1.x` (Filament v3) is pinned to Laravel 12 in CI — Filament v3.3.x installs against Laravel 13 but breaks at runtime (`$getRecordActions` / `SubNavigationPosition` errors), a limitation of Filament v3 itself, not of this plugin.

## Installation

You can install the package via composer:

```bash
composer require jeffersongoncalves/filament-scanner-guard
```
