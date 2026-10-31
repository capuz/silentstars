---
repo: "ultraviolettes/filament-jobs-monitor"
name: "filament-jobs-monitor"
description: "Queue Monitoring Package for Filament "
readmeQualityOk: true
url: "https://github.com/ultraviolettes/filament-jobs-monitor"
homepage: "https://filamentphp.com/plugins/jobs-monitor"
language: "PHP"
languages: ["PHP"]
languagePcts: [89]
topics: ["filamentphp", "laravel"]
stars: 285
forks: 70
openIssues: 1
closedIssues: 43
watchers: 6
contributors: 43
recentReleases: 0
createdAt: "2023-03-27T08:17:08Z"
lastCommitAt: "2026-10-31T16:00:03Z"
lastReleaseAt: "2025-03-21T12:46:07Z"
status: "thriving"
tags: ["funded"]
healthScore: 93
undervaluedScore: 42
maintainers: ["croustibat", "dependabot[bot]", "webard"]
openGraphImageUrl: "https://opengraph.githubassets.com/49a79635ec2bd8e76a1c37db00a9d40511c9690e415cb76b328d2d141893fdad/ultraviolettes/filament-jobs-monitor"
fundingLinks: ["GITHUB:https://github.com/croustibat"]
---

# Background Jobs monitoring like Horizon for all drivers for FilamentPHP

This is a package to monitor background jobs for FilamentPHP. It is inspired by Laravel Horizon and is compatible with all drivers.

## Installation

Check your filamentPHP version before installing:

| Version | FilamentPHP | PHP     |
| ------- | ----------- |---------|
| 1.*     | 2.*         | 8.1     |
| 2.*     | 3.*         | \>= 8.1 |
| 3.*     | 4.*         | \>= 8.1 |
| 4.*     | 4.*, 5.*    | \>= 8.2 |
| 5.*     | 5.*         | \>= 8.3 |

`5.*` requires Filament 5 and supports Laravel 12 and 13. `4.*` still supports Filament 4 and Laravel 11.28+, and is maintained on the [`4.x` branch](https://github.com/ultraviolettes/filament-jobs-monitor/tree/4.x).

Install the package via composer:

```bash
composer require croustibat/filament-jobs-monitor
```

Publish and run the migrations using:

```bash
php artisan vendor:publish --tag="filament-jobs-monitor-migrations"
php artisan migrate
```

## Usage

### Configuration

The global plugin config can be published using the command below:

```bash
php artisan vendor:publish --tag="filament-jobs-monitor-config"
```

This is the content of the published…
