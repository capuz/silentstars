---
repo: "inphinit/inphinit"
name: "inphinit"
description: "👽 PHP web application using Inphinit framework"
readmeQualityOk: true
url: "https://github.com/inphinit/inphinit"
homepage: "http://inphinit.github.io"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["iis", "nginx", "php", "apache", "performance", "framework", "router", "api", "routing", "composer"]
stars: 39
forks: 8
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 2
recentReleases: 0
createdAt: "2016-05-28T00:20:24Z"
lastCommitAt: "2026-10-21T23:35:29Z"
lastReleaseAt: "2021-10-06T21:48:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 50
maintainers: ["brcontainer"]
openGraphImageUrl: "https://opengraph.githubassets.com/d90ae2ec652c451334c4a4b39051ed778af7cdbff3a2afce57aaf8988ae4d9f2/inphinit/inphinit"
---

- [Installing](#installing)
- [Starting a development server](#starting-a-development-server)
- [NGINX](#nginx)
- [Folder structure](#folder-structure)
- [Creating routes](#creating-routes)
- [Grouping routes](#grouping-routes)
- [Route and URL patterns](#route-and-url-patterns)
- [Documentation](#documentation)

## Installing

Requirements:

1. PHP 8 (see the currently supported versions at https://www.php.net/supported-versions.php)
   - Note: Backward compatible down to PHP 5.4
   - If you need a full-featured server on Windows or macOS, consider using WampServer, XAMPP, Laragon, EasyPHP, or AMPPS.
1. (Optional) The Intl PHP extension, required for the `Inphinit\Utility\Strings` class.
1. (Optional) The COM or cURL PHP extension, required for the `Inphinit\Filesystem\Size` class.

After installing PHP, you can install Inphinit via Composer or Git.

To install via Composer, run the command (see more details at https://getcomposer.org/doc/03-cli.md):

```bash
php composer.phar create-project inphinit/inphinit:^2.1-beta.17 my-application
```

If Composer is installed globally, use:

```bash
composer create-project inphinit/inphinit:^2.1-beta.17 my-application
```

To install via…
