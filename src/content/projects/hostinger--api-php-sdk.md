---
repo: "hostinger/api-php-sdk"
name: "api-php-sdk"
description: "Hostinger API PHP SDK"
readmeQualityOk: true
url: "https://github.com/hostinger/api-php-sdk"
homepage: "https://developers.hostinger.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["api", "hostinger", "php", "sdk", "tools"]
stars: 32
forks: 9
openIssues: 1
closedIssues: 2
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2025-04-08T07:26:13Z"
lastCommitAt: "2026-11-13T11:18:10Z"
lastReleaseAt: "2025-08-14T16:12:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 59
maintainers: ["hostingerbot[bot]", "aurimasbutkus", "ugnsma"]
openGraphImageUrl: "https://opengraph.githubassets.com/280a6520cb911a74385ece2b75b0618e52bbaa99c61135be313579bf7fa49a1c/hostinger/api-php-sdk"
---

# Hostinger API PHP SDK

## About
This is a PHP SDK for the Hostinger API. For more information, please visit [https://developers.hostinger.com](https://developers.hostinger.com).

## Installation & Usage

### Requirements

PHP 8.1 and later.

### Composer

To install the package via [Composer](https://getcomposer.org/), run the following command:

```bash
composer require hostinger/api-php-sdk
```

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure Bearer authorization: apiToken
$config = Hostinger\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');

$apiInstance = new Hostinger\Api\AgencyHostingCacheApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    client: new GuzzleHttp\Client(),
    config: $config
);
$websiteUid = zpwlGlp19; // string | Agency…
