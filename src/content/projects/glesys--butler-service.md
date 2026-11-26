---
repo: "glesys/butler-service"
name: "butler-service"
description: "A Laravel-based micro-framework for web services"
readmeQualityOk: true
url: "https://github.com/glesys/butler-service"
language: "PHP"
languages: ["PHP"]
languagePcts: [81]
topics: ["laravel", "microservice"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 10
contributors: 9
recentReleases: 0
createdAt: "2019-10-04T08:04:17Z"
lastCommitAt: "2026-11-26T13:01:06Z"
lastReleaseAt: "2020-05-07T08:00:03Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 79
undervaluedScore: 47
maintainers: ["olvert", "wecc", "brother"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ef45514dd548c60874ae12feb45df3cd9dc8188300e5cf267a011268bbe7e59/glesys/butler-service"
---

:construction: **Not ready for production.**

# Butler Service

A Laravel-based micro-framework for web services using GraphQL.

## Getting Started

*Requires a working Laravel app with a database connection.*

```shell
composer require glesys/butler-service
```

Replace `Illuminate\Foundation\Application` with `Butler\Service\Foundation\Application` in `bootstrap/app.php`.

```shell
php artisan vendor:publish --tag=butler-config --tag=butler-assets
php artisan migrate
```

It is optional (but recommended) to extend your `TestCase` (or whatever file that extends Laravels `TestCase`) with `Butler\Service\Testing\TestCase`.

```php
use Butler\Service\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    //
}
```

## Service Providers

All service providers in your `app/Providers` directory will be registered automatically.

## Config

You can use your configuration files as usual. See [src/config](https://github.com/glesys/butler-service/blob/HEAD/src/config) for our defaults.
