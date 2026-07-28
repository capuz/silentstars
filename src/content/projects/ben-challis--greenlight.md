---
repo: "ben-challis/greenlight"
name: "greenlight"
description: "Parallel-first PHP 8.4+ test framework with typed expectations, strict doubles, coverage, and zero runtime dependencies."
readmeQualityOk: true
url: "https://github.com/ben-challis/greenlight"
homepage: "https://ben-challis.github.io/greenlight/"
language: "PHP"
languages: ["PHP"]
languagePcts: [96]
topics: ["code-coverage", "continuous-integration", "integration-testing", "mocking", "parallel-testing", "php", "phpstan", "symfony", "test-framework", "testing"]
stars: 11
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-06T21:16:29Z"
lastCommitAt: "2026-07-28T15:00:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 43
maintainers: ["ben-challis"]
openGraphImageUrl: "https://opengraph.githubassets.com/e34280edb5404c5e3bc5abde214c0e7ae608cb63f1f74001c577d01d3140707c/ben-challis/greenlight"
---

# <a href="https://ben-challis.github.io/greenlight/"><img src="docs/logo.svg" alt="Greenlight" width="292"></a>

**A parallel-first test framework for PHP 8.4 and later.**

Greenlight runs test classes in parallel by default and has zero runtime
dependencies. Greenlight discovers one suite and sends assignments to a pool of
worker processes.

[Read the documentation](https://ben-challis.github.io/greenlight/)

Greenlight runs its own test suite with `bin/greenlight run`.

## Capabilities

* Parallel test execution with a dynamic schedule
* Resource limits for shared databases and services
* Worker recycle, leak detection, crash recovery, timeouts, and process isolation
* Strict mocks, stubs, and spies with automatic verification
* Typed expectations with clear differences
* Stable CI shards and deterministic reports
* Test attachments for values, text, bytes, and files
* Coverage through pcov or Xdebug
* Plain PHP test classes and PHP configuration
* First-party Symfony, Laravel, and PHPStan extensions
* Automated PHPUnit test conversion with a bundled Rector rule

## Example test

```php
<?php

declare(strict_types=1);

namespace App\Tests;

use Greenlight\Attribute\DataRow;
use…
