---
repo: "nadar/quill-delta-parser"
name: "quill-delta-parser"
description: "A PHP library to parse and render Quill WYSIWYG Deltas into HTML - Flexibel and extendible for custom elements."
readmeQualityOk: true
url: "https://github.com/nadar/quill-delta-parser"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["quill", "php", "delta", "html", "parser", "quill-editor", "quill-delta", "hacktoberfest"]
stars: 129
forks: 24
openIssues: 1
closedIssues: 43
watchers: 2
contributors: 17
recentReleases: 0
createdAt: "2018-09-12T06:44:45Z"
lastCommitAt: "2026-10-25T08:39:41Z"
lastReleaseAt: "2019-07-09T08:43:24Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 38
maintainers: ["nadar", "samipuro", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/04e6787c01200d52a7d7a3afd53a323bc00663b7c08053123ead00655ae5302c/nadar/quill-delta-parser"
fundingLinks: ["GITHUB:https://github.com/nadar"]
---

# Quill Delta to HTML Parser

A PHP library to parse [Quill WYSIWYG](https://quilljs.com/) editor [deltas](https://github.com/quilljs/delta) into HTML - flexible and extendable for custom elements. Every element is parsed by the same mechanism, making it easy to extend and understand. It also sanitizes the output value, making it more secure, especially when using user-generated text.

What is Quill? Quill is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.

## Installation

The package is available only through Composer:

```sh
composer require nadar/quill-delta-parser
```

## Usage

```php
// Ensure to load the autoload file from Composer somewhere in your application.
require __DIR__ . '/vendor/autoload.php';

// Create the lexer object with your given Quill JSON delta code (either PHP array or JSON string).
$lexer = new \nadar\quill\Lexer($json);

// Echo the HTML for the given JSON ops.
echo $lexer->render();
```

Where `$json` is the ops JSON array from Quill, for example:

```json
{
  "ops": [
    {
      "insert": "Hello"
    },
    {
      "attributes": {…
