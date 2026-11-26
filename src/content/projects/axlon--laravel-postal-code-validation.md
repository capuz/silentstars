---
repo: "axlon/laravel-postal-code-validation"
name: "laravel-postal-code-validation"
description: "Worldwide postal code validation for Laravel"
readmeQualityOk: true
url: "https://github.com/axlon/laravel-postal-code-validation"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["laravel", "laravel-package", "validation", "postal-code", "zip-code"]
stars: 391
forks: 30
openIssues: 0
closedIssues: 20
watchers: 4
contributors: 7
recentReleases: 2
createdAt: "2018-12-06T17:58:43Z"
lastCommitAt: "2026-11-26T23:36:59Z"
lastReleaseAt: "2026-11-21T22:01:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 82
undervaluedScore: 31
maintainers: ["axlon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/57703fd5aecb3739f521fc24afd91b0e92f7956c269cc0fd90c3a01399248169/axlon/laravel-postal-code-validation"
---

> **Warning**
>
> This documentation is for version 4.x, which is still in development. For production, use version 3.x and follow the
> [3.x documentation](https://github.com/axlon/laravel-postal-code-validation/blob/3.x/README.md).

# Laravel Postal Code Validation

Adds postal code validation to Laravel, based on [Google's libaddressinput](https://github.com/google/libaddressinput).

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
    - [Validate a postal code](#validate-a-postal-code)
    - [Validate a postal code against a dynamic area](#validate-a-postal-code-against-a-dynamic-area)
    - [String notation](#string-notation)
    - [Adding an error message](#adding-an-error-message)
- [License](#license)
- [Attribution](#attribution)
    - [Modifications](#modifications)

## Requirements

This package has the following requirements:

- Laravel 12 or greater
- PHP 8.2 or greater

## Installation
You can install this package with Composer, by running the command below:

```bash
composer require axlon/laravel-postal-code-validation
```
