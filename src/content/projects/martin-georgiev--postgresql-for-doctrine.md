---
repo: "martin-georgiev/postgresql-for-doctrine"
name: "postgresql-for-doctrine"
description: "Extends Doctrine with native PostgreSQL support for arrays, JSONB, ranges, PostGIS geometries, text search, and 100+ PostgreSQL-specific functions."
readmeQualityOk: true
url: "https://github.com/martin-georgiev/postgresql-for-doctrine"
homepage: "https://packagist.org/packages/martin-georgiev/postgresql-for-doctrine"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["doctrine", "jsonb", "postgresql", "arrays", "doctrine-orm", "doctrine-dbal", "json-data", "doctrine-types", "ltree", "php"]
stars: 459
forks: 58
openIssues: 9
closedIssues: 74
watchers: 8
contributors: 39
recentReleases: 0
createdAt: "2016-09-30T10:14:40Z"
lastCommitAt: "2026-09-21T09:14:40Z"
lastReleaseAt: "2019-11-23T14:30:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 37
maintainers: ["martin-georgiev", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4813e6c2ba8e8919eac0ce55076fb839e3b5856b521e040f9a1010362ca0652d/martin-georgiev/postgresql-for-doctrine"
fundingLinks: ["GITHUB:https://github.com/martin-georgiev", "CUSTOM:https://github.com/sponsors/martin-georgiev"]
discussionCount: 2
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/logo-dark.svg">
  </picture>
</p>

<h1 align="center">PostgreSQL for Doctrine</h1>

</p>

## Quick Start

```php
use Doctrine\DBAL\Types\Type as DoctrineType;
use MartinGeorgiev\Doctrine\DBAL\Type;

// Register types with Doctrine
DoctrineType::addType('jsonb', "MartinGeorgiev\\Doctrine\\DBAL\\Types\\Jsonb");
DoctrineType::addType('text[]', "MartinGeorgiev\\Doctrine\\DBAL\\Types\\TextArray");
DoctrineType::addType('numrange', "MartinGeorgiev\\Doctrine\\DBAL\\Types\\NumRange");

// Use in your Doctrine entities
#[ORM\Column(type: Type::JSONB)]
private array $data;

#[ORM\Column(type: Type::TEXT_ARRAY)]
private array $tags;

#[ORM\Column(type: Type::NUMRANGE)]
private NumericRange $priceRange;

// Use in DQL
$query = $em->createQuery('
    SELECT e
    FROM App\Entity\Post e
    WHERE CONTAINS(e.tags, ARRAY(:tags)) = TRUE
    AND JSON_GET_FIELD(e.data, :field) = :value
');
```

## 🚀 Features Highlight

### Data Types
- **Array Types**
  - Integer arrays (`int[]`, `smallint[]`, `bigint[]`)
  - Float arrays (`real[]`, `double precision[]`)
  - Text arrays (`text[]`)
  - Boolean arrays (`bool[]`)
  - JSONB…
