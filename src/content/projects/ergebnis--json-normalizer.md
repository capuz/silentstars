---
repo: "ergebnis/json-normalizer"
name: "json-normalizer"
description: "📃 Provides a composer package with generic and vendor-specific normalizers for normalizing JSON documents."
readmeQualityOk: true
url: "https://github.com/ergebnis/json-normalizer"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["json", "normalizer"]
stars: 82
forks: 5
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2018-01-12T12:38:25Z"
lastCommitAt: "2026-07-05T20:17:41Z"
lastReleaseAt: "2018-10-03T20:55:24Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 49
maintainers: ["localheinz", "dependabot[bot]", "ergebnis-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/31b2e496e2126c8a7475d1998eaa224bb485a0bc848e827a8e63242b67313dd7/ergebnis/json-normalizer"
---

# json-normalizer

This project provides a [`composer`](https://getcomposer.org) package with generic and vendor-specific normalizers for normalizing [JSON documents](https://www.json.org).

## Installation

Run

```sh
composer require ergebnis/json-normalizer
```

## Usage

This project comes with

- [generic normalizers](#generic-normalizers)
- [vendor-specific normalizers](#vendor-specific-normalizers)

### Generic normalizers

This project comes with the following generic normalizers:

- [`Ergebnis\Json\Normalizer\CallableNormalizer`](#callablenormalizer)
- [`Ergebnis\Json\Normalizer\ChainNormalizer`](#chainnormalizer)
- [`Ergebnis\Json\Normalizer\FormatNormalizer`](#formatnormalizer)
- [`Ergebnis\Json\Normalizer\IndentNormalizer`](#indentnormalizer)
- [`Ergebnis\Json\Normalizer\JsonEncodeNormalizer`](#jsonencodenormalizer)
- [`Ergebnis\Json\Normalizer\SchemaNormalizer`](#schemanormalizer)
- [`Ergebnis\Json\Normalizer\WithFinalNewLineNormalizer`](#withfinalnewlinenormalizer)
- [`Ergebnis\Json\Normalizer\WithoutFinalNewLineNormalizer`](#withoutfinalnewlinenormalizer)

:bulb: All of these normalizers implement the `Ergebnis\Json\Normalizer\Normalizer`.

#### `CallableNormalizer`…
