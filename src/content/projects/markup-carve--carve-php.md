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
openIssues: 25
closedIssues: 1340
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-05-13T20:57:47Z"
lastCommitAt: "2026-10-31T07:45:26Z"
lastReleaseAt: "2026-09-19T09:29:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 100
undervaluedScore: 66
maintainers: ["dereuromark"]
openGraphImageUrl: "https://opengraph.githubassets.com/84b4bb6d1b37c3580829bf198dfac59884c29aed658beed89020d09c54fe9199/markup-carve/carve-php"
fundingLinks: ["GITHUB:https://github.com/dereuromark"]
---

# carve-php

carve-php parses and renders Carve in PHP. It implements Carve spec 0.1.
Read the [Carve documentation](https://markup-carve.github.io/carve/) for the language.

## Install

```sh
composer require markup-carve/carve-php
```

## Usage

```php
use MarkupCarve\Carve\CarveConverter;

$converter = new CarveConverter();
$document = $converter->parse('# Hello /Carve/');
$html = $converter->render($document);
```

CLI basics:

```sh
vendor/bin/carve README.crv > README.html
vendor/bin/carve lint README.crv
vendor/bin/carve fmt README.crv
vendor/bin/carve migrate --from html page.html
```

## Documentation

- [Carve documentation](https://markup-carve.github.io/carve/)
- [Sandbox](https://sandbox.dereuromark.de/sandbox/carve)
- [Engine guides](https://github.com/markup-carve/carve-php/blob/HEAD/docs/README.md)
- [Security for untrusted input](https://github.com/markup-carve/carve-php/blob/HEAD/docs/security.md)
- [Development and contributing](https://github.com/markup-carve/carve-php/blob/HEAD/docs/development.md)
