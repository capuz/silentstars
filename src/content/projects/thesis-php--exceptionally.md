---
repo: "thesis-php/exceptionally"
name: "exceptionally"
description: "Turns PHP errors into exceptions around a callable, safe when the callable suspends a fiber."
readmeQualityOk: true
url: "https://github.com/thesis-php/exceptionally"
homepage: "https://github.com/thesis-php/thesis/tree/main/packages/exceptionally"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["error-handling", "exceptions", "fibers", "php", "warnings"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2019-08-03T01:15:44Z"
lastCommitAt: "2026-11-19T05:03:56Z"
lastReleaseAt: "2026-11-17T03:03:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 58
maintainers: ["vudaltsov"]
openGraphImageUrl: "https://opengraph.githubassets.com/968d9efbca3c040d8b054a948c0fbdaf79ac5c5669c8f6b4da2abcc89e361260/thesis-php/exceptionally"
fundingLinks: ["CUSTOM:https://www.tinkoff.ru/cf/5MqZQas2dk7"]
---

# Thesis Exceptionally

> A read-only split of [`packages/exceptionally`](https://github.com/thesis-php/thesis/tree/main/packages/exceptionally)
> from the [thesis-php/thesis](https://github.com/thesis-php/thesis) monorepo: issues and pull requests go there.
>
> [Report a bug](https://github.com/thesis-php/thesis/issues/new?template=bug.yml) · [Request a feature](https://github.com/thesis-php/thesis/issues/new?template=feature.yml) · [Changelog](https://github.com/thesis-php/exceptionally/blob/HEAD/CHANGELOG.md)
> · [Contributing](https://github.com/thesis-php/exceptionally/blob/HEAD/CONTRIBUTING.md)

Turns PHP errors into exceptions around a callable. Safe when the callable suspends a fiber.

```php
use function Thesis\exceptionally;

// throws \ErrorException instead of a warning and false
$content = exceptionally(static fn() => file_get_contents('/path/to/file'));
```

## Installation

```shell
composer require thesis/exceptionally
```

Requires PHP 8.6+. No extensions.
