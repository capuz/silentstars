---
repo: "cleverage/process-bundle"
name: "process-bundle"
description: "Configure series of tasks to process, import/export, transform and validate data in Symfony"
readmeQualityOk: true
url: "https://github.com/cleverage/process-bundle"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["data-processing", "etl", "export", "import", "php", "symfony", "symfony-bundle", "transformer"]
stars: 21
forks: 14
openIssues: 10
closedIssues: 150
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2017-06-06T09:58:17Z"
lastCommitAt: "2026-10-23T08:46:35Z"
lastReleaseAt: "2024-06-27T17:31:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 68
maintainers: ["njoubert-cleverage"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ce6415768d4f594b682cdac4277d20f07ed6e1890db54c96c48e4741c4610d5/cleverage/process-bundle"
discussionCount: 1
---

CleverAge/ProcessBundle
=======================

This bundle allows to configure series of tasks to be performed on a certain order.
Basically, it will greatly ease the configuration of import and exports but can do much more.

Compatible with [Symfony stable version and latest Long-Term Support (LTS) release](https://symfony.com/releases).

Demo project can be found on [there](https://github.com/cleverage/process-bundle-demo).

## Installation

```bash
composer require cleverage/process-bundle
```

Without Symfony Flex, register the bundle in `config/bundles.php`:

```php
CleverAge\ProcessBundle\CleverAgeProcessBundle::class => ['all' => true],
```

Then define your first process: see the [quick start](https://github.com/cleverage/process-bundle/blob/HEAD/docs/01-quick_start.md) (optional dependencies, configuration, commands).

## Documentation

For usage documentation, see:
[docs/index.md](https://github.com/cleverage/process-bundle/blob/HEAD/docs/index.md)

## Support & Contribution

For general support and questions, please use [Github](https://github.com/cleverage/process-bundle/issues).
If you think you found a bug or you have a feature idea to propose, feel free to open an…
