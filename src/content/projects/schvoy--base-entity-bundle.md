---
repo: "schvoy/base-entity-bundle"
name: "base-entity-bundle"
description: "A bundle which provides base doctrine entities and behaviors for Symfony projects."
readmeQualityOk: true
url: "https://github.com/schvoy/base-entity-bundle"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["symfony", "symfony-bundle", "bundle", "php", "doctrine"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-07-06T21:16:07Z"
lastCommitAt: "2026-10-29T21:24:38Z"
lastReleaseAt: "2024-08-19T20:45:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 35
maintainers: ["schvoy"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbcd954e711ce5c39f3b40fa4d2c5f15d40fb40913c8f4889bf506846ba2e2bf/schvoy/base-entity-bundle"
---

# Base entity bundle

A bundle which provides base doctrine entities and behaviors for Symfony projects.

## Installation

```bash
composer require schvoy/base-entity-bundle
```

## Usage

### Use base entities as Mapped Superclass

```php
class <your-entity-name> extends UuidBasedEntity
```

```php
class <your-entity-name> extends UlidBasedEntity
```

```php
class <your-entity-name> extends IdBasedEntity
```

**All of them provide commonly used entity functionalities:**

* `$id` property with getId() / setId() method - the value based on the class name can be integer, Uuid or Ulid
* Timestampable behavior
    * `$createdAt`
    * `$updatedAt`
* SoftDeleteable behavior
    * `$deletedAt`
* Blameable behavior
    * `$createdBy`
    * `$updatedBy`
    * `$deletedBy`

### Only traits? Yes

If you don't want to use the Mapped Superclasses? Than you can use only the traits.
In this case you can extend your entity classes with the traits what you want to use.

```php
# Id entity traits
use IdBasedEntityTrait;
use UuidBasedEntityTrait;
use UliddBasedEntityTrait;

# Doctrine Behavior traits
use BlameableTrait;
use SoftDeleteableTrait;
use TimestampableTrait;
```

## Doctrine behavior…
