---
repo: "alma/alma-php-client"
name: "alma-php-client"
description: "PHP API Client for Alma"
readmeQualityOk: true
url: "https://github.com/alma/alma-php-client"
homepage: "https://www.getalma.eu"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["php", "php-library", "alma", "api-client"]
stars: 17
forks: 10
openIssues: 2
closedIssues: 6
watchers: 2
contributors: 49
recentReleases: 0
createdAt: "2018-11-25T13:45:11Z"
lastCommitAt: "2026-09-18T08:26:41Z"
lastReleaseAt: "2019-04-16T11:45:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 69
undervaluedScore: 43
maintainers: ["gdraynz", "thomas-e-alma", "Francois-Gomis"]
openGraphImageUrl: "https://opengraph.githubassets.com/053be1f762eb447c7ad37cd343788c8cbcf56362c998bb0bc7786de9a4871e58/alma/alma-php-client"
---

Alma PHP API client
=====================

This is the official PHP API client for [Alma](https://getalma.eu).

This PHP API Client is being used in production on thousands of e-commerce websites and provides the necessary
endpoints to build a full-fledge integration.
It does not, however, implement the full Alma API as [documented here](https://api.getalma.eu/docs) yet.
If you find yourself needing to use some endpoints that are not yet implemented, feel free to reach out! (or even better, submit a PR :))

Installation
------------

The Alma PHP API Client library is tested against all recently supported PHP versions.
A modern, [supported PHP version](https://www.php.net/supported-versions.php) is highly recommended.

### Composer
You would normally install this package via Composer:

```
composer require alma/alma-php-client
```

### Without Composer

* Head over to the [releases](https://github.com/alma/alma-php-client/releases) and grab the `alma-php-client.zip` file of
the latest published library version.
* Unzip the library into your vendors directory.
* Require the included Composer's autoload file:

```php
require_once "path/to/alma-php-client/vendor/autoload.php";
```

*…
