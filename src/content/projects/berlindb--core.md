---
repo: "berlindb/core"
name: "core"
description: "All of the required core code"
readmeQualityOk: true
url: "https://github.com/berlindb/core"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["database", "orm", "wordpress"]
stars: 270
forks: 27
openIssues: 31
closedIssues: 107
watchers: 17
contributors: 16
recentReleases: 1
createdAt: "2019-08-01T04:36:50Z"
lastCommitAt: "2026-07-13T06:36:49Z"
lastReleaseAt: "2026-05-28T15:37:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 39
maintainers: ["JJJ"]
openGraphImageUrl: "https://opengraph.githubassets.com/218a6c7e15700195c6e784e8fa5a78e09ab992900ab9bed20514113f3dadbebd/berlindb/core"
discussionCount: 7
---

# BerlinDB

BerlinDB provides an ORM-like interface for custom database tables in
WordPress.

Use it when custom post types, taxonomies, or post meta are no longer the right
storage model for your data, but you still want a WordPress-native developer
experience: `wpdb` compatibility, schema objects, query builders, row objects,
caching hooks, and table upgrade routines.

## Requirements

- PHP 8.1 or newer
- WordPress
- Composer

## Installation

```bash
composer require berlindb/core
```

## Quick Start

A typical integration defines four small classes:

- a `Schema` that describes columns and indexes
- a `Table` that creates and upgrades the database table
- a `Row` that shapes returned records
- a `Query` that reads and writes records

### Define A Schema

```php
<?php

namespace Acme\Plugin\Database;

use BerlinDB\Database\Kern\Schema;

class WidgetSchema extends Schema {

	public $columns = array(
		array(
			'name'      => 'id',
			'type'      => 'bigint',
			'length'    => '20',
			'unsigned'  => true,
			'extra'     => 'auto_increment',
			'default'   => false,
			'cache_key' => true,
			'sortable'  => true,
		),
		array(
			'name'       => 'name',
			'type'       =>…
