---
repo: "codetivsro/upgates-php-sdk"
name: "upgates-php-sdk"
description: "Elegant SDK written in PHP to work with the Upgates API"
readmeQualityOk: true
url: "https://github.com/codetivsro/upgates-php-sdk"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["api", "php", "sdk", "upgates", "saloonphp"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-16T09:48:21Z"
lastCommitAt: "2026-09-18T08:28:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["pajaeu"]
openGraphImageUrl: "https://opengraph.githubassets.com/37212a27473b5af2c57ccf63db55fa523090eca84b95803522e0980fd588f655/codetivsro/upgates-php-sdk"
---

<picture><source media="(prefers-color-scheme: dark)" srcset=".github/media/upgates-logo-dark.png"><img src=".github/media/upgates-logo.png" height="74"></picture>
</p>

# Upgates PHP SDK

Elegant SDK written in PHP to work with the Upgates API, built with Saloon v4.

```php
use Codetiv\Upgates\Sdk\Upgates;

$upgates = new Upgates(
    storeName: 'dev-shop-1',
    serverMark: 't1',
    apiLogin: '11111111',
    apiKey: 'rdK2STJcJVWqq2G1'
);

// Uses product resource to get complete product's list
$products = $upgates->products()->listComplete();

foreach ($products as $item) {
    echo 'Product: ' . $item['code'] . PHP_EOL;
}
```

## Installation

```bash
composer require codetiv/upgates-php-sdk
```

## Upgates API documentation

To get started, we highly recommend reading
the [API documentation](https://docs.upgates.com/api/intro).

## Usage & Authentication

To communicate with the API, you'll need to create an [integration access](https://doplnky.upgates.cz/detail/api). You can do this in the e-shop admin panel under the “Add-ons / API” section.

After you create new integration, you will need `apiLogin` and `apiKey` values - found in the **LOGIN** and **KLÍČ API** (API KEY)…
