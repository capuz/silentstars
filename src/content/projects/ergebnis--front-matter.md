---
repo: "ergebnis/front-matter"
name: "front-matter"
description: "👀 Provides a composer package with a front-matter parser."
readmeQualityOk: true
url: "https://github.com/ergebnis/front-matter"
language: "PHP"
languages: ["PHP"]
languagePcts: [95]
topics: ["php", "front-matter", "parser"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-12-29T17:23:36Z"
lastCommitAt: "2026-11-09T11:59:44Z"
lastReleaseAt: "2024-11-17T21:03:25Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 77
maintainers: ["dependabot[bot]", "localheinz", "ergebnis-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/38d77ce112635189589f42b0cc5a19effde5712dd0cf5c9f5dd37bbb02d6ac75/ergebnis/front-matter"
---

# front-matter

This project provides a [`composer`](https://getcomposer.org) package with a front matter parser.

## Installation

Run

```sh
composer require ergebnis/front-matter
```

## Usage

This packages comes with an [`Ergebnis\FrontMatter\Parser`](https://github.com/ergebnis/front-matter/blob/HEAD/src/Parser.php) interface and provides the following parsers:

 - [`Ergebnis\FrontMatter\YamlParser`](#yamlparser)

### `YamlParser`

With the `YamlParser`, you can test if a `string` has YAML front matter:

```php
<?php

declare(strict_types=1);

use Ergebnis\FrontMatter;

$parser = new FrontMatter\YamlParser();

$unparsedContentWithoutFrontMatter = FrontMatter\Content::fromString('Hello, how are you today?');

$parser->hasFrontMatter($unparsedContentWithoutFrontMatter); // false

$unparsedContentWithFrontMatter = FrontMatter\Content::fromString(<<<TXT
---
page:
  title: "Hello"
  description: "Good to see you, how can I help you?"
---
TXT);

$parser->hasFrontMatter($unparsedContentWithFrontMatter); // true
```

With the `YamlParser`, you can parse a `string`, regardless of whether it has YAML front matter or not.

```php
<?php

declare(strict_types=1);

use…
