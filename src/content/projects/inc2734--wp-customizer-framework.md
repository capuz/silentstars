---
repo: "inc2734/wp-customizer-framework"
name: "wp-customizer-framework"
description: "A framework of WordPress Customizer API."
readmeQualityOk: true
url: "https://github.com/inc2734/wp-customizer-framework"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
stars: 20
forks: 3
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2017-01-29T13:04:52Z"
lastCommitAt: "2026-11-13T05:31:11Z"
lastReleaseAt: "2026-10-25T08:45:05Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 39
maintainers: ["inc2734"]
openGraphImageUrl: "https://opengraph.githubassets.com/181d63009218d45f08b14fda6530aff54c899b2be60f526d6acc7e8df9d98bae/inc2734/wp-customizer-framework"
---

# WP Customizer Framework

A Framework of WordPress Customizer API.

## Install

In your theme directory.

```
$ composer require inc2734/wp-customizer-framework
```

## How to use
### Initialize
```
require_once( get_theme_file_path( '/vendor/autoload.php' ) );

new \Inc2734\WP_Customizer_Framework\Bootstrap(
  'handle' => 'main style sheet handle',
);
```

### Customizer
```
use Inc2734\WP_Customizer_Framework\Framework;

Framework::panel( 'panel-id', [
  'title' => 'panel-name',
] );

Framework::section( 'section-id', [
  'title' => 'section-name',
] );

Framework::control( 'type', 'control-id', [
  'label'   => 'Header Color',
  'default' => '#f00',
] );

$panel   = Framework::get_panel( 'panel-id' );
$section = Framework::get_section( 'section-id' );
$control = Framework::get_control( 'control-id' );

$control->join( $section )->join( $panel );
$control->partial( [
	'selector' => '.blogname',
] );
```

### Lazy control UI arguments

Use the optional `ui_args_callback` to build labels, descriptions, choices, and other UI arguments only when they are needed:

```php
Framework::control( 'select', 'layout', [
  'default' => 'wide',
  'ui_args_callback' => function () {
    return…
