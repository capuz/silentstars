---
repo: "tempestphp/markdown"
name: "markdown"
description: "Fast and extensible Markdown in PHP"
url: "https://github.com/tempestphp/markdown"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 34
forks: 1
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2026-05-12T06:54:47Z"
lastCommitAt: "2026-06-25T06:41:08Z"
lastReleaseAt: "2026-06-04T09:33:34Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 92
undervaluedScore: 42
maintainers: ["brendt", "xHeaven", "raphaelstolt"]
openGraphImageUrl: "https://opengraph.githubassets.com/0795dab40d6b7e3ed80fed36facd353fdcbe6fc18171f6ac7f1016ae0eaac144/tempestphp/markdown"
fundingLinks: ["GITHUB:https://github.com/brendt"]
---

# Fast and extensible Markdown in PHP

`tempest/markdown` is a Markdown parser for server-side Markdown parsing with PHP. It's designed to be fast and extensible, and has a bunch of extended Markdown features built-in like code highlighting, table and div support, responsive images, and frontmatter support.

> [!IMPORTANT]
> This package is still a work in progress! Feel free to open issues.

## Quickstart

```sh
composer require tempest/markdown
```

Render Markdown like this:

```php
use Tempest\Markdown\Markdown;

$markdown = new Markdown();

$parsed = $markdown->parse(file_get_contents('README.md'));

echo $parsed->frontmatter['title'];
echo $parsed->html;
```

You can read more in [the docs](https://tempestphp.com/3.x/packages/markdown).

## Performance

This package began as a challenge to make a more performant Markdown parser in pure PHP. The primary performance gain is from not relying on regex but instead using a simple lexer to tokenize Markdown files and convert them to HTML.

Benchmarks are included in this repo and can be run with
`composer bench` after installing all dev dependencies. Here are the results on my machine for rendering the full Tempest docs:

| Package…
