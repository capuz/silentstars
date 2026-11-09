---
repo: "jbrooksuk/artisan.page"
name: "artisan.page"
description: "A bookmarkable, searchable cheatsheet for Laravel's Artisan commands."
readmeQualityOk: true
url: "https://github.com/jbrooksuk/artisan.page"
homepage: "https://artisan.page"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [49, 45]
topics: ["artisan", "cheatsheet", "developer-tools", "development", "laravel", "tools", "nuxt", "nuxtjs"]
stars: 418
forks: 44
openIssues: 0
closedIssues: 12
watchers: 4
contributors: 15
recentReleases: 0
createdAt: "2021-01-18T19:42:17Z"
lastCommitAt: "2026-11-09T00:53:48Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 39
maintainers: ["dependabot[bot]", "jbrooksuk", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/487c3049c92afa8103db94dc1021ff4a07d880bbd06a3a99b42df97b70f51a11/jbrooksuk/artisan.page"
fundingLinks: ["GITHUB:https://github.com/jbrooksuk"]
---

A bookmarkable, searchable cheatsheet for [Laravel's](https://laravel.com) Artisan commands.

## Generation

Artisan.page is a static Nuxt site fed by one JSON file per Laravel major version, under `assets/<version>.x.json`. Those files are produced by a GitHub Actions workflow that spins up a disposable Laravel install for each version, introspects its registered Artisan commands, and commits the result back to the repo.

### The workflow

`.github/workflows/process-artisan-commands.yml` runs on `push` to `master`, pull requests, manual dispatch, and on a schedule (three times a day). Its steps:

1. **Discover Laravel versions.** Fetches the Laravel package metadata from Packagist and derives `{ v, php }` pairs for each major release — e.g. `{ v: "13", php: "8.3" }`.
2. **Fan out.** A matrix job runs once per version.
3. **Install Laravel.** `composer create-project laravel/laravel="^<version>"` into `/tmp/laravel`, configured with the matching `platform.php`.
4. **Add first-party package feeds.** Registers `nova.laravel.com` and `spark.laravel.com` as Composer repositories and authenticates them using `NOVA_USERNAME` / `NOVA_LICENSE_KEY` / `SPARK_USERNAME` / `SPARK_API_TOKEN`…
