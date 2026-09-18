---
repo: "teylabs/laravel-ddd"
name: "laravel-ddd"
description: "Toolkit for domain driven design (DDD) in Laravel. Provides artisan commands to generate domain models, DTOs, view models, value objects, and much more."
readmeQualityOk: true
url: "https://github.com/teylabs/laravel-ddd"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["artisan", "ddd", "domain-driven-design", "laravel"]
stars: 192
forks: 24
openIssues: 0
closedIssues: 19
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2023-01-17T20:58:14Z"
lastCommitAt: "2026-09-18T14:03:42Z"
lastReleaseAt: "2023-11-13T03:45:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 42
maintainers: ["jaspertey", "dependabot[bot]", "danny-de-wit"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7fcd04707622c86edc0d7946c814b59016c83aaebe0afec78ca996b68f52be3/teylabs/laravel-ddd"
discussionCount: 17
---

# Domain Driven Design Toolkit for Laravel

Laravel-DDD is a toolkit to support domain driven design (DDD) in Laravel applications. One of the pain points when adopting DDD is the inability to use Laravel's native `make` commands to generate objects outside the `App\*` namespace. This package aims to fill the gaps by providing equivalent commands such as `ddd:model`, `ddd:dto`, `ddd:view-model` and many more.

Built by [Jasper Tey](https://github.com/jaspertey) at [Teylabs](https://teylabs.com), and made better by [our contributors](https://github.com/teylabs/laravel-ddd/graphs/contributors).

## Contents

- [Installation](#installation)
- [Quick start](#quick-start)
- [AI-assisted development](#ai-assisted-development)
- [Available commands](#available-commands)
- [Advanced usage](#advanced-usage)
- [Customizing stubs](#customizing-stubs)
- [Discovery](#domain-autoloading-and-discovery)
- [Production](#autoloading-in-production)
- [Configuration reference](#configuration-file)
- [Contributing and testing](#testing)

## Installation
The current 3.x development branch requires PHP 8.3 or later (below 9.0), and Laravel 11.44+, 12.x, or 13.x. Your Laravel version may impose…
