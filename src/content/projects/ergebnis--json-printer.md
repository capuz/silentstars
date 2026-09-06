---
repo: "ergebnis/json-printer"
name: "json-printer"
description: "📃 Provides a composer package with a JSON printer, allowing for flexible indentation."
readmeQualityOk: true
url: "https://github.com/ergebnis/json-printer"
language: "PHP"
languages: ["PHP"]
languagePcts: [89]
topics: ["json", "printer", "formatter"]
stars: 91
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2018-01-04T11:05:15Z"
lastCommitAt: "2026-09-06T08:03:23Z"
lastReleaseAt: "2021-12-27T12:47:52Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 47
maintainers: ["dependabot[bot]", "ergebnis-bot", "localheinz"]
openGraphImageUrl: "https://opengraph.githubassets.com/98fd6336cb1e4c0dc1fbf9488f070c35b5fd35527e45510e3d32fb104402ff38/ergebnis/json-printer"
---

# json-printer

This project provides a [`composer`](https://getcomposer.org) package with a JSON printer, allowing for flexible indentation.

## Installation

Run

```sh
composer require ergebnis/json-printer
```

## Usage

Let's assume we have a variable `$json` which contains some JSON that is not indented:

```json
{"name":"Andreas Möller","emoji":"🤓","urls":["https://localheinz.com","https://github.com/localheinz","https://twitter.com/localheinz"]}
```

or indented with 4 spaces:

```json
{
    "name":"Andreas Möller",
    "emoji":"🤓",
    "urls":[
        "https://localheinz.com",
        "https://github.com/localheinz",
        "https://twitter.com/localheinz"
    ]
}
```

but we want to indent it with 2 spaces (or tabs).

This is where `Ergebnis\Json\Printer\Printer` comes in

```php
<?php

declare(strict_types=1);

use Ergebnis\Json\Printer;

$printer = new Printer\Printer();

$printed = $printer->print(
    $json,
    '  ',
);
```

which results in `$printed`:

```json
{
  "name":"Andreas Möller",
  "emoji":"🤓",
  "urls":[
    "https://localheinz.com",
    "https://github.com/localheinz",
    "https://twitter.com/localheinz"
  ]
}
```

:bulb: Note that this printer is…
