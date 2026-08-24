---
repo: "bitExpert/phpstan-sylius"
name: "phpstan-sylius"
description: "Sylius-specific extensions for PHPStan"
readmeQualityOk: true
url: "https://github.com/bitExpert/phpstan-sylius"
homepage: "https://addons.sylius.com/en_US/products/bitexpert-phpstan-sylius"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2025-02-21T11:46:25Z"
lastCommitAt: "2026-08-24T04:21:37Z"
lastReleaseAt: "2026-03-21T10:42:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 75
maintainers: ["shochdoerfer", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68350916b649e317715d7ae973b7b6901081426451506fa1eacd7f3d0a7ab950/bitExpert/phpstan-sylius"
---

# bitexpert/phpstan-sylius

This package provides some additional features for PHPStan to detect configuration issues in Sylius projects.

## Requirements

PHP: PHP 8.2 or higher

Sylius: Sylius 2.0 or higher

PHPStan: PHPStan 2.0 or higher

## Installation

The preferred way of installing `bitexpert/phpstan-sylius` is through Composer.
You can add `bitexpert/phpstan-sylius` as a dev dependency, as follows:

```
composer.phar require --dev bitexpert/phpstan-sylius
```

### PHPStan configuration

If you have not already a PHPStan configuration file `phpstan.neon` in your project, create a new empty file next to your `composer.json` file.

See [here](https://phpstan.org/config-reference) what options PHPStan allows you to configure. 

## Feature overview

This PHPStan extension works for both Sylius plugins and Sylius application projects.

The following rules have been implemented:
- Rule to check if resource classes defined either via AbstractGrid::getResourceClass() or the #AsGrid attribute exist
- Rule to check that configured grid fields belong to the configured resource class
- Rule to check that configured filter fields belong to the configured resource class
  - custom…
