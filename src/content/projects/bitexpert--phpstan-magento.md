---
repo: "bitExpert/phpstan-magento"
name: "phpstan-magento"
description: "Magento specific extension for PHPStan"
readmeQualityOk: true
url: "https://github.com/bitExpert/phpstan-magento"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php", "magento2", "phpstan", "phpstan-extension"]
stars: 150
forks: 32
openIssues: 8
closedIssues: 65
watchers: 9
contributors: 19
recentReleases: 0
createdAt: "2019-03-20T21:39:40Z"
lastCommitAt: "2026-11-20T12:20:08Z"
lastReleaseAt: "2021-06-18T20:09:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 85
undervaluedScore: 34
maintainers: ["michielgerritsen", "shochdoerfer", "SilinMykola"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fc03ae62bb5c93bbfffe65355a768f01b0790cc71f25a3a08dfebba4284bdd1/bitExpert/phpstan-magento"
---

# bitexpert/phpstan-magento

This package provides some additional features for PHPStan to make it work for Magento 2 projects.
You can use this PHPStan extension for both Magento module projects and Magento application projects.

## Requirements

PHP: PHP 7.4 or higher

Magento: Magento 2.3.0 or higher

PHPStan: PHPStan 2.0 or higher

If you are using a Magento version that requires an older version of PHPStan (e.g. 0.12.77),  you need to manually upgrade it before 
installing this extension. In your composer.json Change the PHPStan version to `~2.0` and run:

```
composer update phpstan/phpstan --with-all-dependencies
```

This PHPStan extension needs to be registered with PHPStan so that the extension gets loaded properly. The easiest way to do this is 
to install the `phpstan/extension-installer` package as follows:

```
composer.phar require --dev phpstan/extension-installer
```

If you're using Composer >= 2.2.0 you have to allow the execution of composer plugins ([see allow-plugins section](https://getcomposer.org/doc/06-config.md#allow-plugins)) as follows:
