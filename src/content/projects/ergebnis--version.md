---
repo: "ergebnis/version"
name: "version"
description: "💾 Provides a composer package with an abstraction of a semantic version."
readmeQualityOk: true
url: "https://github.com/ergebnis/version"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["semantic", "version"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2023-12-24T13:34:56Z"
lastCommitAt: "2026-10-04T10:00:57Z"
lastReleaseAt: "2026-09-24T19:44:14Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 67
maintainers: ["ergebnis-bot", "dependabot[bot]", "localheinz"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dd905ddd966ef531366c38522b5f4f4834a20184b0a4bddf0994e879b1a55ec/ergebnis/version"
---

# version

This project provides a [`composer`](https://getcomposer.org) package with an abstraction of a [semantic version](https://semver.org).

## Installation

Run

```sh
composer require ergebnis/version
```

## Usage

This project comes with the following components:

- [`Ergebnis\Version\Version`](#version)
- [`Ergebnis\Version\Major`](#major)
- [`Ergebnis\Version\Minor`](#minor)
- [`Ergebnis\Version\Patch`](#patch)
- [`Ergebnis\Version\PreRelease`](#prerelease)
- [`Ergebnis\Version\BuildMetaData`](#buildmetadata)

### `Version`

#### Create a `Version` from a `string`

```php
<?php

declare(strict_types=1);

use Ergebnis\Version;

$version = Version\Version::fromString('1.2.3-alpha+build.9001');

echo $version->toString(); // 1.2.3

echo $version->major()->toString(); // 1
echo $version->minor()->toString(); // 2
echo $version->patch()->toString(); // 3
echo $version->preRelease()->toString(); // alpha
echo $version->buildMetaData()->toString(); // build.9001
```

#### Bump a `Version`

```php
<?php

declare(strict_types=1);

use Ergebnis\Version;

$version = Version\Version::fromString('1.2.3');

$one = $version->bumpMajor();

echo $one->toString(); // 2.0.0

$two =…
