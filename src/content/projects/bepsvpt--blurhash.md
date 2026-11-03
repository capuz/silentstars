---
repo: "bepsvpt/blurhash"
name: "blurhash"
description: "A PHP implementation of BlurHash with Laravel integration."
readmeQualityOk: true
url: "https://github.com/bepsvpt/blurhash"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["php", "laravel-package", "laravel", "blurhash"]
stars: 134
forks: 10
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2020-08-03T12:02:02Z"
lastCommitAt: "2026-11-03T11:15:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 26
maintainers: ["bepsvpt"]
openGraphImageUrl: "https://opengraph.githubassets.com/b03734e707cb537981d6b3be4820a9b5fa96df88a9d7e3c9a62ce54bdc2d024f/bepsvpt/blurhash"
discussionCount: 2
---

# BlurHash

A PHP implementation of [BlurHash](https://github.com/woltapp/blurhash) with Laravel integration.

BlurHash is a compact representation of a placeholder for an image.

- [Version](#version)
- [Installation](#installation)
- [Usage](#usage)
- [Changelog](#changelog)
- [Upgrade](#upgrade)
- [License](#license)

## Version

4.1.1

### Supported Laravel Version

8.0 ~ 13.x

## Installation

Install using composer

```shell
composer require bepsvpt/blurhash
```

Publish config file

```shell
php artisan vendor:publish --provider="Bepsvpt\Blurhash\BlurHashServiceProvider"
```

Set up config file on config/blurhash.php

Done!

## Usage

### Facade

```php
BlurHash::encode($path);
```

`$file` can be `UploadedFile` or a file path string.

### app helper function

```php
app('blurhash')
  ->setComponentX(7)
  ->setComponentY(4)
  ->setMaxSize(96)
  ->encode(request('file'));
```

## Changelog

Please see [CHANGELOG](https://github.com/bepsvpt/blurhash/blob/HEAD/CHANGELOG.md) for details.

## Upgrade

Please see [UPGRADE](https://github.com/bepsvpt/blurhash/blob/HEAD/UPGRADE.md) for details.

## License

BlurHash is licensed under [The MIT License…
