---
repo: "chrisvasey/statamic-boost"
name: "statamic-boost"
description: "MCP tools and AI guidelines for Statamic sites, extending Laravel Boost."
readmeQualityOk: true
url: "https://github.com/chrisvasey/statamic-boost"
homepage: "https://statamic.com/addons/chrisvasey/statamic-boost"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [71, 20]
stars: 6
forks: 4
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 104
recentReleases: 4
createdAt: "2026-01-17T08:08:53Z"
lastCommitAt: "2026-11-02T13:39:07Z"
lastReleaseAt: "2026-11-02T13:39:10Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 68
maintainers: ["github-actions[bot]", "dependabot[bot]", "chrisvasey"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4227a65a95f92ee855dc07d2481574cf996e85db64e429dadb91db71566c9c6/chrisvasey/statamic-boost"
---

# Statamic Boost

Statamic-specific MCP tools and AI guidelines for [Laravel Boost](https://github.com/laravel/boost). Provides AI assistants with deep knowledge of your Statamic site's structure, content, and configuration.

## Features

- **12 MCP Tools** for querying Statamic content, blueprints, and configuration
- **AI Guidelines** for Antlers templating, blueprints, and Statamic best practices
- **Environment Detection** automatically excludes database tools for flat-file sites
- **Seamless Integration** with Laravel Boost's MCP server

This package focuses on providing **read-only context** to AI agents about your Statamic site. If you need full CRUD operations, template analysis, or addon scaffolding, check out [cboxdk/statamic-mcp](https://github.com/cboxdk/statamic-mcp) which offers 100+ tools with write capabilities.

## Requirements

- PHP 8.2+
- Laravel 12 or 13
- Statamic 5 or 6
- [Laravel Boost](https://github.com/laravel/boost) ^2.0

## Installation

```bash
composer require chrisvasey/statamic-boost --dev
```

Then run the Boost installer to generate your AI context files:

```bash
php artisan boost:install
```

This is **Laravel Boost's** install command. It…
