---
repo: "auraphp/Aura.Web"
name: "Aura.Web"
description: "Web controllers and support classes"
readmeQualityOk: true
url: "https://github.com/auraphp/Aura.Web"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php", "aura", "headers", "request", "response", "cookie-header", "cookies"]
stars: 82
forks: 25
openIssues: 1
closedIssues: 20
watchers: 13
contributors: 19
recentReleases: 0
createdAt: "2011-03-03T14:48:45Z"
lastCommitAt: "2026-09-10T08:20:24Z"
lastReleaseAt: "2022-06-21T04:58:55Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 28
maintainers: ["harikt"]
openGraphImageUrl: "https://opengraph.githubassets.com/91c62d01689b0eecfb51b4f072e38677f60807b6384c486a96a470b5645e39fd/auraphp/Aura.Web"
---

# Aura.Web

Provides web _Request_ and _Response_ objects for use by web controllers and
actions. These are representations of the PHP web environment, not HTTP request
and response objects proper.

## Foreword

### Installation

This library requires PHP 5.3 or later; we recommend using the latest available version of PHP as a matter of principle. It has no userland dependencies.

It is installable and autoloadable via Composer as [aura/web](https://packagist.org/packages/aura/web).

Alternatively, [download a release](https://github.com/auraphp/Aura.Web/releases) or clone this repository, then require or include its _autoload.php_ file.

### Quality

To run the unit tests at the command line, issue `composer install` and then `./vendor/bin/phpunit` at the package root. This requires [Composer](http://getcomposer.org/) to be available as `composer`.

This library attempts to comply with [PSR-1][], [PSR-2][], and [PSR-4][]. If
you notice compliance oversights, please send a patch via pull request.

[PSR-1]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md
[PSR-2]:…
