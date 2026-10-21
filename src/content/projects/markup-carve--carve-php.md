---
repo: "markup-carve/carve-php"
name: "carve-php"
description: "PHP implementation of Carve - a lightweight markup language for documents and the web."
readmeQualityOk: true
url: "https://github.com/markup-carve/carve-php"
homepage: "https://markup-carve.github.io/carve/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["carve", "djot", "markdown", "markup", "parser", "php"]
stars: 7
forks: 1
openIssues: 2
closedIssues: 1065
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-05-13T20:57:47Z"
lastCommitAt: "2026-10-21T17:31:45Z"
lastReleaseAt: "2026-09-19T09:29:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["dereuromark"]
openGraphImageUrl: "https://opengraph.githubassets.com/4adb4be707ede1d1783a35a3f7e7ff44cfc1fc15298a4f9594120a011feaa5dd/markup-carve/carve-php"
fundingLinks: ["GITHUB:https://github.com/dereuromark"]
---

# carve-php

PHP parser and renderer for [Carve](https://markup-carve.github.io/carve/), a
lightweight markup language for readable source and structured documents.

Implements **Carve spec 0.1** (see [Versioning & Changelog](https://markup-carve.github.io/carve/versioning)).

## Installation

~~~ bash
composer require markup-carve/carve-php
~~~

HTML import and HTML heading-ID conversion require the PHP DOM extension
(`ext-dom`). Core Carve parsing and rendering do not require it.

## Usage

~~~ php
use MarkupCarve\Carve\CarveConverter;

$converter = new CarveConverter();
$html = $converter->convert('# Hello /Carve/');
~~~

The converter also renders Markdown, plain text and ANSI. PHP integration
options are in the [PHP guides](https://github.com/markup-carve/carve-php/blob/main/docs/README.md).

### Straight quotes with smart typography

Set `SmartTypographyMode::QuotesSource` with `setSmartTypography()` on an
HTML, Markdown, plain-text, or ANSI renderer. It emits source runs for quotes
and apostrophes while keeping other smart substitutions enabled. The
`CarveConverter` constructor also accepts this mode as `smartTypography`.
`Glyph` remains the default and `Source` still emits…
