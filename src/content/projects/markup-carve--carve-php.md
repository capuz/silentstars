---
repo: "markup-carve/carve-php"
name: "carve-php"
description: "PHP implementation of Carve - a post-Markdown lightweight markup language with visual mnemonics and human-centered design (between markdown and djot)."
readmeQualityOk: true
url: "https://github.com/markup-carve/carve-php"
homepage: "https://markup-carve.github.io/carve/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["carve", "djot", "markdown", "markup", "parser", "php"]
stars: 6
forks: 1
openIssues: 3
closedIssues: 758
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-13T20:57:47Z"
lastCommitAt: "2026-09-29T08:10:06Z"
lastReleaseAt: "2026-09-19T09:29:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["dereuromark"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3c94aba8ce64974f9ead7c75070be416d8f436f4868dcb002472ba06c85e498/markup-carve/carve-php"
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

The HTML, Markdown, Djot and BBCode importers return a versioned
migration-fidelity report from each converter's `convertWithFidelityReport()`
method. One `preserved` / `normalized` / `degraded` / `dropped` vocabulary spans
all four, with format-specific diagnostic codes underneath. The report envelope
and the `--check-loss` gate are in [docs/cli.md](https://github.com/markup-carve/carve-php/blob/main/docs/cli.md);
HTML also has a detailed import report, in [docs/html-import.md](https://github.com/markup-carve/carve-php/blob/main/docs/html-import.md).

Besides…
