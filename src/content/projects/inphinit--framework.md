---
repo: "inphinit/framework"
name: "framework"
description: "👽 PHP microframework, routes, controllers and views, for PHP 5.4 to PHP 8"
readmeQualityOk: true
url: "https://github.com/inphinit/framework"
homepage: "http://inphinit.github.io/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php", "framework", "router", "routing", "composer", "performance", "apache", "nginx", "iis", "iis-express"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2016-04-30T22:31:20Z"
lastCommitAt: "2026-10-12T11:15:07Z"
lastReleaseAt: "2019-10-13T19:10:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 69
maintainers: ["brcontainer"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf8eea6fe31fb4b32a1d87c46fa2b92aec27c10ccc22a2305a1d2bbe2a248bdd/inphinit/framework"
---

## Getting started

This repository contains the core code of the Inphinit framework. To build an application, visit the main [repository](https://github.com/inphinit/inphinit).

The core of the framework is divided into two parts: [`Inphinit`](https://github.com/inphinit/framework/tree/master/src/Inphinit) and [`Inphinit\Experimental`](https://github.com/inphinit/framework/tree/master/src/Experimental).

- `Inphinit` namespace contains all defined classes that will hardly change their behavior.
- `Inphinit\Experimental` namespace contains classes that are being designed and tested. Some of them already work very well, while others are still being defined. Once a class is stable and fully tested, it will be moved to the `Inphinit` namespace.

## Contributing

Requirements:

1. Recommended: *PHP 8* (see the currently supported versions at https://www.php.net/supported-versions.php)
   - Minimum: *PHP 5.4* (backward compatibility is preserved for environments with upgrade limitations)
1. Intl PHP extension, required for the `Inphinit\Utility\Strings` class.
1. COM or cURL PHP extension, required for the `Inphinit\Filesystem\Size` class.

Before submitting a pull-request, it's…
