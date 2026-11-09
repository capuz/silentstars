---
repo: "ergebnis/attribute-collector"
name: "attribute-collector"
description: "🪣 Provides a composer package with collectors for collecting attributes located on classes, class constants, properties, methods, method parameters, functions, function parameters, and constants."
readmeQualityOk: true
url: "https://github.com/ergebnis/attribute-collector"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["attribute", "collector", "php"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-12-29T16:10:15Z"
lastCommitAt: "2026-11-09T11:59:39Z"
lastReleaseAt: "2026-09-24T19:41:08Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 64
maintainers: ["dependabot[bot]", "ergebnis-bot", "localheinz"]
openGraphImageUrl: "https://opengraph.githubassets.com/bad25689d5fc4d511c7d59cec05946e6e4fa9c4d7d66ffad49bf8f848779f15c/ergebnis/attribute-collector"
---

# attribute-collector

This project provides a [`composer`](https://getcomposer.org) package with collectors for collecting [attributes](https://www.php.net/manual/en/language.attributes.overview.php) located on classes, class constants, properties, methods, method parameters, functions, function parameters, and constants.

## Installation

Run

```sh
composer require ergebnis/attribute-collector
```

## Usage

## Attributes

This package provides an `Attribute` that composes the [location](#locations) of an attribute and a concrete instance of the attribute collected at that location.

You can obtain an `Attribute` from an [attribute collection](#attribute-collection) by using a [collector](#collectors) to collect attributes.

## Attribute Collection

This package provides an `AttributeCollection` that composes a collection of [attributes](#attributes).

You can obtain an `AttributeCollection` by using a [collector](#collectors) to collect attributes.

### Filtering an attribute collection by attribute class name

You can filter an attribute collection by attribute class name:

```php
<?php

declare(strict_types=1);

use Ergebnis\AttributeCollector;

$attributeClassName =…
