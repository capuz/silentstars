---
repo: "shyim/danger-php"
name: "danger-php"
description: "Danger runs during your CI process, and gives teams the chance to automate common code review chores."
readmeQualityOk: true
url: "https://github.com/shyim/danger-php"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 85
forks: 7
openIssues: 0
closedIssues: 15
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2021-05-21T22:35:42Z"
lastCommitAt: "2026-11-06T11:23:39Z"
lastReleaseAt: "2021-06-20T20:31:30Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 45
maintainers: ["shyim", "dependabot[bot]", "nfortier-shopware"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ce85abea5b350c424e7135ba0a5db6bd1235268138b3aee1759126aa1518b3d/shyim/danger-php"
---

# Danger PHP

Danger runs during your CI process, and gives teams the chance to automate common code review chores.
This project ports [Danger](https://danger.systems/ruby/) to PHP.

Currently only GitHub and Gitlab are supported as Platform

## Badges

## Installation

Requires PHP 8.4 or newer with the ctype, intl, and mbstring extensions.

### Composer

Install danger-php using Composer

```bash 
composer global require shyim/danger-php
```

### Phar Archive

Every release has a phar archive attached

### Docker

Use the [prebuilt Docker image](https://github.com/users/shyim/packages/container/package/danger-php)

## Documentation

- [Getting started](https://github.com/shyim/danger-php/blob/HEAD/docs/getting_started.md)
- [Builtin Rules](https://github.com/shyim/danger-php/blob/HEAD/docs/builtin-rules.md)
- [Danger Context](https://github.com/shyim/danger-php/blob/HEAD/docs/context.md)
- [CI Integration](https://github.com/shyim/danger-php/blob/HEAD/docs/ci.md)
- [Commands](https://github.com/shyim/danger-php/blob/HEAD/docs/commands.md)

### Disallow multiple commits with same message

```php
<?php declare(strict_types=1);

use Danger\Config;
use…
