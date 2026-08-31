---
repo: "plin-code/laravel-istat-geography"
name: "laravel-istat-geography"
description: "🇮🇹 Laravel package for importing Italian geography data from ISTAT. Features daily CSV caching, Eloquent models with relationships, and Artisan commands. Supports regions, provinces, and municipalities with soft deletes and UUID primary keys."
readmeQualityOk: true
url: "https://github.com/plin-code/laravel-istat-geography"
homepage: "https://www.plincode.tech/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["geography", "istat", "laravel", "province", "region", "hacktoberfest", "hacktoberfest2025"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-08-06T14:19:46Z"
lastCommitAt: "2026-08-31T09:57:58Z"
lastReleaseAt: "2026-06-26T10:08:44Z"
status: "thriving"
tags: []
healthScore: 75
undervaluedScore: 54
maintainers: ["danielebarbaro", "rinodrummer", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1033249411/1143f04c-3f35-4739-af65-83387691f111"
---

# Laravel ISTAT Geography

</p>

A Laravel package for importing and managing Italian geographical data from ISTAT.

## Features

- 🇮🇹 Import Italian regions, provinces, and municipalities from ISTAT
- 📮 Import Italian postal codes (CAP) with support for multi-CAP municipalities
- 🔄 Incremental updates: add new records, update changes, soft-delete removed ones
- 📊 Daily CSV caching to avoid unnecessary requests
- 🔗 Eloquent models with hierarchical relationships
- ⚡ Artisan commands for easy data import and synchronization
- 🔧 Fully configurable via configuration file
- 🆔 UUID primary keys and soft deletes support
- 🧪 Comprehensive test suite with mocked HTTP requests

## Requirements

- PHP 8.3+
- Laravel 11.0+ or 12.0+
- league/csv 9.0+
- guzzlehttp/guzzle 7.0+

## Installation

```bash
composer require plin-code/laravel-istat-geography
```

## Quick Start

1. **Install the package:**

```bash
composer require plin-code/laravel-istat-geography
```

2. **Publish the configuration:**

```bash
php artisan vendor:publish --provider="PlinCode\IstatGeography\IstatGeographyServiceProvider"
```

3. **Run migrations:**

```bash
php artisan migrate
```

4. **Import the data:**…
