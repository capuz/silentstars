---
repo: "gigerIT/laravel-cascade-delete"
name: "laravel-cascade-delete"
description: "Smart cascading deletes for Laravel Eloquent with support for soft deletes, polymorphic relations, and automatic detaching."
readmeQualityOk: true
url: "https://github.com/gigerIT/laravel-cascade-delete"
homepage: "https://packagist.org/packages/gigerit/laravel-cascade-delete"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-12T09:59:22Z"
lastCommitAt: "2026-09-03T08:13:28Z"
lastReleaseAt: "2026-02-01T13:41:57Z"
status: "thriving"
tags: ["funded"]
healthScore: 70
undervaluedScore: 29
maintainers: ["gigerIT", "dependabot[bot]", "545ebcf0"]
openGraphImageUrl: "https://opengraph.githubassets.com/9888ebe1b293e1571907bfeac15f5c5ca6e4b75bde4dd7104bc8199fb64a3ee7/gigerIT/laravel-cascade-delete"
fundingLinks: ["GITHUB:https://github.com/gigerIT"]
---

# Laravel Cascade Delete

Smart cascading deletes for Laravel Eloquent with support for soft deletes, polymorphic relations, and automatic detaching.

The main advantage of this package over others is its **unified approach**. While many packages handle only soft deletes or only standard relations, this package provides a single trait that intelligently manages all variants:
- **Standard Relations** (`HasOne`, `HasMany`)
- **Soft Deletes** (Recursive soft/hard deletion)
- **Polymorphic Relations** (`MorphOne`, `MorphMany`)
- **Many-to-Many Relations** (`BelongsToMany`, `MorphToMany`) via automatic detaching
- **Orphan Cleanup**: Tools to clean residual polymorphic records after bulk deletions

## Features

- **All-in-One Trait**: Handles all relationship types in a single implementation.
- **Transaction Safety**: All cascading operations are wrapped in a database transaction to ensure atomicity.
- **Integrity Verification**: Verifies that the number of deleted or detached records matches expectations.
- **Intelligent Detaching**: Automatically calls `detach()` for many-to-many relations instead of deleting the related models.
- **Recursive Force Deleting**: Correctly handles…
