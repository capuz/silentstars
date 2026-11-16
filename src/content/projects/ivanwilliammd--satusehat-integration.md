---
repo: "ivanwilliammd/satusehat-integration"
name: "satusehat-integration"
description: "SATUSEHAT Integration Library - easy way to create FHIR R4 resource object"
readmeQualityOk: true
url: "https://github.com/ivanwilliammd/satusehat-integration"
homepage: "https://packagist.org/packages/ivanwilliammd/satusehat-integration"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["fhir-client", "health-informatics", "healthcare", "integration", "kyc", "laravel-package", "php80", "php81", "php82", "php83"]
stars: 87
forks: 54
openIssues: 0
closedIssues: 33
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2023-09-26T13:34:02Z"
lastCommitAt: "2026-11-16T11:56:22Z"
lastReleaseAt: "2024-03-30T09:36:41Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub", "fork_magnet"]
healthScore: 96
undervaluedScore: 56
maintainers: ["ivanwilliammd", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/31db4b2564286d39fadb0700a6f51fa4db3bfd4ce3a126bb54f661169212916a/ivanwilliammd/satusehat-integration"
fundingLinks: ["GITHUB:https://github.com/ivanwilliammd"]
discussionCount: 24
---

# SATUSEHAT Integration Library

> **Open-source PHP library for integrating with SATUSEHAT** — Indonesia's national health data platform powered by FHIR R4. Works standalone (native PHP) or with Laravel.

## Status & cakupan (diukur, bukan diklaim)

| Bagian | Jumlah | Bukti |
| --- | --- | --- |
| Builder | 141 resource | `src/Builder/PayloadBuilder*.php` |
| Method kanon | 1.405 | uji permukaan method per resource |
| Parser | 142 kelas | satu getter per elemen builder, `tests/Parser/ParserSurfaceTest.php` |
| Datatype | 34 | `src/DataType` |
| Namespace R5 | 142 builder + 34 datatype | `src/R5`, `tests/Version/R5NamespaceTest.php` |
| Tes | 1.892 | `vendor/bin/phpunit tests` |

Konformansi R4 bukan hal yang sama dengan paritas antar-bahasa. [`docs/R4_CONFLICT_TRIAGE.md`](https://github.com/ivanwilliammd/satusehat-integration/blob/HEAD/docs/R4_CONFLICT_TRIAGE.md)
mencatat hasil audit terhadap definisi R4: 46 builder bersih, 68 memakai setter generik pada
resource yang tidak punya elemen itu, 20 perlu keputusan per elemen, 7 resource tidak ada di R4.

## R4 acuan, R5 cukup ganti `use`

```php
use Satusehat\Integration\Builder\PayloadBuilderPatient;      // R4 (acuan)
use…
