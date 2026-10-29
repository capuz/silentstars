---
repo: "appwrite/sdk-generator"
name: "sdk-generator"
description: "Generating SDKs for multiple programming languages and platforms ⚙️"
readmeQualityOk: true
url: "https://github.com/appwrite/sdk-generator"
homepage: "https://appwrite.io"
language: "Twig"
languages: ["Twig", "Go"]
languagePcts: [48, 26]
topics: ["php", "sdk-generator", "python", "ruby", "nodejs", "javascript", "js", "flutter", "dart", "kotlin"]
stars: 329
forks: 212
openIssues: 16
closedIssues: 163
watchers: 20
contributors: 99
recentReleases: 0
createdAt: "2019-05-22T16:47:41Z"
lastCommitAt: "2026-10-29T10:37:08Z"
lastReleaseAt: "2021-01-06T12:41:15Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 43
maintainers: ["ChiragAgg5k", "Meldiron", "renovate-appwrite[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d5b07d8eda16240b220b46ca6e7cb19b24f1b76c985df202f83087a48457381/appwrite/sdk-generator"
---

# ⚙️ Appwrite SDK Generator

[Appwrite](https://appwrite.io) SDK generator is a PHP library for auto-generating SDK libraries for multiple languages and platforms.

The SDK Generator uses predefined language settings as [Twig templates](https://twig.symfony.com/) to generate codebases based on different API specs.

[Utopia OpenAPI](https://github.com/utopia-php/openapi) parses OpenAPI 2.0, 3.0, and 3.1 documents into one canonical model. The generator consumes that model to render services, methods, models, enums, and union types.

## Getting Started

Install using composer:

**CLI**
```bash
composer update --ignore-platform-reqs --optimize-autoloader
```

**Docker (UNIX)**

```bash
docker run --rm --interactive --tty --volume "$(pwd)":/app composer install --ignore-platform-reqs
```

**Docker (Windows)**

```bash
docker run --rm --interactive --tty --volume "%cd%":/app composer install --ignore-platform-reqs
```

Create language and SDK instances and generate code to target directory.

```php
<?php

require_once 'vendor/autoload.php';

use Appwrite\SDK\SDK;
use Appwrite\SDK\Language\PHP;
use Utopia\OpenAPI\Parser;

// Parse an OpenAPI 2, 3.0, or 3.1 document into the canonical…
