---
repo: "ergebnis/php-cs-fixer-config-template"
name: "php-cs-fixer-config-template"
description: ":octocat: + :notebook: Provides a GitHub repository template for a configuration factory and rule set factories for friendsofphp/php-cs-fixer."
readmeQualityOk: true
url: "https://github.com/ergebnis/php-cs-fixer-config-template"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["php-cs-fixer", "configuration", "template"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-11-22T17:39:09Z"
lastCommitAt: "2026-10-04T10:00:49Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 70
maintainers: ["ergebnis-bot", "dependabot[bot]", "localheinz"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e92337c70aa8ed5631ffc5040d8830026c66664e287fdf64eeff8f3506a6c33/ergebnis/php-cs-fixer-config-template"
---

# php-cs-fixer-config-template

This project provides a [GitHub repository template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for a [`composer`](https://getcomposer.org) package with a configuration factory and rule set factories for [`friendsofphp/php-cs-fixer`](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer).

## Installation

Run

```sh
composer require --dev ergebnis/php-cs-fixer-config-template
```

## Usage

### Configuration

Pick one of the rule sets:

- [`Ergebnis\PhpCsFixer\RuleSet\Custom`](https://github.com/ergebnis/php-cs-fixer-config-template/blob/HEAD/src/RuleSet/Custom.php)

Create a configuration file `.php-cs-fixer.php` in the root of your project:

```php
<?php

declare(strict_types=1);

use Ergebnis\PhpCsFixer\Config;
use PhpCsFixer\Finder;

$ruleSet = Config\RuleSet\Custom::create();

$config = Config\Factory::fromRuleSet($ruleSet);

$config->setCacheFile(__DIR__ . '/.build/php-cs-fixer/.php-cs-fixer.cache');
$config->setFinder(Finder::create()->in(__DIR__));

return $config;
```

### Git

All configuration examples use the caching feature, and if you want to use it as well, you should add…
