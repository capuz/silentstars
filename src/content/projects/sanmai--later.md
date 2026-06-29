---
repo: "sanmai/later"
name: "later"
description: "Later: a deferred object manager. Zero callbacks required. Futures for PHP."
url: "https://github.com/sanmai/later"
language: "PHP"
languages: ["PHP"]
languagePcts: [87]
topics: ["php-library", "deferred-execution"]
stars: 72
forks: 3
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2020-03-11T06:27:58Z"
lastCommitAt: "2026-06-29T07:24:33Z"
lastReleaseAt: "2026-06-29T07:26:04Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 27
maintainers: ["dependabot[bot]", "sanmai"]
openGraphImageUrl: "https://opengraph.githubassets.com/09f5670e753a693b17e8df03c8c2375e525b9791bc3618f8942c252083e47aea/sanmai/later"
fundingLinks: ["GITHUB:https://github.com/sanmai"]
---

This rigorously tested fully-typed library just works. It neither defines nor throws any exceptions.

# Install

```
composer require sanmai/later
```

The latest version requires PHP 7.4 or greater.

# Use

To use this pattern you need a generator function, yielding a single item of type you want to produce lazily. Pass it to `later()`, a static wrapper returning a `Deferred` object:

For example:

```php
use function Later\later;

$deferred = later(function () {
    $deepThought = new DeepThought();
    $deepThought->solveTheQuestion();

    yield $deepThought;
});
```

And then call `get()` when needed, as many times as needed:

```php
$deferred->get()->getAnswer(); // 42
$deferred->get()->getAnswer(); // same 42
```

Using a generator instead of a traditional callback comes with a major benefit: any generator is guaranteed by the language to be used exactly once. You can be sure that it won't be called twice.

But that's not all: read on.

## No Callbacks Required

Making a closure generator on the spot isn't always convenient. And not to say these closures are much different from all-too-familiar callbacks. Not at all different from the looks of them.

The power of this…
