---
repo: "doiftrue/unitest-wp-copy"
name: "unitest-wp-copy"
description: "Copy of WP core functions and classes that can be used as is in phputin tests"
readmeQualityOk: true
url: "https://github.com/doiftrue/unitest-wp-copy"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-27T14:44:58Z"
lastCommitAt: "2026-09-06T08:00:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 68
maintainers: ["doiftrue"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cf160eacc1a785a06cb54861eea97f6e6eeac03a97d3ad96f30a33538ab1907/doiftrue/unitest-wp-copy"
---

About
=====
Helper library for PHPUnit tests. It provides selected WordPress core functions and classes that can run without full WordPress bootstrap (database or external services).

Use it with [WP_Mock](https://github.com/10up/wp_mock). The runtime keeps real WordPress pure-PHP behavior, while WP_Mock lets tests replace functions marked as mockable when that is needed — which is almost always the case in unit tests.

Quick Start
-----------
1. Install the package line matching your WordPress version, plus WP_Mock:

	```shell
	composer require --dev doiftrue/unitest-wp-copy:6.9.* 
	composer require --dev 10up/wp_mock
	```

2. Initialize both in the PHPUnit bootstrap. Unitest_WP_Copy must initialize first:

	File: `tests/bootstrap.php`
	```php
	require_once __DIR__ . '/../vendor/autoload.php';

	\Unitest_WP_Copy\Bootstrap::init();
	\WP_Mock::bootstrap();
	```

Quick Example
-------------
Suppose your code turns a raw, user-submitted comment into safe HTML:

```php
function render_comment( string $raw ): string {
	// wp_kses_post() strips disallowed tags.
	// make_clickable() linkifies URLs.
	// wpautop() adds paragraphs — all real WordPress logic.
	return wpautop( make_clickable(…
